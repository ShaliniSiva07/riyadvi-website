import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScene from "../three/HeroScene";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const sceneRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------------------------------------------
      // Initial Hero entrance animation
      // ---------------------------------------------

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          badgeRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          }
        )
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.4"
        )
        .fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .fromTo(
          buttonsRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .fromTo(
  sceneRef.current,
  {
    opacity: 0,
    scale: 0.85,
    x: 50,
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
  },
  "-=0.6"
);

      // ---------------------------------------------
      // Scroll-based Hero animation
      // ---------------------------------------------

      gsap.to(contentRef.current, {
        y: -80,
        opacity: 0.25,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(sceneRef.current, {
  y: -80,
  scale: 0.92,
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});

      // ---------------------------------------------
      // Subtle title movement during scroll
      // ---------------------------------------------

      gsap.to(titleRef.current, {
        x: -40,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

        <div className="absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[140px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <div
          ref={contentRef}
          className="relative z-10"
        >
          {/* Company label */}
          <p
            ref={badgeRef}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            Riyadvi Software Technologies
          </p>

          {/* Main heading */}
          <h1
            ref={titleRef}
            className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Innovative Solutions

            <span className="block text-[#D4AF37]">
              To Move Your Business Forward
            </span>
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-400"
          >
            Empowering businesses with cutting-edge software solutions
            that drive growth, efficiency, and digital innovation.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group rounded-full bg-[#D4AF37] px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#e5c04b]"
            >
              Contact Now

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-[#D4AF37] px-7 py-3 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              Explore Services
            </Link>
          </div>

          {/* Technology indicators */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["AI", "3D", "Cloud", "Digital"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-gray-400 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div
          ref={sceneRef}
          className="relative h-[500px] w-full"
        >
          <HeroScene />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-gray-500 md:flex">
        <span className="text-[10px] uppercase tracking-[0.35em]">
          Scroll to explore
        </span>

        <div className="h-10 w-[1px] overflow-hidden bg-white/10">
          <div className="h-1/2 w-full animate-pulse bg-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;