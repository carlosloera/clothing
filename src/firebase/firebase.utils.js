import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1HKZR_1PLU04m4EnsKTMhuCbOe8s1RQg",
    authDomain: "firstapp-5170c.firebaseapp.com",
    databaseURL: "https://firstapp-5170c.firebaseio.com",
    projectId: "firstapp-5170c",
    storageBucket: "firstapp-5170c.appspot.com",
    messagingSenderId: "242619721658",
    appId: "1:242619721658:web:37a9db8370288e777adf83"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});

export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;
