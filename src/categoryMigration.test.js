import { migrateStoredEpCategory } from "./categoryMigration";

test("saved Rules of Procedure quizzes and history use the remaining EP category", () => {
  const session = { id: "saved-ep", category: "ep_rules", questions: [{ id: "ep-001" }] };
  expect(migrateStoredEpCategory("draft", { version: 1, session })).toEqual({
    version: 1, session: { ...session, category: "ep_all" },
  });
  expect(migrateStoredEpCategory("history", [{ ...session, score: 4 }])[0])
    .toMatchObject({ category: "ep_all", score: 4 });
  expect(session.category).toBe("ep_rules");
});

test("review marks and mistakes are combined without losing the separate staff category", () => {
  expect(migrateStoredEpCategory("ids", {
    ep_all: ["ep-001"], ep_rules: ["ep-001", "ep-002"],
    ep_guide_internal_rules: ["guide-001"],
  })).toEqual({ ep_all: ["ep-001", "ep-002"], ep_guide_internal_rules: ["guide-001"] });
});

test("statistics for both former aliases are combined and migration is repeatable", () => {
  const value = {
    "ep_rules:ep-001": { id: "ep-001", category: "ep_rules", attempts: 3, correct: 1, wrong: 2, lastAnsweredAt: "2026-10-28", lastCorrect: false },
    "ep_all:ep-001": { id: "ep-001", category: "ep_all", attempts: 2, correct: 2, wrong: 0, lastAnsweredAt: "2026-10-29", lastCorrect: true },
  };
  const migrated = migrateStoredEpCategory("progress", value);
  expect(migrated).toEqual({ "ep_all:ep-001": {
    ...value["ep_all:ep-001"], attempts: 5, correct: 3, wrong: 2,
  } });
  expect(migrateStoredEpCategory("progress", migrated)).toEqual(migrated);
});

test("staff questions formerly practised in the combined EP bank keep their own review data", () => {
  expect(migrateStoredEpCategory("ids", {
    ep_all: ["ep-001", "guide-001", "internal-001"],
  })).toEqual({ ep_all: ["ep-001"], ep_guide_internal_rules: ["guide-001", "internal-001"] });
  expect(migrateStoredEpCategory("progress", {
    "ep_all:guide-001": { id: "guide-001", category: "ep_all", attempts: 2, correct: 1, wrong: 1 },
  })).toEqual({ "ep_guide_internal_rules:guide-001": {
    id: "guide-001", category: "ep_guide_internal_rules", attempts: 2, correct: 1, wrong: 1,
  } });
});

test("an older mistake in the retired alias does not reopen a more recently corrected answer", () => {
  const wrong = { ep_rules: ["ep-001", "ep-002"] };
  const progress = { "ep_all:ep-001": { lastCorrect: true } };
  expect(migrateStoredEpCategory("wrong", wrong, progress)).toEqual({ ep_all: ["ep-002"] });
  expect(migrateStoredEpCategory("ids", wrong, progress)).toEqual({ ep_all: ["ep-001", "ep-002"] });
});
