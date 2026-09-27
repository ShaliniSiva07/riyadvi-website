import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem(
          "adminToken",
          data.token
        );

        navigate("/admin");
      } else {
        setError(
          data.message ||
            "Invalid username or password."
        );
      }
    } catch (error) {
      console.error("Admin login error:", error);

      setError(
        "Unable to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-32 text-white">
      <div className="w-full max-w-md">

        {/* Header */}

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Riyadvi Administration
          </p>

          <h1 className="mt-5 text-4xl font-bold md:text-5xl">
            Admin
            <span className="text-[#D4AF37]">
              {" "}Login
            </span>
          </h1>

          <p className="mt-5 text-gray-500">
            Sign in to access the administration dashboard.
          </p>
        </div>

        {/* Login Form */}

        <div className="mt-10 border border-white/10 bg-[#050505] p-8 md:p-10">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Username */}

            <div>
              <label
                htmlFor="username"
                className="mb-3 block text-sm font-semibold"
              >
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
                autoComplete="username"
                placeholder="Enter username"
                className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
              />
            </div>

            {/* Password */}

            <div>
              <label
                htmlFor="password"
                className="mb-3 block text-sm font-semibold"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                placeholder="Enter password"
                className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#D4AF37]"
              />
            </div>

            {/* Error */}

            {error && (
              <div className="border border-red-500/30 bg-red-500/5 px-4 py-3">
                <p className="text-sm text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Logging in..."
                : "Login to Dashboard →"}
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}

export default AdminLogin;