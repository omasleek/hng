# Developer Portfolio - Stage 0 & 1

A sleek, futuristic multi-page developer portfolio featuring a glassmorphism dark theme with neon accents. Built with modern web technologies and fully responsive across all devices.

## 🎨 Design Features

- **Glassmorphism Dark Theme**: Deep navy/black gradient background with soft neon glows
- **Neon Accents**: Purple (#8b5cf6) and pink (#ec4899) color scheme
- **Modern Typography**: Inter font family for clean, futuristic text
- **Interactive Elements**: Hover animations, glowing effects, and smooth transitions
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens

## 📱 Pages

### 🏠 Home (Profile Card)
- **Left Section**: Circular avatar with glowing ring, role title, and connect button
- **Right Section**: Name in gradient text, bio, timestamp, and social icons
- **Bottom Section**: Glass cards for hobbies and dislikes
- **Dynamic Time**: Real-time milliseconds display updating every second

### 📧 Contact Us
- **Form Validation**: Client-side validation with real-time feedback
- **Required Fields**: Name, email, subject, message (min 10 chars)
- **Email Validation**: Proper email format checking
- **Success State**: Confirmation message after valid submission
- **Accessibility**: ARIA labels and error associations

### 👤 About Me
- **Reflective Sections**: Bio, goals, confidence areas, future note, extra thoughts
- **Glass Cards**: Each section in its own glassmorphism container
- **Interactive Lists**: Hover effects and smooth animations
- **Personal Journey**: Developer growth and learning reflections

## 🚀 Features

- **Fully Responsive**: Mobile-first design with breakpoints at 768px and 1024px
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized CSS with backdrop-filter and modern techniques
- **Cross-browser**: Compatible with modern browsers supporting CSS Grid and Flexbox
- **Semantic HTML**: Proper use of article, section, nav, and form elements

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with data-testid attributes
- **CSS3**: Flexbox, Grid, Media Queries, Backdrop-filter, CSS Gradients
- **JavaScript**: ES6+ for form validation and dynamic content
- **Fonts**: Google Fonts (Inter) for modern typography

## 📁 File Structure

```
├── index.html          # Home page with profile card
├── contact.html        # Contact form page
├── about.html          # About me reflective page
├── styles.css          # Global styles with glassmorphism theme
├── script.js           # Time display functionality
├── contact.js          # Form validation logic
├── about.js            # About page interactions
└── README.md           # This file
```



## 🧪 Data Test IDs

### Profile Card (index.html)
- `test-profile-card`: Root container
- `test-user-name`: User name
- `test-user-bio`: Biography paragraph
- `test-user-time`: Current time display
- `test-user-avatar`: Profile image
- `test-user-social-links`: Social links container
- `test-user-social-twitter/github/linkedin`: Individual social links
- `test-user-hobbies`: Hobbies list
- `test-user-dislikes`: Dislikes list

### Contact Form (contact.html)
- `test-contact-form`: Form container
- `test-contact-name`: Name input
- `test-contact-email`: Email input
- `test-contact-subject`: Subject input
- `test-contact-message`: Message textarea
- `test-contact-submit`: Submit button
- `test-contact-success`: Success message
- `test-contact-error-{field}`: Error messages for each field

### About Page (about.html)
- `test-about-page`: Main container
- `test-about-bio`: Bio section
- `test-about-goals`: Goals section
- `test-about-confidence`: Confidence areas section
- `test-about-future-note`: Future note section
- `test-about-extra`: Extra thoughts section

## 🎯 Responsive Breakpoints

- **Mobile**: ≤767px - Vertical stacks, centered content, compact spacing
- **Tablet**: 768px-1023px - Horizontal layouts, adjusted padding, balanced proportions
- **Desktop**: ≥1024px - Full-width designs, enhanced spacing, optimal readability

## 🌟 Key Highlights

- **Glassmorphism Effects**: Backdrop blur with transparency and subtle borders
- **Neon Glows**: Outer glow effects on main containers using box-shadow
- **Interactive Animations**: Hover states with transform and color transitions
- **Form UX**: Real-time validation with accessible error messaging
- **Typography Hierarchy**: Clear visual hierarchy with gradient text effects
- **Performance Optimized**: Efficient CSS with hardware-accelerated animations

## 📝 Notes

- All social links open in new tabs with `rel="noopener noreferrer"` for security
- Form validation prevents submission of invalid data
- Time display uses `Date.now()` for millisecond precision
- Design maintains consistency across all pages and screen sizes
- Built for modern browsers with CSS Grid and Flexbox support

---

**Built with ❤️ for the HNG Internship Program**