import { EPSO_AD7_INFRASTRUCTURE_QUESTIONS } from "./epso_ad7_infrastructure_questions";
import { questionReview } from "./questionReviews";

const question = (number) => EPSO_AD7_INFRASTRUCTURE_QUESTIONS.find(
  (item) => item.id === `EPSO-ICT1-${String(number).padStart(3, "0")}`,
);
const answer = (number) => {
  const item = question(number);
  return item.options[item.answer];
};

test("all 300 ICT answers have an individual documented review or calculation", () => {
  expect(EPSO_AD7_INFRASTRUCTURE_QUESTIONS).toHaveLength(300);
  const calculations = [];
  for (const item of EPSO_AD7_INFRASTRUCTURE_QUESTIONS) {
    const review = questionReview(item);
    expect(review.checked).toBe(true);
    expect(review.reviewedAt).toBe("2026-10-29");
    if (review.method === "calculation") {
      calculations.push(item.id);
      expect(review.note).toMatch(/\d/);
    } else {
      expect(review.method).toBe("technical-documentation");
      expect(review.sources.length).toBeGreaterThan(0);
      for (const source of review.sources) {
        expect(new URL(source.url).protocol).toBe("https:");
        expect(source.section).toBeTruthy();
      }
    }
  }
  expect(calculations).toEqual([
    "EPSO-ICT1-009", "EPSO-ICT1-025", "EPSO-ICT1-033", "EPSO-ICT1-144",
  ]);
});

test("the transfer estimate distinguishes bits from bytes and states decimal units", () => {
  const days = 12e12 * 8 / 100e6 / 86400;
  expect(days).toBeCloseTo(11.1, 1);
  expect(question(144).question).toContain("decimal units");
  expect(answer(144)).toBe("11.1 days");
});

test("power redundancy covers the shared feed as well as individual PSUs", () => {
  expect(question(34).question).toContain("power-feed failure");
  expect(answer(34)).toBe("Dual power supplies connected to independent power feeds");
  expect(question(34).options).toContain("Two PSUs connected to the same single power feed");
});

test("service restoration does not imply that the underlying problem is fixed", () => {
  expect(answer(59)).toBe(
    "The incident may be resolved while the underlying problem still needs investigation",
  );
  expect(question(59).explanation).toContain("not proof of a permanent fix");
});

test("allocated capacity and actual execution remain distinct in HPC", () => {
  expect(answer(246)).toBe(
    "Allocated core-hours divided by available core-hours over the same period",
  );
  expect(question(246).options).toContain("Average CPU busy time within allocated cores");
  expect(questionReview(question(246)).sources[0].section).toContain("TotalCPU");
});

test("future unreviewed questions do not inherit a bank-wide checked status", () => {
  expect(questionReview({
    ...question(1),
    id: "EPSO-ICT1-301",
  })).toMatchObject({ checked: false, reviewedAt: null, sources: [] });
});

test("directory access and web single sign-on remain distinct", () => {
  expect(answer(37)).toContain("Directory operations");
  expect(answer(48)).toBe("An identity layer and ID Tokens describing the authenticated end-user");
  expect(questionReview(question(37)).sources.some((source) => source.url.includes("rfc4511"))).toBe(true);
  expect(questionReview(question(48)).sources.some((source) => source.url.includes("openid-connect-core"))).toBe(true);
});

test("point-in-time recovery requires a base backup and the WAL sequence covering the target", () => {
  expect(answer(49)).toBe("A restorable physical base backup and an unbroken WAL archive covering the target time");
  expect(question(49).explanation).toContain("base backup alone cannot reproduce");
});

test("notice-aligned workplace, HPC and sensing questions reference the supplied competition notice", () => {
  for (const id of [35, 234, 261]) {
    expect(questionReview(question(id)).sources.some((source) =>
      source.url === "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:C_202602425",
    )).toBe(true);
  }
});
