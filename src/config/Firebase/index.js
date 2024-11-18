import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNWpqMn3GrAxLUKvFk0NqpSSAFYewEQKU",
  authDomain: "mycv-60e24.firebaseapp.com",
  projectId: "mycv-60e24",
  storageBucket: "mycv-60e24.firebasestorage.app",
  messagingSenderId: "595591688949",
  appId: "1:595591688949:web:b6af103fdbde3aa003cbbc",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
