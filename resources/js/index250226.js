
// Navbar Active
document.addEventListener('DOMContentLoaded', function() {
    // Function to set the active class based on the current URL
    function setActiveNavItem() {
        console.log('Setting active nav item...');
        const navItems = document.querySelectorAll('.navbar-nav .nav-item');
        const currentPath = window.location.pathname;
        console.log(`Current path: ${currentPath}`);
  
        navItems.forEach(item => {
            const link = item.querySelector('a');
            const linkPath = new URL(link.href).pathname;
            console.log(`Checking link: ${linkPath}`);
  
            if (linkPath === currentPath) {
                console.log(`Active link: ${linkPath}`);
                item.classList.add('active');
                link.classList.add('active');  // Add active class to the link as well
            } else {
                item.classList.remove('active');
                link.classList.remove('active');  // Remove active class from the link
            }
        });
    }
    
    });

// Fetch Header
const navbarUrl = `${window.location.origin}/navbar.html`;

fetch(navbarUrl)
  .then(response => response.text())
  .then(navbarHtml => {
	document.getElementById('navbar-container').innerHTML = navbarHtml;
  })
  .catch(error => {
	console.error('Error loading navbar:', error);
  });
  
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
