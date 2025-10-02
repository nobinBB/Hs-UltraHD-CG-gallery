const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const particlesContainer = document.getElementById('particles');

for (let i = 0; i < 30; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 4 + 2;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
  particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
  particle.style.animationDelay = Math.random() * 20 + 's';
  particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
  particlesContainer.appendChild(particle);
}

galleryItems.forEach((item, index) => {
  item.style.animationDelay = (index * 0.05) + 's';
  
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    item.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
  
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    modalImage.src = imgSrc;
    modal.classList.add('active');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});
