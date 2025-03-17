document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.style.color = "white");
            this.style.color = "gold";
        });
    });
});
