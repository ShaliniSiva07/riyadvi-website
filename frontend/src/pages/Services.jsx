import { Link } from "react-router-dom";

import services from "../data/services";
import ScrollReveal from "../animations/ScrollReveal";

function Services() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our Services
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Digital Solutions
              <span className="block text-[#D4AF37]">
                Built For Growth.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Explore our range of technology, design, marketing, and
              immersive digital services created to support modern
              business requirements.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* Services Grid */}

      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <div className="mb-14 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                What We Do
              </p>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Our Core
                <span className="text-[#D4AF37]">
                  {" "}Services
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">

            {services.map((service) => (
              <ScrollReveal key={service.slug}>

                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full border border-white/10 bg-black p-8 transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60 md:p-10"
                >
                  <div className="flex items-center justify-between">

                    <span className="text-sm font-semibold text-[#D4AF37]">
                      {service.number}
                    </span>

                    <span className="text-2xl text-white/20 transition duration-300 group-hover:translate-x-2 group-hover:text-[#D4AF37]">
                      ↗
                    </span>

                  </div>

                  <h3 className="mt-12 text-3xl font-semibold transition duration-300 group-hover:text-[#D4AF37]">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-7 text-gray-500">
                    {service.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="border border-white/10 px-3 py-2 text-xs text-gray-500 transition duration-300 group-hover:border-[#D4AF37]/30 group-hover:text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}

                  </div>

                  <div className="mt-10 h-px w-0 bg-[#D4AF37] transition-all duration-700 group-hover:w-full" />

                  <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                    Explore Service →
                  </p>

                </Link>

              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <ScrollReveal>
        <section className="px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Have a Project?
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Let's Build Your
              <span className="block text-[#D4AF37]">
                Digital Future.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              Tell us about your project and explore the right technology
              solution for your business.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                to="/consultation"
                className="bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
              >
                Request Consultation →
              </Link>

              <Link
                to="/contact"
                className="border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                Contact Us
              </Link>

            </div>

          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}

export default Services;