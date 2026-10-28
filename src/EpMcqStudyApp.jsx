import React, { useEffect, useMemo, useRef, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { EP_QUESTIONS } from "./ep_questions_bank";
import { GUIDE_INTERNAL_RULES_QUESTIONS } from "./guide_internal_rules_question_bank";
import { DATA_QUESTIONS } from "./data_question_bank";
import { EU_QUESTIONS } from "./eu_question_bank";
import { EPSO_AD7_INFRASTRUCTURE_QUESTIONS } from "./epso_ad7_infrastructure_questions";
import { saveQuizResult } from "./firebase_results";
import { auth, googleProvider } from "./firebase";
import styles from "./EpMcqStudyApp.module.css";
const ALL_EP_CATEGORY = "ep_all";
const EP_RULES_CATEGORY = "ep_rules";
const GUIDE_INTERNAL_RULES_CATEGORY = "ep_guide_internal_rules";
const DATA_CATEGORY = "data";
const EU_CATEGORY = "eu_knowledge";
const ICT_INFRASTRUCTURE_CATEGORY = "epso_ad7_infrastructure";

const questionBanks = {
  [ALL_EP_CATEGORY]: [...EP_QUESTIONS, ...GUIDE_INTERNAL_RULES_QUESTIONS],
  [EP_RULES_CATEGORY]: EP_QUESTIONS,
  [GUIDE_INTERNAL_RULES_CATEGORY]: GUIDE_INTERNAL_RULES_QUESTIONS,
  [DATA_CATEGORY]: DATA_QUESTIONS,
  [EU_CATEGORY]: EU_QUESTIONS,
  [ICT_INFRASTRUCTURE_CATEGORY]: EPSO_AD7_INFRASTRUCTURE_QUESTIONS,
};

const categoryConfig = {
  [ICT_INFRASTRUCTURE_CATEGORY]: {
    label: "ICT Infrastructure",
    description:
      "EPSO/AD/429/26 - Domain 1: 300 original practice questions (not official EPSO questions).",
  },
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
  seenIds,
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

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    book: (
      <>
        <path d="M12 5v15M3 4h5a4 4 0 0 1 4 3 4 4 0 0 1 4-3h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z" />
      </>
    ),
    history: (
      <>
        <path d="M3 11a9 9 0 1 1 2 7M3 4v7h7M12 7v5l3 2" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8ZM2 12l10 5 10-5M2 16l10 5 10-5" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.book}
    </svg>
  );
}

const difficultyLabels = { easy: "Easy", medium: "Medium", hard: "Hard" };

export default function EpMcqStudyApp() {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");
  const [authPending, setAuthPending] = useState(false);
  const [screen, setScreen] = useState("setup");
  const [category, setCategory] = useState(ALL_EP_CATEGORY);
  const [mode, setMode] = useState("practice");
  const [selectedDifficulties, setSelectedDifficulties] = useState(difficultyOptions);
  const [questionCount, setQuestionCount] = useState("10");
  const [topicFilter, setTopicFilter] = useState("All topics");
  const [history, setHistory] = useState(() => getJsonStorage(HISTORY_KEY, []));
  const [latestWrongByCategory, setLatestWrongByCategory] = useState(() =>
    getJsonStorage(LATEST_WRONG_KEY, {}),
  );
  const [seenIds, setSeenIds] = useState(() => getJsonStorage(SEEN_KEY, []));
  const [historyCategory, setHistoryCategory] = useState("all");
  const [session, setSession] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [completed, setCompleted] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const finishedRef = useRef(false);
  const headingRef = useRef(null);
  const saveAttemptRef = useRef(0);

  useEffect(() => onAuthStateChanged(auth, setUser), []);
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [screen, currentIndex]);

  async function handleAuth() {
    setAuthError("");
    setAuthPending(true);
    try {
      if (user) await signOut(auth);
      else await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setAuthError(
        error.message || "Sign-in could not be completed. Please try again.",
      );
    } finally {
      setAuthPending(false);
    }
  }

  const bank = questionBanks[category];
  const topicCounts = useMemo(() => buildTopicCounts(bank), [bank]);
  const topicOptions = Object.keys(topicCounts).sort();
  const availableLevels = [...new Set(bank.map((q) => q.level))];
  const latestWrongIds = latestWrongByCategory[category] || EMPTY_ARRAY;
  const reviewCount = bank.filter((q) => latestWrongIds.includes(q.id)).length;
  const eligibleCount = bank.filter(
    (q) =>
      (topicFilter === "All topics" || q.topic === topicFilter) &&
      (mode === "review"
        ? latestWrongIds.includes(q.id)
        : matchDifficulty(q, selectedDifficulties)),
  ).length;
  const sessionCount = Math.min(Number(questionCount), eligibleCount);
  const questions = session?.questions || EMPTY_ARRAY;
  const current = questions[currentIndex];
  const isSubmitted = current && Boolean(submitted[current.id]);
  const selectedIndex = current ? selected[current.id] : undefined;
  const answeredCount = questions.filter((q) => submitted[q.id]).length;
  const score = questions.filter(
    (q) => submitted[q.id] && selected[q.id] === q.answer,
  ).length;
  const wrongAnswers = questions.filter(
    (q) => submitted[q.id] && selected[q.id] !== q.answer,
  );
  const accuracy = questions.length
    ? Math.round((score / questions.length) * 100)
    : 0;
  const allAnswered =
    questions.length > 0 && answeredCount === questions.length;
  const activeSession = session && !completed;
  const filteredHistory = history.filter(
    (entry) => historyCategory === "all" || entry.category === historyCategory,
  );
  const bestAccuracy = filteredHistory.length
    ? Math.max(...filteredHistory.map((entry) => entry.accuracy))
    : null;
  const averageAccuracy = filteredHistory.length
    ? Math.round(
        filteredHistory.reduce((sum, entry) => sum + entry.accuracy, 0) /
          filteredHistory.length,
      )
    : null;

  function changeCategory(nextCategory) {
    const levels = [
      ...new Set(questionBanks[nextCategory].map((q) => q.level)),
    ];
    setCategory(nextCategory);
    setTopicFilter("All topics");
    setMode("practice");
    setSelectedDifficulties(
      difficultyOptions.filter((level) => levels.includes(level)),
    );
  }

  function toggleDifficulty(level) {
    setSelectedDifficulties((previous) => {
      const next = previous.includes(level)
        ? previous.filter((item) => item !== level)
        : [...previous, level];
      return next.length ? next : previous;
    });
  }

  function startSession(event) {
    event?.preventDefault();
    const nextQuestions = buildSessionQuestions(
      bank,
      Number(questionCount),
      selectedDifficulties,
      topicFilter,
      mode,
      latestWrongIds,
      seenIds,
    );
    if (!nextQuestions.length) return;
    saveAttemptRef.current += 1;
    setSession({
      category,
      mode,
      difficulty: selectedDifficulties.join(", "),
      topicFilter,
      questions: nextQuestions,
    });
    setCurrentIndex(0);
    setSelected({});
    setSubmitted({});
    setCompleted(false);
    setSaveStatus("");
    finishedRef.current = false;
    setScreen("quiz");
  }

  function leaveSession() {
    if (
      activeSession &&
      !window.confirm(
        "Leave this quiz? Your unfinished session will not be saved.",
      )
    )
      return;
    saveAttemptRef.current += 1;
    setSession(null);
    setCompleted(false);
    setScreen("setup");
  }

  async function finishSession() {
    if (!allAnswered || finishedRef.current) return;
    finishedRef.current = true;
    const wrongIds = wrongAnswers.map((q) => q.id);
    const correctIds = questions
      .filter((q) => selected[q.id] === q.answer)
      .map((q) => q.id);
    const entry = {
      id: `${Date.now()}-${session.category}-${Math.random().toString(36).slice(2, 8)}`,
      date: new Date().toLocaleString(),
      category: session.category,
      mode: session.mode,
      difficulty: session.difficulty,
      topicFilter: session.topicFilter,
      questionCount: questions.length,
      score,
      accuracy,
      wrongQuestionIds: wrongIds,
    };
    const nextHistory = [entry, ...history].slice(0, 30);
    const nextWrong = {
      ...latestWrongByCategory,
      [session.category]: [
        ...new Set([
          ...(latestWrongByCategory[session.category] || []).filter(
            (id) => !correctIds.includes(id),
          ),
          ...wrongIds,
        ]),
      ],
    };
    const nextSeen = [...new Set([...seenIds, ...questions.map((q) => q.id)])];
    setHistory(nextHistory);
    setLatestWrongByCategory(nextWrong);
    setSeenIds(nextSeen);
    setCompleted(true);
    setScreen("results");
    let localSaved = true;
    try {
      setJsonStorage(HISTORY_KEY, nextHistory);
      setJsonStorage(LATEST_WRONG_KEY, nextWrong);
      setJsonStorage(SEEN_KEY, nextSeen);
    } catch {
      localSaved = false;
    }
    const attempt = ++saveAttemptRef.current;
    if (!user) {
      setSaveStatus(
        localSaved
          ? "Saved in this browser. Sign in before your next quiz to also save results to your account."
          : "Browser storage is unavailable. These results are available until you close or reload the page.",
      );
      return;
    }
    setSaveStatus(
      localSaved
        ? "Saved in this browser. Saving to your account…"
        : "Saving to your account…",
    );
    try {
      const { id, date, ...result } = entry;
      await saveQuizResult(result);
      if (attempt === saveAttemptRef.current)
        setSaveStatus("Results saved to your account.");
    } catch {
      if (attempt === saveAttemptRef.current)
        setSaveStatus(
          localSaved
            ? "Saved in this browser. Account sync failed; please check your connection."
            : "Results could not be saved. Keep this page open to retain them.",
        );
    }
  }

  function prepareReview() {
    setCategory(session.category);
    setMode("review");
    setTopicFilter("All topics");
    setSession(null);
    setCompleted(false);
    setScreen("setup");
  }

  function clearHistory() {
    if (
      !window.confirm(
        "Clear this history and its saved wrong-answer lists in this browser? Account records are not deleted.",
      )
    )
      return;
    const categories =
      historyCategory === "all"
        ? Object.keys(questionBanks)
        : [historyCategory];
    const nextHistory = history.filter(
      (entry) => !categories.includes(entry.category),
    );
    const nextWrong = { ...latestWrongByCategory };
    for (const key of categories) delete nextWrong[key];
    const removedIds = new Set(
      categories.flatMap((key) => questionBanks[key].map((q) => q.id)),
    );
    const nextSeen = seenIds.filter((id) => !removedIds.has(id));
    setHistory(nextHistory);
    setLatestWrongByCategory(nextWrong);
    setSeenIds(nextSeen);
    try {
      setJsonStorage(HISTORY_KEY, nextHistory);
      setJsonStorage(LATEST_WRONG_KEY, nextWrong);
      setJsonStorage(SEEN_KEY, nextSeen);
    } catch {
      setAuthError(
        "Browser storage is unavailable. History could not be cleared permanently.",
      );
    }
  }

  const stage = screen === "quiz" ? 1 : screen === "results" ? 2 : 0;
  const activeLabel =
    categoryConfig[
      session && screen !== "setup" && screen !== "history"
        ? session.category
        : category
    ].label;

  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>
              Q<span>.</span>
            </span>
            <span>
              MCQ<span className={styles.brandLight}> / Trainer</span>
            </span>
          </div>
          <nav className={styles.nav} aria-label="Main navigation">
            <button
              className={`${styles.navButton} ${screen !== "history" ? styles.navActive : ""}`}
              aria-current={screen !== "history" ? "page" : undefined}
              onClick={() =>
                setScreen(
                  activeSession ? "quiz" : completed ? "results" : "setup",
                )
              }
            >
              <Icon name="book" size={17} />
              {activeSession ? "Resume quiz" : "Practice"}
            </button>
            <button
              className={`${styles.navButton} ${screen === "history" ? styles.navActive : ""}`}
              aria-current={screen === "history" ? "page" : undefined}
              onClick={() => setScreen("history")}
            >
              <Icon name="history" size={17} />
              History
            </button>
          </nav>
          <div className={styles.account}>
            {user && (
              <span className={styles.accountName}>
                {user.displayName || user.email}
              </span>
            )}
            <button
              className={styles.accountButton}
              onClick={handleAuth}
              disabled={authPending}
            >
              {authPending
                ? "Please wait…"
                : user
                  ? "Sign out"
                  : "Sign in with Google"}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className={styles.main}>
        {authError && (
          <div role="alert" className={styles.error}>
            {authError}
            <button
              aria-label="Dismiss message"
              onClick={() => setAuthError("")}
            >
              <Icon name="close" size={16} />
            </button>
          </div>
        )}
        {screen !== "history" && (
          <ol className={styles.steps} aria-label="Quiz stages">
            {["Set up", "Practice", "Results"].map((label, index) => (
              <li
                key={label}
                aria-current={stage === index ? "step" : undefined}
                className={
                  index === stage
                    ? styles.currentStep
                    : index < stage
                      ? styles.finishedStep
                      : ""
                }
              >
                <span>
                  {index < stage ? (
                    <Icon name="check" size={13} />
                  ) : (
                    `0${index + 1}`
                  )}
                </span>
                {label}
              </li>
            ))}
          </ol>
        )}

        {screen === "setup" && (
          <>
            <div className={styles.intro}>
              <div className={styles.eyebrow}>YOUR PRACTICE SPACE</div>
              <h1 ref={headingRef} tabIndex={-1}>
                Make room for a little progress.
              </h1>
              <p>
                Choose your subject. Set your pace. Learn one question at a
                time.
              </p>
            </div>
            <form onSubmit={startSession}>
              <section
                className={styles.setupCard}
                aria-labelledby="subject-heading"
              >
                <div className={styles.sectionHeading}>
                  <div>
                    <span className={styles.sectionNumber}>01</span>
                    <h2 id="subject-heading">
                      What would you like to practise?
                    </h2>
                  </div>
                  <span className={styles.muted}>6 subjects</span>
                </div>
                <div className={styles.subjectGrid}>
                  {Object.entries(categoryConfig).map(
                    ([key, config], index) => (
                      <button
                        type="button"
                        key={key}
                        className={`${styles.subject} ${category === key ? styles.subjectSelected : ""}`}
                        aria-pressed={category === key}
                        onClick={() => changeCategory(key)}
                      >
                        <div className={styles.subjectTop}>
                          <span className={styles.subjectIcon}>
                            <Icon name={index === 0 ? "layers" : "book"} />
                          </span>
                          <span className={styles.selectionCircle}>
                            {category === key && (
                              <Icon name="check" size={12} />
                            )}
                          </span>
                        </div>
                        <strong>{config.label}</strong>
                        <span>
                          {questionBanks[key].length} questions
                          <span aria-hidden="true"> · </span>
                          {
                            Object.keys(buildTopicCounts(questionBanks[key]))
                              .length
                          }{" "}
                          topics
                        </span>
                      </button>
                    ),
                  )}
                </div>
                <p className={styles.subjectDescription}>
                  {categoryConfig[category].description}
                </p>
              </section>

              <section
                className={styles.setupCard}
                aria-labelledby="session-heading"
              >
                <div className={styles.sectionHeading}>
                  <div>
                    <span className={styles.sectionNumber}>02</span>
                    <h2 id="session-heading">Build your session</h2>
                  </div>
                </div>
                <fieldset className={styles.fieldset}>
                  <legend>Practice mode</legend>
                  <div className={styles.segmented}>
                    <button
                      type="button"
                      aria-pressed={mode === "practice"}
                      onClick={() => setMode("practice")}
                    >
                      New questions
                    </button>
                    <button
                      type="button"
                      aria-pressed={mode === "review"}
                      disabled={!reviewCount}
                      onClick={() => setMode("review")}
                    >
                      Review mistakes <span>{reviewCount}</span>
                    </button>
                  </div>
                </fieldset>
                <div className={styles.formGrid}>
                  <label className={styles.field}>
                    Topic
                    <select
                      value={topicFilter}
                      onChange={(event) => setTopicFilter(event.target.value)}
                    >
                      <option>All topics</option>
                      {topicOptions.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic} ({topicCounts[topic]})
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={styles.field}>
                    Number of questions
                    <select
                      value={questionCount}
                      onChange={(event) => setQuestionCount(event.target.value)}
                    >
                      {questionCountOptions.map((count) => (
                        <option key={count} value={count}>
                          {count} questions
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <fieldset
                  className={styles.fieldset}
                  disabled={mode === "review"}
                >
                  <legend>
                    Difficulty{" "}
                    <span className={styles.optional}>Select one or more</span>
                  </legend>
                  <div className={styles.difficulties}>
                    {difficultyOptions.map((level) => (
                      <button
                        type="button"
                        key={level}
                        aria-pressed={selectedDifficulties.includes(level)}
                        disabled={!availableLevels.includes(level)}
                        onClick={() => toggleDifficulty(level)}
                        className={styles.difficulty}
                      >
                        <span
                          className={styles.difficultyDots}
                          aria-hidden="true"
                        >
                          {[0, 1, 2].map((i) => (
                            <i
                              key={i}
                              className={
                                i <= difficultyOptions.indexOf(level)
                                  ? styles.filledDot
                                  : ""
                              }
                            />
                          ))}
                        </span>
                        {difficultyLabels[level]}
                        {selectedDifficulties.includes(level) && (
                          <Icon name="check" size={14} />
                        )}
                      </button>
                    ))}
                  </div>
                  <p className={styles.fieldHint}>
                    {mode === "review"
                      ? "Review includes your saved mistakes at every difficulty level."
                      : availableLevels.length < 3
                        ? `This subject includes ${availableLevels.map((level) => difficultyLabels[level].toLowerCase()).join(" and ")} questions.`
                        : "Mix levels to find the right balance for your session."}
                  </p>
                </fieldset>
                <div className={styles.startBar}>
                  <div>
                    <strong>
                      {sessionCount
                        ? `${sessionCount} questions, one step forward.`
                        : "No questions match these settings."}
                    </strong>
                    <span>
                      {sessionCount
                        ? `${eligibleCount} matching questions · Immediate feedback after each answer`
                        : "Try another topic, difficulty or practice mode."}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className={styles.primary}
                    disabled={!sessionCount}
                  >
                    Start practice <Icon name="arrow" size={18} />
                  </button>
                </div>
              </section>
            </form>
            <p className={styles.bottomNote}>
              <Icon name="book" size={16} />
              Your progress stays in this browser. Sign in to also save
              completed results to your account.
            </p>
          </>
        )}

        {screen === "quiz" && current && (
          <div className={styles.quizContainer}>
            <div className={styles.quizHeading}>
              <div>
                <div className={styles.eyebrow}>
                  {session.mode === "review"
                    ? "MISTAKE REVIEW"
                    : "PRACTICE SESSION"}
                </div>
                <h1 ref={headingRef} tabIndex={-1}>
                  {activeLabel}
                </h1>
              </div>
              <button className={styles.textButton} onClick={leaveSession}>
                Back to setup
              </button>
            </div>
            <div className={styles.progressHeading}>
              <span>
                Question <strong>{currentIndex + 1}</strong> of{" "}
                {questions.length}
              </span>
              <span>{answeredCount} answered</span>
            </div>
            <progress
              className={styles.progress}
              max={questions.length}
              value={answeredCount}
              aria-label="Questions answered"
            />
            <section
              className={styles.questionCard}
              aria-labelledby="question-heading"
            >
              <div className={styles.questionMeta}>
                <span>{current.topic}</span>
                <span className={styles.levelBadge}>
                  {difficultyLabels[current.level]}
                </span>
                {current.sourceRule && <span>{current.sourceRule}</span>}
              </div>
              <h2 id="question-heading">{current.question}</h2>
              <p className={styles.answerHint}>Choose one answer.</p>
              <fieldset className={styles.answers} disabled={isSubmitted}>
                <legend className={styles.srOnly}>Answer choices</legend>
                {current.options.map((option, index) => {
                  const picked = selectedIndex === index;
                  const correct = isSubmitted && current.answer === index;
                  const wrong = isSubmitted && picked && !correct;
                  return (
                    <label
                      key={`${current.id}-${index}`}
                      className={`${styles.answer} ${picked && !isSubmitted ? styles.answerSelected : ""} ${correct ? styles.answerCorrect : ""} ${wrong ? styles.answerWrong : ""}`}
                    >
                      <input
                        type="radio"
                        name={`answer-${current.id}`}
                        value={index}
                        checked={picked}
                        onChange={() =>
                          setSelected((previous) => ({
                            ...previous,
                            [current.id]: index,
                          }))
                        }
                      />
                      <span className={styles.answerLetter} aria-hidden="true">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className={styles.answerText}>{option}</span>
                      {correct ? (
                        <span className={styles.answerStatus}>
                          <Icon name="check" size={17} />
                          <span>Correct answer</span>
                        </span>
                      ) : wrong ? (
                        <span className={styles.answerStatus}>
                          <Icon name="close" size={17} />
                          <span>Your answer</span>
                        </span>
                      ) : null}
                    </label>
                  );
                })}
              </fieldset>
              {isSubmitted && (
                <div
                  role="status"
                  className={`${styles.feedback} ${selectedIndex === current.answer ? styles.feedbackCorrect : styles.feedbackWrong}`}
                >
                  <strong>
                    <Icon
                      name={selectedIndex === current.answer ? "check" : "book"}
                      size={18}
                    />
                    {selectedIndex === current.answer
                      ? "That's right."
                      : "An opportunity to learn."}
                  </strong>
                  <p>{current.explanation}</p>
                </div>
              )}
              <div className={styles.questionActions}>
                <button
                  className={styles.textButton}
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((index) => index - 1)}
                >
                  ← Previous
                </button>
                <div>
                  {!isSubmitted ? (
                    <button
                      className={styles.primary}
                      disabled={selectedIndex === undefined}
                      onClick={() =>
                        setSubmitted((previous) => ({
                          ...previous,
                          [current.id]: true,
                        }))
                      }
                    >
                      Check answer <Icon name="check" size={17} />
                    </button>
                  ) : allAnswered ? (
                    <button className={styles.primary} onClick={finishSession}>
                      See results <Icon name="arrow" size={17} />
                    </button>
                  ) : (
                    <button
                      className={styles.primary}
                      onClick={() => {
                        const next = questions.findIndex(
                          (q, index) =>
                            index > currentIndex && !submitted[q.id],
                        );
                        setCurrentIndex(
                          next >= 0
                            ? next
                            : questions.findIndex((q) => !submitted[q.id]),
                        );
                      }}
                    >
                      Next question <Icon name="arrow" size={17} />
                    </button>
                  )}
                </div>
              </div>
            </section>
            <nav
              className={styles.questionMap}
              aria-label="Question navigation"
            >
              {questions.map((q, index) => (
                <button
                  key={q.id}
                  aria-label={`Question ${index + 1}${submitted[q.id] ? ", answered" : ""}`}
                  aria-current={index === currentIndex ? "step" : undefined}
                  className={`${submitted[q.id] ? styles.mapAnswered : ""} ${index === currentIndex ? styles.mapCurrent : ""}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </nav>
            <p className={styles.bottomNote}>
              Take your time. This is practice, not a timed exam.
            </p>
          </div>
        )}

        {screen === "results" && session && (
          <div className={styles.quizContainer}>
            <section className={styles.resultsCard}>
              <div className={styles.resultIcon}>
                <Icon name="check" size={26} />
              </div>
              <div className={styles.eyebrow}>SESSION COMPLETE</div>
              <h1 ref={headingRef} tabIndex={-1}>
                Another step forward.
              </h1>
              <p>
                {activeLabel} ·{" "}
                {session.mode === "review" ? "Mistake review" : "Practice"}
              </p>
              <div className={styles.score}>
                {accuracy}
                <span>%</span>
              </div>
              <p className={styles.scoreCaption}>
                {score} correct answers out of {questions.length}
              </p>
              <div className={styles.resultStats}>
                <div>
                  <strong>{score}</strong>
                  <span>Correct</span>
                </div>
                <div>
                  <strong>{wrongAnswers.length}</strong>
                  <span>To revisit</span>
                </div>
                <div>
                  <strong>{questions.length}</strong>
                  <span>Completed</span>
                </div>
              </div>
              <div className={styles.resultActions}>
                {(latestWrongByCategory[session.category] || []).length > 0 && (
                  <button className={styles.primary} onClick={prepareReview}>
                    Review mistakes <Icon name="arrow" size={17} />
                  </button>
                )}
                <button className={styles.secondary} onClick={leaveSession}>
                  New practice session
                </button>
              </div>
              <p className={styles.saveNote} role="status">
                {saveStatus}
              </p>
            </section>
            {wrongAnswers.length > 0 && (
              <section className={styles.setupCard}>
                <div className={styles.sectionHeading}>
                  <div>
                    <h2>Where to focus next</h2>
                  </div>
                </div>
                <p className={styles.muted}>
                  Revisit these topics while the ideas are still fresh.
                </p>
                <div className={styles.topicChips}>
                  {[...new Set(wrongAnswers.map((q) => q.topic))].map(
                    (topic) => (
                      <span key={topic}>{topic}</span>
                    ),
                  )}
                </div>
                <div className={styles.resultReview}>
                  {wrongAnswers.map((q) => (
                    <details key={q.id}>
                      <summary>{q.question}</summary>
                      <p>
                        <strong>Correct answer:</strong> {q.options[q.answer]}
                      </p>
                      <p>{q.explanation}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
            <button
              className={styles.historyLink}
              onClick={() => {
                setHistoryCategory(session.category);
                setScreen("history");
              }}
            >
              View your practice history <Icon name="arrow" size={16} />
            </button>
          </div>
        )}

        {screen === "history" && (
          <>
            <div className={styles.intro}>
              <div className={styles.eyebrow}>YOUR PROGRESS</div>
              <h1 ref={headingRef} tabIndex={-1}>
                Every session counts.
              </h1>
              <p>Look back at your practice and choose where to go next.</p>
            </div>
            <div className={styles.historyToolbar}>
              <label className={styles.field}>
                Subject
                <select
                  value={historyCategory}
                  onChange={(event) => setHistoryCategory(event.target.value)}
                >
                  <option value="all">All subjects</option>
                  {Object.entries(categoryConfig).map(([key, config]) => (
                    <option key={key} value={key}>
                      {config.label}
                    </option>
                  ))}
                </select>
              </label>
              <button
                className={styles.textButton}
                disabled={
                  !filteredHistory.length &&
                  !Object.entries(latestWrongByCategory).some(
                    ([key, ids]) =>
                      ids.length &&
                      (historyCategory === "all" || historyCategory === key),
                  )
                }
                onClick={clearHistory}
              >
                Clear browser history
              </button>
            </div>
            <div className={styles.historyStats}>
              <div>
                <span>Sessions completed</span>
                <strong>{filteredHistory.length}</strong>
              </div>
              <div>
                <span>Best score</span>
                <strong>
                  {bestAccuracy === null ? "—" : `${bestAccuracy}%`}
                </strong>
              </div>
              <div>
                <span>Average score</span>
                <strong>
                  {averageAccuracy === null ? "—" : `${averageAccuracy}%`}
                </strong>
              </div>
            </div>
            <section
              className={styles.historyCard}
              aria-label="Completed sessions"
            >
              {filteredHistory.length ? (
                filteredHistory.map((entry) => (
                  <article className={styles.historyRow} key={entry.id}>
                    <div className={styles.historyScore}>{entry.accuracy}%</div>
                    <div className={styles.historyInfo}>
                      <h2>
                        {categoryConfig[entry.category]?.label ||
                          entry.category}
                      </h2>
                      <p>
                        {entry.questionCount} questions ·{" "}
                        {entry.mode === "review"
                          ? "Mistake review"
                          : "Practice"}{" "}
                        · {entry.topicFilter}
                      </p>
                      <span>{entry.date}</span>
                    </div>
                    <span className={styles.historyFraction}>
                      {entry.score}
                      <span> / {entry.questionCount}</span>
                    </span>
                  </article>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <Icon name="history" size={34} />
                  <h2>Your first session starts here.</h2>
                  <p>
                    Completed quizzes will appear here with your scores and
                    topics.
                  </p>
                  <button
                    className={styles.primary}
                    onClick={() => setScreen(activeSession ? "quiz" : "setup")}
                  >
                    {activeSession ? "Resume quiz" : "Set up a session"}
                    <Icon name="arrow" size={17} />
                  </button>
                </div>
              )}
            </section>
            <p className={styles.bottomNote}>
              Your latest 30 sessions in this browser. Previous history is
              preserved.
            </p>
          </>
        )}
      </main>
      <footer className={styles.footer}>
        <span>MCQ / Trainer</span>
        <span>Practice with purpose.</span>
      </footer>
    </div>
  );
}
