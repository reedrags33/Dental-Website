function toggleMobileNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

function closeMobileNav() {
  document.querySelector('.nav-links')?.classList.remove('open');
}

function submitContactForm(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactFormStatus');
  const data = new FormData(form);
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      form.reset();
      status.style.display = 'block';
      status.style.color = 'var(--color-accent)';
      status.textContent = "Thanks — we've received your request and will be in touch soon.";
    })
    .catch(() => {
      status.style.display = 'block';
      status.style.color = '#b3261e';
      status.textContent = 'Something went wrong sending this. Please call us at (972) 304-0968 or email info@ragsdalefamilydentistry.com instead.';
    });
  return false;
}
