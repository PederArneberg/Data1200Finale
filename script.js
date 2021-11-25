function navToggle() {
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    var navBar = document.querySelector('.navbar');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('navbar-expanded');
        navBar.classList.toggle('navbar-expanded')
        navToggle.classList.toggle('clicked');
    });
}

navToggle();