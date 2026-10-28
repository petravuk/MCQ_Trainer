// Keep answer ordering and the answer key together when restoring a shuffled quiz.
export function validateDraft(value, banks, history) {
  if (!value || value.version !== 1 || !value.session) return null;
  const { session } = value;
  const bank = banks[session.category];
  if (
    !bank ||
    typeof session.id !== "string" ||
    history.some((entry) => entry.id === session.id)
  )
    return null;
  if (
    !["practice", "review"].includes(session.mode) ||
    typeof session.topicFilter !== "string" ||
    typeof session.difficulty !== "string"
  )
    return null;
  if (
    !Array.isArray(session.questions) ||
    !session.questions.length ||
    session.questions.length > 100
  )
    return null;
  const canonical = new Map(bank.map((q) => [q.id, q]));
  const ids = new Set();
  const questions = [];
  for (const saved of session.questions) {
    if (!saved || ids.has(saved.id)) return null;
    const original = canonical.get(saved.id);
    if (
      !original ||
      original.question !== saved.question ||
      !Array.isArray(saved.options)
    )
      return null;
    if (
      JSON.stringify([...original.options].sort()) !==
      JSON.stringify([...saved.options].sort())
    )
      return null;
    if (
      !Number.isInteger(saved.answer) ||
      saved.options[saved.answer] !== original.options[original.answer]
    )
      return null;
    ids.add(saved.id);
    questions.push({
      ...original,
      options: saved.options,
      answer: saved.answer,
    });
  }
  const selected = {};
  const submitted = {};
  for (const q of questions) {
    const answer = value.selected?.[q.id];
    if (answer !== undefined) {
      if (!Number.isInteger(answer) || answer < 0 || answer >= q.options.length)
        return null;
      selected[q.id] = answer;
    }
    if (value.submitted?.[q.id]) {
      if (answer === undefined) return null;
      submitted[q.id] = true;
    }
  }
  return {
    session: { ...session, questions },
    selected,
    submitted,
    currentIndex: Number.isInteger(value.currentIndex)
      ? Math.max(0, Math.min(value.currentIndex, questions.length - 1))
      : 0,
  };
}

export function recordQuestionAnswer(
  progress,
  session,
  question,
  selectedIndex,
) {
  const key = `${session.category}:${question.id}`;
  const previous = progress[key];
  // A restored checked answer must never be counted a second time.
  if (previous?.lastSessionId === session.id) return progress;
  const correct = selectedIndex === question.answer;
  return {
    ...progress,
    [key]: {
      id: question.id,
      category: session.category,
      topic: question.topic,
      attempts: (previous?.attempts || 0) + 1,
      correct: (previous?.correct || 0) + Number(correct),
      wrong: (previous?.wrong || 0) + Number(!correct),
      lastCorrect: correct,
      lastSelectedAnswer: question.options[selectedIndex],
      lastAnsweredAt: new Date().toISOString(),
      lastSessionId: session.id,
    },
  };
}

export function topicResults(progress, category = "all") {
  const groups = new Map();
  for (const entry of Object.values(progress)) {
    if (category !== "all" && entry.category !== category) continue;
    const key = `${entry.category}:${entry.topic}`;
    const group = groups.get(key) || {
      category: entry.category,
      topic: entry.topic,
      attempts: 0,
      correct: 0,
      wrong: 0,
      questions: 0,
    };
    group.attempts += entry.attempts;
    group.correct += entry.correct;
    group.wrong += entry.wrong;
    group.questions += 1;
    groups.set(key, group);
  }
  return [...groups.values()]
    .map((group) => ({
      ...group,
      accuracy: Math.round((group.correct / group.attempts) * 100),
    }))
    .sort((a, b) => a.accuracy - b.accuracy || a.topic.localeCompare(b.topic));
}
