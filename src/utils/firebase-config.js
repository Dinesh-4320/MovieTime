
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiJawfeW2OHxQLzdDginhxiRMuUpajoKM",
  authDomain: "movietime-e846f.firebaseapp.com",
  projectId: "movietime-e846f",
  storageBucket: "movietime-e846f.appspot.com",
  messagingSenderId: "830951941104",
  appId: "1:830951941104:web:5aa6cffd8df983b0a77335",
  measurementId: "G-6HTM4DQ2GG"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);