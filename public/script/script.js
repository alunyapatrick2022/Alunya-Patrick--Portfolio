document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
z
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

var button = document.getElementById("myBtn");
button.onclick = function () {
    window.location.href = "./pages/contact_us.html";
}
    