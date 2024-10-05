document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("ham");
    const navLinks = document.querySelector(".nav-sub");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("open");
    });
});
