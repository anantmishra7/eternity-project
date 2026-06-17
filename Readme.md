# Anant Mishra · Portfolio

A personal portfolio website for **Anant Mishra**, an aspiring Software Developer building real-world tech solutions with Java, Python, and AI/ML. The site is a fully responsive, single-page application built with plain HTML, CSS, and JavaScript, and is deployed automatically via GitLab Pages.

## Live Site

Deployed through GitLab Pages from the `public/` directory on every push to the default branch.

## Features

- Responsive single-page layout with a sticky navigation bar and mobile menu toggle
- Sections: About, Experience, Projects, Skills, Certifications, Achievements, Education, Interests, and Contact
- Downloadable resume (`Resume.pdf`)
- Custom fonts (Inter & JetBrains Mono) and a clean, modern design
- Zero build step — pure HTML, CSS, and vanilla JavaScript

## Tech Stack

- **HTML5** — page structure and content
- **CSS3** — styling and responsive layout (`public/style.css`)
- **JavaScript** — interactivity such as the mobile nav toggle and dynamic year (`public/script.js`)
- **GitLab CI/CD** — automated deployment to GitLab Pages

## Project Structure

```
.
├── .gitlab-ci.yml      # CI/CD config for GitLab Pages deployment
└── public/
    ├── index.html      # Main page
    ├── style.css       # Styles
    ├── script.js       # Interactivity
    └── Resume.pdf      # Downloadable resume
```

## Running Locally

No build tools required. Clone the repository and open the page in your browser:

```bash
git clone https://gitlab.com/eternity-group1/eternity-project.git
cd eternity-project/public
# Open index.html directly, or serve it locally:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Deployment is handled automatically by GitLab CI/CD. On every push to the default branch, the `pages` job publishes the contents of `public/` to GitLab Pages.

## Contact

- **LinkedIn:** https://www.linkedin.com/in/anantmishra07/
- **GitHub:** https://github.com/anantmishra7

---

© Anant Mishra. Built with HTML, CSS & JS.
