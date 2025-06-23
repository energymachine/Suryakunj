// Placeholder for interactive JS
// You can later add dot indicator syncing or dynamic content

document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dot');
  let index = 0;
  setInterval(() => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    index = (index + 1) % dots.length;
  }, 3000);
});
