import { Link } from "react-router-dom";
import TechnologyScene from "../three/TechnologyScene";
import ScrollReveal from "../animations/ScrollReveal";

const technologyGroups = [
  {
    number: "01",
    title: "Web & Frontend",
    technologies: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
    link: "/services/web-development",
    linkText: "Explore Web Development →",
  },
  {
    number: "02",
    title: "Backend & APIs",
    technologies: ["Node.js", "Express.js", "REST APIs", "Database"],
    link: "/services/web-development",
    linkText: "Explore Web Solutions →",
  },
  {
    number: "03",
    title: "3D & Immersive",
    technologies: [
      "Three.js",
      "React Three Fiber",
      "Drei",
      "GSAP",
      "Lenis",
    ],
    link: "/services/3d-modeling",
    linkText: "Explore 3D Modeling →",
  },
  {
    number: "04",
    title: "Mobile & Applications",
    technologies: [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
    ],
    link: "/services/app-development",
    linkText: "Explore App Development →",
  },
];

function TechnologySection() {
  return (
    <section className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Technology & Capabilities
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Built With
              <span className="block text-[#D4AF37]">
                Modern Technology
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Riyadvi works across modern web, application and immersive
              technologies to create digital experiences for businesses.
            </p>
          </div>
        </ScrollReveal>

        {/* Technology Grid */}
        <ScrollReveal className="mt-16">
          <div className="grid gap-6 md:grid-cols-2">

            {technologyGroups.map((group) => (
              <Link
                key={group.number}
                to={group.link}
                className="group block border border-white/10 bg-[#050505] p-8 transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-[#080808]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#D4AF37]">
                    {group.number}
                  </span>

                  <span className="text-2xl text-white/20 transition duration-300 group-hover:text-[#D4AF37]">
                    +
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {group.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400 transition duration-300 group-hover:border-[#D4AF37]/40 group-hover:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Explore Link */}
                <p className="mt-8 text-sm font-semibold text-[#D4AF37] transition duration-300 group-hover:translate-x-1">
                  {group.linkText}
                </p>
              </Link>
            ))}

          </div>
        </ScrollReveal>

        {/* 3D Technology Experience */}
        <ScrollReveal className="mt-20">
          <TechnologyScene />
        </ScrollReveal>

      </div>
    </section>
  );
}

export default TechnologySection;