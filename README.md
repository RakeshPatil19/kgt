# Kalaki Group Tution - React Website

A responsive multi-page React.js website for **Kalaki Group Tution**, a coaching center for JEE & NEET, built with Vite, React Router, and Tailwind CSS v4.

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero banner, About, Courses, Features, Instructor, Contact sections |
| `/about` | About | Full about page with mission, vision, and values |
| `/courses` | Courses | All courses listed + FAQ accordion |
| `/contact` | Contact | Contact form, address, map, office hours |

## Features

- Multi-page routing with React Router
- Hero banner with animated gradient background
- Glass-morphism navbar with sticky behavior
- Course cards with hover effects
- Contact form (Name, Email, Phone, Message)
- Fully responsive (mobile + desktop)
- Smooth scroll on home page sections
- SEO-optimized meta tags

## Tech Stack

- **React** 19
- **React Router** 7
- **Vite** 8
- **Tailwind CSS** 4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
  components/       # Reusable UI components
    Navbar.jsx
    HeroBanner.jsx
    SectionTitle.jsx
    FeatureCard.jsx
    CourseInfoCard.jsx
    ContactForm.jsx
    Footer.jsx
  sections/         # Home page sections
    About.jsx
    Courses.jsx
    Features.jsx
    Instructor.jsx
    Contact.jsx
  pages/            # Route pages
    Home.jsx
    AboutPage.jsx
    CoursesPage.jsx
    ContactPage.jsx
  App.jsx           # Router setup with all routes
  index.css         # Tailwind imports & theme
  main.jsx          # Entry point
```

## Customization

- **Colors**: Edit the `@theme` block in `src/index.css`
- **Content**: Update text in each page/section/component file
- **Images**: Replace Unsplash URLs with your own images

## Contact Form

The form currently logs to console on submit. To send emails, integrate with:

- **EmailJS** — add your service/template IDs
- **Formspree** — set the form `action` to your Formspree endpoint
- **Custom backend** — POST to your API endpoint

## License

MIT
