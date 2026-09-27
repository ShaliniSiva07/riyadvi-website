import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function PortfolioDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Portfolio
          </p>

          <h1 className="mt-6 text-4xl font-bold">
            Project Not Found
          </h1>

          <Link
            to="/portfolio"
            className="mt-8 inline-block text-[#D4AF37] hover:underline"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            {project.category}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>

        </div>
      </section>

      {/* Project Overview */}
      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Project Overview
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Bringing Ideas
            <span className="text-[#D4AF37]"> To Life</span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>

        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Technology
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Technologies
            <span className="text-[#D4AF37]"> Used</span>
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-white/10 bg-[#050505] px-6 py-4 text-gray-300 transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                {technology}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Project Process */}
      <section className="bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Our Approach
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            From Concept
            <span className="text-[#D4AF37]"> To Experience</span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              "Research",
              "Design",
              "Development",
              "Launch",
            ].map((step, index) => (
              <div
                key={step}
                className="border border-white/10 bg-black p-7"
              >
                <span className="text-sm text-[#D4AF37]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {step}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  A focused stage in the process of creating a
                  meaningful digital solution.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Start A Project
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Have an idea?
            <span className="block text-[#D4AF37]">
              Let's build it.
            </span>
          </h2>

          <Link
            to="/contact"
            className="mt-10 inline-block bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}

export default PortfolioDetail;