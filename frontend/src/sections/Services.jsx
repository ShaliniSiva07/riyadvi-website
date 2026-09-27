import { Link } from "react-router-dom";
import services from "../data/services";

function Services() {
  return (
    <section className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            What We Do
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Digital Solutions
            <span className="block text-[#D4AF37]">
              Built For Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Explore our technology services designed to help businesses
            build, grow, and transform their digital presence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group border border-white/10 bg-[#050505] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/60"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-[#D4AF37]">
                  {service.number}
                </span>

                <span className="text-xl text-gray-600 transition duration-300 group-hover:text-[#D4AF37]">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-semibold transition duration-300 group-hover:text-[#D4AF37]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                {service.description}
              </p>

              <div className="mt-8 text-sm font-semibold text-[#D4AF37]">
                Explore Service →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;