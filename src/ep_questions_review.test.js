import { EP_QUESTIONS } from "./ep_questions_bank";
import { questionChecks, questionKey, questionReview } from "./questionReviews";

const question = (id) => EP_QUESTIONS.find((item) => item.id === id);
const answer = (id) => {
  const item = question(id);
  return item.options[item.answer];
};

test("negotiation questions distinguish the chair from the rapporteur", () => {
  expect(answer("ep-052")).toBe("The chair of the committee responsible");
  expect(answer("ep-113")).toBe("To defend Parliament’s position on the file");
  expect(questionKey(question("ep-052"))).not.toBe(
    questionKey(question("ep-113")),
  );
});

test("joint signature and Parliament's authentication remain distinct", () => {
  expect(answer("ep-054")).toBe(
    "The Presidents of the European Parliament and the Council",
  );
  expect(answer("ep-118")).toBe("The President and the Secretary-General");
  expect(questionKey(question("ep-054"))).not.toBe(
    questionKey(question("ep-118")),
  );
});

test("the simple-majority example excludes abstentions from yes and no votes", () => {
  expect(question("ep-225").question).toContain("100 Members vote for, 90 against and 20 abstain");
  expect(answer("ep-225")).toBe("Yes, because there are more votes for than against");
  expect(question("ep-225").explanation).toContain("assumes the quorum");
});

test("source checks are individual and retain their own review date", () => {
  const checked = questionReview(question("ep-052"));
  expect(checked.checked).toBe(true);
  expect(checked.reviewedAt).toBe("2026-10-29");
  expect(checked.sources[0].url).toBe(
    "https://www.europarl.europa.eu/about-parliament/en/powers-and-procedures/legislative-powers",
  );
  expect(questionReview(question("ep-147"))).toMatchObject({
    checked: true,
    reviewedAt: "2026-10-29",
    referenceEdition: "July 2025 Rules",
    currentEditionVerified: false,
  });
});

test("censure submission uses one tenth, not the low threshold", () => {
  expect(answer("ep-146")).toBe("One tenth of Parliament’s component Members");
  expect(question("ep-146").explanation).toContain("preceding two months");
  expect(question("ep-146").explanation).toContain("one fifth");
});

test("every EP answer has an individual source check with dated editions disclosed", () => {
  for (const item of EP_QUESTIONS) {
    const review = questionReview(item);
    expect(review.checked).toBe(true);
    expect(review.sources.length).toBeGreaterThan(0);
    if (review.referenceEdition) {
      expect(review.currentEditionVerified).toBe(false);
      expect(review.note).toContain("July 2025");
      expect(review.sources[0].url).toMatch(/EP-PE_REGL\(2025\)07-07_EN\.pdf#page=\d+$/);
    }
  }
});

test("the Court of Auditors question cites both the hearing procedure and CONT competence", () => {
  const review = questionReview(question("ep-149"));
  expect(answer("ep-149")).toBe("The committee responsible for budgetary control");
  expect(review.sources[0].section).toContain("Rule 133");
  expect(review.sources[0].section).toContain("Annex VI, section VI, point 6");
});

test("a citizens' initiative hearing in committee is distinguished from the plenary debate", () => {
  expect(answer("ep-265")).toBe(
    "A public hearing at Parliament with representatives of the organisers",
  );
  expect(question("ep-265").explanation).toContain("subsequent debate is held in plenary");
});

test("reviewed IDs all exist and link to the consulted official EP pages", () => {
  const ids = new Set(EP_QUESTIONS.map((item) => item.id));
  expect(ids.size).toBe(300);
  for (const [id, check] of Object.entries(questionChecks)) {
    if (!id.startsWith("ep-")) continue;
    expect(ids.has(id)).toBe(true);
    expect(check.sources.length).toBeGreaterThan(0);
    for (const source of check.sources) {
      expect(new URL(source.url).hostname).toBe("www.europarl.europa.eu");
      expect(source.section).toBeTruthy();
    }
  }
});
