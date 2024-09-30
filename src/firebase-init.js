import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0O_w8v8o04_5ZyMAvmou7gf2gfdybwN0",
    authDomain: "whatsapp-clone-433b7.firebaseapp.com",
    projectId: "whatsapp-clone-433b7",
    storageBucket: "whatsapp-clone-433b7.appspot.com",
    messagingSenderId: "592064647604",
    appId: "1:592064647604:web:4df10dd5415a101a8e22e1"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };
