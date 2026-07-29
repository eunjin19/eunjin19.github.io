// Smooth scroll offset for fixed navbar
const NAVBAR_HEIGHT = 80;

// Typing Animation
function initTypingAnimation() {
  const texts = [
    '풀스택 개발자 | Node.js · React · MongoDB',
    '깨끗한 코드를 추구합니다',
    '사용자 경험을 우선합니다',
  ];

  const typingElement = document.querySelector('.typing-text');
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[currentIndex];

    if (!isDeleting && charIndex <= currentText.length) {
      typingElement.textContent = currentText.substring(0, charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else if (isDeleting && charIndex >= 0) {
      typingElement.textContent = currentText.substring(0, charIndex);
      charIndex--;
      setTimeout(type, 30);
    } else if (!isDeleting && charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      charIndex = 0;
      setTimeout(type, 500);
    }
  }

  type();
}

// Scroll Progress Bar
function updateScrollProgress() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  document.querySelector('.scroll-progress').style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// Navigation active state
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - NAVBAR_HEIGHT) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  initTypingAnimation();

  const animatedElements = document.querySelectorAll('.project-card, .skill-category, .contact-link');
  animatedElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Dark mode toggle (optional)
function initDarkModeToggle() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

document.addEventListener('DOMContentLoaded', initDarkModeToggle);

// Social links open in new tab
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.setAttribute('rel', 'noopener noreferrer');
});

console.log('Portfolio loaded successfully!');
