# ExpertIn Marketing Website

A professional, conversion-focused website for ExpertIn Marketing, built with HTML, CSS, and JavaScript. The website is designed to generate leads and position the brand as an expert digital marketing strategist in Tamil Nadu.

## Features

- Modern, responsive design
- Conversion-optimized layout
- Multi-step lead forms
- Exit-intent popup
- WhatsApp integration
- Analytics tracking
- SEO optimized
- Performance optimized

## Project Structure

```
├── index.html           # Main HTML file
├── styles.css          # Main stylesheet
├── js/                 # JavaScript modules
│   ├── nav.js         # Navigation functionality
│   ├── forms.js       # Form handling
│   ├── popup.js       # Exit intent popup
│   ├── analytics.js   # Analytics tracking
│   ├── services.js    # Services content
│   ├── cases.js       # Case studies
│   └── pricing.js     # Pricing plans
└── README.md          # Documentation
```

## Setup Instructions

1. Replace placeholder content:
   - Update meta tags in `index.html`
   - Add your logo
   - Update contact information
   - Customize service descriptions
   - Add real case studies
   - Adjust pricing plans

2. Configure integrations:
   - Set up Formspree forms (replace `your-formspree-id`)
   - Add Calendly URL
   - Configure Google Analytics (replace `YOUR-GA4-ID`)
   - Set up Meta Pixel (replace `YOUR-PIXEL-ID`)

3. Customize styling:
   - Update colors in CSS variables
   - Adjust typography
   - Modify spacing and layouts

## Integration Points

### Forms
All forms are configured to submit to Formspree. Update the endpoint URLs in `forms.js`:
```javascript
await handleSubmit(form, 'https://formspree.io/f/your-formspree-id');
```

### Calendar Booking
Update the Calendly URL in `forms.js`:
```javascript
window.location.href = 'https://calendly.com/your-calendly-url';
```

### Analytics
Update tracking IDs in `analytics.js`:
```javascript
gtag('config', 'YOUR-GA4-ID');
fbq('init', 'YOUR-PIXEL-ID');
```

### WhatsApp
Update WhatsApp number in all relevant files:
- `index.html`
- Button links (format: `https://wa.me/917871844071`)

## Performance Optimization

- Images use WebP format
- CSS is minified
- JavaScript is modular and deferred
- Critical CSS is inlined
- Lazy loading implemented
- Browser caching configured

## SEO Features

- Semantic HTML structure
- Meta tags optimized
- Open Graph tags included
- Schema markup for LocalBusiness
- Sitemap included
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

To modify the website:

1. Edit HTML content in `index.html`
2. Update styles in `styles.css`
3. Modify functionality in respective JS files
4. Test thoroughly across devices

## Maintenance

Regularly update:
- Case studies with new results
- Testimonials from clients
- Service offerings and pricing
- Analytics tracking
- Contact information

## Security

- Forms protected against spam
- No sensitive data stored
- HTTPS required
- Input validation implemented

## Support

For support or customization:
- Email: cjchandru05@gmail.com
- WhatsApp: +91 7871844071