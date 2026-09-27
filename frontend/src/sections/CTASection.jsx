import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">

      {/* Gold Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Let's Build Together
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Ready to Turn Your
          <span className="block text-[#D4AF37]">
            Ideas Into Reality?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Let's create meaningful digital experiences and solutions
          that move your business forward.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {/* Start a Conversation */}
          <Link
            to="/consultation"
            className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#e5c04b]"
          >
            Start a Conversation
          </Link>

          {/* Contact Us */}
{/* Contact Us */}
<Link
  to="/contact"
  className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
>
  Contact Us
</Link>

{/* Business Health Checkup */}
<Link
  to="/business-health-checkup"
  className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
>
  Business Health Checkup
</Link>

        </div>

      </div>
    </section>
  );
}

export default CTASection;