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