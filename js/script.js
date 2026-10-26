// Jaartal in de footer automatisch bijwerken
const jaarElement = document.getElementById('jaar');
if (jaarElement) {
  jaarElement.textContent = new Date().getFullYear();
}

// Vlot naar beneden scrollen bij een klik op een navigatielink (extra zekerheid)
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const doel = document.querySelector(link.getAttribute('href'));
    if (doel) {
      event.preventDefault();
      doel.scrollIntoView({ behavior: 'smooth' });
    }
  });
});