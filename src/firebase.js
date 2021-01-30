import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJMgFNRN0MTuN9HmGrLkX1tuaU0TjbNnU",
    authDomain: "tik-tok-clone-5e16b.firebaseapp.com",
    projectId: "tik-tok-clone-5e16b",
    storageBucket: "tik-tok-clone-5e16b.appspot.com",
    messagingSenderId: "1089887765561",
    appId: "1:1089887765561:web:4b30ef8389fa00bb7379e8",
    measurementId: "G-NHJQPNC0J2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db