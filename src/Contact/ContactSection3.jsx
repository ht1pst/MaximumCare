
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const mapEmbedUrl =
  "https://www.google.com/maps?q=Moorhead%2C%20Minnesota&output=embed";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Moorhead%2C%20Minnesota";

const communities = [
  { city: "Moorhead", state: "Minnesota" },
  { city: "Dilworth", state: "Minnesota" },
  { city: "Fargo", state: "North Dakota" },
  { city: "West Fargo", state: "North Dakota" },
];

function ContactSection3() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="contact-map"
      className="relative w-full overflow-hidden bg-[#F3F8FB] py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-14 max-w-[850px] text-center">

          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97]">
              OUR LOCATION & REGIONAL FOCUS
            </span>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[52px]"
          >
            Based in Moorhead.
            <span className="mt-2 block text-[#0C9B97]">
              Connected to the Region.
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-6 max-w-[750px] text-[15px] leading-[1.9] text-[#617589] sm:text-[17px]"
          >
            Maximum Care LLC is based in Moorhead,
            Minnesota, with a regional focus across
            the Fargo–Moorhead area. Explore our
            location on the map and learn more
            about the communities we aim to serve.
          </motion.p>
        </div>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">

          {/* LEFT — LIVE GOOGLE MAP */}
          <motion.div
            {...reveal(0.1)}
            className="relative min-w-0 overflow-hidden rounded-[28px] border border-[#DDE8ED] bg-white p-3 shadow-[0_20px_55px_rgba(7,30,52,0.08)] sm:p-4"
          >
            <div className="relative overflow-hidden rounded-[20px] bg-[#E0E9ED]">

              {/* ACTUAL GOOGLE MAP */}
              <iframe
                src={mapEmbedUrl}
                title="Google Maps showing Moorhead, Minnesota and the Fargo–Moorhead region"
                className="h-[400px] w-full border-0 sm:h-[530px] lg:h-[600px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* MAP INFO OVERLAY */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex justify-start sm:bottom-6 sm:left-6">

                <div className="flex max-w-[310px] items-center gap-3 rounded-xl border border-white/30 bg-[#071E34]/90 px-4 py-3 text-white shadow-xl backdrop-blur-md">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0C9B97] text-white">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-[13px] font-extrabold">
                      Moorhead, Minnesota
                    </span>

                    <span className="mt-1 block text-[11px] text-[#CEDDE5]">
                      Maximum Care LLC home city
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* MAP FOOTER */}
            <div className="flex flex-col gap-4 px-2 pb-2 pt-5 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[12px] leading-[1.8] text-[#718398]">
                Showing Moorhead and its surrounding area.
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] font-extrabold text-[#0C9B97] transition-colors hover:text-[#087F7B]"
              >
                Open Google Maps

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
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — LOCATION INFORMATION */}
          <motion.div
            {...reveal(0.2)}
            className="relative flex flex-col overflow-hidden rounded-[28px] bg-[#071E34] p-7 text-white shadow-[0_20px_55px_rgba(7,30,52,0.12)] sm:p-9"
          >
            {/* BACKGROUND GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[#0C9B97]/20 blur-[75px]"
            />

            <div className="relative z-10 flex h-full flex-col">

              {/* LOCATION ICON */}
              <div className="mb-7 flex h-[67px] w-[67px] items-center justify-center rounded-[18px] border border-[#6DE0D3]/20 bg-[#0C9B97]/20 text-[#6DE0D3]">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              {/* TITLE */}
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#6DE0D3]">
                OUR HOME BASE
              </p>

              <h3 className="text-[29px] font-extrabold leading-[1.2] text-white sm:text-[35px]">
                Moorhead,
                <span className="mt-1 block text-[#6DE0D3]">
                  Minnesota.
                </span>
              </h3>

              <p className="mt-5 text-[14px] leading-[1.95] text-[#C2D3DE]">
                Maximum Care LLC focuses on healthcare
                courier transportation needs across
                the Fargo–Moorhead region, with
                surrounding and longer-distance
                requests considered according to
                scheduling and availability.
              </p>

              {/* DIVIDER */}
              <div className="my-7 h-px bg-white/15" />

              {/* COVERAGE LOCATIONS */}
              <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#6DE0D3]">
                PRIMARY REGIONAL FOCUS
              </p>

              <div className="space-y-3">

                {communities.map((location) => (
                  <div
                    key={location.city}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5"
                  >
                    <div className="flex items-center gap-3">

                      <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />

                      <span className="text-[13px] font-bold text-white">
                        {location.city}
                      </span>
                    </div>

                    <span className="text-[11px] text-[#B8CDDA]">
                      {location.state}
                    </span>
                  </div>
                ))}
              </div>

              {/* SPACER */}
              <div className="flex-1" />

              {/* BUTTON */}
              <Link
                to="/service-areas"
                className="group mt-9 inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-6 py-4 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#087F7B]"
              >
                Explore Our Service Areas

                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* IMPORTANT LOCATION NOTE */}
        <motion.p
          {...reveal(0.15)}
          className="mx-auto mt-8 max-w-[850px] text-center text-[12px] leading-[1.9] text-[#718398]"
        >
          The map displays our home city and surrounding
          region. It does not indicate a publicly accessible
          office address, an exact service boundary, or
          guaranteed courier availability.
        </motion.p>
      </div>
    </section>
  );
}

export default ContactSection3;
