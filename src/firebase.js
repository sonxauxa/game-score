import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWdclz0yM3i0KyFjgFl6K_Y7kd2J_Ngg0",
  authDomain: "my-db-b1b29.firebaseapp.com",
  databaseURL: "https://my-db-b1b29-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-db-b1b29",
  storageBucket: "my-db-b1b29.appspot.com",
  messagingSenderId: "1079960537411",
  appId: "1:1079960537411:web:7ffe8dd7f302dcb33107f6",
  measurementId: "G-TYHLFJLC7W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
