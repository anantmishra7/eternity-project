// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') links.classList.remove('open');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Resume button now links directly to the hosted PDF (see index.html #resumeBtn).
