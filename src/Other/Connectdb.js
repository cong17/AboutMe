import * as firebase from 'firebase';
const firebaseConfig = {
    
};

firebase.initializeApp(firebaseConfig);


export const data = firebase.database().ref("dataResume/");
