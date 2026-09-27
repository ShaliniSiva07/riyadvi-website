import { useState } from "react";
import API_URL from "../api";

function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/consultation`, {
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
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        alert(
          data.message ||
          "Failed to submit consultation request."
        );
      }
    } catch (error) {
      console.error(
        "Consultation submission error:",
        error
      );

      alert("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Consultation
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            Let's Discuss
            <span className="block text-[#D4AF37]">
              Your Project.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Tell us about your project requirements and
            our team can explore the right digital solution
            for your business.
          </p>
        </div>

        {/* Form */}

        <div className="mt-20 max-w-4xl border border-white/10 bg-[#050505] p-8 md:p-12">

          {!submitted ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Request a Consultation
              </p>

              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                Tell us about your requirements
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
                    placeholder="Enter your full name"
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
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
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                  />
                </div>

                {/* Phone */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
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
                    placeholder="Enter your company name"
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                  />
                </div>

                {/* Service */}

                <div>
                  <label
                    htmlFor="service"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="App Development">
                      App Development
                    </option>

                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>

                    <option value="AR / VR">
                      AR / VR
                    </option>

                    <option value="3D Modeling">
                      3D Modeling
                    </option>

                    <option value="UI/UX Design">
                      UI/UX Design
                    </option>
                  </select>
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Project Requirements
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="7"
                    placeholder="Tell us about your project..."
                    className="w-full resize-none border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : "Request Consultation →"}
                </button>

              </form>
            </>
          ) : (
            /* Success */

            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

              <div className="flex h-16 w-16 items-center justify-center border border-[#D4AF37] text-2xl text-[#D4AF37]">
                ✓
              </div>

              <h2 className="mt-8 text-3xl font-bold">
                Consultation Request Received
              </h2>

              <p className="mt-5 max-w-md leading-7 text-gray-500">
                Thank you for reaching out. Your consultation
                request has been submitted successfully.
              </p>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}

export default Consultation;