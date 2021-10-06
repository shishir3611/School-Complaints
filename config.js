import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDvi5AAqNXtDswJgQ7-sWYrfmZ7LGlK6bI",
  authDomain: "school-complaints.firebaseapp.com",
  projectId: "school-complaints",
  storageBucket: "school-complaints.appspot.com",
  messagingSenderId: "974838875872",
  appId: "1:974838875872:web:73083d01c20fd589587285"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

