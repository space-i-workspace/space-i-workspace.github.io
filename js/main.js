document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const menuIcon = document.getElementById('menuIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');

    const logoImg = document.getElementById('logoImg');
    function handleNavScroll() {
        if (window.scrollY > 80) {
            navbar.classList.add('nav-scrolled');
            if (logoImg) { logoImg.classList.remove('brightness-0', 'invert'); }
        } else {
            navbar.classList.remove('nav-scrolled');
            if (logoImg) { logoImg.classList.add('brightness-0', 'invert'); }
        }
    }

    const subNav = document.getElementById('subNav');
    const subNavLinks = document.querySelectorAll('.sub-nav-link');

    function showSubNav() {
        if (!subNav) return;
        if (window.scrollY > 400) {
            subNav.classList.add('show');
        } else {
            subNav.classList.remove('show');
        }
    }

    function highlightSubNav() {
        if (!subNav) return;
        const scrollPos = window.scrollY + 160;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                subNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleNavScroll();
        showSubNav();
        highlightSubNav();
    });

    menuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.innerHTML = '&#10005;';
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = '&#9776;';
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = '&#9776;';
        });
    });

    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = '&#9776;';
        });
    });

    // FAQ 아코디언
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                openItem.classList.remove('open');
                openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                item.classList.add('open');
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 스크롤 리빌 애니메이션
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    handleNavScroll();
});
