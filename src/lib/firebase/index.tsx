import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCY4R1l6sz45ruEZdb6YrLaKWHWhJBrgpI",
    authDomain: "ao-spk.firebaseapp.com",
    databaseURL: "https://ao-spk.firebaseio.com",
    projectId: "ao-spk",
    storageBucket: "ao-spk.appspot.com",
    messagingSenderId: "540680750657",
    appId: "1:540680750657:web:c04ab1d45f5f7392d8e8c0",
    measurementId: "G-RC6JNSB47K"
  };
  // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
