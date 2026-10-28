
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// ==========================================
// WHO WE SERVE — CLIENT'S ORIGINAL BRIEF
// ==========================================

const audiences = [
  {
    number: "01",
    title: "Hospitals and Health Systems",
    icon: (
      <>
        <rect x="6" y="7" width="36" height="33" rx="3" />
        <path d="M18 40V28h12v12M15 14h18M24 11v12M18 17h12" />
        <path d="M11 40h26M10 17h4M34 17h4" />
      </>
    ),
  },
  {
    number: "02",
    title: "Medical Clinics and Physician Offices",
    icon: (
      <>
        <rect x="8" y="8" width="32" height="32" rx="5" />
        <path d="M24 15v16M16 23h16" />
        <path d="M15 40v-5h18v5" />
      </>
    ),
  },
  {
    number: "03",
    title: "Diagnostic and Clinical Laboratories",
    icon: (
      <>
        <path d="M19 6h10M21 6v14L11 37a4 4 0 0 0 3.5 6h19a4 4 0 0 0 3.5-6L27 20V6" />
        <path d="M16 32h16" />
        <circle cx="23" cy="37" r="1.5" />
        <circle cx="28" cy="35" r="1" />
      </>
    ),
  },
  {
    number: "04",
    title: "Pharmacies",
    icon: (
      <>
        <g transform="rotate(-38 24 24)">
          <rect
            x="8"
            y="16"
            width="32"
            height="16"
            rx="8"
          />
          <path d="M24 16v16" />
        </g>
        <path d="M35 7v10M30 12h10" />
      </>
    ),
  },
  {
    number: "05",
    title: "Dental Clinics and Dental Laboratories",
    icon: (
      <>
        <path d="M24 8c-7-5-15-2-15 7 0 8 5 11 7 20 1 4 5 5 6 1l2-9 2 9c1 4 5 3 6-1 2-9 7-12 7-20 0-9-8-12-15-7Z" />
        <path d="M24 8c3 2 5 3 8 3" />
      </>
    ),
  },
  {
    number: "06",
    title: "Nursing Homes and Long-Term Care Facilities",
    icon: (
      <>
        <path d="m6 22 18-15 18 15" />
        <path d="M11 20v21h26V20" />
        <path d="M20 41V29h8v12" />
        <path d="M18 20h12" />
        <path d="M24 15v10M19 20h10" />
      </>
    ),
  },
  {
    number: "07",
    title: "Medical Supply Companies",
    icon: (
      <>
        <path d="m24 6 17 9v19L24 43 7 34V15Z" />
        <path d="m7 15 17 9 17-9M24 24v19" />
        <path d="M18 13h12M24 9v8" />
      </>
    ),
  },
  {
    number: "08",
    title: "Outpatient and Specialty Healthcare Centers",
    icon: (
      <>
        <rect x="9" y="6" width="30" height="36" rx="4" />
        <path d="M24 13v14M17 20h14" />
        <path d="M18 42v-9h12v9" />
        <path d="M14 33h4M30 33h4" />
      </>
    ),
  },
  {
    number: "09",
    title: "Other Healthcare-Related Organizations",
    icon: (
      <>
        <circle cx="24" cy="24" r="17" />
        <path d="M24 15v18M15 24h18" />
        <path d="m12 12 4 4M36 12l-4 4M12 36l4-4M36 36l-4-4" />
      </>
    ),
  },
];

// ==========================================
// REUSABLE SVG ICON
// ==========================================

function AudienceIcon({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// ==========================================
// SECTION 4 — WHO WE SERVE
// ==========================================

function ServicesSection4() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="who-we-serve"
      className="
        relative w-full overflow-hidden
        bg-[#F3F8FB]
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
      "
    >
      {/* SUBTLE DECORATION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 -top-32
          h-[350px] w-[350px]
          rounded-full bg-[#0C9B97]/5
          blur-[90px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* ====================================== */}
        {/* SECTION HEADING */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0)}
          className="mx-auto mb-9 max-w-[750px] text-center"
        >
          {/* SMALL LABEL */}
          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            HEALTHCARE ORGANIZATIONS
          </p>

          {/* MAIN HEADING */}
          <h2
            className="
              mt-3 text-[30px]
              font-extrabold leading-[1.15]
              tracking-[-0.035em]
              text-[#102A43]
              sm:text-[38px]
              lg:text-[42px]
            "
          >
            Who We{" "}
            <span className="text-[#0C9B97]">
              Serve
            </span>
          </h2>

          {/* CLIENT'S ORIGINAL WORDING */}
          <p
            className="
              mx-auto mt-4
              text-[14px] leading-[1.8]
              text-[#526579]
              sm:text-[15px]
            "
          >
            Maximum Care seeks to work with:
          </p>
        </motion.div>

        {/* ====================================== */}
        {/* NINE HEALTHCARE ORGANIZATION CARDS */}
        {/* ====================================== */}

        <div
          className="
            grid grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {audiences.map((audience, index) => (
            <motion.article
              key={audience.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                      scale: 0.97,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion
                  ? 0
                  : (index % 3) * 0.07,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: {
                        duration: 0.25,
                      },
                    }
              }
              className="
                group relative flex
                min-h-[160px]
                flex-col justify-between
                overflow-hidden
                rounded-[18px]
                border border-[#E0EAF0]
                bg-white
                p-5
                shadow-[0_7px_24px_rgba(7,30,52,0.04)]
                transition-[border-color,box-shadow]
                duration-300
                hover:border-[#0C9B97]/40
                hover:shadow-[0_15px_35px_rgba(7,30,52,0.10)]
                sm:p-6
              "
            >
              {/* TEAL LEFT ACCENT */}
              <span
                aria-hidden="true"
                className="
                  absolute bottom-0 left-0
                  top-0 w-[3px]
                  origin-bottom scale-y-0
                  bg-[#0C9B97]
                  transition-transform duration-300
                  group-hover:scale-y-100
                "
              />

              {/* ICON AND CARD NUMBER */}
              <div className="flex items-start justify-between gap-3">

                {/* ICON CONTAINER */}
                <div
                  className="
                    flex h-[57px] w-[57px]
                    shrink-0 items-center
                    justify-center
                    rounded-[14px]
                    bg-[#EAF7F5]
                    text-[#0C9B97]
                    transition-all duration-300
                    group-hover:bg-[#0C9B97]
                    group-hover:text-white
                  "
                >
                  <AudienceIcon>
                    {audience.icon}
                  </AudienceIcon>
                </div>

                {/* CARD NUMBER */}
                <span
                  className="
                    text-[12px]
                    font-extrabold
                    tracking-[0.08em]
                    text-[#C3D2DB]
                    transition-colors
                    group-hover:text-[#0C9B97]
                  "
                >
                  {audience.number}
                </span>
              </div>

              {/* CARD TITLE */}
              <h3
                className="
                  mt-5 max-w-[300px]
                  text-[16px]
                  font-extrabold
                  leading-[1.45]
                  text-[#102A43]
                  transition-colors duration-300
                  group-hover:text-[#0C9B97]
                  sm:text-[17px]
                "
              >
                {audience.title}
              </h3>

              {/* SMALL BOTTOM ACCENT */}
              <div
                className="
                  mt-4 h-[3px] w-8
                  rounded-full bg-[#CFEAE6]
                  transition-all duration-300
                  group-hover:w-14
                  group-hover:bg-[#0C9B97]
                "
              />
            </motion.article>
          ))}
        </div>

        {/* ====================================== */}
        {/* COMPACT BOTTOM CTA */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0.1)}
          className="
            mt-8 flex flex-col
            items-start justify-between
            gap-5
            rounded-[18px]
            bg-[#071E34]
            px-6 py-6
            text-white
            sm:flex-row
            sm:items-center
            sm:px-8
          "
        >
          <div>
            <h3
              className="
                text-[19px]
                font-extrabold
                leading-[1.3]
              "
            >
              Looking for a Reliable Courier Partner?
            </h3>

            <p
              className="
                mt-2 text-[13px]
                leading-[1.75]
                text-[#C6D8E1]
              "
            >
              Let's discuss how Maximum Care LLC
              may support your organization's
              medical transportation needs.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              inline-flex min-h-[45px]
              shrink-0 items-center
              justify-center gap-2
              rounded-xl
              bg-[#0C9B97]
              px-6
              text-[13px] font-extrabold
              text-white
              transition-colors duration-300
              hover:bg-[#087F7C]
            "
          >
            Contact Our Team

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default ServicesSection4;
