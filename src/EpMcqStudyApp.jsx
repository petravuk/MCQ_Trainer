import React, { useEffect, useMemo, useRef, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { EP_QUESTIONS } from "./ep_questions_bank";
import { GUIDE_INTERNAL_RULES_QUESTIONS } from "./guide_internal_rules_question_bank";
import { DATA_QUESTIONS } from "./data_question_bank";
import { EU_QUESTIONS } from "./eu_question_bank";
import { saveQuizResult } from "./firebase_results";
import { auth, googleProvider } from "./firebase";
const ALL_EP_CATEGORY = "ep_all";
const EP_RULES_CATEGORY = "ep_rules";
const GUIDE_INTERNAL_RULES_CATEGORY = "ep_guide_internal_rules";
const DATA_CATEGORY = "data";
const EU_CATEGORY = "eu_knowledge";

const questionBanks = {
  [ALL_EP_CATEGORY]: [
    ...EP_QUESTIONS,
    ...GUIDE_INTERNAL_RULES_QUESTIONS,
  ],
  [EP_RULES_CATEGORY]: EP_QUESTIONS,
  [GUIDE_INTERNAL_RULES_CATEGORY]: GUIDE_INTERNAL_RULES_QUESTIONS,
  [DATA_CATEGORY]: DATA_QUESTIONS,
  [EU_CATEGORY]: EU_QUESTIONS,
};

const categoryConfig = {
  [ALL_EP_CATEGORY]: {
    label: "EP questions",
    description: "All European Parliament questions combined.",
  },
  [EP_RULES_CATEGORY]: {
    label: "Rules of Procedure",
    description: "European Parliament Rules of Procedure.",
  },
  [GUIDE_INTERNAL_RULES_CATEGORY]: {
    label: "Guide & Internal Rules",
    description: "Questions based on the Guide and Internal Rules.",
  },
  [DATA_CATEGORY]: {
    label: "Data Analyst",
    description: "EPSO-style data analysis questions.",
  },
  [EU_CATEGORY]: {
    label: "EU Knowledge",
    description: "European Union knowledge questions.",
  },
};

const difficultyOptions = ["easy", "medium", "hard"];
const questionCountOptions = [5, 10, 15, 20, 30, 50, 100];

const HISTORY_KEY = "ep-mcq-history-v2";
const LATEST_WRONG_KEY = "ep-mcq-latest-wrong-v2";
const SEEN_KEY = "ep-mcq-seen-v2";
const EMPTY_ARRAY = [];

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function randomiseQuestion(question) {
  const indexed = question.options.map((text, index) => ({ text, index }));
  const shuffled = shuffleArray(indexed);

  return {
    ...question,
    options: shuffled.map((item) => item.text),
    answer: shuffled.findIndex((item) => item.index === question.answer),
  };
}

function getJsonStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setJsonStorage(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function buildTopicCounts(bank) {
  return bank.reduce((acc, q) => {
    acc[q.topic] = (acc[q.topic] || 0) + 1;
    return acc;
  }, {});
}

function matchDifficulty(question, selectedLevels) {
  if (!selectedLevels.length) return true;
  return selectedLevels.includes(question.level);
}

function buildSessionQuestions(
  bank,
  count,
  selectedDifficulties,
  topicFilter,
  mode,
  latestWrongIds,
  seenIds
) {
  let pool = bank;

  if (topicFilter !== "All topics") {
    pool = pool.filter((q) => q.topic === topicFilter);
  }

  if (mode === "review") {
    pool = pool.filter((q) => latestWrongIds.includes(q.id));
  } else {
    pool = pool.filter((q) => matchDifficulty(q, selectedDifficulties));

    const unseen = pool.filter((q) => !seenIds.includes(q.id));
    if (unseen.length >= Math.min(count, pool.length)) {
      pool = unseen;
    }
  }

  return shuffleArray(pool)
    .slice(0, Math.min(count, pool.length))
    .map(randomiseQuestion);
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: 24,
    fontFamily: "Arial, sans-serif",
    color: "#0f172a",
  },
  container: {
    maxWidth: 1300,
    margin: "0 auto",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "300px 1fr 320px",
    gap: 24,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  card: {
    background: "#ffffff",
    borderRadius: 20,
    padding: 20,
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
    border: "1px solid #e2e8f0",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 16,
  },
  bigTitle: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 8,
  },
  smallText: {
    fontSize: 14,
    color: "#475569",
  },
  muted: {
    color: "#64748b",
    fontSize: 13,
  },
  statBox: {
    background: "#f8fafc",
    borderRadius: 16,
    padding: 14,
    marginTop: 12,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 700,
    marginTop: 6,
  },
  button: {
    border: "1px solid #cbd5e1",
    background: "#fff",
    borderRadius: 14,
    padding: "10px 14px",
    cursor: "pointer",
    fontSize: 14,
  },
  buttonPrimary: {
    border: "1px solid #0f172a",
    background: "#0f172a",
    color: "#fff",
    borderRadius: 14,
    padding: "10px 14px",
    cursor: "pointer",
    fontSize: 14,
  },
  buttonActive: {
    border: "1px solid #0f172a",
    background: "#0f172a",
    color: "#fff",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  select: {
    width: "100%",
    padding: 10,
    borderRadius: 12,
    border: "1px solid #cbd5e1",
    fontSize: 14,
    background: "#fff",
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: "#eef2ff",
    border: "1px solid #cbd5e1",
    fontSize: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  progressOuter: {
    width: "100%",
    height: 12,
    background: "#e2e8f0",
    borderRadius: 999,
    overflow: "hidden",
  },
  progressInner: (value) => ({
    width: `${value}%`,
    height: "100%",
    background: "#0f172a",
  }),
  questionCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 20,
    padding: 20,
  },
  option: {
    width: "100%",
    textAlign: "left",
    padding: 14,
    borderRadius: 16,
    border: "1px solid #cbd5e1",
    background: "#fff",
    marginBottom: 10,
    cursor: "pointer",
    fontSize: 14,
    lineHeight: 1.5,
  },
  feedback: {
    background: "#f8fafc",
    borderRadius: 16,
    padding: 14,
    marginTop: 16,
    fontSize: 14,
  },
  historyItem: {
    background: "#f8fafc",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  focusPage: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  focusContainer: {
    width: "100%",
    maxWidth: 900,
  },
  focusTopBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
    flexWrap: "wrap",
  },
};

function getOptionStyle({ picked, correct, isSubmitted }) {
  if (isSubmitted && correct) {
    return {
      ...styles.option,
      border: "1px solid #16a34a",
      background: "#dcfce7",
    };
  }

  if (isSubmitted && picked && !correct) {
    return {
      ...styles.option,
      border: "1px solid #dc2626",
      background: "#fee2e2",
    };
  }

  if (!isSubmitted && picked) {
    return {
      ...styles.option,
      border: "1px solid #0f172a",
      background: "#e2e8f0",
    };
  }

  return styles.option;
}

export default function EpMcqStudyApp() {
  const resultSavedRef = useRef(false);

  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  async function signInWithGoogle() {
    setAuthError("");

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Google sign-in failed:", err);
      setAuthError(err.message || "Google sign-in failed.");
    }
  }

  async function logout() {
    setAuthError("");

    try {
      await signOut(auth);
    } catch (err) {
      console.error("Sign-out failed:", err);
      setAuthError(err.message || "Sign-out failed.");
    }
  }

  const [category, setCategory] = useState(ALL_EP_CATEGORY);
  const bank = questionBanks[category] || [];

  const [screen, setScreen] = useState("dashboard");
  const [mode, setMode] = useState("practice");
  const [selectedDifficulties, setSelectedDifficulties] = useState(["medium"]);
  const [questionCount, setQuestionCount] = useState("10");
  const [topicFilter, setTopicFilter] = useState("All topics");
  const [sessionSeed, setSessionSeed] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [history, setHistory] = useState([]);
  const [latestWrongByCategory, setLatestWrongByCategory] = useState({});
  const [seenIds, setSeenIds] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [readyForResults, setReadyForResults] = useState(false);
  const [sessionQuestions, setSessionQuestions] = useState([]);

  const latestWrongIds = latestWrongByCategory[category] || EMPTY_ARRAY;

  const topicCounts = useMemo(() => buildTopicCounts(bank), [bank]);
  const topicOptions = ["All topics", ...Object.keys(topicCounts).sort()];

  useEffect(() => {
    setHistory(getJsonStorage(HISTORY_KEY, []));
    setLatestWrongByCategory(getJsonStorage(LATEST_WRONG_KEY, {}));
    setSeenIds(getJsonStorage(SEEN_KEY, []));
  }, []);

  useEffect(() => {
    if (completed) return;

    const nextQuestions = buildSessionQuestions(
      bank,
      Number(questionCount),
      selectedDifficulties,
      topicFilter,
      mode,
      latestWrongIds,
      seenIds
    );

    setSessionQuestions(nextQuestions);
  }, [
    bank,
    questionCount,
    selectedDifficulties,
    topicFilter,
    mode,
    sessionSeed,
    latestWrongIds,
    seenIds,
    completed,
  ]);

  const questions = sessionQuestions;
  const current = questions[currentIndex] || null;
  const selectedIndex = current ? selected[current.id] : undefined;
  const isSubmitted = current ? submitted[current.id] : false;

  const answeredCount = questions.filter((q) => submitted[q.id]).length;

  const score = questions.reduce(
    (sum, q) =>
      submitted[q.id] && selected[q.id] === q.answer ? sum + 1 : sum,
    0
  );

  const wrongAnswers = questions.filter(
    (q) => submitted[q.id] && selected[q.id] !== q.answer
  );

  const accuracy = questions.length
    ? Math.round((score / questions.length) * 100)
    : 0;

  const progress = questions.length
    ? Math.round((answeredCount / questions.length) * 100)
    : 0;

  const reviewCount = latestWrongIds.length;

  const allAnswered =
    questions.length > 0 && answeredCount === questions.length;

  const strongTopics = useMemo(() => {
    return [
      ...new Set(
        questions
          .filter((q) => submitted[q.id] && selected[q.id] === q.answer)
          .map((q) => q.topic)
      ),
    ]
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 4);
  }, [questions, submitted, selected]);

  const weakTopics = useMemo(() => {
    return [...new Set(wrongAnswers.map((q) => q.topic))]
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 4);
  }, [wrongAnswers]);

  useEffect(() => {
    if (!completed || !questions.length || resultSavedRef.current) return;

    resultSavedRef.current = true;

    const correctQuestionIds = questions
      .filter((q) => submitted[q.id] && selected[q.id] === q.answer)
      .map((q) => q.id);

    const wrongQuestionIds = wrongAnswers.map((q) => q.id);

    const entry = {
      id: `${Date.now()}-${mode}-${selectedDifficulties.join(
        "-"
      )}-${questionCount}-${topicFilter}-${category}`,
      date: new Date().toLocaleString(),
      category,
      mode,
      difficulty: selectedDifficulties.join(", "),
      topicFilter,
      questionCount: questions.length,
      score,
      accuracy,
      wrongQuestionIds,
    };

    const nextHistory = [entry, ...history].slice(0, 30);
    setHistory(nextHistory);
    setJsonStorage(HISTORY_KEY, nextHistory);

    const existingUnresolved = latestWrongByCategory[category] || [];
    const nextCategoryWrong = [
      ...new Set([
        ...existingUnresolved.filter((id) => !correctQuestionIds.includes(id)),
        ...wrongQuestionIds,
      ]),
    ];

    const nextWrongByCategory = {
      ...latestWrongByCategory,
      [category]: nextCategoryWrong,
    };

    setLatestWrongByCategory(nextWrongByCategory);
    setJsonStorage(LATEST_WRONG_KEY, nextWrongByCategory);

    const updatedSeen = [
      ...new Set([...seenIds, ...questions.map((q) => q.id)]),
    ];

    setSeenIds(updatedSeen);
    setJsonStorage(SEEN_KEY, updatedSeen);

    saveQuizResult({
      category,
      mode,
      difficulty: selectedDifficulties.join(", "),
      topicFilter,
      questionCount: questions.length,
      score,
      accuracy,
      wrongQuestionIds,
    }).catch((err) => {
      console.error("Firebase save failed:", err);
    });
  }, [
    completed,
    questions,
    submitted,
    selected,
    wrongAnswers,
    mode,
    selectedDifficulties,
    questionCount,
    topicFilter,
    category,
    score,
    accuracy,
    history,
    latestWrongByCategory,
    seenIds,
  ]);

  function resetSession(nextMode = mode) {
    resultSavedRef.current = false;
    setMode(nextMode);
    setCurrentIndex(0);
    setSelected({});
    setSubmitted({});
    setCompleted(false);
    setReadyForResults(false);
    setSessionQuestions([]);
    setSessionSeed((s) => s + 1);
  }

  function changeCategory(nextCategory) {
    setCategory(nextCategory);
    setTopicFilter("All topics");
    resetSession("practice");
  }

  function submitAnswer() {
    if (selectedIndex === undefined || !current || isSubmitted) return;

    const nextSubmitted = { ...submitted, [current.id]: true };
    setSubmitted(nextSubmitted);

    const willFinish =
      questions.length > 0 &&
      questions.every((q) => nextSubmitted[q.id] || q.id === current.id);

    if (willFinish) {
      setReadyForResults(true);
    }
  }

  function showResults() {
    if (!allAnswered) return;
    setCompleted(true);
    setReadyForResults(false);
  }

  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  }

  function previousQuestion() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  }

  function nextUnanswered() {
    const nextIndex = questions.findIndex(
      (q, index) => index > currentIndex && !submitted[q.id]
    );

    if (nextIndex !== -1) {
      setCurrentIndex(nextIndex);
    }
  }

  function clearHistory() {
    const nextHistory = history.filter((item) => item.category !== category);
    const nextWrongByCategory = {
      ...latestWrongByCategory,
      [category]: [],
    };

    setHistory(nextHistory);
    setLatestWrongByCategory(nextWrongByCategory);
    setSeenIds([]);

    setJsonStorage(HISTORY_KEY, nextHistory);
    setJsonStorage(LATEST_WRONG_KEY, nextWrongByCategory);
    setJsonStorage(SEEN_KEY, []);
  }

  function toggleDifficulty(level) {
    const active = selectedDifficulties.includes(level);

    const next = active
      ? selectedDifficulties.filter((item) => item !== level)
      : [...selectedDifficulties, level];

    setSelectedDifficulties(next.length ? next : [level]);
    resetSession(mode);
  }

  const filteredHistory = history.filter((item) => item.category === category);

  const bestAccuracy = filteredHistory.length
    ? Math.max(...filteredHistory.map((item) => item.accuracy))
    : null;

  const averageAccuracy = filteredHistory.length
    ? Math.round(
        filteredHistory.reduce((sum, item) => sum + item.accuracy, 0) /
          filteredHistory.length
      )
    : null;

  const masteredTopics = Object.entries(topicCounts)
    .map(([topic]) => {
      const attempts = filteredHistory.filter(
        (item) =>
          item.topicFilter === topic || item.topicFilter === "All topics"
      );

      if (!attempts.length) return { topic, accuracy: null };

      const avg = Math.round(
        attempts.reduce((sum, item) => sum + item.accuracy, 0) / attempts.length
      );

      return { topic, accuracy: avg };
    })
    .sort((a, b) => (b.accuracy ?? -1) - (a.accuracy ?? -1));

  if (screen === "focus") {
    return (
      <div style={styles.focusPage}>
        <div style={styles.focusContainer}>
          <div style={styles.card}>
            <div style={styles.focusTopBar}>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>
                  EP question view
                </div>
                <div style={styles.smallText}>
                  Focus mode with only the current question and answers.
                </div>
              </div>

              <button
                style={styles.button}
                onClick={() => setScreen("dashboard")}
              >
                Back to dashboard
              </button>
            </div>

            {!completed ? (
              <>
                <div style={{ marginBottom: 14 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                      fontSize: 14,
                      color: "#475569",
                    }}
                  >
                    <span>
                      Question {questions.length ? currentIndex + 1 : 0} of{" "}
                      {questions.length}
                    </span>
                    <span>{progress}% answered</span>
                  </div>

                  <div style={styles.progressOuter}>
                    <div style={styles.progressInner(progress)} />
                  </div>
                </div>

                {current ? (
                  <div style={styles.questionCard}>
                    <div style={{ marginBottom: 10 }}>
                      <span style={styles.badge}>{current.topic}</span>
                      <span style={styles.badge}>{current.level}</span>
                      {current.sourceRule ? (
                        <span style={styles.badge}>{current.sourceRule}</span>
                      ) : null}
                    </div>

                    <h2
                      style={{
                        fontSize: "clamp(18px, 5vw, 24px)",
                        lineHeight: 1.35,
                        marginBottom: 16,
                      }}
                    >
                      {current.question}
                    </h2>

                    <div>
                      {current.options.map((option, idx) => {
                        const picked = selectedIndex === idx;
                        const correct = current.answer === idx;

                        return (
                          <button
                            key={idx}
                            style={getOptionStyle({
                              picked,
                              correct,
                              isSubmitted,
                            })}
                            onClick={() => {
                              if (!isSubmitted) {
                                setSelected((prev) => ({
                                  ...prev,
                                  [current.id]: idx,
                                }));
                              }
                            }}
                          >
                            <strong>{String.fromCharCode(65 + idx)}.</strong>{" "}
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {isSubmitted ? (
                      <div style={styles.feedback}>
                        <strong>Immediate feedback</strong>
                        <div style={{ marginTop: 8 }}>
                          {current.explanation}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div style={styles.questionCard}>
                    No questions available for this filter.
                  </div>
                )}

                <div style={{ ...styles.buttonRow, marginTop: 16 }}>
                  <button
                    style={styles.buttonPrimary}
                    onClick={submitAnswer}
                    disabled={
                      selectedIndex === undefined ||
                      isSubmitted ||
                      !current ||
                      readyForResults
                    }
                  >
                    Submit answer
                  </button>

                  <button
                    style={styles.button}
                    onClick={previousQuestion}
                    disabled={currentIndex === 0}
                  >
                    Previous
                  </button>

                  <button
                    style={styles.button}
                    onClick={nextQuestion}
                    disabled={
                      currentIndex === questions.length - 1 ||
                      !questions.length ||
                      readyForResults
                    }
                  >
                    Next
                  </button>

                  <button
                    style={styles.button}
                    onClick={nextUnanswered}
                    disabled={
                      !questions.some(
                        (q, index) => index > currentIndex && !submitted[q.id]
                      ) || readyForResults
                    }
                  >
                    Next unanswered
                  </button>

                  {readyForResults ? (
                    <button style={styles.buttonPrimary} onClick={showResults}>
                      See results
                    </button>
                  ) : null}
                </div>

                {readyForResults ? (
                  <div
                    style={{
                      marginTop: 16,
                      padding: 14,
                      borderRadius: 14,
                      background: "#dcfce7",
                      color: "#166534",
                      fontSize: 14,
                    }}
                  >
                    You answered the last question. Open the results when ready.
                  </div>
                ) : null}
              </>
            ) : (
              <div style={styles.questionCard}>
                <div style={{ marginBottom: 12 }}>
                  <span style={styles.badge}>Quiz complete</span>
                  <span style={styles.badge}>
                    {score}/{questions.length}
                  </span>
                  <span style={styles.badge}>{accuracy}%</span>
                </div>

                <h2 style={{ fontSize: 28, marginBottom: 10 }}>Your result</h2>
                <p style={styles.smallText}>
                  Accuracy = correct answers / total questions.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 12,
                    marginTop: 16,
                  }}
                >
                  <div style={styles.statBox}>
                    <div style={styles.muted}>Correct</div>
                    <div style={styles.statValue}>{score}</div>
                  </div>

                  <div style={styles.statBox}>
                    <div style={styles.muted}>Wrong</div>
                    <div style={styles.statValue}>{wrongAnswers.length}</div>
                  </div>

                  <div style={styles.statBox}>
                    <div style={styles.muted}>Accuracy</div>
                    <div style={styles.statValue}>{accuracy}%</div>
                  </div>
                </div>

                <div style={{ ...styles.buttonRow, marginTop: 16 }}>
                  <button
                    style={styles.buttonPrimary}
                    onClick={() => resetSession("practice")}
                  >
                    Start another quiz
                  </button>

                  <button
                    style={styles.button}
                    onClick={() => resetSession("review")}
                    disabled={!latestWrongIds.length}
                  >
                    Review wrong answers
                  </button>

                  <button
                    style={styles.button}
                    onClick={() => setScreen("dashboard")}
                  >
                    Back to dashboard
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.layout}>
          <div style={styles.column}>
            <div style={styles.card}>
              <div style={styles.title}>Dashboard</div>
              <div style={{ marginBottom: 16 }}>
                {user ? (
                  <div>
                    <div style={styles.muted}>Signed in as</div>
                    <div style={{ fontWeight: 700, marginTop: 4 }}>
                      {user.displayName || user.email}
                    </div>

                    <button
                      style={{ ...styles.button, marginTop: 10 }}
                      onClick={logout}
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      style={styles.buttonPrimary}
                      onClick={signInWithGoogle}
                    >
                      Sign in with Google
                    </button>

                    <div style={{ ...styles.muted, marginTop: 8 }}>
                      Sign in to save your quiz results.
                    </div>
                  </div>
                )}

                {authError ? (
                  <div
                    style={{
                      marginTop: 10,
                      padding: 10,
                      borderRadius: 12,
                      background: "#fee2e2",
                      color: "#991b1b",
                      fontSize: 13,
                    }}
                  >
                    {authError}
                  </div>
                ) : null}
              </div>

              <div>
                <div style={styles.muted}>Track</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>
                  {categoryConfig[category].label}
                </div>
                <p style={{ ...styles.smallText, marginTop: 8 }}>
                  {categoryConfig[category].description}
                </p>
              </div>

              <div style={styles.statBox}>
                <div style={styles.muted}>Question bank</div>
                <div style={styles.statValue}>{bank.length}</div>
              </div>

              <div style={styles.statBox}>
                <div style={styles.muted}>Best score rate</div>
                <div style={styles.statValue}>
                  {bestAccuracy !== null ? `${bestAccuracy}%` : "-"}
                </div>
              </div>

              <div style={styles.statBox}>
                <div style={styles.muted}>Average score rate</div>
                <div style={styles.statValue}>
                  {averageAccuracy !== null ? `${averageAccuracy}%` : "-"}
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.title}>Quiz setup</div>

              <div style={{ marginBottom: 18 }}>
                <div style={{ marginBottom: 8, fontSize: 14 }}>
                  Question source
                </div>

                <div style={styles.buttonRow}>
                  {Object.entries(categoryConfig).map(([key, config]) => (
                    <button
                      key={key}
                      style={{
                        ...styles.button,
                        ...(category === key ? styles.buttonActive : {}),
                      }}
                      onClick={() => changeCategory(key)}
                    >
                      {config.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <div style={{ marginBottom: 8, fontSize: 14 }}>Mode</div>
                <div style={styles.buttonRow}>
                  <button
                    style={{
                      ...styles.button,
                      ...(mode === "practice" ? styles.buttonActive : {}),
                    }}
                    onClick={() => resetSession("practice")}
                  >
                    Practice
                  </button>

                  <button
                    style={{
                      ...styles.button,
                      ...(mode === "review" ? styles.buttonActive : {}),
                      opacity: reviewCount ? 1 : 0.5,
                      cursor: reviewCount ? "pointer" : "not-allowed",
                    }}
                    onClick={() => reviewCount && resetSession("review")}
                    disabled={!reviewCount}
                  >
                    Review wrong
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <div style={{ marginBottom: 8, fontSize: 14 }}>
                  Number of questions
                </div>

                <select
                  style={styles.select}
                  value={questionCount}
                  onChange={(e) => {
                    setQuestionCount(e.target.value);
                    resetSession(mode);
                  }}
                >
                  {questionCountOptions.map((count) => (
                    <option key={count} value={String(count)}>
                      {count} questions
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 18 }}>
                <div style={{ marginBottom: 8, fontSize: 14 }}>Difficulty</div>

                <div style={styles.buttonRow}>
                  {difficultyOptions.map((level) => {
                    const active = selectedDifficulties.includes(level);

                    return (
                      <button
                        key={level}
                        style={{
                          ...styles.button,
                          ...(active ? styles.buttonActive : {}),
                        }}
                        onClick={() => toggleDifficulty(level)}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <div style={{ marginBottom: 8, fontSize: 14 }}>Topic</div>

                <select
                  style={styles.select}
                  value={topicFilter}
                  onChange={(e) => {
                    setTopicFilter(e.target.value);
                    resetSession(mode);
                  }}
                >
                  {topicOptions.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span style={styles.badge}>Loaded: {questions.length}</span>
                <span style={styles.badge}>Review: {reviewCount}</span>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.title}>Topics</div>

              {Object.entries(topicCounts)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([topic, count]) => (
                  <div
                    key={topic}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      background: "#f8fafc",
                      borderRadius: 14,
                      padding: 10,
                      marginBottom: 8,
                    }}
                  >
                    <span>{topic}</span>
                    <span>{count}</span>
                  </div>
                ))}
            </div>
          </div>

          <div style={styles.column}>
            <div style={styles.card}>
              <div style={styles.bigTitle}>European Parliament MCQ Trainer</div>

              <div style={styles.smallText}>
                Rules of Procedure, Guide and Internal Rules, with immediate
                feedback and topic-based practice.
              </div>

              <div style={{ marginTop: 16, marginBottom: 16 }}>
                <div style={styles.buttonRow}>
                  <button
                    style={styles.button}
                    onClick={() => resetSession(mode)}
                  >
                    New quiz
                  </button>

                  <button
                    style={styles.buttonPrimary}
                    onClick={() => setScreen("focus")}
                  >
                    Question-only view
                  </button>
                </div>
              </div>

              {!completed ? (
                <>
                  <div style={{ marginBottom: 14 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 8,
                        fontSize: 14,
                        color: "#475569",
                      }}
                    >
                      <span>
                        Question {questions.length ? currentIndex + 1 : 0} of{" "}
                        {questions.length}
                      </span>
                      <span>{progress}% answered</span>
                    </div>

                    <div style={styles.progressOuter}>
                      <div style={styles.progressInner(progress)} />
                    </div>
                  </div>

                  {current ? (
                    <div style={styles.questionCard}>
                      <div style={{ marginBottom: 10 }}>
                        <span style={styles.badge}>{current.topic}</span>
                        <span style={styles.badge}>{current.level}</span>
                        {current.sourceRule ? (
                          <span style={styles.badge}>{current.sourceRule}</span>
                        ) : null}
                      </div>

                      <h2 style={{ fontSize: 24, marginBottom: 16 }}>
                        {current.question}
                      </h2>

                      <div>
                        {current.options.map((option, idx) => {
                          const picked = selectedIndex === idx;
                          const correct = current.answer === idx;

                          return (
                            <button
                              key={idx}
                              style={getOptionStyle({
                                picked,
                                correct,
                                isSubmitted,
                              })}
                              onClick={() => {
                                if (!isSubmitted) {
                                  setSelected((prev) => ({
                                    ...prev,
                                    [current.id]: idx,
                                  }));
                                }
                              }}
                            >
                              <strong>{String.fromCharCode(65 + idx)}.</strong>{" "}
                              {option}
                            </button>
                          );
                        })}
                      </div>

                      {isSubmitted ? (
                        <div style={styles.feedback}>
                          <strong>Immediate feedback</strong>
                          <div style={{ marginTop: 8 }}>
                            {current.explanation}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div style={styles.questionCard}>
                      No questions available for this filter.
                    </div>
                  )}

                  <div style={{ ...styles.buttonRow, marginTop: 16 }}>
                    <button
                      style={styles.buttonPrimary}
                      onClick={submitAnswer}
                      disabled={
                        selectedIndex === undefined ||
                        isSubmitted ||
                        !current ||
                        readyForResults
                      }
                    >
                      Submit answer
                    </button>

                    <button
                      style={styles.button}
                      onClick={previousQuestion}
                      disabled={currentIndex === 0}
                    >
                      Previous
                    </button>

                    <button
                      style={styles.button}
                      onClick={nextQuestion}
                      disabled={
                        currentIndex === questions.length - 1 ||
                        !questions.length ||
                        readyForResults
                      }
                    >
                      Next
                    </button>

                    <button
                      style={styles.button}
                      onClick={nextUnanswered}
                      disabled={
                        !questions.some(
                          (q, index) => index > currentIndex && !submitted[q.id]
                        ) || readyForResults
                      }
                    >
                      Next unanswered
                    </button>

                    {readyForResults ? (
                      <button
                        style={styles.buttonPrimary}
                        onClick={showResults}
                      >
                        See results
                      </button>
                    ) : null}
                  </div>

                  {readyForResults ? (
                    <div
                      style={{
                        marginTop: 16,
                        padding: 14,
                        borderRadius: 14,
                        background: "#dcfce7",
                        color: "#166534",
                        fontSize: 14,
                      }}
                    >
                      You answered the last question. Open the results when
                      ready.
                    </div>
                  ) : null}
                </>
              ) : (
                <div style={styles.questionCard}>
                  <div style={{ marginBottom: 12 }}>
                    <span style={styles.badge}>Quiz complete</span>
                    <span style={styles.badge}>
                      {score}/{questions.length}
                    </span>
                    <span style={styles.badge}>{accuracy}%</span>
                  </div>

                  <h2 style={{ fontSize: 28, marginBottom: 10 }}>
                    Your result
                  </h2>

                  <p style={styles.smallText}>
                    Accuracy = correct answers / total questions.
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 12,
                      marginTop: 16,
                    }}
                  >
                    <div style={styles.statBox}>
                      <div style={styles.muted}>Correct</div>
                      <div style={styles.statValue}>{score}</div>
                    </div>

                    <div style={styles.statBox}>
                      <div style={styles.muted}>Wrong</div>
                      <div style={styles.statValue}>{wrongAnswers.length}</div>
                    </div>

                    <div style={styles.statBox}>
                      <div style={styles.muted}>Accuracy</div>
                      <div style={styles.statValue}>{accuracy}%</div>
                    </div>
                  </div>

                  <div style={{ ...styles.buttonRow, marginTop: 16 }}>
                    <button
                      style={styles.buttonPrimary}
                      onClick={() => resetSession("practice")}
                    >
                      Start another quiz
                    </button>

                    <button
                      style={styles.button}
                      onClick={() => resetSession("review")}
                      disabled={!latestWrongIds.length}
                    >
                      Review wrong answers
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={styles.column}>
            <div style={styles.card}>
              <div style={styles.title}>Session stats</div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 12,
                }}
              >
                <div style={styles.statBox}>
                  <div style={styles.muted}>Scored</div>
                  <div style={styles.statValue}>{score}</div>
                </div>

                <div style={styles.statBox}>
                  <div style={styles.muted}>Answered</div>
                  <div style={styles.statValue}>{answeredCount}</div>
                </div>

                <div style={styles.statBox}>
                  <div style={styles.muted}>Accuracy</div>
                  <div style={styles.statValue}>{accuracy}%</div>
                </div>

                <div style={styles.statBox}>
                  <div style={styles.muted}>Wrong answers</div>
                  <div style={styles.statValue}>{wrongAnswers.length}</div>
                </div>
              </div>

              <div style={{ ...styles.statBox, marginTop: 12 }}>
                <div style={styles.muted}>Stronger topics</div>

                <div style={{ marginTop: 8 }}>
                  {strongTopics.length ? (
                    strongTopics.map((topic) => (
                      <span key={topic} style={styles.badge}>
                        {topic}
                      </span>
                    ))
                  ) : (
                    <span style={styles.muted}>None yet</span>
                  )}
                </div>
              </div>

              <div style={{ ...styles.statBox, marginTop: 12 }}>
                <div style={styles.muted}>Needs more work</div>

                <div style={{ marginTop: 8 }}>
                  {weakTopics.length ? (
                    weakTopics.map((topic) => (
                      <span key={topic} style={styles.badge}>
                        {topic}
                      </span>
                    ))
                  ) : (
                    <span style={styles.muted}>None yet</span>
                  )}
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.title}>Score history</div>

              <div style={{ marginBottom: 12 }}>
                <button
                  style={styles.button}
                  onClick={clearHistory}
                  disabled={!filteredHistory.length}
                >
                  Clear current source
                </button>
              </div>

              {filteredHistory.length ? (
                filteredHistory.slice(0, 8).map((item) => (
                  <div key={item.id} style={styles.historyItem}>
                    <div style={{ fontWeight: 700 }}>
                      {item.score}/{item.questionCount} · {item.accuracy}%
                    </div>

                    <div style={{ ...styles.muted, marginTop: 6 }}>
                      {item.mode} · {item.difficulty} · {item.topicFilter}
                    </div>

                    <div style={{ ...styles.muted, marginTop: 4 }}>
                      {item.date}
                    </div>
                  </div>
                ))
              ) : (
                <div style={styles.muted}>No completed quiz yet.</div>
              )}
            </div>

            <div style={styles.card}>
              <div style={styles.title}>Topic mastery</div>

              {masteredTopics.map((item) => (
                <div key={item.topic} style={{ marginBottom: 14 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <span>{item.topic}</span>
                    <span style={styles.muted}>
                      {item.accuracy !== null ? `${item.accuracy}%` : "No data"}
                    </span>
                  </div>

                  <div style={styles.progressOuter}>
                    <div style={styles.progressInner(item.accuracy || 0)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
