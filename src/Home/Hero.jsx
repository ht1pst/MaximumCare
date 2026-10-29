
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import logo from "../assets/maximumcarelogo.webp";
import heroVideo from "../assets/Herovid.mp4";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Service Areas", to: "/service-areas" },
  { name: "Contact Us", to: "/contact" },
];

const ease = [0.22, 1, 0.36, 1];

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onEscape);

    return () =>
      window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  const solidHeader = scrolled || menuOpen;

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <>
      {/* ====================================== */}
      {/* NAVBAR */}
      {/* ====================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solidHeader
            ? "border-b border-[#E3EDF2] bg-white/95 shadow-[0_6px_25px_rgba(7,30,52,0.08)] backdrop-blur-xl"
            : "border-b border-white/15 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[100px] max-w-[1400px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          {/* LOGO */}
          <Link
            to="/"
            aria-label="Maximum Care LLC Home"
            onClick={() => setMenuOpen(false)}
            className="shrink-0"
          >
            <img
              src={logo}
              alt="Maximum Care LLC"
              className="w-[145px] object-contain sm:w-[155px]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:flex"
          >
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={
                  item.to === "/" ? "page" : undefined
                }
                className={`text-[13px] font-semibold transition-colors hover:text-[#0C9B97] ${
                  item.to === "/"
                    ? "text-[#0C9B97]"
                    : solidHeader
                    ? "text-[#102A43]"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/request-quote"
              className="hidden rounded-xl bg-[#0C9B97] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#087F7C] xl:inline-flex"
            >
              Request a Quote
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="home-mobile-menu"
              onClick={() =>
                setMenuOpen((current) => !current)
              }
              className={`flex h-11 w-11 items-center justify-center rounded-xl xl:hidden ${
                solidHeader
                  ? "bg-[#F0F8FC] text-[#102A43]"
                  : "bg-white/15 text-white"
              }`}
            >
              {menuOpen ? (
                <span aria-hidden="true" className="text-[26px]">
                  ×
                </span>
              ) : (
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              id="home-mobile-menu"
              aria-label="Mobile navigation"
              initial={
                reduceMotion
                  ? false
                  : { height: 0, opacity: 0 }
              }
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
              }}
              className="max-h-[calc(100svh-100px)] overflow-y-auto border-t border-[#E3EDF2] bg-white xl:hidden"
            >
              <div className="flex flex-col px-6 pb-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-[#E3EDF2] py-4 text-[14px] font-semibold text-[#102A43] hover:text-[#0C9B97]"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  to="/request-quote"
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 rounded-xl bg-[#0C9B97] px-6 py-3.5 text-center text-[13px] font-bold text-white"
                >
                  Request a Quote
                </Link>

                <a
                  href="tel:+17087330065"
                  className="mt-5 text-center text-[13px] font-semibold text-[#102A43]"
                >
                  Call: 708-733-0065
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ====================================== */}
      {/* HERO SECTION */}
      {/* ====================================== */}

      <section
        id="home"
        className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#071E34] px-5 pb-16 pt-[165px] text-white sm:px-8 sm:pb-20 lg:min-h-[700px] lg:px-12"
      >
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061725]/95 via-[#061725]/75 to-[#061725]/50" />

        <div className="mx-auto w-full max-w-[1200px]">
          <div className="max-w-[850px]">
            <motion.p
              {...reveal(0)}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6DE0D3]"
            >
              MAXIMUM CARE LLC — MEDICAL COURIER SERVICES
            </motion.p>

            <motion.h1
              {...reveal(0.1)}
              className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[48px] lg:text-[62px]"
            >
              Reliable Medical Courier Services
              <span className="block text-[#6DE0D3]">
                You Can Count On.
              </span>
            </motion.h1>

            <motion.h2
              {...reveal(0.2)}
              className="mt-4 text-[18px] font-bold text-white sm:text-[22px]"
            >
              Delivering Care With Precision.
            </motion.h2>

            <motion.p
              {...reveal(0.3)}
              className="mt-4 max-w-[690px] text-[14px] leading-[1.85] text-[#D5E2E9] sm:text-[16px]"
            >
              Professional medical courier solutions for
              healthcare providers, laboratories, pharmacies,
              and medical facilities throughout Fargo–Moorhead
              and surrounding communities.
            </motion.p>

            <motion.div
              {...reveal(0.4)}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                to="/request-quote"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#0C9B97] px-6 text-[13px] font-extrabold text-white transition-colors hover:bg-[#087F7C]"
              >
                Request a Quote
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <a
                href="tel:+17087330065"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 text-[13px] font-bold text-white transition-colors hover:bg-white/20"
              >
                Call 708-733-0065
              </a>
            </motion.div>

            <motion.p
              {...reveal(0.5)}
              className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6DE0D3]"
            >
              Fast. Secure. Reliable.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
