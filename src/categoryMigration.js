const canonicalCategory = (category, id = "") => {
  if (["ep_all", "ep_rules"].includes(category) && /^(guide|internal)-/.test(id)) {
    return "ep_guide_internal_rules";
  }
  return category === "ep_rules" ? "ep_all" : category;
};

// The retired Rules of Procedure card used the same bank as EP questions.
// Keep its saved sessions, review marks and statistics under the remaining card.
export function migrateStoredEpCategory(kind, value, progress = {}) {
  if (!value) return value;
  if (kind === "history") {
    return value.map((entry) => ({ ...entry, category: canonicalCategory(entry.category) }));
  }
  if (kind === "draft" && value.session) {
    return { ...value, session: { ...value.session, category: canonicalCategory(value.session.category) } };
  }
  if (kind === "ids" || kind === "wrong") {
    const next = {};
    for (const [category, ids] of Object.entries(value)) {
      for (const id of ids) {
        const target = canonicalCategory(category, id);
        if (kind === "wrong" && progress[`${target}:${id}`]?.lastCorrect === true) continue;
        next[target] ||= [];
        if (!next[target].includes(id)) next[target].push(id);
      }
    }
    return next;
  }
  if (kind === "progress") {
    const next = {};
    for (const [key, entry] of Object.entries(value)) {
      const id = entry.id || key.slice(key.indexOf(":") + 1);
      const category = canonicalCategory(entry.category, id);
      const target = `${category}:${id}`;
      const converted = { ...entry, category };
      const previous = next[target];
      if (!previous) {
        next[target] = converted;
        continue;
      }
      const latest = (converted.lastAnsweredAt || "") > (previous.lastAnsweredAt || "")
        ? converted : previous;
      next[target] = {
        ...latest,
        attempts: previous.attempts + converted.attempts,
        correct: previous.correct + converted.correct,
        wrong: previous.wrong + converted.wrong,
      };
    }
    return next;
  }
  return value;
}
