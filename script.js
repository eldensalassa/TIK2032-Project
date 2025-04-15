// script.js

// Contoh smooth scrolling untuk anchor link internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Contoh validasi sederhana pada form contact
  document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validasi sederhana
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert("Semua field harus diisi!");
      return;
    }
    alert("Pesan telah dikirim. Terima kasih!");
    // Reset form jika diperlukan
    this.reset();
  });
  