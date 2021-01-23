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
});

signinTrigger.addEventListener('click', () => {
    page.classList.remove('page-alter');
    page.style.animation = "backgroundChanger2 1s ease-in-out forwards";
    error.style.display = "none";
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
let signupButton = document.querySelector(".sign-up-button");

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


