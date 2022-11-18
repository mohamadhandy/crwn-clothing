// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxDQpjcAfIa71MO0ODKS1kfBb66S2-V2c",
  authDomain: "crwn-clothing-db-761ab.firebaseapp.com",
  projectId: "crwn-clothing-db-761ab",
  storageBucket: "crwn-clothing-db-761ab.appspot.com",
  messagingSenderId: "358572202202",
  appId: "1:358572202202:web:50ed52edf63af2038cade3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
