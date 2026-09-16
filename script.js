document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.12 });

  pages.forEach(p => io.observe(p));
});
