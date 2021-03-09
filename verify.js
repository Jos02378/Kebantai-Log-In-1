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

const verifyBtn = document.querySelector('.verify-resend');
const verifyAlert = document.querySelector('.verify-alert');

verifyBtn.addEventListener('click', () => {
    verifyAlert.style.opacity = '1';
    setTimeout(() => {
        verifyAlert.style.opacity = '0';
    }, 5000)
    // const intervalId = setInterval(() => {
    //     verifyAlert.style.display = 'unset';
    // }, 3000);
})