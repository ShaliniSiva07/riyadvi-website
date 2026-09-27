import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetail() {
  const { slug } = useParams();

  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    return (
      <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Careers
          </p>

          <h1 className="mt-6 text-4xl font-bold">
            Job Not Found
          </h1>

          <Link
            to="/careers"
            className="mt-8 inline-block text-[#D4AF37] hover:underline"
          >
            ← Back to Careers
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
            {job.department}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            {job.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.type}</span>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            {job.description}
          </p>

        </div>
      </section>

      {/* Responsibilities */}
      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            The Role
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Responsibilities
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {job.responsibilities.map((responsibility, index) => (
              <div
                key={responsibility}
                className="border border-white/10 bg-black p-7"
              >
                <span className="text-sm text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-5 text-lg leading-7 text-gray-300">
                  {responsibility}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Requirements
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Skills & Technologies
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="border border-white/10 bg-[#050505] px-6 py-4 text-gray-300 transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Apply CTA */}
      <section className="border-t border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Join Riyadvi
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Ready to take the
            <span className="block text-[#D4AF37]">
              next step?
            </span>
          </h2>

          <Link
            to={`/careers/${job.slug}/apply`}
            className="mt-10 inline-block bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Apply Now
          </Link>

        </div>
      </section>

    </main>
  );
}

export default JobDetail;