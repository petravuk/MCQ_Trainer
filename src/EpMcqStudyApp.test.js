import React, { act, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EpMcqStudyApp from "./EpMcqStudyApp";
import { EPSO_AD7_INFRASTRUCTURE_QUESTIONS } from "./epso_ad7_infrastructure_questions";
import { saveQuizResult } from "./firebase_results";
import {
  validateDraft,
  recordQuestionAnswer,
  topicResults,
} from "./quizProgress";

jest.mock("./firebase", () => ({ auth: {}, googleProvider: {} }));
jest.mock("firebase/auth", () => ({
  onAuthStateChanged: jest.fn((auth, callback) => {
    callback(null);
    return () => {};
  }),
  signInWithPopup: jest.fn(),
  signOut: jest.fn(),
}));
jest.mock("./firebase_results", () => ({ saveQuizResult: jest.fn() }));

let container;
let root;

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
  window.scrollTo = jest.fn();
  window.confirm = jest.fn(() => true);
  global.IS_REACT_ACT_ENVIRONMENT = true;
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  delete global.IS_REACT_ACT_ENVIRONMENT;
});

function renderApp() {
  act(() =>
    root.render(
      <StrictMode>
        <EpMcqStudyApp />
      </StrictMode>,
    ),
  );
}

function button(name) {
  const result = [...container.querySelectorAll("button")].find(
    (item) => item.textContent.trim() === name,
  );
  if (!result) throw new Error(`Button not found: ${name}`);
  return result;
}

function click(name) {
  act(() => button(name).click());
}

function chooseSubject() {
  const subject = [...container.querySelectorAll("button")].find(
    (item) =>
      item.querySelector("strong")?.textContent === "ICT Infrastructure",
  );
  act(() => subject.click());
}

function selectValue(index, value) {
  const select = container.querySelectorAll("select")[index];
  act(() => {
    select.value = value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

function answer(correct) {
  const question = EPSO_AD7_INFRASTRUCTURE_QUESTIONS.find(
    (q) =>
      q.question === container.querySelector("#question-heading").textContent,
  );
  const choice =
    question.options[correct ? question.answer : (question.answer + 1) % 4];
  const label = [...container.querySelectorAll("label")].find(
    (item) =>
      item.querySelector("input[type=radio]") &&
      item.textContent.slice(1) === choice,
  );
  act(() => label.querySelector("input").click());
  click("Check answer");
  return question;
}

test("EP practice excludes staff rules while keeping their separate category", () => {
  renderApp();
  const subject = (name) => [...container.querySelectorAll("button")].find(
    (item) => item.querySelector("strong")?.textContent === name,
  );
  expect(subject("EP questions").textContent).toContain("300 questions");
  expect(subject("Guide & Internal Rules").textContent).toContain("80 questions");
  expect(subject("Rules of Procedure")).toBeUndefined();
  act(() => subject("EP questions").click());
  expect(container.textContent).not.toContain("Annual leave (1)");
});

test("setup filters do not start a quiz, and navigation preserves a checked answer", () => {
  renderApp();
  chooseSubject();
  expect(button("Easy").getAttribute("aria-pressed")).toBe("true");
  expect(container.querySelector("#question-heading")).toBeNull();
  selectValue(0, "Quantum technologies");
  selectValue(1, "5");
  click("Start practice");
  expect(button("Check answer").disabled).toBe(true);
  const question = answer(true);
  expect(question.topic).toBe("Quantum technologies");
  expect(container.querySelector("fieldset.answers").disabled).toBe(true);
  expect(container.textContent).toContain(question.explanation);
  expect(container.querySelector("details summary").textContent).toBe("Sources");
  expect(container.querySelectorAll("details a").length).toBeGreaterThan(0);
  expect(container.textContent).not.toMatch(/Answer checked|Source check pending|Checked on|has not been certified/);
  click("History");
  click("Practice");
  click("Resume saved quiz");
  expect(container.querySelector("#question-heading").textContent).toBe(
    question.question,
  );
  expect(container.querySelector("input:checked")).not.toBeNull();
  click("Next question");
  click("← Previous");
  expect(container.querySelector("#question-heading").textContent).toBe(
    question.question,
  );
  expect(container.textContent).toContain(question.explanation);
});

test("completion saves once, preserves old history and supports reviewing a mistake", () => {
  localStorage.setItem(
    "ep-mcq-history-v2",
    JSON.stringify([
      {
        id: "previous",
        date: "Earlier",
        category: "eu_knowledge",
        mode: "practice",
        topicFilter: "All topics",
        questionCount: 5,
        score: 3,
        accuracy: 60,
      },
    ]),
  );
  renderApp();
  chooseSubject();
  selectValue(1, "5");
  click("Start practice");
  let wrong;
  for (let index = 0; index < 5; index++) {
    const question = answer(index !== 0);
    if (index === 0) wrong = question;
    if (index < 4) click("Next question");
  }
  click("See results");
  expect(container.textContent).toContain("4 correct answers out of 5");
  const history = JSON.parse(localStorage.getItem("ep-mcq-history-v2"));
  expect(history).toHaveLength(2);
  expect(history[0]).toMatchObject({
    category: "epso_ad7_infrastructure",
    score: 4,
    accuracy: 80,
    wrongQuestionIds: [wrong.id],
  });
  expect(history[1].id).toBe("previous");
  expect(saveQuizResult).not.toHaveBeenCalled();
  click("History");
  click("Practice");
  expect(container.textContent).toContain("What would you like to practise?");
  expect(JSON.parse(localStorage.getItem("ep-mcq-history-v2"))).toHaveLength(2);
  act(() =>
    container.querySelector('button[aria-label="View last results"]').click(),
  );
  click("Review mistakes");
  click("Start practice");
  expect(container.querySelector("#question-heading").textContent).toBe(
    wrong.question,
  );
  answer(true);
  click("See results");
  expect(
    JSON.parse(localStorage.getItem("ep-mcq-latest-wrong-v2"))
      .epso_ad7_infrastructure,
  ).toEqual([]);
});

test("save and exit restores the same question order, position and checked answers after reload", () => {
  renderApp();
  chooseSubject();
  click("Start practice");
  const first = answer(false);
  click("Mark for review");
  click("Next question");
  const nextText = container.querySelector("#question-heading").textContent;
  click("Save & exit");
  expect(localStorage.getItem("ep-mcq-history-v2")).toBeNull();
  act(() => root.unmount());
  root = createRoot(container);
  renderApp();
  click("Resume saved quiz");
  expect(container.querySelector("#question-heading").textContent).toBe(
    nextText,
  );
  click("← Previous");
  expect(container.querySelector("#question-heading").textContent).toBe(
    first.question,
  );
  expect(container.querySelector("input:checked")).not.toBeNull();
  expect(container.querySelector("fieldset.answers").disabled).toBe(true);
  const progress = JSON.parse(localStorage.getItem("mcq-question-progress-v1"));
  expect(progress[`epso_ad7_infrastructure:${first.id}`]).toMatchObject({
    attempts: 1,
    correct: 0,
    wrong: 1,
  });
  expect(button("Marked for review").getAttribute("aria-pressed")).toBe("true");
});

test("review queue includes interrupted mistakes and manual marks, without inventing old topic statistics", () => {
  renderApp();
  chooseSubject();
  click("Start practice");
  const wrong = answer(false);
  click("Next question");
  const marked = container.querySelector("#question-heading").textContent;
  click("Mark for review");
  click("Review");
  const articles = [...container.querySelectorAll("article")];
  expect(articles).toHaveLength(2);
  expect(
    articles.some((item) => item.textContent.includes(wrong.question)),
  ).toBe(true);
  expect(articles.some((item) => item.textContent.includes(marked))).toBe(true);
  click("History");
  expect(container.textContent).toContain("0/1 correct · 1 wrong");
  expect(container.textContent).toContain("1 distinct questions");
});

test("discarding a saved quiz is explicit and preserves genuine answer statistics", () => {
  renderApp();
  chooseSubject();
  click("Start practice");
  answer(true);
  click("Save & exit");
  window.confirm.mockReturnValueOnce(false);
  click("Discard saved quiz");
  expect(button("Resume saved quiz")).toBeDefined();
  click("Discard saved quiz");
  expect(localStorage.getItem("mcq-active-session-v1")).toBeNull();
  expect(
    Object.values(
      JSON.parse(localStorage.getItem("mcq-question-progress-v1")),
    )[0].attempts,
  ).toBe(1);
});

test("topic percentages are weighted by actual answers, not by averaging question percentages", () => {
  const results = topicResults(
    {
      a: { category: "data", topic: "SQL", attempts: 10, correct: 1, wrong: 9 },
      b: { category: "data", topic: "SQL", attempts: 1, correct: 1, wrong: 0 },
      c: { category: "other", topic: "SQL", attempts: 1, correct: 1, wrong: 0 },
    },
    "data",
  );
  expect(results).toEqual([
    {
      category: "data",
      topic: "SQL",
      attempts: 11,
      correct: 2,
      wrong: 9,
      questions: 2,
      accuracy: 18,
    },
  ]);
});

test("a restored checked answer is not counted twice", () => {
  const q = EPSO_AD7_INFRASTRUCTURE_QUESTIONS[0];
  const session = { id: "stable-quiz", category: "epso_ad7_infrastructure" };
  const progress = recordQuestionAnswer({}, session, q, q.answer);
  expect(recordQuestionAnswer(progress, session, q, q.answer)).toBe(progress);
});

test("stale answer keys, invalid choices and completed drafts cannot be resumed", () => {
  const q = EPSO_AD7_INFRASTRUCTURE_QUESTIONS[0];
  const banks = { ict: [q] };
  const draft = {
    version: 1,
    session: {
      id: "saved-quiz",
      category: "ict",
      mode: "practice",
      topicFilter: "All topics",
      difficulty: "medium",
      questions: [q],
    },
    currentIndex: 0,
    selected: { [q.id]: q.answer },
    submitted: { [q.id]: true },
  };
  expect(validateDraft(draft, banks, [])).not.toBeNull();
  expect(validateDraft(draft, banks, [{ id: "saved-quiz" }])).toBeNull();
  expect(
    validateDraft({ ...draft, selected: { [q.id]: 9 } }, banks, []),
  ).toBeNull();
  expect(
    validateDraft(draft, { ict: [{ ...q, answer: (q.answer + 1) % 4 }] }, []),
  ).toBeNull();
  expect(validateDraft({ version: 2 }, banks, [])).toBeNull();
});

test("duplicate wording is not repeated within an EP quiz", () => {
  renderApp();
  selectValue(1, "100");
  click("Start practice");
  const draft = JSON.parse(localStorage.getItem("mcq-active-session-v1"));
  expect(draft.session.questions).toHaveLength(100);
  const wording = draft.session.questions.map((q) =>
    q.question.toLowerCase().trim(),
  );
  expect(new Set(wording).size).toBe(wording.length);
});
