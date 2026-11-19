import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

// Firestore is the source of completed quizzes for a signed-in user.
// Unfinished quizzes and manual review marks remain browser-only.
export async function loadQuizHistory(userId: string) {
  const snapshot = await getDocs(
    query(collection(db, "quizResults"), where("userId", "==", userId)),
  );
  return snapshot.docs
    .map((document) => {
      const data = document.data();
      const created = data.createdAt?.toDate?.();
      return {
        id: data.sessionId || document.id,
        firestoreId: document.id,
        date: created ? created.toLocaleString() : data.date || "",
        createdAtMs: created?.getTime() || 0,
        category: data.category,
        mode: data.mode || "practice",
        difficulty: data.difficulty || "",
        topicFilter: data.topicFilter || "All topics",
        questionCount: data.questionCount || 0,
        score: data.score || 0,
        accuracy: data.accuracy || 0,
        wrongQuestionIds: Array.isArray(data.wrongQuestionIds)
          ? data.wrongQuestionIds
          : [],
        answers: Array.isArray(data.answers) ? data.answers : [],
      };
    })
    .sort((a, b) => b.createdAtMs - a.createdAtMs);
}

export function rebuildCompletedProgress(history: any[]) {
  const wrongByCategory: Record<string, string[]> = {};
  const seen = new Set<string>();
  const progress: Record<string, any> = {};
  // Apply answers in chronological order so later corrections clear mistakes.
  for (const session of [...history].reverse()) {
    if (!session.category) continue;
    const wrong = new Set(wrongByCategory[session.category] || []);
    const answers = session.answers || [];
    if (answers.length) {
      for (const answer of answers) {
        if (!answer?.questionId) continue;
        const id = answer.questionId;
        const key = `${session.category}:${id}`;
        const previous = progress[key];
        const correct = answer.correct === true;
        wrong.delete(id);
        if (!correct) wrong.add(id);
        seen.add(id);
        progress[key] = {
          id,
          category: session.category,
          topic: answer.topic || previous?.topic || "",
          attempts: (previous?.attempts || 0) + 1,
          correct: (previous?.correct || 0) + Number(correct),
          wrong: (previous?.wrong || 0) + Number(!correct),
          lastCorrect: correct,
          lastSelectedAnswer: answer.selectedAnswer || "",
          lastAnsweredAt: session.date,
          lastSessionId: session.id,
        };
      }
    } else {
      for (const id of session.wrongQuestionIds || []) {
        wrong.add(id);
        seen.add(id);
      }
    }
    wrongByCategory[session.category] = [...wrong];
  }
  return { wrongByCategory, seenIds: [...seen], progress };
}
