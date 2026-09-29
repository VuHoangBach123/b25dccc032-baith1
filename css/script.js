const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = 'Dark Mode';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        navMenu.classList.remove('active');
    });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        formMsg.style.color = 'red';
        formMsg.textContent = 'Vui lòng điền đầy đủ thông tin';
    } else {
        formMsg.style.color = 'green';
        formMsg.textContent = 'Gửi thành công';
        form.reset();
    }
});