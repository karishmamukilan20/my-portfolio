// ==========================
// DARK MODE
// ==========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = "☀️";
    } else {
        darkModeBtn.innerHTML = "🌙";
    }
});

// ==========================
// TYPING ANIMATION
// ==========================

const typingText = document.getElementById("typing-text");

const roles = [
    "Aspiring Web Developer",
    "Frontend Developer",
    "EEE Student",
    "Learning JavaScript",
    "Future Full Stack Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================
// CONTACT FORM
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Thank you! Your message has been received.");

    form.reset();

});


// ==========================
// FADE-IN ON SCROLL
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("🚀 Portfolio Loaded Successfully!");
