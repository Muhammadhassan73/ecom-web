// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {  getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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

const email = document.getElementById('email')
const password = document.getElementById('password')
const signin_btn = document.getElementById('signin_btn')


onAuthStateChanged(auth, (user) => {
  if (user) {
   console.log('user is signed up');
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    console.log('user is not signed up');
  }
});

signin_btn.addEventListener('click',(e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
  console.log("user=>",user);
  location.pathname = "/index.html"
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
})
})


