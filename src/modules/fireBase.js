import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCV-6DDlrgpZ8JWBkKtNyqk3P6WNOY2sl4",
  authDomain: "todo-ninja-f28b1.firebaseapp.com",
  databaseURL: "https://todo-ninja-f28b1.firebaseio.com",
  projectId: "todo-ninja-f28b1",
  storageBucket: "todo-ninja-f28b1.appspot.com",
  messagingSenderId: "999822704905",
  appId: "1:999822704905:web:d2e041c4746c3d07e193d8",
  measurementId: "G-07PMH5YCZZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()
const dbfb = firebase.firestore();

dbfb.settings({ timestampsInSnapshots: true });

export default dbfb;