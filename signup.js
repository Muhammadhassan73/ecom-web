import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKUNTUc_J0o95u1meNUw_V7X4YlkJ0Yhk",
  authDomain: "fir-ecom-web.firebaseapp.com",
  projectId: "fir-ecom-web",
  storageBucket: "fir-ecom-web.appspot.com",
  messagingSenderId: "351160071913",
  appId: "1:351160071913:web:d85aad1a7776291c44e278",
  measurementId: "G-0HB22EZ2CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in');
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    console.log('User is signed out');
    // ...
  }
});

const email = document.getElementById('email');
const password = document.getElementById('password');
const signup_btn = document.getElementById('signup_btn');

signup_btn.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (email.value && password.value) {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up 
        console.log("Signed up");
        const user = userCredential.user;
        console.log("User =>", user);

        // Redirect to another page
        window.location.href = '/ecom-web/index.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error [${errorCode}]: ${errorMessage}`);
        
        // Display a user-friendly error message
        alert("Failed to sign up: " + errorMessage);
      });
  } else {
    alert("Please enter both email and password.");
  }
});
