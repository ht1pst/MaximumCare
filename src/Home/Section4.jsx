
import { motion, useReducedMotion } from "motion/react";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";

// ==========================================
// HEALTHCARE ORGANIZATIONS
// ==========================================

const organizations = [
  {
    image: img1,
    title: "Hospitals & Health Systems",
  },
  {
    image: img2,
    title: "Medical Clinics & Physician Offices",
  },
  {
    image: img3,
    title: "Diagnostic & Clinical Laboratories",
  },
  {
    image: img4,
    title: "Pharmacies",
  },
  {
    image: img5,
    title: "Nursing Homes & Long-Term Care Facilities",
  },
  {
    image: img6,
    title: "Medical Supply Companies",
  },
];

const smoothEase = [0.22, 1, 0.36, 1];

// ==========================================
// WHO WE SERVE SECTION
// ==========================================

function Section4() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 22,
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
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  return (
    <section
      id="who-we-serve"
      className="
        relative w-full overflow-hidden
        bg-white
        px-5 py-10
        sm:px-8 sm:py-12
        lg:px-12 lg:py-14
        xl:px-16
      "
    >
      {/* SUBTLE BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[150px] -top-[150px]
          h-[350px] w-[350px]
          rounded-full bg-[#0C9B97]/[0.04]
          blur-[90px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1300px]">

        {/* ====================================== */}
        {/* COMPACT SECTION HEADING */}
        {/* ====================================== */}

        <div className="mx-auto max-w-[800px] text-center">

          <motion.p
            {...fadeUp(0)}
            className="
              text-[11px] font-bold uppercase
              tracking-[0.22em] text-[#0C9B97]
              sm:text-[12px]
            "
          >
            WHO WE SERVE
          </motion.p>

          <motion.h2
            {...fadeUp(0.08)}
            className="
              mt-3 text-[27px] font-extrabold
              leading-[1.2] tracking-[-0.03em]
              text-[#102A43]
              sm:text-[33px]
              lg:text-[38px]
            "
          >
            Supporting the Healthcare Community
          </motion.h2>

          {/* TEAL UNDERLINE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { scaleX: 0, opacity: 0 }
            }
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.15,
              ease: smoothEase,
            }}
            className="
              mx-auto mt-4 h-[3px] w-[55px]
              origin-center rounded-full
              bg-[#0C9B97]
            "
          />

          <motion.p
            {...fadeUp(0.15)}
            className="
              mx-auto mt-4 max-w-[640px]
              text-[13px] leading-[1.7]
              text-[#526579]
              sm:text-[14px]
            "
          >
            Medical courier services for healthcare
            organizations across Fargo–Moorhead
            and nearby communities.
          </motion.p>
        </div>

        {/* ====================================== */}
        {/* COMPACT SIX-CARD GRID */}
        {/* ====================================== */}

        <div
          className="
            mt-7 grid grid-cols-2 gap-3
            sm:mt-8 sm:grid-cols-3 sm:gap-4
            xl:grid-cols-6 xl:gap-4
          "
        >
          {organizations.map((organization, index) => (
            <motion.div
              key={organization.title}
              {...fadeUp((index % 6) * 0.045)}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 280,
                        damping: 22,
                      },
                    }
              }
              className="
                group relative flex h-full min-w-0
                flex-col overflow-hidden
                rounded-[14px]
                border border-[#E3EDF2]
                bg-white
                shadow-[0_6px_18px_rgba(0,27,59,0.055)]
                transition-[border-color,box-shadow]
                duration-300
                hover:border-[#0C9B97]/40
                hover:shadow-[0_14px_32px_rgba(0,27,59,0.12)]
              "
            >
              {/* SERVICE IMAGE */}
              <div
                className="
                  relative h-[95px] w-full
                  shrink-0 overflow-hidden
                  bg-[#E8F2F5]
                  sm:h-[115px]
                  lg:h-[125px]
                  xl:h-[110px]
                "
              >
                <img
                  src={organization.image}
                  alt={organization.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full w-full object-cover
                    object-center transition-transform
                    duration-500
                    group-hover:scale-[1.07]
                  "
                />

                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-t from-[#102A43]/20
                    via-transparent to-transparent
                  "
                />

                <div
                  className="
                    pointer-events-none absolute
                    bottom-0 left-0 right-0
                    h-[3px] bg-[#0C9B97]
                  "
                />
              </div>

              {/* CARD TITLE */}
              <div
                className="
                  flex min-h-[68px] flex-1
                  items-center justify-center
                  px-2.5 py-3
                  sm:min-h-[75px] sm:px-3
                  xl:min-h-[82px]
                "
              >
                <h3
                  className="
                    text-center text-[12px]
                    font-bold leading-[1.4]
                    text-[#102A43]
                    transition-colors duration-300
                    group-hover:text-[#0C9B97]
                    sm:text-[13px]
                    lg:text-[14px]
                    xl:text-[12px]
                  "
                >
                  {organization.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section4;
