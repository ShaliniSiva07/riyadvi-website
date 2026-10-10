import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const transformationSteps = [
  {
    number: "01",
    title: "Business Challenge",
    description:
      "We understand your business challenges, goals, customers, and opportunities before selecting the right digital direction.",
    keyword: "Understand",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We transform business objectives into a clear technology and digital strategy designed for measurable growth.",
    keyword: "Plan",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create intuitive, premium experiences that connect your brand, users, and business objectives.",
    keyword: "Create",
  },
  {
    number: "04",
    title: "Technology",
    description:
      "We combine modern web, mobile, cloud, AI, 3D, and scalable software technologies to build the solution.",
    keyword: "Build",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test, optimize, deploy, and bring the digital experience to life with performance and reliability in mind.",
    keyword: "Deliver",
  },
  {
    number: "06",
    title: "Growth",
    description:
      "We continuously improve the product using insights, technology, and optimization to support long-term business growth.",
    keyword: "Scale",
  },
];

function DigitalTransformation() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      // Initial states
      gsap.set(cards, {
        opacity: 0.25,
        y: 40,
        scale: 0.96,
      });

      gsap.set(cards[0], {
        opacity: 1,
        y: 0,
        scale: 1,
      });

      // Scroll-driven card animation
      cards.forEach((card, index) => {
        if (index === 0) return;

        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            end: "top 35%",
            scrub: true,
          },
        });
      });

      // Vertical progress line
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      // Heading entrance
      gsap.from(".transformation-heading", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Description entrance
      gsap.from(".transformation-intro", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white md:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[45%] h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Digital Transformation
          </p>

          <h2 className="transformation-heading text-4xl font-bold leading-tight md:text-6xl">
            From Business
            <span className="block text-[#D4AF37]">
              Challenge to Growth.
            </span>
          </h2>

          <p className="transformation-intro mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            We combine business thinking, design, technology and continuous
            optimization to transform ideas into digital experiences that
            create measurable value.
          </p>
        </div>

        {/* Transformation timeline */}
        <div className="relative">

          {/* Timeline background */}
          <div className="absolute left-[23px] top-0 h-full w-px bg-white/10 md:left-[31px]" />

          {/* Animated progress */}
          <div
            ref={progressRef}
            className="absolute left-[23px] top-0 h-full w-px origin-top scale-y-0 bg-[#D4AF37] md:left-[31px]"
          />

          <div className="space-y-10 md:space-y-14">
            {transformationSteps.map((step, index) => (
              <div
                key={step.number}
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                className="group relative pl-16 md:pl-24"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#050505] md:h-16 md:w-16">
                  <span className="text-xs font-semibold text-[#D4AF37] md:text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-500 group-hover:border-[#D4AF37]/40 group-hover:bg-white/[0.04] md:p-10">

                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
                        {step.keyword}
                      </p>

                      <h3 className="text-2xl font-bold md:text-4xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
                        {step.description}
                      </p>
                    </div>

                    {/* Step indicator */}
                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 md:flex">
                      <span className="text-xl text-[#D4AF37]">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Bottom decorative line */}
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-24 border-t border-white/10 pt-10">
          <p className="max-w-3xl text-2xl font-medium leading-relaxed text-gray-300 md:text-4xl">
            Strategy meets technology.
            <span className="text-[#D4AF37]">
              {" "}Innovation becomes growth.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default DigitalTransformation;