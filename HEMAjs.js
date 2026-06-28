
let lastScrollTop = 0;
const navbar = document.querySelector('.top');
const slider = document.getElementById("teamSlider");

document.querySelector(".next").addEventListener("click", () => {
    slider.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

document.querySelector(".prev").addEventListener("click", () => {
    slider.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

function toggleMenu() {

    var menu = document.getElementById("navMenu");

    menu.classList.toggle("show");

}

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = '-70px'; // Adjust height as needed
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
