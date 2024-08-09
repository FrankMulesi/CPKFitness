// Toggle Menu

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Make Navbar Transparent on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust this value based on when you want the transparency to kick in
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Scrolling Text Animation
    const texts = document.querySelectorAll('.scrolling-text');
    let delay = 0;

    texts.forEach(text => {
        text.style.animationDelay = `${delay}s`;
        delay += 1.5;
    });

    
    // Trainers Section Animation
    const trainers = document.querySelectorAll('.trainer');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    });

    trainers.forEach(trainer => {
        observer.observe(trainer);
    });

    // Equipment Section
    const equipmentImages = document.querySelectorAll('.equipment-image');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeButton = document.getElementById('close-button');

    equipmentImages.forEach(image => {
        image.addEventListener('click', () => {
            fullscreenImage.src = image.src;
            fullscreenOverlay.classList.add('visible');
        });
    });

    closeButton.addEventListener('click', () => {
        fullscreenOverlay.classList.remove('visible');
    });

    fullscreenOverlay.addEventListener('click', (e) => {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.classList.remove('visible');
        }
    });
});

//FAQ
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.question').addEventListener('click', () => {
            // Toggle visibility of the answer
            const answer = item.querySelector('.answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

            // Optionally toggle the arrow direction
            const button = item.querySelector('.toggle-button');
            button.textContent = button.textContent === '▼' ? '▲' : '▼';
        });
    });
});

//Our Sessions
document.addEventListener('DOMContentLoaded', function () {
    const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
    const fadeInRightElements = document.querySelectorAll('.fade-in-right');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInLeftElements.forEach(element => {
        observer.observe(element);
    });

    fadeInRightElements.forEach(element => {
        observer.observe(element);
    });
});

//Gallery Section

