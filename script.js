document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const slideContainer = document.querySelector(".slides");
  let index = 0;

  function showSlide(i) {
    const slideWidth = slides[0].clientWidth; // Get actual slide width
    const offset = -i * slideWidth;
    slideContainer.style.transform = `translateX(${offset}px)`;

    // Update dot states
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[i]) dots[i].classList.add("active");
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);

  // Optional: Make sure first slide is visible on load
  showSlide(index);
});

function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Optional: Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("active");
  }

