
import { motion, useReducedMotion } from "motion/react";

const values = [
  {
    number: "01",
    title: "Reliability",
    description:
      "We strive to deliver consistent and dependable courier service.",
    icon: (
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
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We believe in honesty, accountability, and responsible business practices.",
    icon: (
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Professionalism",
    description:
      "We approach every assignment with respect, attention to detail, and a commitment to service quality.",
    icon: (
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
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Confidentiality",
    description:
      "We recognize the sensitive nature of healthcare information and the importance of protecting confidential materials.",
    icon: (
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
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15.5" r="1" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Safety",
    description:
      "We prioritize responsible transportation practices and adherence to applicable handling requirements.",
    icon: (
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="M12 8v5" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Customer Commitment",
    description:
      "We value clear communication, responsiveness, and lasting client relationships.",
    icon: (
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
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5A9 9 0 0 1 4 11.5a8.5 8.5 0 0 1 17 0Z" />
        <path d="M8 11h8M8 14h5" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1];

function AboutSection3() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-core-values"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

        {/* ====================================== */}
        {/* SECTION HEADING */}
        {/* ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="mx-auto max-w-[700px] text-center"
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97]">
            WHAT GUIDES US
          </p>

          <h2 className="mt-3 text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#102A43] sm:text-[38px]">
            Our Core Values
          </h2>

          <p className="mt-3 text-[14px] leading-[1.75] text-[#526579]">
            The principles behind our approach to
            healthcare transportation and client service.
          </p>
        </motion.div>

        {/* ====================================== */}
        {/* SIX CORE VALUE CARDS */}
        {/* ====================================== */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion
                  ? 0
                  : (index % 3) * 0.06,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4 }
              }
              className="group rounded-[17px] border border-[#DFEAF0] bg-[#F8FBFC] p-5 transition-all duration-300 hover:border-[#0C9B97]/40 hover:bg-white hover:shadow-[0_12px_30px_rgba(7,30,52,0.07)] sm:p-6"
            >
              {/* ICON + NUMBER */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5F7F4] text-[#0C9B97] transition-colors duration-300 group-hover:bg-[#0C9B97] group-hover:text-white">
                  {value.icon}
                </div>

                <span className="text-[12px] font-extrabold text-[#0C9B97]/50">
                  {value.number}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-[17px] font-extrabold text-[#102A43]">
                {value.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-[13px] leading-[1.75] text-[#526579]">
                {value.description}
              </p>

              {/* SMALL BOTTOM ACCENT */}
              <div className="mt-4 h-[2px] w-9 rounded-full bg-[#0C9B97]/50 transition-all duration-300 group-hover:w-16 group-hover:bg-[#0C9B97]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection3;
