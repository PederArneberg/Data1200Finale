function navToggle() {
    var navToggle = document.querySelector('.nav-toggle');
    var navBar = document.querySelector('.navbar');
    
    navToggle.addEventListener('click', () => {
        navBar.classList.toggle('navbar-expanded')
    });
}

navToggle();