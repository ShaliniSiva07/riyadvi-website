import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";

function Application() {
  const { slug } = useParams();

  const job = jobs.find((item) => item.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = new FormData();

      data.append("jobTitle", job.title);
      data.append("fullName", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("coverLetter", formData.coverLetter);

      if (formData.resume) {
        data.append("resume", formData.resume);
      }

      const response = await fetch(
        "https://riyadvi-website-backend.vercel.app/api/applications",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Application submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: null,
          coverLetter: "",
        });

        document.getElementById("resume").value = "";
      } else {
        alert(
          result.message ||
            "Failed to submit application."
        );
      }
    } catch (error) {
      console.error(
        "Application submission error:",
        error
      );

      alert("Unable to connect to the server.");
    }
  };

  if (!job) {
    return (
      <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">
            Job Not Found
          </h1>

          <Link
            to="/careers"
            className="mt-8 inline-block text-[#D4AF37] hover:underline"
          >
            ← Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Career Application
          </p>

          <h1 className="mt-5 text-4xl font-bold md:text-6xl">
            Apply for
            <span className="block text-[#D4AF37]">
              {job.title}
            </span>
          </h1>

          <p className="mt-5 text-gray-500">
            {job.location} • {job.type}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 border border-white/10 bg-[#050505] p-8 md:p-10"
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

          {/* Resume */}
          <div>
            <label
              htmlFor="resume"
              className="mb-3 block text-sm font-semibold"
            >
              Resume
            </label>

            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full border border-white/10 bg-black px-4 py-4 text-gray-400 file:mr-4 file:border-0 file:bg-[#D4AF37] file:px-4 file:py-2 file:font-semibold file:text-black"
            />

            <p className="mt-2 text-xs text-gray-500">
              Accepted formats: PDF, DOC, DOCX
            </p>
          </div>

          {/* Cover Letter */}
          <div>
            <label
              htmlFor="coverLetter"
              className="mb-3 block text-sm font-semibold"
            >
              Cover Letter
            </label>

            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="7"
              placeholder="Tell us why you are interested in this role..."
              className="w-full resize-none border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Submit Application
          </button>

        </form>

      </div>
    </main>
  );
}

export default Application;