function navToggle() {
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        navToggle.classList.toggle('clicked');
    });
}

navToggle();