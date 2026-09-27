# Riyadvi Software Technologies – Website Revamp

A premium, modern, multi-page corporate website developed for **Riyadvi Software Technologies** as part of the Full Stack Developer interview assignment.

The project combines:

- Modern UI/UX
- React-based frontend architecture
- Dynamic routing and reusable components
- Interactive 3D experiences
- Advanced animations
- Node.js and Express backend
- MongoDB database integration
- Lead-generation forms
- Career application management
- Protected admin dashboard
- Responsive design
- AI-assisted development

## Live Demo

### Frontend
https://riyadvi-website-frontend.vercel.app

### Backend API
https://riyadvi-website-backend.vercel.app

### GitHub Repository
https://github.com/ShaliniSiva07/riyadvi-website

---

## Project Overview

The goal of this project is to revamp the Riyadvi Software Technologies website into a premium, interactive and scalable digital experience.

Unlike a single-page landing page, the application follows a multi-page architecture with dynamic service pages, portfolio case studies, blog articles, career pages, lead-generation experiences, backend APIs, database integration and an admin dashboard.

The website follows the required Riyadvi visual direction using:

- Gold `#D4AF37`
- Black `#000000`
- Premium technology-focused UI
- Interactive 3D elements
- Smooth scrolling
- Modern animations
- Responsive layouts

---

## Key Features

### Website

- Responsive homepage
- About page
- Services overview
- Individual dynamic service pages
- Portfolio page
- Dynamic portfolio case studies
- Blog listing
- Dynamic blog article pages
- Careers page
- Dynamic job detail pages
- Career application form
- Contact form
- Consultation form
- Business Health Checkup
- Software Project Planning Guide
- Responsive navigation with mobile menu

### 3D & Animation

- Interactive 3D hero experience
- Interactive technology section
- Interactive portfolio visual experience
- Three.js integration
- React Three Fiber
- Drei
- GSAP animations
- Lenis smooth scrolling

### Backend & Database

- Node.js backend
- Express.js REST APIs
- MongoDB Atlas
- Contact enquiry storage
- Consultation request storage
- Business Health Checkup lead storage
- Lead Magnet storage
- Career application storage
- Resume upload using Vercel Blob

### Admin Dashboard

- Protected admin login
- JWT-based authentication
- Dashboard statistics
- Contact enquiries
- Consultation requests
- Career applications
- Business Health Checkup leads
- Lead Magnet leads
- Refresh data functionality
- Logout functionality


## Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- React Router DOM
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- GSAP
- Lenis

### Backend

- Node.js
- Express.js
- JavaScript
- Multer
- JWT Authentication
- bcryptjs
- CORS
- dotenv

### Database

- MongoDB
- MongoDB Atlas
- Mongoose

### File Storage

- Vercel Blob

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Vercel
- Chrome DevTools

---

## Project Structure

```text
riyadvi-website/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── animations/
│   │   ├── components/
│   │   ├── data/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── sections/
│   │   ├── three/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Contact.js
│   │   ├── Consultation.js
│   │   ├── Application.js
│   │   ├── HealthCheckup.js
│   │   ├── LeadMagnet.js
│   │   └── Admin.js
│   ├── uploads/
│   ├── server.js
│   ├── createAdmin.js
│   ├── package.json
│   └── .env
│
├── vercel.json
└── README.md


## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ShaliniSiva07/riyadvi-website.git
cd riyadvi-website


## API Endpoints

### Public APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/contact` | Submit a contact enquiry |
| POST | `/api/consultation` | Submit a consultation request |
| POST | `/api/health-checkup` | Submit a Business Health Checkup |
| POST | `/api/lead-magnet` | Submit a Software Project Planning Guide request |
| POST | `/api/applications` | Submit a career application with resume |

### Admin APIs

Admin endpoints are protected using JWT authentication.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/admin/login` | Authenticate the administrator |
| GET | `/api/admin/contacts` | View contact enquiries |
| GET | `/api/admin/consultations` | View consultation requests |
| GET | `/api/admin/applications` | View career applications |
| GET | `/api/admin/health-checkups` | View Business Health Checkup leads |
| GET | `/api/admin/lead-magnets` | View Lead Magnet submissions |

### Authentication

The admin dashboard uses:

- JWT authentication
- Protected API routes
- bcrypt password hashing
- Authentication middleware
- Protected frontend admin route

Unauthenticated requests to protected admin APIs are rejected.

---

## Resume Upload

Career applications support resume file uploads.

The backend uses:

- Multer for receiving the uploaded file
- Vercel Blob for private resume storage
- MongoDB for storing the application information and resume reference

Uploaded resumes are not stored directly inside the Git repository.

---

## Dynamic Content Architecture

The frontend uses reusable data-driven structures instead of creating completely separate components for every item.

### Services

```text
Service Data
     ↓
Reusable Service Template
     ↓
Individual Service Pages



## 3D & Interactive Experiences

The website includes multiple interactive visual experiences rather than limiting 3D to the homepage hero.

### Three.js

Used as the underlying 3D rendering library for interactive web-based visual experiences.

### React Three Fiber

Used to integrate Three.js scenes into the React component architecture.

### Drei

Used with React Three Fiber to simplify the creation and management of 3D scenes and objects.

### GSAP

Used for advanced animations and scroll-based visual effects.

### Lenis

Used to provide smooth scrolling throughout the website and improve the overall interactive experience.

### 3D Sections

Interactive 3D experiences are implemented in multiple areas of the website, including:

- Hero section
- Technology section
- Portfolio section

The 3D implementation is integrated with the website's overall design rather than being used only as a decorative effect.

---

## Animation

The project uses animation to improve visual storytelling and user interaction.

### Animation Technologies

- GSAP
- Lenis
- React-based transitions
- CSS transitions
- Scroll-based reveal animations

### Scroll Reveal

Reusable scroll reveal behavior is implemented through the project's animation components and is used across sections such as:

- Technology
- Service detail pages
- Other content sections where appropriate

---

## Responsive Design

The website is designed using responsive layouts and Tailwind CSS utility classes.

Responsive behavior includes:

- Desktop navigation
- Mobile navigation menu
- Responsive typography
- Flexible layouts
- Responsive cards and sections
- Mobile-friendly forms
- Responsive buttons and CTAs
- Adaptive spacing

The 3D sections are designed to remain usable across different screen sizes.

---

## Pages & Routes

### Main Pages

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Portfolio | `/portfolio` |
| Blog | `/blog` |
| Careers | `/careers` |
| Contact | `/contact` |
| Consultation | `/consultation` |
| Business Health Checkup | `/business-health-checkup` |
| Software Project Planning Guide | `/software-project-planning-guide` |

### Dynamic Routes

| Type | Route |
|---|---|
| Service | `/services/:slug` |
| Portfolio Case Study | `/portfolio/:slug` |
| Blog Article | `/blog/:slug` |
| Job Details | `/careers/:slug` |
| Job Application | `/careers/:slug/apply` |

### Admin

| Page | Route |
|---|---|
| Admin Login | `/admin/login` |
| Admin Dashboard | `/admin` |



## AI Tools Used

AI was used as part of the development workflow for research, implementation guidance, debugging, architecture decisions, UI improvements, and documentation.

### ChatGPT

**Purpose:**
- Development assistance
- React component development
- Routing and architecture guidance
- Backend API implementation
- MongoDB integration guidance
- Debugging
- UI/UX improvements
- Deployment troubleshooting
- README documentation

**Example prompts:**
- "Create a reusable React service detail page using dynamic route parameters."
- "Help implement a protected admin dashboard using JWT authentication."
- "Help connect a React frontend to an Express and MongoDB backend."
- "Help debug the Vercel deployment and API routing."
- "Create an interactive 3D React Three Fiber hero section."

**Generated / Assisted Work:**
- Initial implementation ideas and code suggestions
- Component structures
- API implementation guidance
- Debugging suggestions
- 3D implementation guidance
- Documentation structure

**Manual Work:**
The generated suggestions were reviewed, modified, integrated, tested and debugged manually.

This included:

- Adjusting the website to Riyadvi's branding
- Modifying components and layouts
- Connecting frontend forms to the backend
- Configuring MongoDB
- Implementing authentication
- Fixing API routes
- Testing production deployment
- Integrating Vercel Blob
- Testing forms and admin functionality
- Adjusting responsive behavior

**Why it was selected:**

ChatGPT was used as a development assistant to accelerate implementation while keeping the final architecture, integration, testing and debugging under manual control.

---

## Third-Party Assets

The project primarily uses code-based visual experiences and frontend libraries rather than relying on large external image assets.

### Main Libraries

- Three.js
- React Three Fiber
- Drei
- GSAP
- Lenis
- Tailwind CSS

The project avoids unnecessary heavy visual assets where interactive code-based experiences can provide the required effect.

---

## Performance Considerations

Performance was considered while implementing the interactive and 3D portions of the website.

Key considerations include:

- Reusable React components
- Tailwind CSS utility classes
- CSS-based transitions where appropriate
- Code-based 3D scenes
- Controlled animation usage
- Smooth scrolling through Lenis
- Avoiding unnecessary large image assets
- Responsive layouts
- Separate frontend and backend deployments

The project is designed to balance visual effects with usability rather than adding animations without purpose.

---

## Known Limitations

The current implementation is designed as a strong functional interview-assignment prototype and has some areas that could be expanded for a larger production system.

- Portfolio, blog and career content currently use frontend data structures rather than a dedicated CMS.
- The admin dashboard provides data viewing but is not a complete enterprise CRM.
- Email and WhatsApp notification integrations are not currently implemented.
- Advanced analytics and reporting are not included.
- The 3D experiences could be further optimized for lower-end mobile devices.
- The website currently contains sample portfolio, blog and job content.



## Deployment

The application is deployed using Vercel.

### Frontend

Platform: Vercel

Production URL:

https://riyadvi-website-frontend.vercel.app

The frontend is connected to the GitHub repository and deployed from the `main` branch.

### Backend

Platform: Vercel

Production API URL:

https://riyadvi-website-backend.vercel.app

The backend uses environment variables for database credentials, authentication configuration and file-storage configuration.

### Database

MongoDB Atlas is used as the production database.

### File Storage

Vercel Blob is used for private resume file storage.

---

## Future Improvements

The following improvements could be added in future versions:

- Integrate a CMS for managing services, portfolio projects, blogs and careers.
- Add email notifications for contact and consultation submissions.
- Add WhatsApp integration for lead communication.
- Add advanced admin dashboard analytics.
- Add enquiry status management and filtering.
- Add richer portfolio case-study content and visuals.
- Add more interactive 3D experiences.
- Improve mobile-specific 3D optimization.
- Add image and 3D asset optimization pipelines.
- Add automated testing for frontend and backend.
- Add stronger API validation and rate limiting.
- Add role-based admin access.
- Expand the application into a complete CRM-style lead management system.

---

## Git & Version Control

The project uses Git for version control and GitHub for source-code hosting.

The repository contains separate frontend and backend applications:

```text
/frontend
/backend
/README.md



Development Commands
Frontend:
    cd frontend
    npm install
    npm run dev

Backend:"
    cd backend
    npm install
    node server.js

Production Build

To create a production build of the frontend:
    cd frontend
    npm run build

The generated production files can be previewed locally using:
    npm run preview


Author

Shalini C

B.E. Computer Science and Engineering (Hons.)

Full Stack Developer

GitHub: https://github.com/ShaliniSiva07

LinkedIn: https://www.linkedin.com/in/shalini-c-b6b3bb2a2

License:
This project was developed as part of a Full Stack Developer interview assignment for Riyadvi Software Technologies.