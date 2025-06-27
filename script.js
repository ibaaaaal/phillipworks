document.addEventListener('DOMContentLoaded', function() {

    // 1. Animasi fade-in untuk hero section
    const fadeInElement = document.querySelector('.fade-in');
    if (fadeInElement) {
        fadeInElement.classList.add('show');
    }

    // 2. Logika untuk navigasi samping yang muncul saat scroll
    const sideNavHeader = document.querySelector('header'); // Diberi nama beda agar tidak bingung
    const sideNav = document.getElementById('side-nav');
    if (sideNavHeader && sideNav) {
        const triggerPoint = sideNavHeader.offsetHeight;
        window.addEventListener('scroll', function() {
            if (window.scrollY > triggerPoint) {
                sideNav.classList.add('visible');
            } else {
                sideNav.classList.remove('visible');
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
    
    // 4. LOGIKA UNTUK HEADER MENGCIL SAAT SCROLL
    const mainHeader = document.querySelector('header');
    if(mainHeader) {
        const shrinkPoint = 50; 
        window.addEventListener('scroll', function() {
            if (window.scrollY > shrinkPoint) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
    }

});