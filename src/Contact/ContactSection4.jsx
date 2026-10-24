
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

function ContactSection4() {
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
      id="contact-final-cta"
      className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* MAIN CTA PANEL */}
        <motion.div
          {...reveal(0)}
          className="relative overflow-hidden rounded-[30px] bg-[#071E34] px-6 py-14 text-white shadow-[0_30px_80px_rgba(7,30,52,0.16)] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#0C9B97]/25 blur-[110px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-44 -left-40 h-[450px] w-[450px] rounded-full bg-[#6DE0D3]/10 blur-[100px]"
          />

          {/* CIRCULAR DECORATIONS */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full border border-white/[0.06]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 top-16 h-[400px] w-[400px] rounded-full border border-white/[0.06]"
          />

          <div className="relative z-10 mx-auto max-w-[950px] text-center">

            {/* ICON */}
            <motion.div
              {...reveal(0.1)}
              className="mx-auto mb-8 flex h-[82px] w-[82px] items-center justify-center rounded-[24px] border border-[#6DE0D3]/20 bg-[#0C9B97]/20 text-[#6DE0D3]"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 6h12v12H3z" />
                <path d="M15 10h4l3 4v4h-7" />
                <circle cx="7.5" cy="18" r="2" />
                <circle cx="18.5" cy="18" r="2" />
                <path d="m6 11 2 2 3-3" />
              </svg>
            </motion.div>

            {/* SMALL LABEL */}
            <motion.div
              {...reveal(0.15)}
              className="mb-6 flex items-center justify-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#6DE0D3]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6DE0D3]">
                LET'S WORK TOGETHER
              </span>

              <span className="h-[2px] w-8 bg-[#6DE0D3]" />
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h2
              {...reveal(0.2)}
              className="text-[35px] font-extrabold leading-[1.13] tracking-[-0.04em] text-white sm:text-[49px] lg:text-[61px]"
            >
              Your Next Healthcare
              <span className="mt-2 block text-[#6DE0D3]">
                Delivery Starts
              </span>
              <span className="mt-2 block text-white">
                With a Conversation.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              {...reveal(0.3)}
              className="mx-auto mt-8 max-w-[760px] text-[15px] leading-[1.95] text-[#CEDDE5] sm:text-[17px]"
            >
              Whether your organization needs a
              scheduled medical courier arrangement,
              transportation for an individual
              healthcare shipment, or information
              about our services, Maximum Care LLC
              is ready to review your inquiry.
            </motion.p>

            <motion.p
              {...reveal(0.35)}
              className="mx-auto mt-4 max-w-[740px] text-[14px] leading-[1.95] text-[#AFC8D5] sm:text-[15px]"
            >
              Share your requirements and preferred
              transportation schedule so we can
              discuss appropriate available options.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              {...reveal(0.45)}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >

              {/* REQUEST QUOTE */}
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

              {/* EXPLORE SERVICES */}
              <Link
                to="/services"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-[14px] font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:border-[#6DE0D3] hover:bg-white/15 sm:w-auto"
              >
                Explore Our Services

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

            {/* DIVIDER */}
            <motion.div
              {...reveal(0.5)}
              className="mx-auto my-10 h-px max-w-[700px] bg-white/15"
            />

            {/* THREE PRINCIPLES */}
            <motion.div
              {...reveal(0.55)}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
            >
              {[
                "Professional Communication",
                "Healthcare-Focused Service",
                "Responsible Coordination",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0C9B97]/20 text-[#6DE0D3]">

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>

                  <span className="text-[12px] font-semibold text-[#C2D3DE]">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* AVAILABILITY NOTE */}
            <motion.p
              {...reveal(0.6)}
              className="mx-auto mt-8 max-w-[700px] text-[11px] leading-[1.85] text-[#9BB6C6]"
            >
              All proposed transportation arrangements
              are subject to applicable requirements,
              shipment suitability, scheduling,
              operational availability, and confirmation.
            </motion.p>
          </div>
        </motion.div>

        {/* FINAL COMPANY MESSAGE */}
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
            Healthcare-focused medical courier transportation
            for the Fargo–Moorhead region.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection4;
