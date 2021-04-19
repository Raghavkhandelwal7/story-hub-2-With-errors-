import firebase from 'firebase'
require("@firebase/firestore")

//initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyCo8ieNR6vmfRA9OBew_q6zTLuewlVPuvk",
    authDomain: "story-hub2-86d70.firebaseapp.com",
    databaseURL: "https://story-hub2-86d70-default-rtdb.firebaseio.com",
    projectId: "story-hub2-86d70",
    storageBucket: "story-hub2-86d70.appspot.com",
    messagingSenderId: "680644215734",
    appId: "1:680644215734:web:69fbe3c99ba37f147ef717"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();