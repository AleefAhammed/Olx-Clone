import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAGFgGZI8T9hHGuUIn80qT6ynKZFqtwj8E",
    authDomain: "olx-clone-8b477.firebaseapp.com",
    projectId: "olx-clone-8b477",
    storageBucket: "olx-clone-8b477.appspot.com",
    messagingSenderId: "121619958372",
    appId: "1:121619958372:web:976d36c017487d17316d71",
    measurementId: "G-7VMKJGR7Y8"
  };

  export default firebase.initializeApp(firebaseConfig)