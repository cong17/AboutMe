import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBrApKBZBcrWt4ECKRi7t0JFYIYOFOZAoE",
    authDomain: "notesreactjs-6b8c4.firebaseapp.com",
    databaseURL: "https://notesreactjs-6b8c4.firebaseio.com",
    projectId: "notesreactjs-6b8c4",
    storageBucket: "notesreactjs-6b8c4.appspot.com",
    messagingSenderId: "549882508650",
    appId: "1:549882508650:web:6436a8db79446a1df82113",
    measurementId: "G-0GDPTMPEKP"
};

firebase.initializeApp(firebaseConfig);


export const data = firebase.database().ref("dataResume/");
