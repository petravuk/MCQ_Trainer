import { EPSO_AD7_INFRASTRUCTURE_QUESTIONS as questions } from "./epso_ad7_infrastructure_questions";

test("ICT Domain 1 contains exactly 300 distinct questions with stable IDs", () => {
  expect(questions).toHaveLength(300);
  expect(questions.map((q) => q.id)).toEqual(
    Array.from({ length: 300 }, (_, i) =>
      `EPSO-ICT1-${String(i + 1).padStart(3, "0")}`
    )
  );
  expect(new Set(questions.map((q) => q.question.trim().toLowerCase())).size).toBe(300);
});

test.each(questions)("$id has four distinct choices, a valid answer and feedback", (q) => {
  expect(q.category).toBe("epso_ad7_infrastructure");
  expect(["easy", "medium", "hard"]).toContain(q.level);
  for (const text of [q.topic, q.question, q.explanation, ...q.options]) {
    expect(typeof text).toBe("string");
    expect(text.trim().length).toBeGreaterThan(0);
  }
  expect(q.options).toHaveLength(4);
  expect(new Set(q.options.map((option) => option.trim().toLowerCase())).size).toBe(4);
  expect(Number.isInteger(q.answer)).toBe(true);
  expect(q.answer).toBeGreaterThanOrEqual(0);
  expect(q.answer).toBeLessThan(q.options.length);
});

test("Domain 1 covers all ten supplied topics", () => {
  expect([...new Set(questions.map((q) => q.topic))].sort()).toEqual([
    "DevSecOps and automation",
    "Emerging technologies",
    "Enterprise infrastructure",
    "High-performance computing",
    "ICT infrastructure lifecycle",
    "IT service management",
    "Information security and continuity",
    "Infrastructure portfolios and documentation",
    "Quantum technologies",
    "Teams, suppliers and SLAs",
  ].sort());
});
