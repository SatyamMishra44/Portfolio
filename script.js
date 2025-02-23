// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = "New Message from Portfolio Contact Form";
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = `mailto:satyammishra0323@gmail.com?subject=${subject}&body=${body}`;
});
// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonText(savedTheme);
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentTheme);
    updateButtonText(currentTheme);
});

// Update button text based on theme
function updateButtonText(theme) {
    themeToggleBtn.textContent = theme === 'dark-mode' ? '☀️' : '🌙';
}


document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    function showSlides() {
        let slides = document.querySelectorAll('.service-item');
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        index = (index + 1) % slides.length;
    }
    setInterval(showSlides, 3000); // Change slide every 3 seconds
});
