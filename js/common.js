// Navigation menu configuration
const navLinks = [
  { href: 'index.html', text: 'About' },
  {
    text: 'Experiments',
    dropdown: [
      { href: 'exp01.html', text: 'EXP 01: Geospatial uncertainty' },
      { href: 'exp02.html', text: 'EXP 02: Multiple hindcast testbed' },
      { href: 'exp03.html', text: 'EXP 03: Large ensemble testbed' },
      { href: 'exp04.html', text: 'EXP 04: Climatological testbed' },
      { href: 'exp05.html', text: 'EXP 05: Temperature corrections' }
    ]
  },
  { href: 'publications.html', text: 'Publications' },
  { href: 'methods.html', text: 'Methods' },
  { href: 'resources.html', text: 'Resources' },
  { href: 'organizations.html', text: 'Organizations' },
  { href: 'events.html', text: 'Events' },
  { href: 'contact.html', text: 'Contact' }
];

// Logo configuration
const logoPath = 'images/round_socomv2_2_logo.png';

// Footer configuration
const footerCopyright = '© 2026 SOCOM — Surface Ocean pCO₂ Mapping Intercomparison';
const footerAttribution = 'Website created and maintained by the SOCOMv2 team';

// Generate navigation menu
function generateNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  let navHTML = `
    <nav class="navbar navbar-expand-md fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <div class="nav-logo-wrap">
            <img src="${logoPath}">
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
  `;
  
  navLinks.forEach(link => {
    if (link.dropdown) {
      // Check if any dropdown item is active
      const dropdownActive = link.dropdown.some(item => item.href === currentPage) ? 'active' : '';
      navHTML += `
        <li class="nav-item dropdown ${dropdownActive}">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${link.text}</a>
          <ul class="dropdown-menu">
      `;
      link.dropdown.forEach(item => {
        const itemActive = item.href === currentPage ? 'active' : '';
        navHTML += `
          <li><a class="dropdown-item ${itemActive}" href="${item.href}">${item.text}</a></li>
        `;
      });
      navHTML += `
          </ul>
        </li>
      `;
    } else {
      const isActive = link.href === currentPage ? 'active' : '';
      navHTML += `
        <li class="nav-item"><a class="nav-link ${isActive}" href="${link.href}">${link.text}</a></li>
      `;
    }
  });
  
  navHTML += `
          </ul>
        </div>
      </div>
    </nav>
  `;
  
  return navHTML;
}

// Generate footer
function generateFooter() {
  let footerHTML = `
    <footer>
      <span class="ft-copy">${footerCopyright}</span>
      <span class="ft-copy">${footerAttribution}</span>
      <ul class="ft-links">
  `;

  navLinks.forEach(link => {
    if (link.dropdown) {
      // For dropdown items in footer, link to the first item (exp01.html)
      footerHTML += `
        <li><a style="font-size: 0.7rem; opacity: 0.6;" href="${link.dropdown[0].href}">${link.text}</a></li>
      `;
    } else {
      footerHTML += `
        <li><a style="font-size: 0.7rem; opacity: 0.6;" href="${link.href}">${link.text}</a></li>
      `;
    }
  });

  footerHTML += `
      </ul>
    </footer>
  `;

  return footerHTML;
}

// Decode and display emails (anti-spam)
function decodeEmails() {
  const emailElements = document.querySelectorAll('[data-email]');
  emailElements.forEach(el => {
    const email = el.getAttribute('data-email');
    const domain = el.getAttribute('data-domain');
    if (email && domain) {
      const fullEmail = email + '@' + domain;
      el.textContent = fullEmail;
      el.href = 'mailto:' + fullEmail;
    }
  });
}

// Initialize navigation and footer
document.addEventListener('DOMContentLoaded', function() {
  // Insert navigation
  const navContainer = document.getElementById('nav-container');
  if (navContainer) {
    navContainer.innerHTML = generateNavigation();
  }

  // Insert footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = generateFooter();
  }

  // Decode emails
  decodeEmails();

  // Scroll reveal animations
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('vis');
  }), { threshold: .06 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
