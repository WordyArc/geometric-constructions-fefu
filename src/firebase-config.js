import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDGyf2gqRWTQoEJDxVZdCY4N1lOCwXg374",
    authDomain: "geometric-constructions.firebaseapp.com",
    projectId: "geometric-constructions",
    storageBucket: "geometric-constructions.appspot.com",
    messagingSenderId: "276184182769",
    appId: "1:276184182769:web:68172fccd62e1ecc3e9e50"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);