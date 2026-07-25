import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { clinic, navLinks, serviceCategories } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-core-800 text-paper/90 pb-20 sm:pb-0">
      <div className="container-x pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-10 lg:gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <svg width="32" height="32" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="16" fill="#F3F5F0" />
              <path
                d="M10 44 C 18 44, 18 30, 26 30 S 34 44, 42 44 S 46 20, 54 20"
                fill="none"
                stroke="#1C4D46"
                strokeWidth="4.2"
                strokeLinecap="round"
              />
              <circle cx="26" cy="30" r="3.4" fill="#E1592E" />
              <circle cx="42" cy="44" r="3.4" fill="#E1592E" />
            </svg>
            <span className="font-display text-lg font-semibold text-paper">CoreFlex</span>
          </Link>
          <p className="text-[14.5px] leading-relaxed text-paper/65 max-w-xs">
            Evidence-based orthopaedic, sports and post-surgery physiotherapy in Viman Nagar, Pune — led by Dr. Vaishnavi Shimpi, MPT (Orthopaedics).
          </p>
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[13.5px] text-paper/70 hover:text-move transition-colors"
          >
            <Instagram size={16} /> {clinic.instagramHandle}
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="flex flex-col gap-2.5 text-[14.5px] text-paper/75">
            {navLinks.filter((l) => !l.children).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-paper transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="hover:text-paper transition-colors">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Services</p>
          <ul className="flex flex-col gap-2.5 text-[14.5px] text-paper/75">
            {serviceCategories.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  to={
                    ["home-physiotherapy", "sports-rehabilitation", "post-surgery-rehab", "corporate-physiotherapy"].includes(s.slug)
                      ? `/services/${s.slug}`
                      : "/services"
                  }
                  className="hover:text-paper transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Visit / Contact</p>
          <ul className="flex flex-col gap-3 text-[14.5px] text-paper/75">
            <li className="flex gap-2.5">
              <MapPin size={17} className="shrink-0 mt-0.5 text-move" />
              <span>{clinic.addressLines.join(" ")}</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={17} className="shrink-0 text-move" />
              <a href={`tel:+${clinic.phoneRaw}`} className="hover:text-paper">{clinic.phoneDisplay}</a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail size={17} className="shrink-0 text-move" />
              <a href={`mailto:${clinic.email}`} className="hover:text-paper">{clinic.email}</a>
            </li>
            <li className="flex gap-2.5">
              <Clock size={17} className="shrink-0 mt-0.5 text-move" />
              <span>
                {clinic.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-paper/50">
          <p>&copy; {new Date().getFullYear()} CoreFlex Physiotherapy Clinic. All rights reserved.</p>
          <p className="font-mono">Viman Nagar, Pune · Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
