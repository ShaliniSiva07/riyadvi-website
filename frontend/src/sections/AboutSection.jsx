function AboutSection() {
  return (
    <section className="bg-[#050505] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Empowering
              <span className="block text-[#D4AF37]">
                Digital Innovation
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-gray-400">
            Riyadvi Software Technologies is dedicated to delivering
            software solutions that help businesses improve efficiency,
            innovation, and digital capabilities.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {/* Mission */}
          <div className="border border-white/10 bg-black p-8 transition duration-500 hover:border-[#D4AF37]/50">
            <span className="text-sm font-semibold text-[#D4AF37]">
              01
            </span>

            <h3 className="mt-8 text-2xl font-semibold">
              Mission
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              Deliver exceptional service and products that consistently
              exceed customer expectations.
            </p>
          </div>

          {/* Vision */}
          <div className="border border-white/10 bg-black p-8 transition duration-500 hover:border-[#D4AF37]/50">
            <span className="text-sm font-semibold text-[#D4AF37]">
              02
            </span>

            <h3 className="mt-8 text-2xl font-semibold">
              Vision
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              Become a trusted and customer-centric company by creating
              long-lasting relationships with clients.
            </p>
          </div>

          {/* Goal */}
          <div className="border border-white/10 bg-black p-8 transition duration-500 hover:border-[#D4AF37]/50">
            <span className="text-sm font-semibold text-[#D4AF37]">
              03
            </span>

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
  );
}

export default AboutSection;