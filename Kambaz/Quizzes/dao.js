import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findQuizzesForCourse(courseName) {
  const { quizzes } = Database; 
  // Compare by the course name, because using the UUID is inconvenient. 
  return quizzes.filter((quiz) => quiz.course === courseName);
}

export function createQuiz(quiz) {
  const newQuiz = { ...quiz, _id: uuidv4() };
  Database.quizzes = [...Database.quizzes, newQuiz];
  return newQuiz;
}

export function deleteQuiz(quizId) {
  const { quizzes } = Database;
  Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
}
 
export function updateQuiz(quizId, quizUpdates) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  Object.assign(quiz, quizUpdates);
  return quiz;
}
