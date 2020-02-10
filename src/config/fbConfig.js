import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAzihmUppCN2EMZbxQhjws83EF7NZwzAU4",
  authDomain: "project-plan-e9d25.firebaseapp.com",
  databaseURL: "https://project-plan-e9d25.firebaseio.com",
  projectId: "project-plan-e9d25",
  storageBucket: "project-plan-e9d25.appspot.com",
  messagingSenderId: "202296334818",
  appId: "1:202296334818:web:71726670ee8dd72bdf81bb",
  measurementId: "G-2CFRRW5WC3"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
