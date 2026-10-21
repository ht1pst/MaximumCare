
import { motion, useReducedMotion } from "motion/react";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";

// ===============================
// CARD DATA
// ===============================

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

function Section4() {
  const reduceMotion = useReducedMotion();

  // PREMIUM SMOOTH ANIMATION CURVE
  const smoothEase = [0.22, 1, 0.36, 1];

  // REUSABLE SCROLL ANIMATION
  const fadeUp = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 35,
          filter: "blur(5px)",
        },

    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },

    viewport: {
      once: false,
      amount: 0.2,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
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
        px-5 py-16
        sm:px-8 sm:py-20
        lg:px-12 lg:py-24
        xl:px-16
      "
    >
      {/* SUBTLE BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[180px] -top-[150px]
          h-[450px] w-[450px]
          rounded-full bg-[#0C9B97]/[0.04]
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1300px]">

        {/* ============================== */}
        {/* ANIMATED SECTION HEADING       */}
        {/* ============================== */}

        <div className="mx-auto max-w-[950px] text-center">

          {/* SMALL HEADING */}
          <motion.p
            {...fadeUp(0)}
            className="
              mb-4 text-[12px]
              font-bold uppercase
              tracking-[0.25em]
              text-[#0C9B97]
              md:text-[14px]
            "
          >
            WHO WE SERVE
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h2
            {...fadeUp(0.12)}
            className="
              mx-auto max-w-[950px]
              text-[30px] font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#102A43]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[48px]
            "
          >
            Supporting the Healthcare Community
          </motion.h2>

          {/* ANIMATED TEAL UNDERLINE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    scaleX: 0,
                    opacity: 0,
                  }
            }
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: false,
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.3,
              ease: smoothEase,
            }}
            className="
              mx-auto mt-6
              h-[3px] w-[75px]
              origin-center rounded-full
              bg-[#0C9B97]
            "
          />

          {/* DESCRIPTION */}
          <motion.p
            {...fadeUp(0.25)}
            className="
              mx-auto mt-6 max-w-[720px]
              text-[15px] leading-[1.85]
              text-[#526579]
              sm:text-[16px]
            "
          >
            We proudly serve a wide range of healthcare
            organizations throughout Fargo–Moorhead and
            surrounding communities.
          </motion.p>

        </div>

        {/* ============================== */}
        {/* ANIMATED RESPONSIVE CARDS GRID */}
        {/* ============================== */}

        <div
          className="
            mt-10 grid grid-cols-2
            gap-3
            sm:mt-12 sm:grid-cols-3 sm:gap-5
            md:gap-6
            xl:mt-14 xl:grid-cols-6 xl:gap-5
          "
        >
          {organizations.map((organization, index) => (
            <motion.div
              key={organization.title}

              // CARD STARTING POSITION
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 55,
                      scale: 0.92,
                    }
              }

              // ANIMATE WHEN CARD ENTERS VIEW
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              // REPLAY WHEN SCROLLING BACK
              viewport={{
                once: false,
                amount: 0.25,
              }}

              // STAGGERED APPEARANCE
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion
                  ? 0
                  : (index % 6) * 0.08,
                ease: smoothEase,
              }}

              // PREMIUM HOVER EFFECT
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -10,
                      scale: 1.035,
                      transition: {
                        type: "spring",
                        stiffness: 280,
                        damping: 20,
                      },
                    }
              }

              className="
                group relative flex h-full min-w-0
                flex-col overflow-hidden
                rounded-[16px]
                border border-[#E3EDF2]
                bg-white

                shadow-[0_8px_24px_rgba(0,27,59,0.06)]

                transition-[border-color,box-shadow]
                duration-300 ease-out

                hover:border-[#0C9B97]/40
                hover:shadow-[0_20px_45px_rgba(0,27,59,0.16)]
              "
            >
              {/* ============================== */}
              {/* IMAGE CONTAINER                */}
              {/* ============================== */}

              <div
                className="
                  relative h-[120px] w-full
                  shrink-0 overflow-hidden
                  bg-[#E8F2F5]

                  sm:h-[150px]
                  md:h-[170px]
                  lg:h-[190px]
                  xl:h-[145px]
                "
              >
                {/* ANIMATED IMAGE */}
                <motion.img
                  src={organization.image}
                  alt={organization.title}
                  loading="lazy"
                  className="
                    h-full w-full
                    object-cover object-center
                  "
                  initial={{ scale: 1 }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { scale: 1.12 }
                  }
                  transition={{
                    duration: 0.65,
                    ease: smoothEase,
                  }}
                />

                {/* IMAGE GRADIENT */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#102A43]/20
                    via-transparent
                    to-transparent

                    transition-colors duration-300
                    group-hover:from-[#102A43]/35
                  "
                />

                {/* SUBTLE TEAL IMAGE ACCENT */}
                <div
                  className="
                    pointer-events-none
                    absolute bottom-0 left-0 right-0
                    h-[3px] origin-left scale-x-0
                    bg-[#0C9B97]

                    transition-transform duration-500
                    ease-out
                    group-hover:scale-x-100
                  "
                />

                {/* SMALL CORNER ACCENT */}
                <div
                  className="
                    pointer-events-none
                    absolute right-3 top-3
                    flex h-7 w-7
                    translate-y-2 items-center
                    justify-center rounded-full
                    border border-white/30
                    bg-[#0C9B97]/90
                    text-white opacity-0
                    backdrop-blur-sm

                    transition-all duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* ============================== */}
              {/* CARD CONTENT                   */}
              {/* ============================== */}

              <div
                className="
                  flex min-h-[100px]
                  flex-1 items-center
                  justify-center
                  px-3 py-5

                  sm:min-h-[105px]
                  sm:px-4 sm:py-6

                  xl:min-h-[115px]
                "
              >
                {/* CARD TITLE */}
                <h3
                  className="
                    text-center
                    text-[13px] font-bold
                    leading-[1.5]
                    text-[#001B3B]

                    transition-colors duration-300
                    group-hover:text-[#0C9B97]

                    sm:text-[15px]
                    lg:text-[16px]
                    xl:text-[14px]
                  "
                >
                  {organization.title}
                </h3>
              </div>

              {/* ANIMATED BOTTOM LINE */}
              <div
                className="
                  h-[3px] w-full
                  origin-left scale-x-0
                  bg-[#0C9B97]

                  transition-transform duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Section4;
