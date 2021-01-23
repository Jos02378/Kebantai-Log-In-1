var firebaseConfig = {
    apiKey: "AIzaSyCVQiH2DSjYOiRrsmgaSRTObEWkGpHm1sA",
    authDomain: "kebantai2020.firebaseapp.com",
    databaseURL: "https://kebantai2020-default-rtdb.firebaseio.com",
    projectId: "kebantai2020",
    storageBucket: "kebantai2020.appspot.com",
    messagingSenderId: "290266641346",
    appId: "1:290266641346:web:85b99043fe87f7795a1c5b",
    measurementId: "G-M3H7QJBJGQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Initialize Firestore
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

//Initialize Authentication
const auth = firebase.auth();

// PASSWORD INPUT HANDLING
let passwordToggle = document.querySelectorAll('.password-toggle');
let formPassword = document.querySelectorAll('.input-password')

for (let i = 0; i < passwordToggle.length; i++) {
    passwordToggle[i].addEventListener('click', () => {
        if (formPassword[i].type === 'password') {
            formPassword[i].type = 'text';
            passwordToggle[i].style.background = 'url(./images/password-unhide-active.svg)';
            passwordToggle[i].style['background-size'] = 'cover';
            passwordToggle[i].style.width = '20px';
            passwordToggle[i].style.height = '20px';

        } else {
            formPassword[i].type = 'password';
            passwordToggle[i].style.background = 'url(./images/password-unhide.svg)';
            passwordToggle[i].style['background-size'] = 'cover';
            passwordToggle[i].style.width = '20px';
            passwordToggle[i].style.height = '20px';
        }
    })
}

// PAGE TOGGLE HANDLING
let signupTrigger = document.querySelector('.sign-up-trigger');
let signinTrigger = document.querySelector('.sign-in-trigger');
let page = document.querySelector('.page-base');
let contentBG = document.querySelector('.form-content');

signupTrigger.addEventListener('click', () => {
    page.classList.add('page-alter');
    page.style.animation = "backgroundChanger1 1s ease-in-out forwards";
    error.style.display = "none";
    username_signup.value = "";
    email_signup.value = "";
    password_signup.value = "";
    sex_value = "";
    sex_options.forEach(option => {
        option.querySelector("input").checked = false;
    })
    age_signup.value = "";
});

signinTrigger.addEventListener('click', () => {
    page.classList.remove('page-alter');
    page.style.animation = "backgroundChanger2 1s ease-in-out forwards";
    error.style.display = "none";
    email_signin.value = "";
    password_signin.value = "";
});

// MENU TOGGLE
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// AGE INPUT HANDLING
const age = document.getElementById("age");

age.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
}

// ERROR HANDLING
let signinButton = document.querySelector(".sign-in-button");
let email_signin = document.querySelector("#email_signin");
let password_signin = document.querySelector("#password-in");

let signupButton = document.querySelector(".sign-up-button");
let username_signup = document.querySelector("#username-up");
let email_signup = document.querySelector("#email");
let password_signup = document.querySelector("#password-up");
let age_signup = document.querySelector("#age");

let sex_options_box = document.getElementById("sex_options");
let sex_options = sex_options_box.querySelectorAll(".sex-radio");
let sex_value = "";
sex_options.forEach(option => {
    option.addEventListener('click', () => {
        sex_value = option.querySelector("input").value;
    })
})

let error = document.querySelector(".error");
let error_text = document.querySelector(".error-text");
let errorClose = document.querySelector('.error-circle');
let errorBox = document.querySelector('.error');

errorClose.addEventListener('click', () => {
    errorBox.style.transform = "scale(0.01)";
    errorBox.style.opacity = "0";
    if (errorBox.style.opacity === "0") {
        errorBox.style.display = "none";
    }
});

// VALIDATE EMAIL
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate(email) {
    if (validateEmail(email)) {
        return true;
    } else {
        return false;
    }
}

// SIGNUP BUTTON

signupButton.addEventListener("click", (e) => {
    e.preventDefault();

    let email_validation = validate(email_signup.value);

    if (username_signup.value == "") {
        error_text.innerHTML = "Please specify your username.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (username_signup.value.length < 6) {
        error_text.innerHTML = "Your username must at least be 6 characters.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (email_signup.value == "") {
        error_text.innerHTML = "Please specify your email.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (email_validation == false) {
        error_text.innerHTML = "Please enter a valid email.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (password_signup.value.length == 0) {
        error_text.innerHTML = "Please fill in the password";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (password_signup.value.length < 6) {
        error_text.innerHTML = "Your password must at least be 6 characters.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (sex_value == "") {
        error_text.innerHTML = "Please specify your sex.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (age_signup.value.length == 0) {
        error_text.innerHTML = "Please specify your age.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (age_signup.value < 8) {
        error_text.innerHTML = "Sorry, you must be at least 8 years old to register on our site";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else {
        //Sign up the user
        auth.createUserWithEmailAndPassword(email_signup.value, password_signup.value).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error: " + errorMessage);
        });

        // Add data to firestore
        db.collection('account').add({
            username: username_signup.value,
            sex: sex_value,
            age: age_signup.value,
            matches_created_join: [],
        })

        // RESET ALL INPUT VALUES
        username_signup.value = "";
        email_signup.value = "";
        password_signup.value = "";
        sex_value = "";
        sex_options.forEach(option => {
            option.querySelector("input").checked = false;
        })
        age_signup.value = "";
        errorBox.style.transform = "scale(0.01)";
        errorBox.style.opacity = "0";
        if (errorBox.style.opacity === "0") {
            errorBox.style.display = "none";
        }
    }
})

// SIGNIN BUTTON
signinButton.addEventListener("click", (e) => {
    e.preventDefault();

    let email_validation = validate(email_signin.value);

    if (email_signin.value == "") {
        error_text.innerHTML = "Please specify your username.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (email_validation == false) {
        error_text.innerHTML = "Please enter a valid email.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else if (password_signin.value == "") {
        error_text.innerHTML = "Please specify your password.";
        error.style.display = "block";
        error.style.opacity = "1";
        errorBox.style.transform = "scale(1)";
    } else {
        // LOG IN THE USER
        firebase.auth().signInWithEmailAndPassword(email_signin.value, password_signin.value).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error: " + errorMessage);
        });

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // window.location.replace("main.html");
                console.log("You Are loged in")

            } else {
                // No user is signed in.
            }
        });

        // RESET THE INPUT VALUES
        email_signin.value = "";
        password_signin.value = "";
        errorBox.style.transform = "scale(0.01)";
        errorBox.style.opacity = "0";
        if (errorBox.style.opacity === "0") {
            errorBox.style.display = "none";
        }
    }
})


/* 
// FIREBASE
*/

// Function login

// const loginForm = document.querySelector(".sign-in-form");
// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Get user info
//     var userEmail = document.getElementById("email_field").value;
//     var userpass = document.getElementById("password_field").value;

//     firebase.auth().signInWithEmailAndPassword(userEmail, userpass).catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         window.alert("Error: " + errorMessage);
//     });

// })

//LOGOUT FUNCTION
// function logout() {
//     firebase.auth().signOut().then(function () {
//         // Sign-out successful. 
//         window.location.replace("index.html");
//     }).catch(function (error) {
//         // An error happened.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         window.alert("Error: " + errorMessage);
//     });
// }