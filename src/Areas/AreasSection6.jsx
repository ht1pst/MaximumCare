
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const communities = [
  "Moorhead, MN",
  "Dilworth, MN",
  "Fargo, ND",
  "West Fargo, ND",
];

function AreasSection6
() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 30 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.12,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="areas-final-cta"
      className="relative isolate w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND ACCENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#071E34]/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ==================================== */}
        {/* MAIN CTA CONTAINER                   */}
        {/* ==================================== */}

        <motion.div
          {...reveal(0)}
          className="relative overflow-hidden rounded-[30px] bg-[#071E34] px-6 py-14 text-white shadow-[0_30px_80px_rgba(7,30,52,0.15)] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >

          {/* GLOW DECORATIONS */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-36 -top-40 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/20 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 -right-32 h-[500px] w-[500px] rounded-full bg-[#6DE0D3]/10 blur-[100px]"
          />

          {/* DECORATIVE RINGS */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full border border-white/[0.06]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-16 h-[390px] w-[390px] rounded-full border border-white/[0.06]"
          />

          {/* DOT PATTERN */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-8 top-10 hidden grid-cols-6 gap-4 opacity-20 lg:grid"
          >
            {Array.from({ length: 30 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[#6DE0D3]"
              />
            ))}
          </div>

          {/* ==================================== */}
          {/* MAIN CTA CONTENT                    */}
          {/* ==================================== */}

          <div className="relative z-10 mx-auto max-w-[940px] text-center">

            {/* LOCATION ICON */}
            <motion.div
              {...reveal(0.1)}
              className="mx-auto mb-8 flex h-[82px] w-[82px] items-center justify-center rounded-[24px] border border-[#6DE0D3]/20 bg-[#0C9B97]/20 text-[#6DE0D3]"
            >
              <svg
                width="39"
                height="39"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </motion.div>

            {/* LABEL */}
            <motion.div
              {...reveal(0.15)}
              className="mb-6 flex items-center justify-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#6DE0D3]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#6DE0D3] sm:text-[12px]">
                LET'S DISCUSS YOUR DELIVERY
              </span>

              <span className="h-[2px] w-8 bg-[#6DE0D3]" />
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h2
              {...reveal(0.2)}
              className="text-[36px] font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-[49px] lg:text-[62px]"
            >
              Your Location.
              <span className="mt-2 block text-[#6DE0D3]">
                Your Healthcare Needs.
              </span>
              <span className="mt-2 block text-white">
                Let's Connect.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              {...reveal(0.3)}
              className="mx-auto mt-8 max-w-[760px] text-[15px] leading-[1.95] text-[#CEDDE5] sm:text-[17px]"
            >
              Whether your organization is located in
              Moorhead, Dilworth, Fargo, West Fargo, or
              a nearby community, Maximum Care LLC
              welcomes the opportunity to discuss
              your medical courier transportation needs.
            </motion.p>

            <motion.p
              {...reveal(0.35)}
              className="mx-auto mt-4 max-w-[720px] text-[14px] leading-[1.95] text-[#AFC8D5] sm:text-[15px]"
            >
              Tell us about your pickup location,
              destination, shipment requirements,
              and preferred schedule. We'll review
              your request and discuss available
              transportation arrangements.
            </motion.p>

            {/* ==================================== */}
            {/* CTA BUTTONS                         */}
            {/* ==================================== */}

            <motion.div
              {...reveal(0.45)}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >

              {/* PRIMARY BUTTON */}
              <Link
                to="/request-quote"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-8 py-4 text-[14px] font-extrabold text-white shadow-[0_15px_35px_rgba(12,155,151,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] sm:w-auto"
              >
                Request a Quote

                <svg
                  width="20"
                  height="20"
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

              {/* SECONDARY BUTTON */}
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-[14px] font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:border-[#6DE0D3] hover:bg-white/15 sm:w-auto"
              >
                Contact Our Team

                <svg
                  width="20"
                  height="20"
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

            {/* AVAILABILITY NOTE */}
            <motion.p
              {...reveal(0.5)}
              className="mx-auto mt-7 max-w-[670px] text-[12px] leading-[1.85] text-[#9BB6C6]"
            >
              Transportation is subject to route feasibility,
              appropriate shipment requirements, scheduling,
              and confirmed operational availability.
            </motion.p>
          </div>

          {/* ==================================== */}
          {/* BOTTOM LOCATION STRIP                */}
          {/* ==================================== */}

          <motion.div
            {...reveal(0.5)}
            className="relative z-10 mt-14 border-t border-white/15 pt-9 sm:mt-16"
          >

            <p className="mb-6 text-center text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#6DE0D3]">
              OUR PRIMARY REGIONAL FOCUS
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">

              {communities.map((community) => (
                <div
                  key={community}
                  className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-3 transition-colors duration-300 hover:border-[#6DE0D3]/35 hover:bg-white/[0.12]"
                >
                  {/* SMALL LOCATION ICON */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0 text-[#6DE0D3]"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                  <span className="text-[12px] font-bold text-[#D5E4EC]">
                    {community}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* ==================================== */}
        {/* FINAL COMPANY STATEMENT              */}
        {/* ==================================== */}

        <motion.div
          {...reveal(0.15)}
          className="mt-10 text-center"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#617589]">
            Maximum Care LLC
            <span className="mx-3 text-[#0C9B97]">•</span>
            Moorhead, Minnesota
          </p>

          <p className="mt-3 text-[13px] text-[#718398]">
            Healthcare-focused courier transportation
            across the Fargo–Moorhead region.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default AreasSection6
;
