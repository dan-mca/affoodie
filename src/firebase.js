import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmzMqq6CbmKO39KcPuCFd8_r_nSBZpyrg",
    authDomain: "affoodie-7ca37.firebaseapp.com",
    projectId: "affoodie-7ca37",
    storageBucket: "affoodie-7ca37.appspot.com",
    messagingSenderId: "768021371087",
    appId: "1:768021371087:web:a45bbc20777f7c6d04ffba",
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
    
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;