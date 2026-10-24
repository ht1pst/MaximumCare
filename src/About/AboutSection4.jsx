
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const values = [
  {
    number: "01",
    title: "Responsibility & Care",
    subtitle: "Every shipment deserves attention.",
    description:
      "Healthcare transportation involves more than moving items between locations. We believe every accepted delivery should be approached with an understanding of its purpose, its requirements, and the people or organizations depending on it.",
    details: [
      "Attention to agreed shipment handling instructions",
      "Appropriate pickup and handoff coordination",
      "Respect for the responsibilities involved in medical transportation",
    ],
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Reliability & Accountability",
    subtitle: "Commitments made with purpose.",
    description:
      "Dependability begins with realistic expectations. As Maximum Care LLC grows, our focus is on building a service approach that values thoughtful planning, appropriate scheduling, and accountability for the transportation arrangements we agree to undertake.",
    details: [
      "Realistic discussions about service availability",
      "Clear pickup and delivery expectations",
      "A commitment to honoring accepted arrangements",
    ],
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
        <path d="m8.5 3.8 1.5 1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Clear Communication",
    subtitle: "Understanding comes first.",
    description:
      "Strong working relationships depend on clear and respectful communication. We aim to understand each client's transportation needs, discuss relevant shipment information, and ensure that pickup arrangements, delivery instructions, and expectations are understood before service begins.",
    details: [
      "Listening to client-specific transportation needs",
      "Clarifying schedules and delivery instructions",
      "Communicating limitations and requirements openly",
    ],
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5A9 9 0 0 1 4 11.5a8.5 8.5 0 0 1 17 0Z" />
        <path d="M8 11h8" />
        <path d="M8 14h5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Confidentiality & Respect",
    subtitle: "Professionalism in every interaction.",
    description:
      "Healthcare organizations may entrust couriers with sealed documents and other sensitive shipments. We recognize the importance of respecting confidentiality requirements, following agreed delivery instructions, and ensuring that sensitive materials are handled only within appropriate arrangements.",
    details: [
      "Respect for sealed and confidential shipments",
      "Attention to authorized recipient instructions",
      "Consideration of applicable privacy and handling requirements",
    ],
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1" />
        <path d="M12 16v2" />
      </svg>
    ),
  },
];

function AboutSection4() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-core-values"
      className="relative isolate w-full overflow-hidden bg-[#F3F8FB] py-20 sm:py-24 lg:py-32"
    >
      {/* ====================================== */}
      {/* BACKGROUND DECORATION                  */}
      {/* ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#071E34]/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ====================================== */}
        {/* SECTION HEADING                       */}
        {/* ====================================== */}

        <div className="mx-auto mb-14 max-w-[850px] text-center sm:mb-16">

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
              ease,
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0C9B97] sm:text-[12px]">
              WHAT WE STAND FOR
            </span>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </motion.div>

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
            className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[53px]"
          >
            Our Core Values.
            <span className="mt-2 block text-[#0C9B97]">
              The Foundation of Our Work.
            </span>
          </motion.h2>

          <motion.p
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
            className="mx-auto mt-6 max-w-[740px] text-[15px] leading-[1.9] text-[#617589] sm:text-[17px]"
          >
            At Maximum Care LLC, we're building our company
            around principles that reflect the needs of
            healthcare transportation. These values guide
            how we approach our responsibilities, communicate
            with clients, and develop meaningful professional
            relationships.
          </motion.p>

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scaleX: 0 }
            }
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.3,
              ease,
            }}
            className="mx-auto mt-8 h-[3px] w-20 origin-center rounded-full bg-[#0C9B97]"
          />
        </div>

        {/* ====================================== */}
        {/* FOUR CORE VALUE CARDS                 */}
        {/* ====================================== */}

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">

          {values.map((value, index) => (

            <motion.article
              key={value.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 45,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion
                  ? 0
                  : (index % 2) * 0.12,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -7 }
              }
              className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E1EBF0] bg-white p-6 shadow-[0_12px_40px_rgba(7,30,52,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#0C9B97]/35 hover:shadow-[0_25px_60px_rgba(7,30,52,0.1)] sm:p-9 lg:p-10"
            >

              {/* DECORATIVE ACCENT */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[5px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#0C9B97]/[0.035] blur-[45px]"
              />

              {/* CARD HEADER */}
              <div className="relative z-10 mb-8 flex items-start justify-between gap-4">

                {/* ICON */}
                <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-[20px] bg-[#E3F6F3] text-[#0C9B97] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0C9B97] group-hover:text-white">
                  {value.icon}
                </div>

                {/* NUMBER */}
                <span className="text-[55px] font-extrabold leading-none tracking-[-0.05em] text-[#E4EEF1] sm:text-[65px]">
                  {value.number}
                </span>
              </div>

              {/* VALUE TITLE */}
              <h3 className="relative z-10 text-[25px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#071E34] sm:text-[30px]">
                {value.title}
              </h3>

              {/* SUBTITLE */}
              <p className="relative z-10 mt-3 text-[14px] font-bold text-[#0C9B97] sm:text-[15px]">
                {value.subtitle}
              </p>

              {/* SHORT ACCENT */}
              <div className="my-6 h-[3px] w-12 rounded-full bg-[#0C9B97]" />

              {/* MAIN DESCRIPTION */}
              <p className="text-[14px] leading-[1.95] text-[#526579] sm:text-[15px]">
                {value.description}
              </p>

              {/* DETAILS DIVIDER */}
              <div className="my-7 h-px w-full bg-[#E5EDF2]" />

              {/* DETAILS */}
              <div className="mt-auto">

                <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#102A43]">
                  WHAT THIS MEANS TO US
                </p>

                <div className="space-y-4">

                  {value.details.map((detail, detailIndex) => (

                    <div
                      key={detailIndex}
                      className="flex items-start gap-3"
                    >

                      {/* CHECK ICON */}
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3F6F3] text-[#0C9B97]">

                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </div>

                      <span className="text-[13px] leading-[1.8] text-[#617589] sm:text-[14px]">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM CORNER DETAIL */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-tl-[80px] bg-[#0C9B97]/[0.025]"
              />

            </motion.article>
          ))}
        </div>

        {/* ====================================== */}
        {/* BOTTOM — VALUES IN ACTION             */}
        {/* ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="relative mt-14 overflow-hidden rounded-[26px] bg-[#071E34] px-6 py-10 text-white sm:mt-16 sm:px-10 lg:px-12"
        >

          {/* BACKGROUND GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-20 h-[300px] w-[300px] rounded-full bg-[#0C9B97]/20 blur-[80px]"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-[800px]">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#6DE0D3]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6DE0D3]">
                  VALUES IN ACTION
                </span>
              </div>

              <h3 className="text-[26px] font-extrabold leading-[1.25] tracking-[-0.025em] sm:text-[32px]">
                Our Values Shape
                <span className="block text-[#6DE0D3]">
                  How We Approach Every Delivery.
                </span>
              </h3>

              <p className="mt-4 max-w-[720px] text-[14px] leading-[1.95] text-[#C2D3DE] sm:text-[15px]">
                From understanding a client's transportation
                requirements to discussing schedules and
                delivery instructions, we aim to put these
                principles into practice as Maximum Care
                LLC grows. Our focus is on developing
                responsible, professional healthcare
                courier relationships.
              </p>
            </div>

            {/* CTA BUTTON */}
            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[13px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6DE0D3]"
            >
              Explore Our Services

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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection4;
