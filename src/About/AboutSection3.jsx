
import { motion, useReducedMotion } from "motion/react";

function AboutSection3() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];

  const reveal = (delay = 0, direction = "up") => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          x:
            direction === "left"
              ? -40
              : direction === "right"
              ? 40
              : 0,
          y: direction === "up" ? 35 : 0,
        },

    whileInView: {
      opacity: 1,
      x: 0,
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
      id="mission-vision"
      className="relative isolate w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* ================================= */}
      {/* BACKGROUND DECORATION             */}
      {/* ================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/5 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#071E34]/5 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ================================= */}
        {/* SECTION HEADING                   */}
        {/* ================================= */}

        <div className="mx-auto mb-14 max-w-[850px] text-center sm:mb-16">

          {/* SMALL LABEL */}
          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0C9B97] sm:text-[12px]">
              OUR PURPOSE & DIRECTION
            </span>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            {...reveal(0.1)}
            className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[53px]"
          >
            Guided by Purpose.
            <span className="mt-2 block text-[#0C9B97]">
              Focused on the Future.
            </span>
          </motion.h2>

          {/* INTRODUCTION */}
          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-6 max-w-[760px] text-[15px] leading-[1.9] text-[#617589] sm:text-[17px]"
          >
            At Maximum Care LLC, our mission and vision
            define the kind of company we are building.
            They reflect our belief that medical courier
            transportation should be approached with
            responsibility, professionalism, and an
            understanding of healthcare organizations'
            unique needs.
          </motion.p>

          {/* HEADING ACCENT */}
          <motion.div
            {...reveal(0.3)}
            className="mx-auto mt-8 h-[3px] w-20 rounded-full bg-[#0C9B97]"
          />
        </div>

        {/* ================================= */}
        {/* MISSION AND VISION CARDS          */}
        {/* ================================= */}

        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2 lg:gap-8">

          {/* ================================= */}
          {/* CARD 1 — OUR MISSION             */}
          {/* ================================= */}

          <motion.div
            {...reveal(0.1, "left")}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -7 }
            }
            className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-[#071E34] p-7 text-white shadow-[0_20px_55px_rgba(7,30,52,0.15)] sm:p-10 lg:p-12"
          >
            {/* BACKGROUND GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0C9B97]/20 blur-[80px]"
            />

            {/* DECORATIVE CIRCLE */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full border-[45px] border-white/[0.035]"
            />

            <div className="relative z-10 flex h-full flex-col">

              {/* ICON AND NUMBER */}
              <div className="mb-9 flex items-start justify-between">

                <div className="flex h-[74px] w-[74px] items-center justify-center rounded-[20px] border border-[#6DE0D3]/20 bg-[#0C9B97]/20 text-[#6DE0D3] transition-transform duration-300 group-hover:scale-105">

                  {/* MISSION TARGET SVG */}
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1" />
                    <path d="M19 5l-7 7" />
                  </svg>
                </div>

                <span className="text-[50px] font-extrabold leading-none tracking-[-0.05em] text-white/10 sm:text-[65px]">
                  01
                </span>
              </div>

              {/* SMALL TITLE */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#6DE0D3]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6DE0D3]">
                  OUR MISSION
                </span>
              </div>

              {/* MAIN CARD HEADING */}
              <h3 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[38px]">
                Delivering With
                <span className="mt-1 block text-[#6DE0D3]">
                  Purpose & Care.
                </span>
              </h3>

              {/* MAIN MISSION STATEMENT */}
              <p className="mt-7 text-[15px] font-medium leading-[1.95] text-[#E0ECF3] sm:text-[16px]">
                Our mission is to support healthcare
                organizations through responsible,
                professional medical courier
                transportation that emphasizes
                clear communication, careful
                coordination, and attention to
                shipment-specific requirements.
              </p>

              {/* EXTENDED DESCRIPTION */}
              <p className="mt-5 text-[14px] leading-[1.95] text-[#B8CDDA] sm:text-[15px]">
                We aim to make transportation arrangements
                easier to understand and manage for
                laboratories, pharmacies, medical offices,
                and healthcare facilities. By discussing
                delivery expectations, pickup schedules,
                appropriate handling instructions, and
                operational availability, we seek to
                establish practical courier arrangements
                that support everyday healthcare operations.
              </p>

              {/* DIVIDER */}
              <div className="my-8 h-px w-full bg-white/15" />

              {/* MISSION PRINCIPLES */}
              <div className="mt-auto">

                <p className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#6DE0D3]">
                  WHAT DRIVES OUR MISSION
                </p>

                <div className="space-y-4">

                  {[
                    "Understanding each client's transportation needs",
                    "Approaching shipments with responsibility and care",
                    "Communicating clearly about delivery arrangements",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0C9B97]/20 text-[#6DE0D3]">

                        {/* CHECK SVG */}
                        <svg
                          width="15"
                          height="15"
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

                      <span className="text-[13px] leading-[1.7] text-[#D0DFE8] sm:text-[14px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM ACCENT */}
            <div className="absolute bottom-0 left-0 h-[5px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-transparent" />
          </motion.div>

          {/* ================================= */}
          {/* CARD 2 — OUR VISION              */}
          {/* ================================= */}

          <motion.div
            {...reveal(0.2, "right")}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -7 }
            }
            className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#DFEAEE] bg-[#F4F9FB] p-7 shadow-[0_20px_55px_rgba(7,30,52,0.065)] transition-colors duration-300 hover:border-[#0C9B97]/30 sm:p-10 lg:p-12"
          >
            {/* BACKGROUND GLOW */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0C9B97]/10 blur-[80px]"
            />

            {/* DECORATIVE CIRCLE */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full border-[45px] border-[#0C9B97]/[0.035]"
            />

            <div className="relative z-10 flex h-full flex-col">

              {/* ICON AND NUMBER */}
              <div className="mb-9 flex items-start justify-between">

                <div className="flex h-[74px] w-[74px] items-center justify-center rounded-[20px] border border-[#D3EDE9] bg-[#E3F5F2] text-[#0C9B97] transition-transform duration-300 group-hover:scale-105">

                  {/* VISION EYE SVG */}
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>

                <span className="text-[50px] font-extrabold leading-none tracking-[-0.05em] text-[#0C9B97]/10 sm:text-[65px]">
                  02
                </span>
              </div>

              {/* SMALL TITLE */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#0C9B97]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0C9B97]">
                  OUR VISION
                </span>
              </div>

              {/* MAIN CARD HEADING */}
              <h3 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[38px]">
                Growing With
                <span className="mt-1 block text-[#0C9B97]">
                  Purpose & Integrity.
                </span>
              </h3>

              {/* MAIN VISION STATEMENT */}
              <p className="mt-7 text-[15px] font-medium leading-[1.95] text-[#334E68] sm:text-[16px]">
                Our vision is to grow into a dependable
                healthcare logistics partner recognized
                for responsible shipment handling,
                thoughtful transportation coordination,
                and a professional approach to
                serving healthcare organizations.
              </p>

              {/* EXTENDED DESCRIPTION */}
              <p className="mt-5 text-[14px] leading-[1.95] text-[#617589] sm:text-[15px]">
                As Maximum Care LLC develops, we aspire
                to build meaningful working relationships
                with healthcare providers across the
                Fargo–Moorhead region and nearby
                communities. We want our growth to be
                guided by service quality, realistic
                commitments, and a willingness to
                understand the changing logistics
                needs of our clients.
              </p>

              {/* DIVIDER */}
              <div className="my-8 h-px w-full bg-[#D7E5EA]" />

              {/* VISION PRINCIPLES */}
              <div className="mt-auto">

                <p className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#0C9B97]">
                  WHAT SHAPES OUR VISION
                </p>

                <div className="space-y-4">

                  {[
                    "Building lasting professional relationships",
                    "Growing through responsible service practices",
                    "Adapting to the needs of healthcare organizations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E0F3F0] text-[#0C9B97]">

                        {/* CHECK SVG */}
                        <svg
                          width="15"
                          height="15"
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

                      <span className="text-[13px] leading-[1.7] text-[#526579] sm:text-[14px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM ACCENT */}
            <div className="absolute bottom-0 left-0 h-[5px] w-full bg-gradient-to-r from-[#0C9B97]/20 via-[#0C9B97] to-transparent" />
          </motion.div>

        </div>

        {/* ================================= */}
        {/* BOTTOM PHILOSOPHY STRIP           */}
        {/* ================================= */}

        <motion.div
          {...reveal(0.2)}
          className="mt-10 overflow-hidden rounded-[24px] border border-[#DFEAEE] bg-[#F4F9FB] px-6 py-8 sm:px-10 sm:py-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            {/* LEFT LABEL */}
            <div className="text-center lg:text-left">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0C9B97]">
                OUR FOUNDATION
              </p>

              <h4 className="mt-2 text-[20px] font-extrabold tracking-[-0.025em] text-[#071E34] sm:text-[23px]">
                The Principles Behind Our Purpose
              </h4>
            </div>

            {/* FOUR FOUNDATION ITEMS */}
            <div className="flex flex-wrap items-center justify-center gap-3">

              {[
                "Care",
                "Responsibility",
                "Communication",
                "Growth",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D5E9E6] bg-white px-4 py-2.5 text-[12px] font-bold text-[#102A43] shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[#0C9B97]" />
                  {item}
                </span>
              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutSection3;
