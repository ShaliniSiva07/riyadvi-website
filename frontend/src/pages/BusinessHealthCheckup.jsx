import { useState } from "react";

function BusinessHealthCheckup() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    industry: "",
    challenge: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const nextStep = () => {
    const requiredFields =
      step === 1
        ? ["name", "email", "company"]
        : ["industry"];

    const isValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isValid) {
      alert("Please fill in all required fields before continuing.");
      return;
    }

    setStep((previous) => previous + 1);
  };

  const previousStep = () => {
    setStep((previous) => previous - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/health-checkup",
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
        alert("Business health checkup submitted successfully!");

        setFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          industry: "",
          challenge: "",
        });

        setStep(1);
      } else {
        alert(
          data.message ||
            "Failed to submit business health checkup."
        );
      }
    } catch (error) {
      console.error("Health Checkup submission error:", error);
      alert("Unable to connect to the server.");
    }
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Business Health Checkup
          </p>

          <h1 className="mt-5 text-4xl font-bold md:text-6xl">
            Understand Your
            <span className="block text-[#D4AF37]">
              Digital Health
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Tell us about your business and some of the challenges you are
            facing. We will use this information to understand your digital
            needs.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-sm">
            <span
              className={
                step >= 1
                  ? "text-[#D4AF37]"
                  : "text-gray-600"
              }
            >
              01
            </span>

            <span
              className={
                step >= 2
                  ? "text-[#D4AF37]"
                  : "text-gray-600"
              }
            >
              02
            </span>

            <span
              className={
                step >= 3
                  ? "text-[#D4AF37]"
                  : "text-gray-600"
              }
            >
              03
            </span>
          </div>

          <div className="mt-3 h-1 bg-white/10">
            <div
              className="h-1 bg-[#D4AF37] transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="border border-white/10 bg-[#050505] p-8 md:p-10"
        >

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Step 01
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Tell us about you
              </h2>

              <div className="mt-10 space-y-7">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Company Name
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company name"
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>

              </div>

              <button
                type="button"
                onClick={nextStep}
                className="mt-10 w-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:bg-white"
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Step 02
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Tell us about your business
              </h2>

              <div className="mt-10 space-y-7">

                <div>
                  <label
                    htmlFor="website"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Website
                  </label>

                  <input
                    id="website"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Industry
                  </label>

                  <input
                    id="industry"
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Healthcare, Education, Retail"
                    className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>

              </div>

              <div className="mt-10 flex gap-4">

                <button
                  type="button"
                  onClick={previousStep}
                  className="w-1/2 border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  ← Back
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-1/2 bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:bg-white"
                >
                  Continue →
                </button>

              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Step 03
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                What is your biggest challenge?
              </h2>

              <div className="mt-10">
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  rows="8"
                  placeholder="Tell us about your current business or digital challenge..."
                  className="w-full resize-none border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="mt-10 flex gap-4">

                <button
                  type="button"
                  onClick={previousStep}
                  className="w-1/2 border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="w-1/2 bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:bg-white"
                >
                  Submit Checkup
                </button>

              </div>
            </div>
          )}

        </form>
      </div>
    </main>
  );
}

export default BusinessHealthCheckup;