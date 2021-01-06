import firebase from 'firebase';

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-LsVDqDNS5Pq_SNs42jlgIsknBfh7Euc",
    authDomain: "bld-events.firebaseapp.com",
    projectId: "bld-events",
    storageBucket: "bld-events.appspot.com",
    messagingSenderId: "822081600516",
    appId: "1:822081600516:web:28a246920c40838908c951",
    measurementId: "G-JV7E034EKX"
  });
  
  export const db = firebaseApp.firestore();
