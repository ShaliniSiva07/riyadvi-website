const timeline = [
  {
    year: "2021",
    title: "Company Foundation",
    description:
      "Riyadvi Software Technologies began with a vision to provide technology solutions for modern business challenges.",
  },
  {
    year: "2022",
    title: "Market Expansion",
    description:
      "The company expanded its offerings with additional services including mobile app development and digital marketing.",
  },
  {
    year: "2023",
    title: "International Expansion",
    description:
      "Riyadvi expanded its client base into Australia, establishing an international presence.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description:
      "Riyadvi's website states that the company received the Star of Excellence Award from the National Integrity Cultural Academy.",
  },
];

function About() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            About Riyadvi
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Empowering
            <span className="block text-[#D4AF37]">
              Digital Innovation
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Riyadvi Software Technologies focuses on software solutions
            that help businesses improve growth, efficiency, and
            digital capabilities.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our Story
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              From Vision
              <span className="block text-[#D4AF37]">
                To Digital Solutions
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              Riyadvi Software Technologies began with a vision to
              provide comprehensive software solutions that address
              the unique needs of modern businesses.
            </p>

            <p>
              The company describes its approach as focused on helping
              businesses transform their IT infrastructure, streamline
              operations, and enhance productivity.
            </p>

            <p>
              Customer satisfaction is positioned at the heart of
              Riyadvi's approach, with an emphasis on understanding
              individual client needs and continuously improving its
              solutions.
            </p>
          </div>

        </div>
      </section>

      {/* Mission Vision Goal */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            What Drives Us
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Mission, Vision
            <span className="text-[#D4AF37]"> & Goal</span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="border border-white/10 bg-[#050505] p-8">
              <span className="text-sm text-[#D4AF37]">01</span>

              <h3 className="mt-8 text-2xl font-semibold">
                Mission
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Deliver exceptional service and products that
                consistently exceed customer expectations.
              </p>
            </div>

            <div className="border border-white/10 bg-[#050505] p-8">
              <span className="text-sm text-[#D4AF37]">02</span>

              <h3 className="mt-8 text-2xl font-semibold">
                Vision
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Become a trusted and customer-centric company by
                creating long-lasting relationships with clients.
              </p>
            </div>

            <div className="border border-white/10 bg-[#050505] p-8">
              <span className="text-sm text-[#D4AF37]">03</span>

              <h3 className="mt-8 text-2xl font-semibold">
                Goal
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Continuously improve and innovate to provide customers
                with the best possible experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Company Journey
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Our
            <span className="text-[#D4AF37]"> Timeline</span>
          </h2>

          <div className="mt-16 space-y-6">

            {timeline.map((item) => (
              <div
                key={item.year}
                className="group grid gap-6 border-t border-white/10 py-8 md:grid-cols-[160px_1fr] md:items-start"
              >
                <div className="text-3xl font-bold text-[#D4AF37]">
                  {item.year}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold transition duration-300 group-hover:text-[#D4AF37]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}

export default About;