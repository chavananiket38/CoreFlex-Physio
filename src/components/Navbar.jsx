import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navLinks, clinic } from "../data/site";

function Logomark() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#1C4D46" />
      <path
        d="M10 44 C 18 44, 18 30, 26 30 S 34 44, 42 44 S 46 20, 54 20"
        fill="none"
        stroke="#F3F5F0"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <circle cx="26" cy="30" r="3.4" fill="#E1592E" />
      <circle cx="42" cy="44" r="3.4" fill="#E1592E" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(19,36,32,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <Logomark />
          <span className="font-display text-[19px] font-semibold leading-none text-ink">
            CoreFlex
            <span className="block font-mono text-[9.5px] font-normal tracking-[0.18em] text-core-500 uppercase mt-0.5">
              Physiotherapy Clinic
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors ${
                      isActive ? "text-move" : "text-ink/80 hover:text-ink"
                    }`
                  }
                >
                  {item.label}
                  <ChevronDown size={14} className="mt-px" />
                </NavLink>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full pt-2 w-64"
                    >
                      <div className="card overflow-hidden !rounded-2xl p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block rounded-xl px-4 py-2.5 text-[14px] text-ink/80 hover:bg-core-50 hover:text-core-600 transition-colors"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors ${
                    isActive ? "text-move" : "text-ink/80 hover:text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:+${clinic.phoneRaw}`}
            className="flex items-center gap-1.5 text-[14px] font-semibold text-ink/80 hover:text-core-600 transition-colors"
          >
            <Phone size={15} />
            {clinic.phoneDisplay}
          </a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-[13.5px]">
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-paper border-t border-ink/[0.06]"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {navLinks.map((item) => (
                <div key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-3 text-[15px] font-medium ${
                        isActive ? "text-move bg-move/5" : "text-ink"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="ml-3 border-l border-ink/10 pl-3 flex flex-col">
                      {item.children.slice(1).map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          className="rounded-lg px-3 py-2.5 text-[14px] text-ink/70"
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-ink/[0.06]">
                <a
                  href={`tel:+${clinic.phoneRaw}`}
                  className="flex items-center gap-1.5 text-[14px] font-semibold text-ink/80"
                >
                  <Phone size={15} />
                  {clinic.phoneDisplay}
                </a>
                <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-[13.5px] ml-auto">
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
