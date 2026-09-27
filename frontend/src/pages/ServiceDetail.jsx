import { useParams, Link } from "react-router-dom";

import services from "../data/services";
import projects from "../data/projects";

import HeroScene from "../three/HeroScene";
import ScrollReveal from "../animations/ScrollReveal";

function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Error
          </p>

          <h1 className="mt-5 text-4xl font-bold">
            Service Not Found
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block text-[#D4AF37] hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  /* Service-specific content */

  const serviceContent = {
    "web-development": {
      problem:
        "Businesses need websites and web applications that are responsive, reliable, easy to use, and capable of supporting their digital goals.",

      solution:
        "We build modern web experiences that combine responsive interfaces, scalable development practices, API integration, and user-focused design.",

      useCases: [
        "Business Websites",
        "E-commerce Platforms",
        "Web Applications",
        "Customer Portals",
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "REST APIs",
      ],
    },

    "app-development": {
      problem:
        "Users expect fast, intuitive, and accessible applications that provide useful experiences across modern devices.",

      solution:
        "We design and develop application experiences focused on usability, performance, and seamless interaction between users and digital services.",

      useCases: [
        "Business Applications",
        "Customer Applications",
        "Service Platforms",
        "Mobile Experiences",
      ],

      technologies: [
        "React Native",
        "Flutter",
        "JavaScript",
        "REST APIs",
        "Node.js",
        "Database",
      ],
    },

    "digital-marketing": {
      problem:
        "Businesses need a stronger digital presence to reach relevant audiences and communicate their products or services effectively.",

      solution:
        "We combine digital campaigns, content strategies, social media, and search-focused approaches to help businesses strengthen their online presence.",

      useCases: [
        "Brand Awareness",
        "Social Media Campaigns",
        "Search Visibility",
        "Content Marketing",
      ],

      technologies: [
        "SEO",
        "Analytics",
        "Social Media",
        "Content Strategy",
        "Digital Campaigns",
        "Web Analytics",
      ],
    },

    "ar-vr": {
      problem:
        "Traditional digital experiences can make it difficult for users to understand products, environments, or concepts visually.",

      solution:
        "We create immersive AR and VR experiences that allow users to explore digital content in more interactive and engaging ways.",

      useCases: [
        "Product Visualization",
        "Virtual Experiences",
        "Interactive Demonstrations",
        "Immersive Training",
      ],

      technologies: [
        "Three.js",
        "WebGL",
        "AR",
        "VR",
        "React Three Fiber",
        "3D Assets",
      ],
    },

    "3d-modeling": {
      problem:
        "Complex products and concepts can be difficult to communicate through conventional images and flat digital content.",

      solution:
        "We create detailed 3D models and interactive visual experiences that help businesses present products and concepts more effectively.",

      useCases: [
        "Product Visualization",
        "3D Product Showcases",
        "Interactive Experiences",
        "Digital Assets",
      ],

      technologies: [
        "Three.js",
        "React Three Fiber",
        "Drei",
        "WebGL",
        "3D Modeling",
        "GSAP",
      ],
    },

    "ui-ux-design": {
      problem:
        "Poor navigation, unclear interfaces, and inconsistent experiences can make digital products difficult for users to understand and use.",

      solution:
        "We design user-focused interfaces and experiences using research, wireframes, prototypes, visual design, and reusable design systems.",

      useCases: [
        "Web Applications",
        "Mobile Applications",
        "Dashboard Design",
        "Product Interfaces",
      ],

      technologies: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "User Research",
        "UI Design",
      ],
    },
  };

  const content = serviceContent[slug];

  /* Related portfolio projects */

  const relatedProjects = projects.filter((project) => {
    if (slug === "ar-vr" || slug === "3d-modeling") {
      return (
        project.category.includes("AR") ||
        project.category.includes("3D") ||
        project.technologies.includes("3D") ||
        project.technologies.includes("AR")
      );
    }

    if (slug === "app-development") {
      return project.category.includes("Mobile");
    }

    if (slug === "ui-ux-design") {
      return (
        project.technologies.includes("UI/UX") ||
        project.technologies.includes("Responsive Design")
      );
    }

    if (slug === "web-development") {
      return (
        project.technologies.includes("Web") ||
        project.category.includes("Digital")
      );
    }

    return projects.slice(0, 2);
  });

  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden px-6 pb-20 pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Service {service.number}
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
                {service.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                {service.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-[#D4AF37] px-7 py-4 font-semibold text-black transition duration-300 hover:bg-white"
                >
                  Start a Project →
                </Link>

                <Link
                  to="/portfolio"
                  className="border border-[#D4AF37] px-7 py-4 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative">
              <HeroScene />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= PROBLEM ================= */}

      <ScrollReveal>
        <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                The Challenge
              </p>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Understanding the
                <span className="block text-[#D4AF37]">
                  Problem
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-400">
                {content.problem}
              </p>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ================= SOLUTION ================= */}

      <ScrollReveal>
        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

            <div className="border border-[#D4AF37]/20 bg-[#050505] p-10">
              <span className="text-5xl text-[#D4AF37]">
                01
              </span>

              <h3 className="mt-8 text-3xl font-bold">
                Our Approach
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                {content.solution}
              </p>
            </div>

            <div className="flex items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  The Solution
                </p>

                <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                  Turning Ideas
                  <span className="block text-[#D4AF37]">
                    Into Experiences
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-gray-400">
                  Our development process focuses on business objectives,
                  user needs, technical requirements, and long-term
                  scalability.
                </p>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ================= FEATURES ================= */}

      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                What We Offer
              </p>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Key Features
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid gap-6 md:grid-cols-2">

              {service.features.map((feature, index) => (
                <div
                  key={feature}
                  className="group border border-white/10 bg-black p-8 transition duration-500 hover:border-[#D4AF37]/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#D4AF37]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xl text-white/20 transition duration-300 group-hover:text-[#D4AF37]">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {feature}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    Designed around business requirements, user needs,
                    usability, and modern digital experiences.
                  </p>
                </div>
              ))}

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= USE CASES ================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Industry Applications
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Where It Can
              <span className="text-[#D4AF37]">
                {" "}Make an Impact
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {content.useCases.map((useCase, index) => (
                <div
                  key={useCase}
                  className="border border-white/10 bg-[#050505] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60"
                >
                  <span className="text-sm text-[#D4AF37]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 text-xl font-semibold">
                    {useCase}
                  </h3>
                </div>
              ))}

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}

      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Technology Stack
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Powered By
              <span className="block text-[#D4AF37]">
                Modern Technology
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="flex flex-wrap gap-4">

              {content.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/10 bg-black px-6 py-4 text-gray-300 transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  {technology}
                </span>
              ))}

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our Process
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              From Idea
              <span className="text-[#D4AF37]">
                {" "}To Reality
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid gap-6 md:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "Understand the business objectives, users, requirements, and project scope.",
                },
                {
                  number: "02",
                  title: "Planning",
                  description:
                    "Define the solution, architecture, technology stack, and project roadmap.",
                },
                {
                  number: "03",
                  title: "Development",
                  description:
                    "Build the solution using reusable components and modern development practices.",
                },
                {
                  number: "04",
                  title: "Delivery",
                  description:
                    "Test, optimize, deploy, and continuously improve the digital experience.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="border border-white/10 bg-[#050505] p-7 transition duration-500 hover:border-[#D4AF37]/50"
                >
                  <span className="text-sm font-semibold text-[#D4AF37]">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    {step.description}
                  </p>
                </div>
              ))}

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= RELATED PORTFOLIO ================= */}

      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Related Portfolio
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Explore Our
              <span className="block text-[#D4AF37]">
                Selected Work
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid gap-6 md:grid-cols-2">

              {relatedProjects.slice(0, 4).map((project) => (
                <Link
                  key={project.slug}
                  to={`/portfolio/${project.slug}`}
                  className="group border border-white/10 bg-black p-8 transition duration-500 hover:border-[#D4AF37]/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-widest text-gray-500">
                      {project.category}
                    </span>

                    <span className="text-xl text-white/30 transition duration-300 group-hover:translate-x-2 group-hover:text-[#D4AF37]">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold transition duration-300 group-hover:text-[#D4AF37]">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-1 text-xs text-gray-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}

            </div>
          </ScrollReveal>

          <div className="mt-10 text-center">
            <Link
              to="/portfolio"
              className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37] hover:text-white"
            >
              View All Projects →
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <ScrollReveal>
        <section className="px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Start Your Project
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Ready to build something
              <span className="block text-[#D4AF37]">
                meaningful?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              Let's discuss your requirements and explore a suitable
              digital solution for your business.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-block bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
            >
              Contact Us →
            </Link>

          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}

export default ServiceDetail;