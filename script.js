function toggleMobileNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

function goToPhone() {
  setCurrentPage('home');
  setTimeout(function () {
    document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function setCurrentPage(page) {
  document.getElementById('pageHome').style.display = page === 'home' ? 'block' : 'none';
  document.getElementById('pageServices').style.display = page === 'services' ? 'block' : 'none';
  document.getElementById('pageDoctors').style.display = page === 'doctors' ? 'block' : 'none';
  document.getElementById('reviewsSection').style.display = page === 'home' ? 'block' : 'none';
  document.getElementById('contactSection').style.display = page === 'home' ? 'block' : 'none';
  window.scrollTo(0, 0);
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

setCurrentPage('home');
