// Active link based on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.settings-section');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  function updateActiveLink() {
    let currentSection = sections[0].id;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < 150) {
        currentSection = section.id;
      }
    });

    sidebarLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
});

// Sidebar link click handler
document.querySelectorAll('.sidebar-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form input handlers
const nameInput = document.getElementById('name');
const bioInput = document.getElementById('bio');
const locationInput = document.getElementById('location');
const websiteInput = document.getElementById('website');

const saveButton = document.querySelector('.btn-primary');
if (saveButton) {
  saveButton.addEventListener('click', () => {
    const data = {
      name: nameInput.value,
      bio: bioInput.value,
      location: locationInput.value,
      website: websiteInput.value,
    };

    localStorage.setItem('profileData', JSON.stringify(data));

    // Show success message
    const originalText = saveButton.textContent;
    saveButton.textContent = '✓ Saved!';
    saveButton.style.backgroundColor = '#3fb950';

    setTimeout(() => {
      saveButton.textContent = originalText;
      saveButton.style.backgroundColor = '';
    }, 2000);
  });
}

// Load saved data
window.addEventListener('load', () => {
  const savedData = localStorage.getItem('profileData');
  if (savedData) {
    const data = JSON.parse(savedData);
    nameInput.value = data.name || '';
    bioInput.value = data.bio || '';
    locationInput.value = data.location || '';
    websiteInput.value = data.website || '';
  }
});

// Theme selector
const themeOptions = document.querySelectorAll('input[name="theme"]');
themeOptions.forEach((option) => {
  option.addEventListener('change', (e) => {
    const theme = e.target.value;
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.style.colorScheme = 'dark';
    } else if (theme === 'light') {
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.style.colorScheme = 'light dark';
    }
  });
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'auto';
const themeRadio = document.querySelector(`input[name="theme"][value="${savedTheme}"]`);
if (themeRadio) {
  themeRadio.checked = true;
}

// Cancel button
const cancelButton = document.querySelector('.btn-secondary');
if (cancelButton) {
  cancelButton.addEventListener('click', () => {
    // Reset form to last saved values
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      const data = JSON.parse(savedData);
      nameInput.value = data.name || '';
      bioInput.value = data.bio || '';
      locationInput.value = data.location || '';
      websiteInput.value = data.website || '';
    }
  });
}

// Toggle switches
const toggles = document.querySelectorAll('.toggle input');
toggles.forEach((toggle, index) => {
  const savedState = localStorage.getItem(`toggle-${index}`);
  if (savedState !== null) {
    toggle.checked = JSON.parse(savedState);
  }

  toggle.addEventListener('change', () => {
    localStorage.setItem(`toggle-${index}`, toggle.checked);
  });
});

// Delete button warning
const deleteButton = document.querySelector('.btn-danger');
if (deleteButton) {
  deleteButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete your portfolio? This action cannot be undone.')) {
      alert('Portfolio deletion is not actually implemented. This is a demo! 😄');
    }
  });
}

console.log('Settings page loaded successfully!');
