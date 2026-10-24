
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

function AboutSection7() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 30,
        },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="about-cta"
      className="relative isolate w-full overflow-hidden bg-[#F5F9FB] py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[430px] w-[430px] rounded-full bg-[#0C9B97]/5 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-[#071E34]/5 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ===================================== */}
        {/* SECTION INTRODUCTION                  */}
        {/* ===================================== */}

        <div className="mx-auto mb-12 max-w-[820px] text-center">

          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
              LET'S WORK TOGETHER
            </span>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[53px]"
          >
            Your Healthcare Deliveries
            <span className="mt-2 block text-[#0C9B97]">
              Deserve Thoughtful Care.
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-6 max-w-[730px] text-[15px] leading-[1.9] text-[#617589] sm:text-[17px]"
          >
            Whether you're exploring a recurring courier
            arrangement or need transportation for a
            particular healthcare shipment, Maximum Care
            LLC welcomes the opportunity to learn about
            your needs and discuss suitable solutions.
          </motion.p>
        </div>

        {/* ===================================== */}
        {/* MAIN CTA PANEL                        */}
        {/* ===================================== */}

        <motion.div
          {...reveal(0.15)}
          className="relative overflow-hidden rounded-[30px] bg-white shadow-[0_25px_75px_rgba(7,30,52,0.09)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">

            {/* ================================= */}
            {/* LEFT — MAIN CONTENT               */}
            {/* ================================= */}

            <div className="relative overflow-hidden p-7 sm:p-11 lg:p-14">

              {/* LIGHT DECORATIVE GLOW */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 -bottom-24 h-[300px] w-[300px] rounded-full bg-[#0C9B97]/5 blur-[70px]"
              />

              <div className="relative z-10">

                {/* TOP ICON */}
                <motion.div
                  {...reveal(0.1)}
                  className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-[20px] bg-[#E1F5F2] text-[#0C9B97]"
                >
                  <svg
                    width="34"
                    height="34"
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
                  </svg>
                </motion.div>

                {/* EYEBROW */}
                <motion.p
                  {...reveal(0.15)}
                  className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0C9B97]"
                >
                  START THE CONVERSATION
                </motion.p>

                {/* HEADING */}
                <motion.h3
                  {...reveal(0.2)}
                  className="max-w-[580px] text-[30px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#071E34] sm:text-[38px] lg:text-[43px]"
                >
                  Let's Find the Right
                  <span className="mt-1 block text-[#0C9B97]">
                    Transportation Arrangement.
                  </span>
                </motion.h3>

                {/* DESCRIPTION */}
                <motion.div
                  {...reveal(0.25)}
                  className="mt-6 max-w-[590px] space-y-4"
                >
                  <p className="text-[15px] leading-[1.9] text-[#526579] sm:text-[16px]">
                    Every healthcare organization has its own
                    transportation needs. From medical offices
                    and laboratories to pharmacies and other
                    healthcare facilities, we understand the
                    importance of discussing shipment
                    requirements before making arrangements.
                  </p>

                  <p className="text-[15px] leading-[1.9] text-[#526579] sm:text-[16px]">
                    Tell us what you need transported, where
                    it needs to go, and your preferred
                    schedule. We'll review your request
                    and discuss available options.
                  </p>
                </motion.div>

                {/* DIVIDER */}
                <div className="my-8 h-px w-full bg-[#E0EBEF]" />

                {/* THREE QUICK BENEFITS */}
                <motion.div
                  {...reveal(0.3)}
                  className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6"
                >
                  {[
                    "Healthcare-Focused",
                    "Clear Communication",
                    "Responsible Coordination",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3F6F3] text-[#0C9B97]">
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
                      </div>

                      <span className="text-[12px] font-bold text-[#334E68]">
                        {item}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* ================================= */}
                {/* CTA BUTTONS                       */}
                {/* ================================= */}

                <motion.div
                  {...reveal(0.35)}
                  className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
                >

                  {/* PRIMARY BUTTON */}
                  <Link
                    to="/request-quote"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] hover:shadow-[0_18px_35px_rgba(12,155,151,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C9B97]"
                  >
                    Request a Quote

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

                  {/* SECONDARY BUTTON */}
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl border border-[#CCDDE5] bg-white px-7 py-4 text-[14px] font-bold text-[#071E34] transition-all duration-300 hover:border-[#0C9B97] hover:bg-[#EFF9F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C9B97]"
                  >
                    Contact Our Team

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
                      className="text-[#0C9B97] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* ================================= */}
            {/* RIGHT — CONTACT PANEL             */}
            {/* ================================= */}

            <div className="relative flex flex-col justify-center overflow-hidden bg-[#0C9B97] p-7 text-white sm:p-11 lg:p-12">

              {/* DECORATIVE CIRCLES */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-28 h-[330px] w-[330px] rounded-full border-[55px] border-white/[0.06]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-32 h-[340px] w-[340px] rounded-full border-[55px] border-white/[0.06]"
              />

              <div className="relative z-10">

                {/* SMALL LABEL */}
                <motion.p
                  {...reveal(0.2)}
                  className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#DBFFFA]"
                >
                  GET IN TOUCH
                </motion.p>

                {/* RIGHT HEADING */}
                <motion.h3
                  {...reveal(0.25)}
                  className="max-w-[420px] text-[29px] font-extrabold leading-[1.2] tracking-[-0.03em] sm:text-[35px]"
                >
                  Have Questions?
                  <span className="mt-2 block text-[#D9FFFA]">
                    We're Here to Connect.
                  </span>
                </motion.h3>

                <motion.p
                  {...reveal(0.3)}
                  className="mt-5 max-w-[440px] text-[14px] leading-[1.95] text-white/85 sm:text-[15px]"
                >
                  Reach out to Maximum Care LLC to ask
                  about our medical courier services,
                  service areas, or a potential
                  transportation arrangement.
                </motion.p>

                {/* CONTACT METHODS */}
                <motion.div
                  {...reveal(0.35)}
                  className="mt-9 space-y-4"
                >

                  {/* PHONE */}
                  <a
                    href="tel:+17087330065"
                    className="group flex items-center gap-4 rounded-2xl border border-white/25 bg-white/10 p-4 transition-all duration-300 hover:bg-white/20"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 3 5.1 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L8 11.4a16 16 0 0 0 4.6 4.6l1.9-1.9a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2.9Z" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#DBFFFA]">
                        Call Us
                      </p>

                      <p className="mt-1 text-[16px] font-extrabold text-white sm:text-[18px]">
                        708-733-0065
                      </p>
                    </div>

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:maximumcaree@gmail.com"
                    className="group flex items-center gap-4 rounded-2xl border border-white/25 bg-white/10 p-4 transition-all duration-300 hover:bg-white/20"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 7 9-7" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#DBFFFA]">
                        Email Us
                      </p>

                      <p className="mt-1 break-all text-[14px] font-extrabold text-white sm:text-[16px]">
                        maximumcaree@gmail.com
                      </p>
                    </div>

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  {/* LOCATION */}
                  <div className="flex items-center gap-4 rounded-2xl border border-white/25 bg-white/10 p-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                      <svg
                        width="24"
                        height="24"
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

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#DBFFFA]">
                        Based In
                      </p>

                      <p className="mt-1 text-[15px] font-extrabold text-white">
                        Moorhead, Minnesota
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* BOTTOM NOTE */}
                <motion.div
                  {...reveal(0.4)}
                  className="mt-8 border-t border-white/25 pt-6"
                >
                  <p className="text-[12px] leading-[1.9] text-white/80">
                    All transportation requests are subject
                    to service availability, applicable
                    requirements, and confirmation of
                    shipment and scheduling details.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================== */}
        {/* FINAL MESSAGE                         */}
        {/* ===================================== */}

        <motion.div
          {...reveal(0.25)}
          className="mt-12 text-center"
        >
          <p className="text-[13px] font-semibold tracking-wide text-[#617589]">
            Maximum Care LLC
            <span className="mx-3 text-[#0C9B97]">•</span>
            Moorhead, Minnesota
            <span className="mx-3 text-[#0C9B97]">•</span>
            Healthcare-Focused Transportation
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutSection7;
