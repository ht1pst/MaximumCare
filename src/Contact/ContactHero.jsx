
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import logo from "../assets/maximumcarelogo.webp";
import heroImg from "../assets/contacthero.webp";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Contact", to: "/contact" },
];

const ease = [0.22, 1, 0.36, 1];

function ContactHero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const solidHeader = scrolled || menuOpen;

  const closeMenu = () => setMenuOpen(false);

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20 },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <>
      {/* ====================================== */}
      {/* NAVIGATION HEADER */}
      {/* ====================================== */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          solidHeader
            ? "border-b border-[#E5EDF2] bg-white/95 shadow-[0_8px_30px_rgba(7,30,52,0.07)] backdrop-blur-xl"
            : "border-b border-white/15 bg-transparent"
        }`}
      >
        <div
          className="
            mx-auto flex h-[105px]
            max-w-[1400px]
            items-center justify-between
            gap-5 px-5 sm:px-8 lg:px-12
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Maximum Care LLC Home"
            className="relative z-10 shrink-0"
          >
            <img
              src={logo}
              alt="Maximum Care LLC"
              className="h-[85px] w-auto object-contain sm:h-[75px] lg:h-[85px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:flex"
          >
            {navLinks.map((item) => {
              const active = item.to === "/contact";

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={`text-[13px] font-semibold transition-colors duration-300 hover:text-[#0C9B97] ${
                    active
                      ? "text-[#0C9B97]"
                      : solidHeader
                      ? "text-[#102A43]"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <Link
              to="/request-quote"
              className="
                hidden items-center justify-center
                rounded-xl bg-[#0C9B97]
                px-5 py-3 text-[13px]
                font-bold text-white
                transition-colors
                hover:bg-[#087F7C]
                xl:inline-flex
              "
            >
              Request a Quote
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() =>
                setMenuOpen((open) => !open)
              }
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={menuOpen}
              aria-controls="contact-mobile-nav"
              className={`flex h-11 w-11 items-center justify-center rounded-xl xl:hidden ${
                solidHeader
                  ? "bg-[#F0F8FC] text-[#102A43]"
                  : "bg-white/15 text-white"
              }`}
            >
              {menuOpen ? (
                <span className="text-[26px]">×</span>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ====================================== */}
        {/* MOBILE NAVIGATION */}
        {/* ====================================== */}

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              id="contact-mobile-nav"
              aria-label="Mobile navigation"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, height: 0 }
              }
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="
                max-h-[calc(100svh-105px)]
                overflow-y-auto
                border-t border-[#E5EDF2]
                bg-white shadow-lg xl:hidden
              "
            >
              <div className="flex flex-col px-6 pb-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={`border-b border-[#E3EDF2] py-4 text-[14px] font-semibold ${
                      item.to === "/contact"
                        ? "text-[#0C9B97]"
                        : "text-[#102A43]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/request-quote"
                  onClick={closeMenu}
                  className="
                    mt-5 rounded-xl
                    bg-[#0C9B97]
                    px-6 py-3.5
                    text-center text-[13px]
                    font-bold text-white
                  "
                >
                  Request a Quote
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ====================================== */}
      {/* COMPACT CONTACT HERO */}
      {/* ====================================== */}

      <section
        id="contact-hero"
        className="
          relative isolate
          overflow-hidden
          bg-[#071E34] text-white
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
        >
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#071E34]/95
            via-[#071E34]/85
            to-[#071E34]/65
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            relative z-10 mx-auto
            max-w-[1250px]
            px-5 pb-14 pt-[165px]
            sm:px-8 sm:pb-16
            lg:px-12 lg:pb-20
            lg:pt-[175px]
          "
        >
          <div className="max-w-[820px]">
            <motion.p
              {...reveal(0)}
              className="
                text-[11px] font-extrabold
                uppercase tracking-[0.2em]
                text-[#6DE0D3]
              "
            >
              CONTACT MAXIMUM CARE LLC
            </motion.p>

            <motion.h1
              {...reveal(0.1)}
              className="
                mt-3 text-[34px]
                font-extrabold leading-[1.14]
                tracking-[-0.04em]
                text-white sm:text-[45px]
                lg:text-[54px]
              "
            >
              Let's Discuss Your{" "}
              <span className="text-[#6DE0D3]">
                Medical Courier Needs.
              </span>
            </motion.h1>

            <motion.p
              {...reveal(0.2)}
              className="
                mt-4 max-w-[700px]
                text-[14px] leading-[1.75]
                text-[#D0DFE8]
                sm:text-[16px]
              "
            >
              Are you a healthcare facility, laboratory,
              pharmacy, or medical organization looking
              for a reliable courier partner? We welcome
              inquiries about scheduled courier services,
              medical deliveries, time-sensitive
              transportation, and potential business
              partnerships.
            </motion.p>

            {/* HERO BUTTONS */}
            <motion.div
              {...reveal(0.3)}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#contact-form"
                className="
                  inline-flex min-h-[46px]
                  items-center justify-center
                  rounded-xl bg-[#0C9B97]
                  px-6 text-[13px]
                  font-extrabold text-white
                  transition-colors
                  hover:bg-[#087F7C]
                "
              >
                Send a Message
                <span
                  className="ml-2"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>

              <Link
                to="/request-quote"
                className="
                  inline-flex min-h-[46px]
                  items-center justify-center
                  rounded-xl
                  border border-white/30
                  px-6 text-[13px]
                  font-bold text-white
                  transition-colors
                  hover:bg-white/10
                "
              >
                Request a Quote
              </Link>
            </motion.div>

            {/* BUSINESS LOCATION */}
           
          </div>
        </div>

        {/* BOTTOM TEAL ACCENT */}
        <div
          className="
            relative z-10 h-[3px]
            bg-gradient-to-r
            from-[#0C9B97]
            via-[#6DE0D3]
            to-transparent
          "
        />
      </section>
    </>
  );
}

export default ContactHero;
