import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCCJnuTEq_pO3HBJQVM_jNMdmL5PcVfmv4",
  authDomain: "c68-wily-library.firebaseapp.com",
  databaseURL: "https://c68-wily-library-default-rtdb.firebaseio.com",
  projectId: "c68-wily-library",
  storageBucket: "c68-wily-library.appspot.com",
  messagingSenderId: "651357368625",
  appId: "1:651357368625:web:73dbe3d559793f0d4d0010",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
