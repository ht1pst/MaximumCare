
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// ==========================================
// SERVICES DATA — ORIGINAL SVG ICONS
// ==========================================

const services = [
  {
    title: "Laboratory Specimen Transportation",
    description:
      "Careful transport of properly packaged lab specimens with appropriate handling procedures.",
    icon: (
      <>
        <path d="M25 9h14" stroke="#102A43" />
        <path
          d="M28 9v21L16.5 48.8A5 5 0 0 0 20.8 56h22.4a5 5 0 0 0 4.3-7.2L36 30V9"
          stroke="#102A43"
        />
        <path d="M22.5 42h19" stroke="#0C9B97" />
        <path
          d="M22.5 42l-4.1 7a3.5 3.5 0 0 0 3 5.2h21.2a3.5 3.5 0 0 0 3-5.2l-4.1-7"
          fill="#0C9B97"
          opacity=".14"
        />
        <circle cx="29" cy="47" r="2" fill="#0C9B97" />
        <circle cx="37" cy="50" r="1.4" fill="#0C9B97" />
        <path d="M24 21h4M36 21h4" stroke="#0C9B97" />
      </>
    ),
  },
  {
    title: "Prescription & Pharmacy Deliveries",
    description:
      "Reliable delivery of prescriptions and pharmacy items to healthcare facilities and patients.",
    icon: (
      <>
        <g transform="rotate(-38 32 32)">
          <rect
            x="11"
            y="22"
            width="42"
            height="20"
            rx="10"
            stroke="#102A43"
          />
          <path d="M32 22v20" stroke="#102A43" />
          <path
            d="M32 23h11a9 9 0 0 1 0 18H32Z"
            fill="#0C9B97"
            opacity=".16"
          />
          <path d="M17.5 32h8" stroke="#0C9B97" />
        </g>
        <path d="M51 8v10M46 13h10" stroke="#0C9B97" />
        <path d="M11 47v7M7.5 50.5h7" stroke="#0C9B97" />
      </>
    ),
  },
  {
    title: "Medical Supplies & Equipment Delivery",
    description:
      "Transportation of essential medical supplies, equipment, and materials you depend on.",
    icon: (
      <>
        <path
          d="M32 8 53 19.5v25L32 56 11 44.5v-25Z"
          stroke="#102A43"
        />
        <path
          d="m11 19.5 21 12 21-12M32 31.5V56"
          stroke="#102A43"
        />
        <path
          d="m22 13.5 21 12M43 25.5v10"
          stroke="#0C9B97"
        />
        <path
          d="M17 34h10M22 29v10"
          stroke="#0C9B97"
        />
        <path
          d="M37 41h11M42.5 35.5v11"
          stroke="#0C9B97"
        />
      </>
    ),
  },
  {
    title: "Confidential Medical Document Transportation",
    description:
      "Secure delivery of sensitive and confidential healthcare documents.",
    icon: (
      <>
        <path
          d="M16 7h22l11 11v16"
          stroke="#102A43"
        />
        <path
          d="M38 7v12h11M16 7v48h25"
          stroke="#102A43"
        />
        <path
          d="M23 27h17M23 34h11M23 41h8"
          stroke="#0C9B97"
        />
        <rect
          x="35"
          y="39"
          width="20"
          height="16"
          rx="3.5"
          fill="white"
          stroke="#102A43"
        />
        <path
          d="M40 39v-4a5 5 0 0 1 10 0v4"
          stroke="#102A43"
        />
        <circle
          cx="45"
          cy="47"
          r="1.6"
          fill="#0C9B97"
        />
        <path d="M45 48v3" stroke="#0C9B97" />
      </>
    ),
  },
  {
    title: "Scheduled & Routine Courier Services",
    description:
      "Flexible, scheduled deliveries to keep your operations running smoothly.",
    icon: (
      <>
        <rect
          x="9"
          y="14"
          width="46"
          height="41"
          rx="6"
          stroke="#102A43"
        />
        <path
          d="M9 26h46M21 9v11M43 9v11"
          stroke="#102A43"
        />
        <path
          d="M19 34h6M19 42h6"
          stroke="#0C9B97"
        />
        <circle
          cx="40"
          cy="40"
          r="10"
          fill="white"
          stroke="#0C9B97"
        />
        <path
          d="M40 34v6l4 3"
          stroke="#0C9B97"
        />
      </>
    ),
  },
  {
    title: "Time-Sensitive & STAT Deliveries",
    description:
      "Fast, reliable transport for urgent and time-critical items.",
    icon: (
      <>
        <circle
          cx="32"
          cy="35"
          r="20"
          stroke="#102A43"
        />
        <path
          d="M25 8h14M32 8v7M48 17l4-4M52 12l3 3"
          stroke="#102A43"
        />
        <path
          d="m35 23-12 16h9l-3 11 13-18h-9Z"
          fill="#0C9B97"
          fillOpacity=".14"
          stroke="#0C9B97"
        />
        <path
          d="M15 17 11 13M16 53l-4 4"
          stroke="#0C9B97"
        />
      </>
    ),
  },
];

// ==========================================
// REUSABLE SERVICE ICON
// ==========================================

function ServiceIcon({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// ==========================================
// SECTION 3 — OUR SERVICES
// ==========================================

function Section3() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 25 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.12,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="services"
      className="
        relative w-full overflow-hidden
        bg-[#F3F7F9]
        px-5 py-14
        sm:px-8 sm:py-16
        lg:px-12 lg:py-20
        xl:px-16
      "
    >
      <div className="mx-auto max-w-[1300px]">

        {/* ====================================== */}
        {/* SECTION HEADING */}
        {/* ====================================== */}

        <div className="mx-auto max-w-[950px] text-center">
          <motion.p
            {...fadeUp(0)}
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            OUR SERVICES
          </motion.p>

          <motion.h2
            {...fadeUp(0.1)}
            className="
              mx-auto mt-3 max-w-[850px]
              text-[30px] font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#102A43]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[46px]
            "
          >
            Comprehensive Medical Courier Services
          </motion.h2>

          <motion.div
            initial={
              reduceMotion
                ? false
                : { scaleX: 0 }
            }
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              ease,
            }}
            className="
              mx-auto mt-5 h-[3px]
              w-[65px] origin-center
              rounded-full bg-[#0C9B97]
            "
          />

          <motion.p
            {...fadeUp(0.2)}
            className="
              mx-auto mt-5 max-w-[720px]
              text-[14px] leading-[1.85]
              text-[#526579]
              sm:text-[15px]
            "
          >
            From routine deliveries to time-sensitive
            transportation, Maximum Care LLC provides
            professional medical courier solutions designed
            to support the daily operations of healthcare
            organizations.
          </motion.p>
        </div>

        {/* ====================================== */}
        {/* SIX SERVICE CARDS */}
        {/* ====================================== */}

        <div
          className="
            mt-10 grid grid-cols-1 gap-5
            md:grid-cols-2 md:gap-6
            xl:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
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
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion
                  ? 0
                  : (index % 3) * 0.09,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: {
                        duration: 0.25,
                      },
                    }
              }
              className="
                group relative flex h-full
                min-w-0 items-start gap-4
                overflow-hidden rounded-[18px]
                border border-[#E3EDF2]
                bg-white p-5
                shadow-[0_8px_24px_rgba(0,27,59,0.05)]
                transition-[border-color,box-shadow]
                duration-300
                hover:border-[#0C9B97]/40
                hover:shadow-[0_18px_40px_rgba(0,27,59,0.11)]
                sm:gap-5 sm:p-6
              "
            >
              {/* LEFT TEAL HOVER BORDER */}
              <div
                className="
                  absolute left-0 top-0
                  h-full w-[3px]
                  origin-bottom scale-y-0
                  bg-[#0C9B97]
                  transition-transform duration-500
                  group-hover:scale-y-100
                "
              />

              {/* SERVICE ICON */}
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: -5,
                        scale: 1.06,
                      }
                }
                className="
                  flex h-[58px] w-[58px]
                  shrink-0 items-center
                  justify-center
                  rounded-[14px]
                  bg-[#EDF8F8]
                  transition-colors duration-300
                  group-hover:bg-[#DDF3F2]
                  sm:h-[68px] sm:w-[68px]
                  lg:h-[72px] lg:w-[72px]
                "
              >
                <ServiceIcon>
                  {service.icon}
                </ServiceIcon>
              </motion.div>

              {/* SERVICE TEXT */}
              <div className="min-w-0 flex-1">
                <h3
                  className="
                    text-[17px] font-extrabold
                    leading-[1.35] text-[#102A43]
                    transition-colors duration-300
                    group-hover:text-[#0C9B97]
                    sm:text-[18px]
                    xl:text-[20px]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3 text-[14px]
                    leading-[1.75] text-[#526579]
                    sm:text-[15px]
                  "
                >
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ====================================== */}
        {/* CLIENT'S SERVICE REQUIREMENTS NOTICE */}
        {/* ====================================== */}

        <motion.div
          {...fadeUp(0.1)}
          className="
            mx-auto mt-8 max-w-[900px]
            rounded-xl
            border border-[#DCE9EE]
            bg-white/80
            px-5 py-4
            sm:px-7
          "
        >
          <div
            className="
              flex items-start
              justify-center gap-3
            "
          >
            {/* INFORMATION ICON */}
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0C9B97"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="mt-0.5 shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 11v5" />
              <path d="M12 8h.01" />
            </svg>

            <p
              className="
                text-[12px] leading-[1.8]
                text-[#526579]
                sm:text-[13px]
              "
            >
              All services are subject to operational
              readiness, applicable transportation
              requirements, and client-specific handling
              instructions.
            </p>
          </div>
        </motion.div>

        {/* ====================================== */}
        {/* BOTTOM CALL TO ACTION */}
        {/* ====================================== */}

        <motion.div
          {...fadeUp(0.15)}
          className="mt-9 text-center"
        >
          <p
            className="
              mx-auto max-w-[650px]
              text-[14px] leading-[1.8]
              text-[#526579]
              sm:text-[15px]
            "
          >
            Need a courier solution tailored to your
            organization's needs? We're here to help.
          </p>

          <Link
            to="/request-quote"
            className="
              group mt-5 inline-flex
              min-h-[49px] items-center
              justify-center gap-3
              rounded-xl bg-[#102A43]
              px-7 py-3
              text-[13px] font-bold
              text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#0C9B97]
              hover:shadow-[0_12px_30px_rgba(12,155,151,0.20)]
            "
          >
            Discuss Your Courier Needs

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
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Section3;
