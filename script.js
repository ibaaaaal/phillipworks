document.addEventListener('DOMContentLoaded', function() {

    // 1. Animasi fade-in untuk hero section (hanya sekali)
    const fadeInElement = document.querySelector('.fade-in');
    if (fadeInElement) {
        fadeInElement.classList.add('show');
    }

    // 2. Logika untuk header mengecil saat scroll
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

    // Logika untuk navigasi samping sudah dihapus

    // 3. Logika untuk animasi elemen yang muncul saat di-scroll (bisa berulang)
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
        rootMargin: '0px 0px -150px 0px' // Mencegah bug kedap-kedip
    });

    const animatedElements = document.querySelectorAll('.animated-item');
    animatedElements.forEach((el) => animatedItemObserver.observe(el));

});
