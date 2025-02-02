// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for the hero section
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// 3D flip effect for game cards (already handled in CSS)
// No additional JS needed for the flip effect since it's purely CSS-based.

// Form submission handling (optional)
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        contactForm.reset();
    });
}




