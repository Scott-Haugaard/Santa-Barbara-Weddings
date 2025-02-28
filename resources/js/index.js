// Header
document.getElementById("navbar-container").innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light"> 
    <a class="navbar-brand" href="index.html">&#8195;Santa Barbar<span class="w">a</span> Weddings</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="vendors.html">Vendors</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Explore</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="vendors.html">Vendors</a></li>
            <li><a class="dropdown-item" href="venue.html">Venues</a></li>
            <li><a class="dropdown-item" href="enter.html">Entertainment</a></li>
            <li><a class="dropdown-item" href="cater.html">Catering</a></li>
            <li><a class="dropdown-item" href="floral.html">Florist</a></li>
            <li><a class="dropdown-item" href="invite.html">Invitations</a></li>
            <li><a class="dropdown-item" href="trans.html">Transportation</a></li>
            <li><a class="dropdown-item" href="offical.html">Officiant</a></li>
            <li><a class="dropdown-item" href="gifts.html">Gifts</a></li>        
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="sitemap.html">Sitemap</a></li>
            <li><a class="dropdown-item" href="testbox.html">Test Box</a></li>
            <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#loginModal">Vendor Login</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <div class="modal fade" id="loginModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Vendor Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <div class="input-group">
          <input type="email" class="form-control" placeholder="name@example.com">
          <span class="input-group-text">
            <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <div class="input-group">
          <input type="password" class="form-control" placeholder="Enter your password">
          <span class="input-group-text password-toggle">
            <i class="fas fa-eye"></i>
            </span>
          </div>
        </div>
        <div class="form-check">
          <div>
          <input type="checkbox" class="form-check-input" id="remember">
          <label class="form-check-label" for="remember">Remember me</label>
          </div>
          <a href="#" class="text-decoration-none">Forgot password?</a>
        </div>
        <button type="submit" class="btn btn-login text-white">Sign In</button>
        <div class="register-link">
          Want to become a member of our team? <a href="#" class="text-decoration-none">Join Us!</a>
        </div>
        </form>
      </div>
      </div>
    </div>
  </div>
`;

// NAVBAR UPDATE PAGE LOCATION 
setTimeout(() => {
  setActiveNavItem();
}, 0);

function setActiveNavItem() {
  const navItems = document.querySelectorAll('.navbar-nav .nav-item');
  const currentPath = window.location.pathname.replace(/^\/+/, '');

  navItems.forEach(item => {
    const link = item.querySelector('a');
    const linkPath = link.getAttribute('href');

    /* Include list */
    if (['', 'index.html', 'about.html', 'contact.html'].includes(linkPath)) {
      if (linkPath === currentPath) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }

    /* Catch-all */
    if (item.textContent === 'Vendors' && !['', 'index.html', 'about.html', 'contact.html'].includes(currentPath)) {
      item.classList.add('active');
    } else if (item.textContent === 'Vendors' && ['', 'index.html', 'about.html', 'contact.html'].includes(currentPath)) {
      item.classList.remove('active');
    }
  });
}

// FOOTER
document.getElementById("footer-container").innerHTML = `
  <footer class="footer">
    <div>&copy; 2025 Santa Barbara Weddings. All rights reserved.</div>
    <div>Design by <a href="https://scott-haugaard.github.io/Doberman-on-Graphics/">D&#9829;G</a></div>
  </footer>
`;


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
