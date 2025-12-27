  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {app } from "./config.js"

  const auth = getAuth(app);

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

signupBtn.addEventListener("click", showSignup)
loginBtn.addEventListener("click", showLogin)


function showLogin() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginBtn').classList.add('bg-blue-600', 'text-white');
  document.getElementById('loginBtn').classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
  document.getElementById('signupBtn').classList.remove('bg-blue-600', 'text-white');
  document.getElementById('signupBtn').classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
}



function showSignup() {
  document.getElementById('signupForm').classList.remove('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupBtn').classList.add('bg-blue-600', 'text-white');
  document.getElementById('signupBtn').classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
  document.getElementById('loginBtn').classList.remove('bg-blue-600', 'text-white');
  document.getElementById('loginBtn').classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
}




// register user


const register= ()=>{
let signupEmail = document.getElementById("signupEmail").value
let signupPassword = document.getElementById("signupPassword").value
let signupName = document.getElementById("signupName").value
let signupConfirmPassword = document.getElementById("signupConfirmPassword").value

// if(signupPassword !== signupPassword){
//     alert("Password don't match")
//     return;
// }

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
    
//     console.log("user=>>", user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     console.log(error)
//   });



console.log("chal gaya")

}

const signFunc = document.getElementById("signFunc")
signFunc.addEventListener("onclick", register)

// let signupBtn = document.getElementById("signupBtn")





// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });




