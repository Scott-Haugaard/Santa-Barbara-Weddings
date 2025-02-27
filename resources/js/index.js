
// Fetch Header
const navbarUrl = `${window.location.origin}/navbar.html`;

fetch(navbarUrl)
  .then(response => response.text())
  .then(navbarHtml => {
    document.getElementById('navbar-container').innerHTML = navbarHtml;
    setActiveNavItem(); // Call setActiveNavItem here
  })
  .catch(error => {
    console.error('Error loading navbar:', error);
  });

function setActiveNavItem() {
  const navItems = document.querySelectorAll('.navbar-nav .nav-item');
  const currentPath = window.location.pathname;

  navItems.forEach(item => {
    const link = item.querySelector('a');
    const linkPath = new URL(link.href).pathname;

    if (linkPath === '/' || linkPath === '/index.html' || linkPath === '/about.html' || linkPath === '/contact.html') {
      if (linkPath === currentPath) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }

    if (item.textContent === 'Vendors' && !(currentPath === '/' || currentPath === '/index.html' || currentPath === '/about.html' || currentPath === '/contact.html')) {
      item.classList.add('active');
    }
  });
}

// Fetch Footer
const footerUrl = `${window.location.origin}/footer.html`;

fetch(footerUrl)
  .then(response => response.text())
  .then(footerHtml => {
	document.getElementById('footer-container').innerHTML = footerHtml;
  })
  .catch(error => {
	console.error('Error loading footer:', error);
  });

// Modal Login
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password-field');
    const icon = document.querySelector('.modal-password-toggle i');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}
