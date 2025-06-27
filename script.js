document.addEventListener('DOMContentLoaded', function() {

    // 1. Animasi fade-in untuk hero section
    const fadeInElement = document.querySelector('.fade-in');
    if (fadeInElement) {
        fadeInElement.classList.add('show');
    }

    // 2. Logika untuk header mengecil saat scroll
    const mainHeader = document.querySelector('header');
    if (mainHeader) {
        const shrinkPoint = 50;
        window.addEventListener('scroll', function() {
            if (window.scrollY > shrinkPoint) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
    }

    // 3. Logika untuk animasi elemen yang muncul saat di-scroll
    const animatedItemObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -150px 0px'
    });

    const animatedElements = document.querySelectorAll('.animated-item');
    animatedElements.forEach((el) => animatedItemObserver.observe(el));

    // 4. Logika untuk Popup Menu Mobile
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu-popup');
    const closeIcon = document.getElementById('close-icon');
    const body = document.querySelector('body');

    if (hamburgerIcon && mobileMenu && closeIcon && body) {
        // Saat ikon hamburger di-klik
        hamburgerIcon.addEventListener('click', function() {
            mobileMenu.classList.add('open');
            body.classList.add('body-no-scroll');
        });

        // Saat ikon close (X) di-klik
        closeIcon.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            body.classList.remove('body-no-scroll');
        });
    }

});
