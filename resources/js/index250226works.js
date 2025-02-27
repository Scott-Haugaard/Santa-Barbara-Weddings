
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

    if (linkPath.includes(currentPath)) {
      item.classList.add('active');
      link.classList.add('active');
    } else {
      item.classList.remove('active');
      link.classList.remove('active');
    }
  });
}

