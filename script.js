
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyByw5s7UdIOPBsvHayiqCgWoRuFFK-jfbs",
    authDomain: "insights-122fd.firebaseapp.com",
    databaseURL: "https://insights-122fd-default-rtdb.firebaseio.com",
    projectId: "insights-122fd",
    storageBucket: "insights-122fd.firebasestorage.app",
    messagingSenderId: "379044128232",
    appId: "1:379044128232:web:d3655958bddbe22856705d",
    measurementId: "G-EKS8RY0124"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  //get ref to db services
  const db=getDatabase(app);
  
