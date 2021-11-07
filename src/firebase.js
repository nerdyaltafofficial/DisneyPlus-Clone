import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaHtVfgw-Tg080AUu526m_vox30vEC-SA",
  authDomain: "disneyplus-clone-8e313.firebaseapp.com",
  projectId: "disneyplus-clone-8e313",
  storageBucket: "disneyplus-clone-8e313.appspot.com",
  messagingSenderId: "562995850727",
  appId: "1:562995850727:web:1a7491462bbd7ad8602142",
  measurementId: "G-RNC50N02HD",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, provider, storage };

export default db;
