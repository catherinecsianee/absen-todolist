import firebase from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";

// Konfigurasi Firebase (ganti dengan informasi proyek Anda)
const firebaseConfig = {
    apiKey: "AIzaSyCYIrsB5WEX4BXIsbaW47pG9o734JIuncA",
    authDomain: "to-do-list-new-aaa78.firebaseapp.com",
    projectId: "to-do-list-new-aaa78",
    storageBucket: "to-do-list-new-aaa78.firebasestorage.app",
    messagingSenderId: "62096617324",
    appId: "1:62096617324:web:e9b8ccbe4706c4eb0ccd49",
    measurementId: "G-X2MZRYVSB8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);