import { NavLink } from "react-router-dom";

function Footer() {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      name: "Web Development",
      path: "/services/web-development",
    },
    {
      name: "App Development",
      path: "/services/app-development",
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
    },
    {
      name: "AR & VR",
      path: "/services/ar-vr",
    },
    {
      name: "3D Modelling",
      path: "/services/3d-modeling",
    },
    {
      name: "UI/UX Design",
      path: "/services/ui-ux-design",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <NavLink
              to="/"
              className="inline-block text-2xl font-bold tracking-wide text-[#D4AF37]"
            >
              RIYADVI
            </NavLink>

            <p className="mt-5 max-w-md leading-7 text-gray-500">
              Riyadvi Software Technologies delivers digital solutions
              across software development, applications, marketing,
              immersive technologies, and interactive experiences.
            </p>

            <p className="mt-6 text-sm text-gray-600">
              Design your Success | Powering Digital Innovation & Business Growth
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {navigation.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 transition duration-300 hover:translate-x-1 hover:text-[#D4AF37]"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  className="text-gray-500 transition duration-300 hover:translate-x-1 hover:text-[#D4AF37]"
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </div>

        </div>

        {/* Contact */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-sm uppercase tracking-widest text-[#D4AF37]">
                Chennai Office
              </p>

              <p className="mt-3 max-w-md leading-7 text-gray-500">
                126/213, R.K. Mutt Road,
                <br />
                Mylapore, Chennai,
                <br />
                Tamil Nadu 600004, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm text-gray-600">
                Riyadvi Software Technologies
              </p>

              <p className="mt-2 text-sm text-gray-600">
                © {new Date().getFullYear()} Riyadvi. All rights reserved.
              </p>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;