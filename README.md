# OnTrack Solutions - OTMR Data Consultancy Landing Page

A beautiful, responsive landing page for a software consultancy specializing in OTMR (On-Track Machine Recording) data processing and visualization for the rail industry.

## Features

- **Modern Design**: Clean, professional design with a rail industry focus
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and interactive elements
- **Performance**: Optimized for fast loading and smooth performance
- **GitHub Pages Ready**: Configured for easy deployment on GitHub Pages

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## File Structure

```
landing/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and sign in
   - Click "New repository"
   - Name it (e.g., "ontrack-landing-page")
   - Make it public
   - Initialize with README (optional)

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all files from the `landing` folder
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes to deploy

### Method 2: Using Git Command Line

1. **Initialize and push to GitHub**
   ```bash
   cd /Users/anthony/development/ontrack/landing
   git init
   git add .
   git commit -m "Initial commit: OTMR consultancy landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/repository-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages** (follow steps 3-4 from Method 1)

### Method 3: Using GitHub CLI

1. **Create repository and push**
   ```bash
   cd /Users/anthony/development/ontrack/landing
   gh repo create ontrack-landing-page --public --source=. --remote=origin --push
   ```

2. **Enable GitHub Pages**
   ```bash
   gh api repos/:owner/:repo/pages -X POST -F source.branch=main -F source.path=/
   ```

## Customization

### Content Updates
- Edit `index.html` to update company information, services, and contact details
- Modify the hero section title and description
- Update service descriptions and features
- Change contact information and social media links

### Styling
- Edit `styles.css` to change colors, fonts, and layout
- Update CSS custom properties in `:root` for consistent color scheme
- Modify responsive breakpoints in media queries

### Functionality
- Edit `script.js` to add new interactive features
- Customize form handling (currently shows notifications)
- Add analytics tracking or other third-party integrations

## Color Scheme

The site uses a professional blue and orange color scheme:
- Primary Blue: #2563eb
- Secondary Orange: #f97316
- Accent Green: #10b981
- Text: #1f2937
- Background: #ffffff / #f9fafb

## Sections

1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero**: Eye-catching introduction with animated data visualization
3. **Services**: Four main service offerings with detailed descriptions
4. **Expertise**: Company stats and technology showcase
5. **About**: Company values and mission
6. **Contact**: Contact form and company information
7. **Footer**: Additional links and social media

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized images and assets
- Efficient CSS with minimal unused styles
- Vanilla JavaScript for fast loading
- Responsive design for all screen sizes
- Smooth animations and transitions

## Maintenance

To keep the site updated:
1. Regularly update contact information
2. Add new services or case studies
3. Update company stats and achievements
4. Refresh testimonials and client information
5. Keep dependencies up to date

## License

This project is created for OnTrack Solutions. Modify as needed for your business requirements.

## Support

For any issues or customization requests, please create an issue in the GitHub repository or contact the development team.
