import { Link } from "react-router-dom";
import jobs from "../data/jobs";

function Careers() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Careers
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Build The Future
            <span className="block text-[#D4AF37]">
              With Riyadvi
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Explore opportunities to work on modern digital solutions,
            interactive experiences, and technology-driven products.
          </p>

        </div>
      </section>

      {/* Job Listings */}
      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Open Positions
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Find Your
              <span className="text-[#D4AF37]"> Opportunity</span>
            </h2>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <Link
                key={job.slug}
                to={`/careers/${job.slug}`}
                className="group grid gap-6 border border-white/10 bg-black p-7 transition duration-300 hover:border-[#D4AF37]/60 md:grid-cols-[80px_1fr_auto] md:items-center"
              >

                <span className="text-sm font-semibold text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold transition duration-300 group-hover:text-[#D4AF37]">
                    {job.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                <span className="text-sm font-semibold text-[#D4AF37]">
                  View Role →
                </span>

              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Culture */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Why Join Us
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Learn.
              <span className="text-[#D4AF37]"> Create.</span>
              <br />
              Grow.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="border border-white/10 bg-[#050505] p-7">
              <h3 className="text-xl font-semibold">
                Innovation
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Work on modern technologies and creative digital solutions.
              </p>
            </div>

            <div className="border border-white/10 bg-[#050505] p-7">
              <h3 className="text-xl font-semibold">
                Collaboration
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Work together across development, design, and technology.
              </p>
            </div>

            <div className="border border-white/10 bg-[#050505] p-7">
              <h3 className="text-xl font-semibold">
                Growth
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Develop your skills through real-world digital projects.
              </p>
            </div>

            <div className="border border-white/10 bg-[#050505] p-7">
              <h3 className="text-xl font-semibold">
                Creativity
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Bring new ideas to interactive and technology-driven
                experiences.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Your Next Chapter
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Ready to build
            <span className="block text-[#D4AF37]">
              something meaningful?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            Explore our current opportunities and find a role that
            matches your skills and interests.
          </p>

        </div>
      </section>

    </main>
  );
}

export default Careers;