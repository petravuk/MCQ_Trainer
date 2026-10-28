// Manual editorial triage only. This script never runs on startup or update.
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ts = require("typescript");

function load(file) {
  const exports = {};
  const code = ts.transpileModule(
    fs.readFileSync(path.join(__dirname, "..", file), "utf8"),
    {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    },
  ).outputText;
  vm.runInNewContext(code, { exports });
  return exports;
}

const banks = {
  EP: load("src/ep_questions_bank.ts").EP_QUESTIONS,
  Infrastructure: load("src/epso_ad7_infrastructure_questions.ts")
    .EPSO_AD7_INFRASTRUCTURE_QUESTIONS,
};
const { questionChecks, editorialNotes, equivalentQuestions } = load(
  "src/questionReviews.js",
);
const errors = [];
const ids = new Set();
const report = {
  scope: "EP and ICT Infrastructure only",
  questions: 0,
  banks: {},
  answerChecked: Object.keys(questionChecks),
  equivalentQuestions,
  editorialNotes,
  errors,
};
const unrelated =
  /office chairs|screen size|meeting invites|marketing documents|shell usernames|monitor size|serial numbers|desktop wallpaper|printer throughput/i;

for (const [name, bank] of Object.entries(banks)) {
  const wording = new Map();
  const easyDistractorCandidates = [];
  const answerPositions = [0, 0, 0, 0];
  const levels = {};
  for (const q of bank) {
    report.questions++;
    if (ids.has(q.id)) errors.push(`${q.id}: duplicate ID`);
    ids.add(q.id);
    if (
      !Array.isArray(q.options) ||
      q.options.length !== 4 ||
      new Set(q.options.map((s) => s.trim().toLowerCase())).size !== 4
    )
      errors.push(`${q.id}: four distinct options required`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3)
      errors.push(`${q.id}: invalid answer`);
    if (!["easy", "medium", "hard"].includes(q.level))
      errors.push(`${q.id}: invalid level`);
    for (const field of ["id", "topic", "question", "explanation"])
      if (typeof q[field] !== "string" || !q[field].trim())
        errors.push(`${q.id}: missing ${field}`);
    const key = q.question.trim().toLowerCase();
    wording.set(key, [...(wording.get(key) || []), q.id]);
    answerPositions[q.answer]++;
    levels[q.level] = (levels[q.level] || 0) + 1;
    if (q.options.some((option, i) => i !== q.answer && unrelated.test(option)))
      easyDistractorCandidates.push(q.id);
  }
  report.banks[name] = {
    count: bank.length,
    distinctWording: wording.size,
    duplicateGroups: [...wording.values()].filter((group) => group.length > 1),
    levels,
    answerPositions,
    easyDistractorCandidates,
    note: "Heuristic candidates require human judgement; they are not proven answer errors. Source checks cover only the explicitly listed IDs.",
  };
}

process.stdout.write(JSON.stringify(report, null, 2) + "\n");
if (errors.length) process.exitCode = 1;
