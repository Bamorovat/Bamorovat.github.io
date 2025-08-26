# Mohammad Hossein Bamorovat Abadi - Personal Website

## 🚀 Website Structure

This is a modern, responsive personal portfolio website built with clean, modular architecture.

### 📁 File Structure

```
Bamorovat.github.io/
├── index.html              # Main website file
├── index_backup.html        # Backup of previous version
├── index_new.html          # New modular version (testing)
├── index_modular.html      # Modular template
├── assets/
│   ├── css/
│   │   └── style.css       # All CSS styles
│   └── js/
│       └── main.js         # JavaScript functionality
├── sections/
│   ├── about.html          # About section content
│   ├── skills.html         # Skills section content
│   ├── experience.html     # Experience timeline
│   ├── projects.html       # Projects showcase
│   ├── publications.html   # Research publications
│   └── education.html      # Academic background
├── CNAME                   # GitHub Pages domain config
└── README.md              # This file
```

### 🎨 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Modular Architecture**: Separated CSS, JavaScript, and content sections
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized for fast loading and smooth scrolling
- **Accessibility**: ARIA labels and keyboard navigation support

### 📱 Sections

1. **Hero Section**: Introduction with contact buttons
2. **About**: Professional summary and key expertise areas
3. **Skills**: Technical skills organized by category
4. **Experience**: Professional timeline with achievements
5. **Projects**: Featured projects and accomplishments
6. **Publications**: Research papers and academic contributions
7. **Education**: Academic background and qualifications

### 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Smooth scrolling and interactive navigation
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family for modern typography

### 🚀 Getting Started

1. **Local Development**:
   ```bash
   # Clone the repository
   git clone https://github.com/Bamorovat/Bamorovat.github.io.git
   
   # Navigate to directory
   cd Bamorovat.github.io
   
   # Open in browser (use a local web server for best results)
   python -m http.server 8000
   # or
   npx serve .
   ```

2. **Live Website**: Visit [https://bamorovat.github.io](https://bamorovat.github.io)

### 📝 Content Management

#### Adding New Projects
Edit `sections/projects.html` and add a new project card:

```html
<div class="project-card">
    <h3 class="project-title">
        <i class="fas fa-icon"></i>
        Project Title
    </h3>
    <p class="project-description">
        Project description...
    </p>
    <div class="project-tech">
        <span class="tech-tag">Technology</span>
    </div>
    <div class="project-links">
        <a href="#" class="project-link">
            <i class="fas fa-external-link-alt"></i> View Project
        </a>
    </div>
</div>
```

#### Updating Skills
Modify `sections/skills.html` to add new skills in appropriate categories.

#### Adding Publications
Update `sections/publications.html` with new research papers.

### 🎨 Customization

#### Colors
Update CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #1e3a8a;      /* Main blue */
    --secondary-color: #3b82f6;     /* Light blue */
    --accent-color: #06d6a0;        /* Green accent */
    --text-primary: #1f2937;        /* Dark text */
    --text-secondary: #6b7280;      /* Light text */
}
```

#### Typography
Change the font family by updating the Google Fonts import and CSS font-family declarations.

### 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### 🔧 Maintenance

#### Regular Updates
- Update professional experience
- Add new publications
- Refresh project portfolio
- Update contact information

#### Best Practices
- Optimize images for web (WebP format recommended)
- Minify CSS and JavaScript for production
- Regular security updates for dependencies
- SEO monitoring and optimization

### 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 📞 Contact

**Mohammad Hossein Bamorovat Abadi**
- Email: mohammad.bamorovatAbadi@manchester.ac.uk
- LinkedIn: [linkedin.com/in/bamorovat](https://www.linkedin.com/in/bamorovat/)
- Google Scholar: [Google Scholar Profile](https://scholar.google.com/citations?user=brVh080AAAAJ&hl=en)
- GitHub: [github.com/Bamorovat](https://github.com/Bamorovat)

### 📄 License

© 2025 Mohammad Hossein Bamorovat Abadi. All rights reserved.

---

**Last Updated**: August 2025  
**Version**: 2.0 - Modular Architecture
