 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBPHdORtpMNmnZD2PzvtJxMtkb1mCcYJdk",
    authDomain: "faizan-92b5b.firebaseapp.com",
    projectId: "faizan-92b5b",
    storageBucket: "faizan-92b5b.firebasestorage.app",
    messagingSenderId: "628685921881",
    appId: "1:628685921881:web:1140b5d7dd50326565db48",
    measurementId: "G-Y31WE5LNE5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
