import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import services from "../data/services";
import ServicesScene from "../three/ServicesScene";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const [activeService, setActiveService] = useState(0);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Section heading animation
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    // Animate each service card individually
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        }
      );
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);
  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-10%] bottom-[10%] h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div
          ref={headingRef}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            What We Do
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
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

        {/* Main experience */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">

          {/* Service list */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  ref={(element) => {
                    cardsRef.current[index] = element;
                  }}
                  onMouseEnter={() => setActiveService(index)}
                  className={`group relative block overflow-hidden rounded-2xl border p-6 transition-all duration-500 md:p-7 ${
                    isActive
                      ? "border-[#D4AF37]/60 bg-[#D4AF37]/[0.06]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  {/* Active glow */}
                  <div
                    className={`absolute inset-y-0 left-0 w-1 bg-[#D4AF37] transition-opacity duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  <div className="flex items-center justify-between gap-5">

                    <div className="flex items-center gap-5">

                      {/* Number */}
                      <span
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-[#D4AF37]"
                            : "text-gray-600"
                        }`}
                      >
                        {service.number}
                      </span>

                      <div>
                        <h3
                          className={`text-xl font-semibold transition-colors duration-300 md:text-2xl ${
                            isActive
                              ? "text-[#D4AF37]"
                              : "text-white"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500 md:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`shrink-0 text-xl transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-[#D4AF37]"
                          : "text-gray-600"
                      }`}
                    >
                      ↗
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 h-px w-full bg-white/5">
                    <div
                      className={`h-full bg-[#D4AF37] transition-all duration-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* 3D Visual */}
          <div className="sticky top-24 hidden overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] lg:block">

            {/* Label */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Interactive Experience
                </p>

                <p className="mt-1 text-sm font-medium text-[#D4AF37]">
                  {services[activeService]?.title}
                </p>
              </div>

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
            </div>

            <ServicesScene serviceIndex={activeService} />

            <div className="border-t border-white/10 px-6 py-5">
              <p className="text-sm leading-6 text-gray-500">
                Hover over a service to explore its interactive
                technology experience.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile visual */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] lg:hidden">
          <ServicesScene serviceIndex={activeService} />
        </div>

      </div>
    </section>
  );
}

export default Services;