import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_YDJmNcMYv8n4TL_yQcGTgMbeybbfinM",
  authDomain: "digimakers-project.firebaseapp.com",
  projectId: "digimakers-project",
  storageBucket: "digimakers-project.appspot.com",
  messagingSenderId: "671609863535",
  appId: "1:671609863535:web:2e0311625c0d7bcc6c3c9a"
});
var database = firebaseApp.firestore();
export {database}
