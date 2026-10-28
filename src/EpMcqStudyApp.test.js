import React, { act, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EpMcqStudyApp from "./EpMcqStudyApp";
import { EPSO_AD7_INFRASTRUCTURE_QUESTIONS } from "./epso_ad7_infrastructure_questions";
import { saveQuizResult } from "./firebase_results";

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

test("setup filters do not start a quiz, and navigation preserves a checked answer", () => {
  renderApp();
  chooseSubject();
  expect(button("Easy").disabled).toBe(true);
  expect(container.querySelector("#question-heading")).toBeNull();
  selectValue(0, "Quantum technologies");
  selectValue(1, "5");
  click("Start practice");
  expect(button("Check answer").disabled).toBe(true);
  const question = answer(true);
  expect(question.topic).toBe("Quantum technologies");
  expect(container.querySelector("fieldset.answers").disabled).toBe(true);
  expect(container.textContent).toContain(question.explanation);
  click("History");
  click("Resume quiz");
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
  expect(JSON.parse(localStorage.getItem("ep-mcq-history-v2"))).toHaveLength(2);
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

test("leaving an unfinished quiz requires confirmation and does not write history", () => {
  renderApp();
  chooseSubject();
  click("Start practice");
  const text = container.querySelector("#question-heading").textContent;
  window.confirm.mockReturnValueOnce(false);
  click("Back to setup");
  expect(container.querySelector("#question-heading").textContent).toBe(text);
  click("Back to setup");
  expect(container.querySelector("#question-heading")).toBeNull();
  expect(localStorage.getItem("ep-mcq-history-v2")).toBeNull();
});
