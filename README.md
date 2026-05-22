# SOCOMv2 Website

This is the first version of the website for the Surface Ocean pCO₂ Mapping Intercomparison (SOCOM) initiative, version 2.

## Project Structure

```
socomv2/
├── index.html          # Homepage (About section)
├── contact.html        # Contact page
├── email.php           # Email form handler
├── publications.html   # Publications page
├── methods.html        # Methods page
├── resources.html      # Resources page
├── organizations.html # Organizations page
├── events.html         # Events page
├── css/
│   ├── bootstrap.min.css  # Bootstrap 5.3 CSS framework
│   └── style.css          # Custom CSS styles
├── js/
│   └── common.js          # Common JavaScript for navigation and footer
├── images/             # Images and logos
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **PHP**: Server-side scripting for email handling
- **Bootstrap 5.3**: CSS framework for responsive design and components
- **Custom CSS**: Additional styling to maintain SOCOM branding
- **Google Fonts**: Libre Baskerville (serif) and DM Sans (sans-serif)

## How to Edit Content

### Navigation Menu

The navigation menu is configured in `js/common.js`. To add or modify navigation links, edit the `navLinks` array in the JavaScript file. Changes will automatically apply to all pages.

### Footer

The footer is also configured in `js/common.js`. To update the copyright or attribution, edit the `footerCopyright` and `footerAttribution` variables in the JavaScript file. Changes will automatically apply to all pages.

### Page Content

Each page has a main section with a specific ID (e.g., `#hero`, `#about`, `#contact`, `#publications`, `#methods`, `#resources`, `#organizations`, `#events`). Edit the content within these sections in the respective HTML files to update page text, links, and data.

## How to Edit Styles

### Custom CSS (css/style.css)

The custom CSS file overrides Bootstrap styles to maintain SOCOM branding. Key sections include navigation, hero, publications, methods, resources, organizations, events, contact, and footer styling.

### Bootstrap Integration

The site uses Bootstrap 5.3 for responsive navbar with mobile menu toggle, grid system, and utility classes. Bootstrap CSS is loaded before custom CSS to allow overrides.

### Color Scheme

Main colors (defined as CSS variables):
- `--deep`: Dark blue (#07253f)
- `--mid`: Medium blue (#0e4d7b)
- `--teal`: Teal/cyan (#2fb8c8)
- `--cyan`: Light cyan (#17a2b8)
- `--accent`: Orange (#e05c28)
- `--foam`: White/light (#f7fbfd)
- `--sand`: Light gray (#f7fbfd)
- `--pale`: Very light teal (#e8f4f6)
- `--muted`: Gray text (#6b7d8c)

## Images

All images are stored in the `images/` folder. When adding new images:
1. Place the image file in the `images/` folder
2. Reference it in HTML with: `<img src="images/filename.png">`
3. For the navbar logo, the current file is `socomv2_logo.png`

## Responsive Design

The site is fully responsive:
- **Desktop (> 768px)**: Horizontal navigation menu
- **Mobile (< 768px)**: Hamburger menu with dropdown navigation

Mobile menu styles are defined in the `@media (max-width: 767px)` section of `style.css`.

## JavaScript

The site uses JavaScript for:
- **Bootstrap JS Bundle**: Handles navbar toggle and collapse functionality
- **common.js**: Generates navigation menu and footer dynamically from a single configuration file
- **IntersectionObserver**: Handles scroll reveal animations for `.reveal` elements

Navigation and footer are configured in `js/common.js` - edit this file to update links and copyright information across all pages.

## Adding New Pages

To add a new page:
1. Create a new HTML file (e.g., `newpage.html`)
2. Add the navigation and footer containers: `<div id="nav-container"></div>` and `<div id="footer-container"></div>`
3. Add the main content section with a unique ID
4. Update the `navLinks` array in `js/common.js` to include the new page
5. Add custom styles to `css/style.css` if needed

---

**Last updated**: May 2026
**Maintained by**: SOCOMv2 team
