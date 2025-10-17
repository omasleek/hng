# Profile Card Project

This project is a responsive profile card component built with HTML, CSS, and JavaScript. It displays user information including name, bio, avatar, current time, social links, hobbies, and dislikes.

## Features

- **Responsive Design**: The card adapts to different screen sizes:
  - Mobile: Vertical stack layout
  - Tablet: Adjusted padding and avatar size
  - Desktop: Horizontal layout with avatar on the left and content on the right, full-width card, and hobbies/dislikes side by side

- **Dynamic Time Display**: Shows the current time in milliseconds using JavaScript's `Date.now()` method, updating every second

- **Semantic HTML**: Uses proper semantic elements like `<article>`, `<figure>`, `<nav>`, and `<section>` for better accessibility

- **Accessibility**: Includes proper alt attributes, keyboard navigation support, and focus styles

- **Social Links**: Links to Twitter, GitHub, and LinkedIn that open in new tabs with security attributes

## File Structure

- `index.html`: Main HTML structure with semantic markup and data-testid attributes for testing
- `styles.css`: CSS styles with responsive breakpoints and modern layout techniques using Flexbox
- `script.js`: JavaScript for updating the current time display

## Technologies Used

- HTML5
- CSS3 (Flexbox, Media Queries)
- JavaScript (ES6+)

## How to Run

Simply open `index.html` in a web browser. No build process or server required.

## Data Test IDs

The component includes comprehensive data-testid attributes for automated testing:
- `test-profile-card`: Root container
- `test-user-name`: User name
- `test-user-bio`: Biography paragraph
- `test-user-time`: Current time display
- `test-user-avatar`: Profile image
- `test-user-social-links`: Social links container
- `test-user-social-twitter/github/linkedin`: Individual social links
- `test-user-hobbies`: Hobbies list
- `test-user-dislikes`: Dislikes list