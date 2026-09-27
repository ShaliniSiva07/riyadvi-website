import { useState } from "react";

function LeadMagnet() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/lead-magnet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          company: "",
        });
      } else {
        alert(
          data.message ||
            "Failed to submit lead magnet request."
        );
      }
    } catch (error) {
      console.error("Lead Magnet submission error:", error);
      alert("Unable to connect to the server.");
    }
  };

  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Free Resource
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Software Project
            <span className="block text-[#D4AF37]">
              Planning Guide
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Get a practical guide to help you plan your next software
            project, from understanding requirements to choosing the right
            technology and development approach.
          </p>

        </div>
      </section>

      {/* Resource + Form */}
      <section className="border-y border-white/10 bg-[#050505] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">

          {/* Benefits */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              What's Inside
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Plan Your Project
              <span className="block text-[#D4AF37]">
                With Confidence
              </span>
            </h2>

            <div className="mt-10 space-y-5">

              {[
                "Define clear project requirements",
                "Understand important development stages",
                "Choose suitable technologies",
                "Plan your project scope and goals",
                "Prepare for a successful development process",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-white/10 pb-5"
                >
                  <span className="text-sm font-semibold text-[#D4AF37]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-gray-400">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Form */}
          <div className="border border-white/10 bg-black p-8 md:p-10">

            {!submitted ? (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Get The Guide
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Enter your details
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-7"
                >

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-semibold"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full border border-white/10 bg-[#050505] px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-semibold"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full border border-white/10 bg-[#050505] px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-3 block text-sm font-semibold"
                    >
                      Company Name
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Enter your company name"
                      className="w-full border border-white/10 bg-[#050505] px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
                  >
                    Get The Guide →
                  </button>

                </form>
              </>
            ) : (
              <div className="py-10 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#D4AF37] text-2xl text-[#D4AF37]">
                  ✓
                </div>

                <h2 className="mt-8 text-3xl font-bold">
                  Request Received
                </h2>

                <p className="mt-5 leading-7 text-gray-500">
                  Thank you for your interest. Your software project
                  planning guide request has been received.
                </p>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Need More Help?
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Let's discuss your
            <span className="block text-[#D4AF37]">
              software project.
            </span>
          </h2>

        </div>
      </section>

    </main>
  );
}

export default LeadMagnet;