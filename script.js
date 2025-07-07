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

async function sendOTP() {
  const phone = document.querySelector('input[name="phone"]').value;
  const res = await fetch('/api/send-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone })
  });
  const data = await res.json();
  if (data.success) {
    alert('OTP sent successfully');
  } else {
    alert('Failed to send OTP: ' + data.message);
  }
}

async function registerUser() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const otp = document.querySelector('input[name="otp"]').value;
  
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, otp })
  });
  const data = await res.json();
  if (data.success) {
    alert('Registered successfully');
  } else {
    alert('Registration failed: ' + data.message);
  }
}

