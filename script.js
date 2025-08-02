// public/script.js
document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
  } else {
    document.getElementById('successMessage').classList.remove('hidden');
  }
});
