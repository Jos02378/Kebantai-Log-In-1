// let menuToggle = document.querySelector('.navigation-toggle');
// let rightTab = document.querySelector('.right-header-tab');
// let darkBackground = document.querySelector('.dark-background');

// darkBackground.addEventListener('click', () => {
//     darkBackground.classList.remove('active');
//     rightTab.classList.remove('active');
// });

// menuToggle.addEventListener('click', () => {
//     rightTab.classList.add('active');
//     darkBackground.classList.add('active');
// });

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

const verifyBtn = document.querySelector('.verify-resend');
const verifyAlert = document.querySelector('.verify-alert');

verifyBtn.addEventListener('click', () => {

    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
        // Email sent.
        console.log("Email verification already sent");

    }).catch(function (error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error: " + errorMessage);
    })

    verifyAlert.style.opacity = '1';
    setTimeout(() => {
        verifyAlert.style.opacity = '0';
    }, 5000)
    // const intervalId = setInterval(() => {
    //     verifyAlert.style.display = 'unset';
    // }, 3000);
})