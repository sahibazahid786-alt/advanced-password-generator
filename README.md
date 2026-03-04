# advanced-password-generator
## Overview
A secure, professional password generator that allows users to:
- Select password length
- Include/exclude numbers and symbols
- Copy password to clipboard
- View password strength
- Switch between dark and light mode

## Features
- Cryptographically secure password generation using `crypto.getRandomValues()`
- Minimum 8 characters, maximum 32 characters
- Ensures at least one uppercase, lowercase, number, and symbol
- Copy to clipboard with alert
- Password strength meter
- Dark/Light mode toggle
- Fully responsive design

## How to Use
1. Adjust the password length using the slider.
2. Select whether to include numbers and symbols.
3. Click "Generate Password".
4. Check the password strength meter.
5. Click the copy icon to copy the password.
6. Use the "Toggle Dark/Light Mode" button to switch theme.

## Technical Notes
- Secure random number generation ensures strong passwords.
- Uses modern, minimalist design for professional look.
- Responsive and mobile-friendly.

## Files
- `index.html` → Main HTML file
- `style.css` → Styling
- `script.js` → JavaScript logic
