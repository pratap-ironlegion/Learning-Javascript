const images = document.querySelectorAll('.lazy-image');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const img = entry.target;

      // Set src when image enters viewport
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }

      img.classList.add('visible');
      observer.unobserve(img);
    });
  },
  {
    root: null,           // viewport
    rootMargin: '200px',  // preload before visible
    threshold: 0
  }
);

images.forEach(img => observer.observe(img));
