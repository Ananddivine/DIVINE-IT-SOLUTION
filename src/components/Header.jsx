import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PHONE, PHONE_DISPLAY, WHATSAPP_LINK } from "../data/business.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-teal-600" : "text-ink/70 hover:text-teal-600"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="w-8 h-8 relative flex items-center justify-center bg-teal-500 rounded-sm">
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-2 bg-teal-500" />
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-2 bg-teal-500" />
            <span className="w-3 h-3 border border-white/80" />
          </span>
          <span className="font-display font-semibold text-[17px] leading-none">
            Divine IT<span className="text-amber-500">.</span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="btn-secondary !px-4 !py-2.5 text-sm">
            Call {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2.5 text-sm">
            WhatsApp Us
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper px-5 py-4">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 text-base font-medium border-b border-ink/5 ${
                    isActive ? "text-teal-600" : "text-ink/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex gap-3 mt-4">
            <a href={`tel:${PHONE}`} className="btn-secondary flex-1 !px-4 !py-2.5 text-sm">
              Call Now
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary flex-1 !px-4 !py-2.5 text-sm">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
