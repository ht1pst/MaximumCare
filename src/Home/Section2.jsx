
import { motion, useReducedMotion } from "motion/react";
import img from "../assets/section2img.webp";

const features = [
  "Fast and dependable deliveries",
  "Careful and secure handling",
  "Serving Fargo, Moorhead and Dilworth",
];

function Section2() {
  const reduceMotion = useReducedMotion();

  // Smooth, premium animation curve
  const smoothEase = [0.22, 1, 0.36, 1];

  // Reusable scroll animation
  const reveal = (direction = "up", delay = 0) => {
    const distance = 45;

    return {
      initial: reduceMotion
        ? false
        : {
            opacity: 0,
            x:
              direction === "left"
                ? -distance
                : direction === "right"
                ? distance
                : 0,
            y: direction === "up" ? 35 : 0,
          },

      whileInView: {
        opacity: 1,
        x: 0,
        y: 0,
      },

      viewport: {
        once: false,
        amount: 0.15,
      },

      transition: {
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease: smoothEase,
      },
    };
  };

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-[#F7FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20"
    >
      <div className="mx-auto max-w-[1300px]">

        {/* =============================== */}
        {/* ANIMATED SECTION HEADING        */}
        {/* =============================== */}

        <div className="flex flex-col">

          {/* SMALL LABEL */}
         

          {/* MAIN HEADING */}
    
          {/* INTRODUCTION */}
        

        </div>

        {/* =============================== */}
        {/* MAIN CONTENT GRID               */}
        {/* =============================== */}

        <div className="mt-12 grid grid-cols-1 items-center gap-12 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">

          {/* =============================== */}
          {/* LEFT SIDE - ANIMATED IMAGE      */}
          {/* =============================== */}

          <div className="relative w-full">

            {/* ANIMATED DECORATIVE CORNER */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.5,
                    }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.2,
                ease: smoothEase,
              }}
              className="
                absolute -left-2 -top-2 z-0
                h-20 w-20 origin-top-left
                rounded-tl-2xl
                border-l-4 border-t-4
                border-[#00ACC1]

                sm:-left-4 sm:-top-4
                sm:h-28 sm:w-28
              "
            />

            {/* IMAGE REVEAL */}
            <motion.div
              {...reveal("left", 0.1)}
              className="
                relative z-10
                h-[290px] w-full
                overflow-hidden rounded-2xl
                shadow-[0_20px_50px_rgba(13,33,55,0.12)]

                sm:h-[380px]
                md:h-[450px]
                lg:h-[470px]
                xl:h-[500px]
              "
            >
              <motion.img
                src={img}
                alt="Maximum Care medical courier services"
                loading="lazy"
                initial={{ scale: 1 }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.07 }
                }
                transition={{
                  duration: 0.8,
                  ease: smoothEase,
                }}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>

            {/* =============================== */}
            {/* ANIMATED FLOATING CARD          */}
            {/* =============================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 60,
                      scale: 0.9,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.3,
                ease: smoothEase,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -7,
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                      },
                    }
              }
              className="
                relative z-20
                -mt-12 ml-auto mr-2
                w-[min(90%,280px)]
                rounded-2xl
                border border-[#E3EDF2]
                bg-white p-5
                shadow-[0_15px_40px_rgba(13,33,55,0.12)]

                sm:-bottom-5 sm:-right-4
                sm:absolute sm:mt-0
                sm:w-[265px]

                lg:-bottom-7 lg:-right-3
                xl:-right-7
              "
            >
              <div className="mb-3 flex items-center gap-3">

                {/* ANIMATED SHIELD ICON */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { rotate: -8, scale: 1.1 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F9FB]"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00ACC1"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </motion.div>

                {/* CARD HEADING */}
                <h3 className="text-[14px] font-extrabold leading-5 text-[#0D2137]">
                  Care in Every Delivery
                </h3>

              </div>

              {/* CARD DESCRIPTION */}
              <p className="text-[12px] leading-[1.8] text-[#64748B]">
                Reliable logistics with a focus on secure
                handling and dependable service.
              </p>

            </motion.div>

          </div>

          {/* =============================== */}
          {/* RIGHT SIDE - ANIMATED CONTENT  */}
          {/* =============================== */}

          <div className="flex w-full flex-col lg:pl-2">

            {/* SMALL SECTION LABEL */}
            <motion.div
              {...reveal("right", 0.1)}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : { scaleX: 0 }
                }
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.2,
                }}
                className="h-[2px] w-8 shrink-0 origin-left bg-[#00ACC1]"
              />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#00ACC1] sm:text-[12px] sm:tracking-[0.2em]">
                RELIABLE MEDICAL COURIER
              </p>
            </motion.div>

            {/* CONTENT HEADING */}
            <motion.h3
              {...reveal("right", 0.2)}
              className="
                mt-5 max-w-[600px]
                text-[30px] font-extrabold
                leading-[1.18] tracking-[-0.025em]
                text-[#0D2137]

                sm:text-[38px]
                md:text-[42px]
                lg:text-[38px]
                xl:text-[46px]
              "
            >
              Reliable Medical Courier Services You Can Trust
            </motion.h3>

            {/* DESCRIPTION */}
            <motion.p
              {...reveal("right", 0.3)}
              className="
                mt-6 max-w-[570px]
                text-[15px] leading-[1.9]
                text-[#526579]
                sm:text-[16px]
              "
            >
              We provide reliable medical courier services,
              ensuring fast deliveries, secure handling,
              and dependable logistics for healthcare
              providers.
            </motion.p>

            {/* =============================== */}
            {/* STAGGERED FEATURE POINTS        */}
            {/* =============================== */}

            <div className="mt-8 flex flex-col gap-5">

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 40,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion
                      ? 0
                      : index * 0.15,
                    ease: smoothEase,
                  }}
                  className="group flex items-start gap-4"
                >

                  {/* CHECK ICON */}
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.18,
                            rotate: 10,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="
                      mt-[2px] flex h-7 w-7
                      shrink-0 items-center justify-center
                      rounded-full bg-[#DDF7F8]
                      text-[#00ACC1]
                    "
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </motion.div>

                  {/* FEATURE TEXT */}
                  <p className="text-[14px] font-semibold leading-7 text-[#1C3A52] transition-colors duration-300 group-hover:text-[#00ACC1] sm:text-[15px]">
                    {feature}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* =============================== */}
            {/* ANIMATED BUTTON                */}
            {/* =============================== */}

            <motion.div
              {...reveal("up", 0.3)}
              className="mt-9"
            >
              <motion.a
                href="/about"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.04,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.96 }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  group inline-flex min-h-[54px]
                  w-full items-center justify-center
                  gap-4 rounded-xl
                  bg-[#0D2137] px-7 py-4
                  text-[12px] font-bold
                  tracking-[0.05em] text-white

                  transition-colors duration-300
                  hover:bg-[#00ACC1]
                  hover:shadow-[0_12px_30px_rgba(0,172,193,0.20)]

                  sm:w-auto sm:text-[13px]
                "
              >
                ABOUT MAXIMUM CARE

                {/* ANIMATED ARROW */}
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { x: 5 }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </motion.svg>

              </motion.a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Section2;
