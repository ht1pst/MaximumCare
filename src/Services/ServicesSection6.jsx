
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

function ServicesSection6() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];

  const locations = [
    {
      city: "Moorhead",
      state: "Minnesota",
      label: "Primary Service Area",
    },
    {
      city: "Dilworth",
      state: "Minnesota",
      label: "Service Area",
    },
    {
      city: "Fargo",
      state: "North Dakota",
      label: "Service Area",
    },
    {
      city: "West Fargo",
      state: "North Dakota",
      label: "Service Area",
    },
  ];

  return (
    <section
      id="services-areas"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================================= */}
          {/* LEFT — CONTENT                   */}
          {/* ================================= */}

          <div>

            {/* SMALL HEADING */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: -30 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#0C9B97]" />

              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
                OUR SERVICE AREAS
              </p>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
              className="max-w-[620px] text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[43px] lg:text-[49px]"
            >
              Connecting Healthcare
              <span className="mt-2 block text-[#0C9B97]">
                Across Our Communities.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="mt-7 space-y-4"
            >
              <p className="text-[15px] leading-[1.9] text-[#526579] sm:text-[16px]">
                Based in Moorhead, Minnesota, Maximum Care LLC
                provides medical courier transportation for
                healthcare organizations across the Fargo-Moorhead
                area and nearby communities.
              </p>

              <p className="text-[15px] leading-[1.9] text-[#526579] sm:text-[16px]">
                Our service area includes locations in both
                Minnesota and North Dakota. We work with
                laboratories, pharmacies, clinics, and other
                healthcare organizations to coordinate suitable
                pickup and delivery arrangements.
              </p>

              <p className="text-[15px] leading-[1.9] text-[#526579] sm:text-[16px]">
                Need transportation beyond our primary coverage
                area? Additional destinations and longer-distance
                routes may be discussed based on scheduling,
                shipment requirements, and operational availability.
              </p>
            </motion.div>

            {/* SMALL HIGHLIGHTS */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4EAE7] bg-[#ECF8F6] px-4 py-2 text-[12px] font-bold text-[#087F7B]">
                <span className="h-2 w-2 rounded-full bg-[#0C9B97]" />
                Minnesota
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4EAE7] bg-[#ECF8F6] px-4 py-2 text-[12px] font-bold text-[#087F7B]">
                <span className="h-2 w-2 rounded-full bg-[#0C9B97]" />
                North Dakota
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#E3EAF0] bg-[#F3F7FA] px-4 py-2 text-[12px] font-bold text-[#526579]">
                Surrounding Communities
              </span>
            </motion.div>

            {/* CTA BUTTON */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.4,
                ease,
              }}
              className="mt-9"
            >
              <Link
                to="/service-areas"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] hover:shadow-[0_18px_35px_rgba(12,155,151,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C9B97]"
              >
                Explore All Service Areas

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
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ================================= */}
          {/* RIGHT — LOCATION PANEL           */}
          {/* ================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 50 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease,
            }}
            className="relative"
          >

            {/* DECORATIVE FRAME */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-[28px] border-2 border-[#0C9B97]/20 sm:-right-5 sm:-top-5"
            />

            {/* MAIN NAVY PANEL */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#071E34] p-6 text-white shadow-[0_25px_70px_rgba(7,30,52,0.18)] sm:p-9">

              {/* BACKGROUND GLOW */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0C9B97]/20 blur-[75px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#6DE0D3]/10 blur-[75px]"
              />

              {/* PANEL HEADER */}
              <div className="relative z-10 mb-8 flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0C9B97]/20 text-[#6DE0D3]">

                  {/* MAP PIN SVG */}
                  <svg
                    width="29"
                    height="29"
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

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6DE0D3]">
                    LOCAL COVERAGE
                  </p>

                  <h3 className="mt-1 text-[23px] font-extrabold sm:text-[26px]">
                    Where We Serve
                  </h3>
                </div>
              </div>

              {/* STATE LABEL */}
              <div className="relative z-10 mb-5 flex items-center justify-between border-b border-white/15 pb-3">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#B8CDDA]">
                  Featured Service Locations
                </p>

                <span className="rounded-full bg-[#0C9B97]/20 px-3 py-1 text-[10px] font-bold text-[#6DE0D3]">
                  MN + ND
                </span>
              </div>

              {/* LOCATION CARDS */}
              <div className="relative z-10 space-y-3">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 18 }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : index * 0.1,
                      ease,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { x: 5 }
                    }
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors duration-300 hover:border-[#6DE0D3]/30 hover:bg-white/[0.1]"
                  >

                    {/* LOCATION ICON */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">

                      <svg
                        width="22"
                        height="22"
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
                    </div>

                    {/* LOCATION TEXT */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[15px] font-extrabold text-white sm:text-[16px]">
                        {location.city}
                      </h4>

                      <p className="mt-1 text-[12px] text-[#B8CDDA]">
                        {location.state}
                      </p>
                    </div>

                    {/* ARROW */}
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="shrink-0 text-[#6DE0D3] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* EXTRA COVERAGE NOTE */}
              <div className="relative z-10 mt-6 flex items-start gap-3 rounded-2xl border border-[#6DE0D3]/20 bg-[#0C9B97]/10 p-4">

                <div className="mt-0.5 shrink-0 text-[#6DE0D3]">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>

                <div>
                  <p className="text-[13px] font-extrabold text-white">
                    Need a Different Destination?
                  </p>

                  <p className="mt-1 text-[12px] leading-[1.8] text-[#B8CDDA]">
                    Nearby communities and longer-distance
                    routes may be considered based on scheduling,
                    shipment requirements, and availability.
                  </p>
                </div>
              </div>

              {/* BOTTOM FOOTER */}
              <div className="relative z-10 mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-[12px] font-medium text-[#B8CDDA]">

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="text-[#6DE0D3]"
                >
                  <path d="M3 6h12v12H3z" />
                  <path d="M15 10h4l3 4v4h-7" />
                  <circle cx="7.5" cy="18" r="2" />
                  <circle cx="18.5" cy="18" r="2" />
                </svg>

                Healthcare-Focused Transportation
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection6;
