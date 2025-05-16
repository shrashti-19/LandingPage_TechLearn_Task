// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  

const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter',()=>{
    ctaButton.style.transform = 'scale(1.1)';
});
ctaButton.addEventListener('mouseLeave',()=>{
    ctaButton.style.transform = 'scale(1)';
});

const topBtn = document.getElementById("backToTop");

window.onscroll = () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
const toggle = document.getElementById("themeToggle");
toggle.onclick=()=>{
    document.body.classList.toggle("dark-mode");
};