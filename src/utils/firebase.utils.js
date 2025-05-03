import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzdgKRS4Q19U_bl8vO6FKR_VyiYcDFlPo",
  authDomain: "spin-republic.firebaseapp.com",
  projectId: "spin-republic",
  storageBucket: "spin-republic.firebasestorage.app",
  messagingSenderId: "1018565275296",
  appId: "1:1018565275296:web:7aa78368a8db067c0823c5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
