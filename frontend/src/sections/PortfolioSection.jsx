import { Link } from "react-router-dom";
import PortfolioScene from "../three/PortfolioScene";

const projects = [
  {
    number: "01",
    slug: "puratap-virtual-taps",
    title: "Puratap Virtual Taps",
    category: "AR / 3D Showcase",
    description:
      "An AR product visualization and 3D showcase experience for virtual product presentation.",
  },
  {
    number: "02",
    slug: "wanaraomah-lxe",
    title: "Wanaraomah LXE",
    category: "Interactive Experience",
    description:
      "An interactive product launch experience combining digital presentation with immersive 3D elements.",
  },
  {
    number: "03",
    slug: "laxmi-astro-ai",
    title: "Laxmi Astro AI",
    category: "Mobile Application",
    description:
      "An AI-focused astrology application developed as a mobile digital experience.",
  },
  {
    number: "04",
    slug: "cube-dental-equipment",
    title: "Cube Dental Equipment",
    category: "Digital Solution",
    description:
      "A digital project listed in Riyadvi's public portfolio across its software and technology work.",
  },
  {
    number: "05",
    slug: "d-fitness",
    title: "D Fitness",
    category: "Digital Product",
    description:
      "A fitness-focused digital project included in Riyadvi's publicly listed portfolio.",
  },
  {
    number: "06",
    slug: "visdoc-telemed",
    title: "VISDOC – TELEMED",
    category: "Healthcare Technology",
    description:
      "A telemedicine-focused project listed among Riyadvi's public portfolio work.",
  },
];

function PortfolioSection() {
  return (
    <section className="bg-[#050505] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Projects That
              <span className="block text-[#D4AF37]">
                Create Impact
              </span>
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-gray-400">
            Explore selected projects and digital experiences associated
            with Riyadvi Software Technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.number}
              to={`/portfolio/${project.slug}`}
              className="group relative block overflow-hidden border border-white/10 bg-black p-8 transition duration-500 hover:border-[#D4AF37]/60"
            >
              {/* Project Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#D4AF37]">
                  {project.number}
                </span>

                <span className="text-xl text-white/30 transition duration-300 group-hover:translate-x-2 group-hover:text-[#D4AF37]">
                  ↗
                </span>
              </div>

              {/* Project Content */}
              <div className="mt-20">
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  {project.category}
                </p>

                <h3 className="mt-3 text-3xl font-semibold transition duration-300 group-hover:text-[#D4AF37]">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-gray-500">
                  {project.description}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="mt-10 h-px w-0 bg-[#D4AF37] transition-all duration-700 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* 3D Portfolio Experience */}
        <PortfolioScene />

      </div>
    </section>
  );
}

export default PortfolioSection;