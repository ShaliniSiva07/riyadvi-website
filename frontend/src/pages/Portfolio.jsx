import { Link } from "react-router-dom";
import projects from "../data/projects";

function Portfolio() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Our Work
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Digital Experiences
            <span className="block text-[#D4AF37]">
              That Make An Impact
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Explore selected digital solutions and interactive experiences
            created across different industries and technology domains.
          </p>

        </div>
      </section>

      {/* Projects */}
      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/portfolio/${project.slug}`}
                className="group border border-white/10 bg-black p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/60"
              >

                {/* Project Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#D4AF37]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xl text-gray-600 transition duration-300 group-hover:text-[#D4AF37]">
                    ↗
                  </span>
                </div>

                {/* Project Info */}
                <p className="mt-16 text-sm uppercase tracking-wider text-gray-500">
                  {project.category}
                </p>

                <h2 className="mt-3 text-3xl font-semibold transition duration-300 group-hover:text-[#D4AF37]">
                  {project.title}
                </h2>

                <p className="mt-5 leading-7 text-gray-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 px-3 py-2 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 text-sm font-semibold text-[#D4AF37]">
                  View Case Study →
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Have A Project?
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Let's create something
            <span className="block text-[#D4AF37]">
              extraordinary.
            </span>
          </h2>

          <Link
            to="/contact"
            className="mt-10 inline-block bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Start a Conversation
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Portfolio;