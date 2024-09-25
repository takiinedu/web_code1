// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqArgSZtXUsSZDzyB5gqo7a_trCbbJ--Q",
  authDomain: "tester-2ce5f.firebaseapp.com",
  databaseURL: "https://tester-2ce5f-default-rtdb.firebaseio.com",
  projectId: "tester-2ce5f",
  storageBucket: "tester-2ce5f.appspot.com",
  messagingSenderId: "890103482677",
  appId: "1:890103482677:web:06f6ded1ec11a8af97a47c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {


    event.preventDefault();


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    


})