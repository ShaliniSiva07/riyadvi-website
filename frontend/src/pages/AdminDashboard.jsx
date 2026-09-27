import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../api";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const [contacts, setContacts] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [applications, setApplications] = useState([]);
  const [healthCheckups, setHealthCheckups] = useState([]);
  const [leadMagnets, setLeadMagnets] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error("Admin authentication token not found.");
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [
        contactsResponse,
        consultationsResponse,
        applicationsResponse,
        healthCheckupsResponse,
        leadMagnetsResponse,
     ] = await Promise.all([
  fetch(`${API_URL}/api/admin/contacts`, {
    headers,
  }),

  fetch(`${API_URL}/api/admin/consultations`, {
    headers,
  }),

  fetch(`${API_URL}/api/admin/applications`, {
    headers,
  }),

  fetch(`${API_URL}/api/admin/health-checkups`, {
    headers,
  }),

  fetch(`${API_URL}/api/admin/lead-magnets`, {
    headers,
  }),
]);

      if (
        contactsResponse.status === 401 ||
        consultationsResponse.status === 401 ||
        applicationsResponse.status === 401 ||
        healthCheckupsResponse.status === 401 ||
        leadMagnetsResponse.status === 401
      ) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      if (
        !contactsResponse.ok ||
        !consultationsResponse.ok ||
        !applicationsResponse.ok ||
        !healthCheckupsResponse.ok ||
        !leadMagnetsResponse.ok
      ) {
        if (
          contactsResponse.status === 401 ||
          consultationsResponse.status === 401 ||
          applicationsResponse.status === 401 ||
          healthCheckupsResponse.status === 401 ||
          leadMagnetsResponse.status === 401
        ) {
          localStorage.removeItem("adminToken");
          window.location.href = "/admin/login";
          return;
        }

        throw new Error("Failed to fetch admin data.");
      }

      const [
        contactsData,
        consultationsData,
        applicationsData,
        healthCheckupsData,
        leadMagnetsData,
      ] = await Promise.all([
        contactsResponse.json(),
        consultationsResponse.json(),
        applicationsResponse.json(),
        healthCheckupsResponse.json(),
        leadMagnetsResponse.json(),
      ]);

      setContacts(contactsData.data || []);
      setConsultations(consultationsData.data || []);
      setApplications(applicationsData.data || []);
      setHealthCheckups(healthCheckupsData.data || []);
      setLeadMagnets(leadMagnetsData.data || []);
    } catch (error) {
      console.error("Admin dashboard error:", error);

      setError(
        "Unable to load dashboard data. Please make sure the backend server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const stats = [
    {
      title: "Contact Enquiries",
      value: contacts.length,
      label: "Total enquiries",
    },
    {
      title: "Consultations",
      value: consultations.length,
      label: "Consultation requests",
    },
    {
      title: "Applications",
      value: applications.length,
      label: "Career applications",
    },
    {
      title: "Health Checkups",
      value: healthCheckups.length,
      label: "Business assessments",
    },
    {
      title: "Lead Magnets",
      value: leadMagnets.length,
      label: "Guide requests",
    },
  ];

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Riyadvi Administration
            </p>

            <h1 className="mt-5 text-5xl font-bold md:text-6xl">
              Admin
              <span className="text-[#D4AF37]">
                {" "}Dashboard
              </span>
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              Manage enquiries, consultation requests, career applications,
              business health checkups, and lead magnet submissions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={fetchAdminData}
              disabled={loading}
              className="border border-[#D4AF37] px-6 py-3 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Refreshing..." : "Refresh Data ↻"}
            </button>

            <button
              onClick={handleLogout}
              className="border border-red-500/50 px-6 py-3 font-semibold text-red-400 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              Logout
            </button>
          </div>
        </div>
        {/* Loading */}

        {loading && (
          <div className="mt-16 border border-white/10 bg-[#050505] p-10 text-center">
            <p className="text-gray-400">
              Loading dashboard data...
            </p>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="mt-16 border border-red-500/30 bg-red-500/5 p-8">
            <p className="text-red-400">
              {error}
            </p>
          </div>
        )}

        {/* Dashboard */}

        {!loading && !error && (
          <>
            {/* Statistics */}

            <section className="mt-16">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="border border-white/10 bg-[#050505] p-7 transition duration-500 hover:border-[#D4AF37]/60"
                  >
                    <p className="text-sm text-gray-500">
                      {stat.title}
                    </p>

                    <p className="mt-5 text-5xl font-bold text-[#D4AF37]">
                      {stat.value}
                    </p>

                    <p className="mt-3 text-sm text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}

              </div>
            </section>

            {/* Recent Consultations */}

            <section className="mt-16">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Consultation Requests
                  </p>

                  <h2 className="mt-4 text-3xl font-bold">
                    Recent Consultations
                  </h2>
                </div>
              </div>

              <div className="mt-8 overflow-x-auto border border-white/10 bg-[#050505]">
                {consultations.length === 0 ? (
                  <div className="p-8 text-gray-500">
                    No consultation requests yet.
                  </div>
                ) : (
                  <table className="w-full min-w-[900px] text-left">
                    <thead className="border-b border-white/10">
                      <tr>
                        <th className="px-6 py-5 text-sm text-gray-500">
                          Name
                        </th>

                        <th className="px-6 py-5 text-sm text-gray-500">
                          Email
                        </th>

                        <th className="px-6 py-5 text-sm text-gray-500">
                          Company
                        </th>

                        <th className="px-6 py-5 text-sm text-gray-500">
                          Service
                        </th>

                        <th className="px-6 py-5 text-sm text-gray-500">
                          Message
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {consultations.map((item) => (
                        <tr
                          key={item._id}
                          className="border-b border-white/5 transition hover:bg-white/[0.02]"
                        >
                          <td className="px-6 py-5 font-medium">
                            {item.name}
                          </td>

                          <td className="px-6 py-5 text-gray-400">
                            {item.email}
                          </td>

                          <td className="px-6 py-5 text-gray-400">
                            {item.company || "-"}
                          </td>

                          <td className="px-6 py-5 text-[#D4AF37]">
                            {item.service}
                          </td>

                          <td className="max-w-xs px-6 py-5 text-gray-500">
                            {item.message || "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </section>

            {/* Contact Enquiries */}

            <section className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Contact Enquiries
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Recent Enquiries
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                {contacts.length === 0 ? (
                  <div className="border border-white/10 bg-[#050505] p-8 text-gray-500">
                    No contact enquiries yet.
                  </div>
                ) : (
                  contacts.map((item) => (
                    <div
                      key={item._id}
                      className="border border-white/10 bg-[#050505] p-7 transition duration-300 hover:border-[#D4AF37]/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold">
                            {item.name}
                          </h3>

                          <p className="mt-2 text-sm text-[#D4AF37]">
                            {item.email}
                          </p>
                        </div>

                        <span className="text-sm text-gray-600">
                          Enquiry
                        </span>
                      </div>

                      <p className="mt-6 leading-7 text-gray-500">
                        {item.message}
                      </p>
                    </div>
                  ))
                )}

              </div>
            </section>

            {/* Applications */}

            <section className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Careers
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Career Applications
              </h2>

              <div className="mt-8 overflow-x-auto border border-white/10 bg-[#050505]">
                {applications.length === 0 ? (
                  <div className="p-8 text-gray-500">
                    No applications yet.
                  </div>
                ) : (
                  <table className="w-full min-w-[850px] text-left">
                    <thead className="border-b border-white/10">
                      <tr>
                        <th className="px-6 py-5 text-sm text-gray-500">
                          Applicant
                        </th>

                        <th className="px-6 py-5 text-sm text-gray-500">
                          Email
                        </th>

                        <th className="px-6 py-5 text-sm text-gray-500">
                          Phone
                        </th>

                        <th className="px-6 py-5 text-sm text-gray-500">
                          Position
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {applications.map((item) => (
                        <tr
                          key={item._id}
                          className="border-b border-white/5"
                        >
                          <td className="px-6 py-5 font-medium">
                            {item.fullName}
                          </td>

                          <td className="px-6 py-5 text-gray-400">
                            {item.email}
                          </td>

                          <td className="px-6 py-5 text-gray-400">
                            {item.phone}
                          </td>

                          <td className="px-6 py-5 text-[#D4AF37]">
                            {item.jobTitle}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </section>

            {/* Health Checkups */}

            <section className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Business Health
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Health Checkup Requests
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                {healthCheckups.length === 0 ? (
                  <div className="border border-white/10 bg-[#050505] p-8 text-gray-500">
                    No health checkup requests yet.
                  </div>
                ) : (
                  healthCheckups.map((item) => (
                    <div
                      key={item._id}
                      className="border border-white/10 bg-[#050505] p-7"
                    >
                      <h3 className="text-xl font-semibold">
                        {item.company}
                      </h3>

                      <p className="mt-3 text-sm text-[#D4AF37]">
                        {item.name}
                      </p>

                      <p className="mt-2 text-sm text-gray-500">
                        {item.email}
                      </p>

                      <div className="mt-6 space-y-2 text-sm text-gray-500">
                        <p>
                          Industry: {item.industry}
                        </p>

                        <p>
                          Challenge: {item.challenge}
                        </p>
                      </div>
                    </div>
                  ))
                )}

              </div>
            </section>

            {/* Lead Magnets */}

            <section className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Lead Generation
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Lead Magnet Requests
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                {leadMagnets.length === 0 ? (
                  <div className="border border-white/10 bg-[#050505] p-8 text-gray-500">
                    No lead magnet requests yet.
                  </div>
                ) : (
                  leadMagnets.map((item) => (
                    <div
                      key={item._id}
                      className="border border-white/10 bg-[#050505] p-7"
                    >
                      <h3 className="text-xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-3 text-[#D4AF37]">
                        {item.email}
                      </p>

                      <p className="mt-3 text-gray-500">
                        Company: {item.company}
                      </p>
                    </div>
                  ))
                )}

              </div>
            </section>
          </>
        )}

      </div>
    </main>
  );
}

export default AdminDashboard;