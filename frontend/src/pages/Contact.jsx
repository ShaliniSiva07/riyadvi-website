import { useState } from "react";
import API_URL from "../api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      const response = await fetch(`${API_URL}/api/contact`, {
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
          message: "",
        });
      } else {
        alert(
          data.message ||
          "Failed to send your enquiry."
        );
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      alert("Unable to connect to the server.");
    }
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Contact Riyadvi
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            Let's Build Something
            <span className="block text-[#D4AF37]">
              Meaningful Together.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project idea, business requirement, or digital challenge?
            Tell us about it and our team can explore the right technology
            solution for you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="border border-white/10 bg-[#050505] p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Get In Touch
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Tell us about your project
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Whether you are planning a new website, application,
              digital marketing campaign, AR/VR experience, 3D project,
              or UI/UX solution, you can reach out to us.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <p className="mt-2 text-lg">
                  info@riyadvi.com
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Phone
                </p>

                <p className="mt-2 text-lg">
                  +91 99449 30003
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Location
                </p>

                <p className="mt-2 leading-7 text-gray-300">
                  Chennai, Tamil Nadu, India
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-white/10 bg-[#050505] p-8 md:p-10">

            {!submitted ? (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Send Enquiry
                </p>

                <h2 className="mt-5 text-3xl font-bold">
                  Start a conversation
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

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-semibold"
                    >
                      Message
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
                    className="w-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
                  >
                    Send Enquiry →
                  </button>

                </form>
              </>
            ) : (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center border border-[#D4AF37] text-2xl text-[#D4AF37]">
                  ✓
                </div>

                <h2 className="mt-8 text-3xl font-bold">
                  Enquiry Received
                </h2>

                <p className="mt-5 max-w-md leading-7 text-gray-500">
                  Thank you for contacting Riyadvi. Your enquiry has been
                  received successfully.
                </p>

              </div>
            )}

          </div>

        </div>
      </div>
    </main>
  );
}

export default Contact;