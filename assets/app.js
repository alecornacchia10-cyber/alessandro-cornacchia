const email = window.SITE_CONFIG?.email?.trim();
if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  const link = document.getElementById('email-link');
  link.href = 'mailto:' + email;
  link.hidden = false;
  document.getElementById('contact-note').textContent = email;
}
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-category]').forEach(post => {
      post.hidden = button.dataset.filter !== 'all' && post.dataset.category !== button.dataset.filter;
    });
  });
});
