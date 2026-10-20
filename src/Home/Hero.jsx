
import { useState, useEffect } from "react";
import logo from "../assets/maximumcarelogo.png";
import heroVideo from "../assets/Herovid.mp4";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Service Areas", href: "#service-areas" },
  { name: "Contact Us", href: "#contact" },
];

const features = [
  {
    title: "SECURE HANDLING",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1" opacity=".3"/>
        <path d="M32 10 48 16V29C48 40 41 48 32 53 23 48 16 40 16 29V16L32 10Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="m24 31 5 5 11-12" stroke="#6DE0D3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "MEDICAL COURIER",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1" opacity=".3"/>
        <path d="M10 22H37V42H10V22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M37 29H46L54 37V42H37V29Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M43 29V36H52" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="43" r="4" fill="#6DE0D3"/>
        <circle cx="46" cy="43" r="4" fill="#6DE0D3"/>
        <path d="M20 28H28M24 24V32" stroke="#6DE0D3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "RELIABLE DELIVERY",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1" opacity=".3"/>
        <circle cx="32" cy="32" r="19" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 20V32L41 37" stroke="#6DE0D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 10H40M32 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="m25 43 5 5 10-11" stroke="#6DE0D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "REGIONAL COVERAGE",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-11 w-11 sm:h-12 sm:w-12" aria-hidden="true">
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1" opacity=".3"/>
        <path d="M12 43 23 20 40 15 52 28 43 46 26 51 12 43Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M23 20 26 51M40 15 43 46M12 43 43 46" stroke="currentColor" strokeWidth="1" opacity=".5"/>
        <path d="M23 32C23 27 30 24 34 28C38 32 32 38 32 38S23 34 23 32Z" stroke="#6DE0D3" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="30" cy="31" r="2" fill="#6DE0D3"/>
      </svg>
    ),
  },
];

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solidHeader = scrolled || menuOpen;

  return (
    <>
      {/* ==================================== */}
      {/* RESPONSIVE HEADER                    */}
      {/* ==================================== */}

      <header
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-500 ease-in-out
          ${
            solidHeader
              ? "bg-white/95 shadow-[0_5px_30px_rgba(16,42,67,0.10)] backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto flex max-w-[1500px]
            items-center justify-between gap-5
            px-5 sm:px-8 lg:px-10 xl:px-[75px]
            transition-all duration-500
            ${
              scrolled
                ? "h-[72px] lg:h-[78px]"
                : "h-[80px] lg:h-[95px]"
            }
          `}
        >
          {/* LOGO */}
          <a
            href="#home"
            aria-label="Maximum Care LLC Home"
            onClick={() => setMenuOpen(false)}
            className="relative z-10 shrink-0"
          >
            <img
              src={logo}
              alt="Maximum Care LLC"
              className={`
                w-[135px] object-contain
                transition-all duration-500
                sm:w-[150px]
                ${
                  scrolled
                    ? "lg:w-[150px]"
                    : "lg:w-[170px]"
                }
              `}
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:flex xl:gap-9"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  group relative whitespace-nowrap
                  py-3 text-[15px] font-semibold
                  tracking-[0.01em]
                  transition-colors duration-300
                  ${
                    solidHeader
                      ? "text-[#102A43] hover:text-[#0C9B97]"
                      : "text-white hover:text-[#6DE0D3]"
                  }
                `}
              >
                {link.name}

                <span
                  className="
                    absolute bottom-[5px] left-0
                    h-[2px] w-full origin-left
                    scale-x-0 rounded-full
                    bg-[#0C9B97]
                    transition-transform duration-300
                    group-hover:scale-x-100
                  "
                />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* DESKTOP QUOTE BUTTON */}
            <a
              href="mailto:maximumcaree@gmail.com?subject=Medical%20Courier%20Quote%20Request"
              className="
                group hidden min-h-[48px]
                items-center justify-center gap-3
                whitespace-nowrap rounded-xl
                bg-[#0C9B97] px-6
                text-[13px] font-bold text-white
                shadow-[0_6px_20px_rgba(12,155,151,0.15)]
                transition-all duration-300
                hover:-translate-y-[2px]
                hover:bg-[#087F7C]
                hover:shadow-[0_12px_30px_rgba(12,155,151,0.25)]
                xl:inline-flex
              "
            >
              Request a Quote

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`
                flex h-[44px] w-[44px]
                shrink-0 items-center justify-center
                rounded-xl transition-all duration-300
                xl:hidden
                ${
                  solidHeader
                    ? "bg-[#F0F8FC] text-[#102A43]"
                    : "bg-white/15 text-white"
                }
              `}
            >
              {menuOpen ? (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="25"
                  height="25"
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

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="
              max-h-[calc(100svh-80px)] overflow-y-auto
              border-t border-[#E3EDF2]
              bg-white px-6 pb-8 pt-3
              shadow-[0_20px_40px_rgba(16,42,67,0.12)]
              sm:px-8 xl:hidden
            "
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center justify-between
                  border-b border-[#E3EDF2]
                  py-4 text-[16px] font-semibold
                  text-[#102A43]
                  transition-all duration-300
                  hover:pl-2 hover:text-[#0C9B97]
                "
              >
                <span>{link.name}</span>

                <span className="text-[12px] font-semibold text-[#0C9B97]">
                  0{index + 1}
                </span>
              </a>
            ))}

            {/* MOBILE QUOTE BUTTON */}
            <a
              href="mailto:maximumcaree@gmail.com?subject=Medical%20Courier%20Quote%20Request"
              onClick={() => setMenuOpen(false)}
              className="
                mt-6 flex min-h-[52px]
                items-center justify-center gap-3
                rounded-xl bg-[#0C9B97]
                px-6 text-[15px] font-bold text-white
                transition-colors duration-300
                hover:bg-[#087F7C]
              "
            >
              Request a Quote
              <span aria-hidden="true">→</span>
            </a>

            {/* MOBILE PHONE */}
            <a
              href="tel:+17087330065"
              className="mt-6 block text-center text-[14px] font-medium text-[#526579]"
            >
              Call Us:{" "}
              <span className="font-bold text-[#0C9B97]">
                708-733-0065
              </span>
            </a>
          </nav>
        )}

        {/* HEADER BOTTOM BORDER */}
        <div
          className={`
            h-px w-full transition-colors duration-500
            ${
              solidHeader
                ? "bg-[#E3EDF2]"
                : "bg-white/15"
            }
          `}
        />
      </header>

      {/* ==================================== */}
      {/* RESPONSIVE HERO SECTION              */}
      {/* ==================================== */}

      <section
        id="home"
        className="
          relative isolate flex min-h-[100svh]
          w-full flex-col overflow-hidden
          bg-[#071E34]
        "
      >
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute inset-0 -z-20
            h-full w-full object-cover object-center
          "
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* VIDEO OVERLAY */}
        <div
          className="
            pointer-events-none absolute inset-0 -z-10
            bg-gradient-to-b
            from-[#061725]/60
            via-[#061725]/55
            to-[#061725]/85
          "
        />

        {/* SUBTLE COLOR GLOW */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-40 left-1/2 -translate-x-1/2
            h-[350px] w-[600px] max-w-full
            rounded-full bg-[#0C9B97]/10
            blur-[100px]
          "
        />

        {/* MAIN HERO CONTENT */}
        <div
          className="
            relative z-10 mx-auto flex
            min-h-[100svh] w-full max-w-[1200px]
            flex-col items-center justify-center
            px-5 pb-14 pt-[130px]
            text-center text-white

            sm:px-8 sm:pb-16 sm:pt-[145px]
            md:pb-20
            lg:px-10 lg:pt-[165px]
          "
        >
          {/* SMALL HEADING */}
          <p
            className="
              rounded-full border border-white/20
              bg-white/[0.08] px-4 py-2
              text-[11px] font-semibold
              tracking-[0.08em] text-[#D8F7F4]
              backdrop-blur-sm

              sm:px-5 sm:py-2.5 sm:text-[14px]
              md:text-[16px]
            "
          >
            Medical Courier & Healthcare Logistics
          </p>

          {/* MAIN HERO HEADING */}
          <h1
            className="
              mx-auto mt-6 max-w-[920px]
              text-[38px] font-extrabold
              leading-[1.1] tracking-[-0.035em]
              text-white

              min-[375px]:text-[40px]
              sm:mt-7 sm:text-[52px]
              md:text-[62px]
              lg:text-[72px] lg:leading-[1.08]
            "
          >
            Reliable Medical Deliveries You Can Trust
          </h1>

          {/* HERO DESCRIPTION */}
          <p
            className="
              mx-auto mt-6 max-w-[780px]
              text-[15px] font-normal
              leading-[1.8] text-white/85

              sm:mt-7 sm:text-[17px]
              md:text-[18px]
              lg:text-[20px]
            "
          >
            We provide fast, secure, and reliable medical
            courier services, helping healthcare providers
            move critical supplies with care, precision,
            and professionalism.
          </p>

          {/* FEATURE GRID */}
          <div
            className="
              mx-auto mt-10 grid w-full
              max-w-[850px] grid-cols-2
              gap-3

              sm:mt-12 sm:grid-cols-4 sm:gap-4
              lg:mt-14 lg:gap-5
            "
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  group flex min-h-[122px]
                  flex-col items-center justify-center
                  gap-3 rounded-2xl
                  border border-white/15
                  bg-white/[0.06]
                  px-2 py-5
                  text-white backdrop-blur-[4px]
                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-[#6DE0D3]/50
                  hover:bg-white/[0.11]

                  sm:min-h-[138px]
                  sm:px-3 sm:py-6
                "
              >
                {/* FEATURE ICON */}
                <div
                  className="
                    flex h-[50px] w-[50px]
                    items-center justify-center
                    text-white

                    sm:h-[55px] sm:w-[55px]
                  "
                >
                  {feature.icon}
                </div>

                {/* FEATURE LABEL */}
                <p
                  className="
                    text-center text-[10px]
                    font-bold leading-[1.5]
                    tracking-[0.07em] text-white/85

                    sm:text-[11px]
                    lg:text-[12px]
                  "
                >
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM ACCENT */}
          <div className="mt-10 flex items-center gap-3 sm:mt-12">
            <span className="h-px w-7 bg-[#6DE0D3]/60" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 sm:text-[11px]">
              Fast. Secure. Reliable.
            </p>

            <span className="h-px w-7 bg-[#6DE0D3]/60" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
