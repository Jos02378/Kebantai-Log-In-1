let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');

darkBackground.addEventListener('click', () => {
    darkBackground.classList.remove('active');
    rightTab.classList.remove('active');
});

menuToggle.addEventListener('click', () => {
    rightTab.classList.add('active');
    darkBackground.classList.add('active');
});

const rememberPasswordTrigger = document.querySelector('.forgot-password');
const modalPassword = document.querySelector('.modal-password');

rememberPasswordTrigger.addEventListener('click', () => {
    modalPassword.style.display = "unset";
})

let modalCheck = document.querySelector('.modal-check');
let modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', () => {
    modalCheck.style.display = "none";
});

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
            passwordToggle[i].style['background-size'] = 'contain';
            passwordToggle[i].style.width = '20px';
            passwordToggle[i].style.height = '20px';

        } else {
            formPassword[i].type = 'password';
            passwordToggle[i].style.background = 'url(./images/password-unhide.svg)';
            passwordToggle[i].style['background-size'] = 'contain';
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
let email_signin = document.querySelector("#email_in");
let password_signin = document.querySelector("#password-in");

let signupButton = document.querySelector(".sign-up-button");
let username_signup = document.querySelector("#username-up");
let email_signup = document.querySelector("#email-up");
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
let errorClose = document.querySelectorAll('.error-circle');
let errorBox = document.querySelector('.error');

errorClose.forEach((errorCloseBtn) => {
    errorCloseBtn.addEventListener('click', () => {
        errorBox.style.display = "none";
    })
})

let modalErrorClose = document.querySelector('.modal-error-circle');
let modalErrorBox = document.querySelector('.modal-error');

modalErrorClose.addEventListener('click', () => {
    modalErrorBox.style.display = "none";
})

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

// CHECK WHITESPACE
function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
}

function show_error(errorMessage) {
    error_text.innerHTML = errorMessage;
    error.style.display = "block";
    errorBox.style.display = "flex";
}

// SIGNUP BUTTON
signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    let duplicate = false;

    let check_whitespace_username = hasWhiteSpace(username_signup.value);
    let check_whitespace_password = hasWhiteSpace(password_signup.value);
    let email_validation = validate(email_signup.value);

    db.collection('account').where("username", "==", username_signup.value.toLowerCase()).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            if (doc.exists) {
                duplicate = true;
            }
        })

        if (username_signup.value == "") {
            error_text.innerHTML = "Please specify your username.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (duplicate) {
            error_text.innerHTML = "The username has been taken.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (username_signup.value.length < 6) {
            error_text.innerHTML = "Your username must at least be 6 characters.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (check_whitespace_username) {
            error_text.innerHTML = "Your username must not contain any space.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (email_signup.value == "") {
            error_text.innerHTML = "Please specify your email.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (email_validation == false) {
            error_text.innerHTML = "Please enter a valid email.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (password_signup.value.length == 0) {
            error_text.innerHTML = "Please fill in the password.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (check_whitespace_password) {
            error_text.innerHTML = "Your password must not contain any space.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (password_signup.value.length < 6) {
            error_text.innerHTML = "Your password must at least be 6 characters.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (sex_value == "") {
            error_text.innerHTML = "Please specify your gender.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (age_signup.value.length == 0) {
            error_text.innerHTML = "Please specify your age.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else if (age_signup.value < 8) {
            error_text.innerHTML = "Sorry, you must be at least 8 years old to register on our site.";
            error.style.display = "block";
            errorBox.style.display = "flex";
        } else {
            //Sign up the user

            let email_signup_trimmed = email_signup.value.trim();
            auth.createUserWithEmailAndPassword(email_signup_trimmed, password_signup.value).then(function () {

                //SEND VERIFICATION EMAIL
                var user = firebase.auth().currentUser;

                // Add data to firestore
                db.collection('account').add({
                    username: username_signup.value.toLowerCase(),
                    sex: sex_value,
                    age: age_signup.value,
                    matches_created_join: [],
                }).then(function () {
                    // RESET ALL INPUT VALUES
                    username_signup.value = "";
                    email_signup.value = "";
                    password_signup.value = "";
                    sex_value = "";
                    sex_options.forEach(option => {
                        option.querySelector("input").checked = false;
                    })
                    age_signup.value = "";
                    errorBox.style.display = "none";

                    window.location.href = "index.html";
                })

                user.sendEmailVerification().then(function () {
                    // Email sent.
                    console.log("Email verification already sent");

                }).catch(function (error) {
                    // An error happened.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log("Error: " + errorMessage);
                })

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                show_error(errorMessage);
                // window.alert("Error: " + errorMessage);
            });
        }
    })
})

// SIGNIN BUTTON
signinButton.addEventListener("click", (e) => {
    e.preventDefault();

    let email_validation = validate(email_signin.value);
    let check_whitespace_password = hasWhiteSpace(password_signin.value);

    if (email_signin.value == "") {
        error_text.innerHTML = "Please enter your email.";
        error.style.display = "block";
        errorBox.style.display = "flex";
    } else if (email_validation == false) {
        error_text.innerHTML = "Please enter a valid email.";
        error.style.display = "block";
        errorBox.style.display = "flex";
    } else if (password_signin.value == "") {
        error_text.innerHTML = "Please specify your password.";
        error.style.display = "block";
        errorBox.style.display = "flex";
    } else if (check_whitespace_password) {
        error_text.innerHTML = "Please enter a valid password.";
        error.style.display = "block";
        errorBox.style.display = "flex";
    } else {
        // LOG IN THE USER
        let email_signin_trimmed = email_signin.value.trim();

        firebase.auth().signInWithEmailAndPassword(email_signin_trimmed, password_signin.value).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error: " + errorMessage);
        });

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // window.location.replace("main.html");
                var user_email_id = user.email;
                var user_email_verified = user.emailVerified;
                console.log(user_email_id, user_email_verified);

            } else {
                // No user is signed in.
            }
        });

        // RESET THE INPUT VALUES
        email_signin.value = "";
        password_signin.value = "";
        errorBox.style.display = "none";
    }
})

// FORGOT PASSWORD
let form_password_reset = document.querySelector('#email-reset');
let input_password_reset = form_password_reset.querySelector("input");

let noPassword = document.querySelector('.no-password');

noPassword.addEventListener('click', () => {
    modalPassword.style.display = "none";
    errorBox.style.display = "none";
    input_password_reset.value = "";
})

let reset_password = document.querySelector(".yes-password");
reset_password.addEventListener("click", () => {

    let email_validation = validate(input_password_reset.value);

    if (input_password_reset.value == "") {
        error_text.innerHTML = "Please specify your email.";
        error.style.display = "block";
        errorBox.style.display = "flex";
    } else if (email_validation == false) {
        error_text.innerHTML = "Please enter a valid email.";
        error.style.display = "block";
        errorBox.style.display = "flex";
    } else {
        // KIRIM RESET PASSWORD EMAIL
        auth.sendPasswordResetEmail(input_password_reset.value).then(function () {
            // Email sent.
            console.log("RESET-PASSWORD EMAIL SENT");
        }).catch(function (error) {
            // An error happened.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error: " + errorMessage);
        });

        modalPassword.style.display = "none";
        modalCheck.style.display = "unset";
        input_password_reset.value = "";
        errorBox.style.display = "none";
        console.log(input_password_reset.value);
    }
})

// let resend_verification = document.querySelector(".resend_verification");
// resend_verification.addEventListener("click", () => {

//     var user = firebase.auth().currentUser;
//     user.sendEmailVerification().then(function () {
//         // Email sent.
//         console.log("Email verification already sent");

//     }).catch(function (error) {
//         // An error happened.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log("Error: " + errorMessage);
//     })
// })




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