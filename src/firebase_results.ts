import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";

export async function saveQuizResult(result: {
  category: string;
  mode?: string;
  difficulty?: string;
  topicFilter?: string;
  questionCount?: number;
  score: number;
  accuracy?: number;
  wrongQuestionIds?: string[];
}) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User must be signed in to save quiz results.");
  }

  await addDoc(collection(db, "quizResults"), {
    ...result,
    userId: user.uid,
    userEmail: user.email,
    userName: user.displayName,
    createdAt: serverTimestamp(),
  });
}
