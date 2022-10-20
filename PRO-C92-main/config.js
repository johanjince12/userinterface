import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDjO2fq1a2CQ7VzBWDWQHMXxokmt0a_KV0",
  authDomain: "ef-app-24b1c.firebaseapp.com",
  projectId: "ef-app-24b1c",
  storageBucket: "ef-app-24b1c.appspot.com",
  messagingSenderId: "1010809480570",
  appId: "1:1010809480570:web:4cd9a3f0a7f948314f62c3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
