import { Link } from "react-router-dom";
import HeroScene from "../three/HeroScene";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <div className="z-10">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Riyadvi Software Technologies
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Innovative Solutions
            <span className="block text-[#D4AF37]">
              To Move Your Business Forward
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Empowering businesses with cutting-edge software solutions
            that drive growth, efficiency, and digital innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            {/* Contact Now */}
            <Link
              to="/contact"
              className="rounded-full bg-[#D4AF37] px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#e5c04b]"
            >
              Contact Now
            </Link>

            {/* Explore Services */}
            <Link
              to="/services"
              className="rounded-full border border-[#D4AF37] px-7 py-3 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              Explore Services
            </Link>

          </div>
        </div>

        {/* Right Visual */}
        {/* 3D Experience */}
        <div className="relative h-[500px]">
          <HeroScene />
        </div>

      </div>
    </section>
  );
}

export default Hero;