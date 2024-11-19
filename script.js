
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // Set custom parameters for the Google Sign-In (e.g., Web Client ID)
provider.setCustomParameters({
  client_id: "379044128232-n7mkkfk74h9s80liao00egdo7c6qsd96.apps.googleusercontent.com",
});
  document.getElementById("googleSignIn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // Get user info
            const user = result.user;

            // Logging user
            console.log("User signed in:", user.displayName, user.email);

            // Redirect or show a success message
            window.location.href = "landing.html"; // Replace with your home page
        })
        .catch((error) => {
            console.error("Error signing in:", error.message);
            alert("Google Sign-In failed. Please try again.");
        });
});
onAuthStateChanged(auth, (user) => {
  if (user) {
      console.log("User is signed in:", user.email);
      // Optionally display user info in the UI
  } else {
      // Redirect to login if not authenticated
      window.location.href = "auth.html"; // Replace with your auth page
  }
});