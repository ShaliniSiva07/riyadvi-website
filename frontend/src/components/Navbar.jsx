import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}

        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide text-[#D4AF37]"
        >
          RIYADVI
        </NavLink>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-white transition duration-300 ${
              menuOpen
                ? "translate-y-2 rotate-45"
                : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition duration-300 ${
              menuOpen
                ? "opacity-0"
                : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition duration-300 ${
              menuOpen
                ? "-translate-y-2 -rotate-45"
                : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile Navigation */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-5">
          <div className="flex flex-col gap-1 pb-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "text-white hover:bg-white/5 hover:text-[#D4AF37]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;