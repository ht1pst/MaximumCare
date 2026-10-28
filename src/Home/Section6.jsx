
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

// ==================================
// STEP DATA
// ==================================

const steps = [
  {
    number: "1",
    title: "Request Service",
    description:
      "Contact Maximum Care to discuss your delivery needs, locations, shipment requirements, and preferred schedule.",
    icon: "clipboard",
  },
  {
    number: "2",
    title: "Confirm Details",
    description:
      "We review the requested service, timing, handling requirements, and availability.",
    icon: "document",
  },
  {
    number: "3",
    title: "Pickup & Transportation",
    description:
      "Accepted shipments are transported according to agreed instructions and applicable requirements.",
    icon: "truck",
  },
  {
    number: "4",
    title: "Delivery Confirmation",
    description:
      "We document delivery details and required handoff information in accordance with the service arrangement.",
    icon: "check",
  },
];

// ==================================
// ORIGINAL SVG ICONS
// ==================================

function StepIcon({ type }) {
  const icons = {
    clipboard: (
      <>
        <rect x="12" y="10" width="24" height="34" rx="2" />
        <path d="M20 10V7h8v3" />
        <rect x="18" y="5" width="12" height="8" rx="2" />
        <path d="m18 23 2 2 3-3" />
        <path d="M26 24h6" />
        <path d="m18 32 2 2 3-3" />
        <path d="M26 33h6" />
      </>
    ),

    document: (
      <>
        <path d="M14 5h18l8 8v30H14a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" />
        <path d="M32 5v9h8" />
        <path d="M19 22h13" />
        <path d="M19 28h13" />
        <path d="M19 34h9" />
      </>
    ),

    truck: (
      <>
        <path d="M5 13h25v23H5z" />
        <path d="M30 21h9l7 8v7H30" />
        <path d="M39 21v8h7" />
        <circle cx="15" cy="38" r="4" />
        <circle cx="38" cy="38" r="4" />
        <path d="M19 38h15" />
      </>
    ),

    check: (
      <>
        <circle cx="25" cy="25" r="20" />
        <path d="m15 25 7 7 14-15" />
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      stroke="#155487"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

// ==================================
// MAIN SECTION
// ==================================

function Section6() {
  const timelineRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1];

  // ANIMATION 1:
  // Tracks how far the timeline has moved
  // through the visitor's screen.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.2"],
  });

  // Makes the line growth smoother.
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // ANIMATION 2:
  // Reusable heading and paragraph reveal.
  const fadeUp = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 30,
          filter: "blur(5px)",
        },

    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },

    viewport: {
      once: false,
      amount: 0.25,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  // ANIMATION 3:
  // Number circles pop into view.
  const numberVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      scale: reduceMotion ? 1 : 0.45,
      rotate: reduceMotion ? 0 : -25,
    },

    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: smoothEase,
      },
    },
  };

  // ANIMATION 4:
  // Icons reveal after the number circles.
  const iconVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 25,
      scale: reduceMotion ? 1 : 0.8,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: smoothEase,
      },
    },
  };

  // ANIMATION 5:
  // Text moves upward into place.
  const textVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 20,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: smoothEase,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="
        relative w-full overflow-hidden
        bg-white px-5 py-[75px]
        md:px-10 md:py-[90px]
      "
    >
      <div className="relative mx-auto max-w-[1200px]">

        {/* ================================== */}
        {/* ANIMATED SECTION HEADING           */}
        {/* ================================== */}

        <div className="mb-[55px] text-center">

          {/* SMALL HEADING */}
          <motion.p
            {...fadeUp(0)}
            className="
              mb-3 text-[12px] font-bold
              uppercase tracking-[0.3em]
              text-[#008F9E]
            "
          >
            HOW IT WORKS
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h2
            {...fadeUp(0.12)}
            className="
              mb-3 font-serif text-[32px]
              font-bold leading-tight
              text-[#071E3E]
              md:text-[44px]
            "
          >
            Simple. Responsive. Dependable.
          </motion.h2>

          {/* ANIMATED TEAL LINE */}
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
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.25,
              ease: smoothEase,
            }}
            className="
              mx-auto my-5 h-[3px]
              w-[70px] origin-center
              rounded-full bg-[#079BA8]
            "
          />

          {/* DESCRIPTION */}
          <motion.p
            {...fadeUp(0.25)}
            className="
              mx-auto max-w-[700px]
              text-[15px] leading-[1.7]
              text-[#64748B]
              md:text-[16px]
            "
          >
            Requesting a medical courier service is quick
            and easy. Here's how it works:
          </motion.p>
        </div>

        {/* ================================== */}
        {/* ANIMATED TIMELINE                  */}
        {/* ================================== */}

        <div ref={timelineRef} className="relative">

          {/* DESKTOP DOTTED LINE */}
          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[12.5%] right-[12.5%]
              top-[24px] hidden
              origin-left
              border-t-[3px] border-dotted
              border-[#AEC8D8]
              md:block
            "
            style={{
              scaleX: reduceMotion ? 1 : lineProgress,
            }}
          />

          {/* MOBILE DOTTED LINE */}
          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              bottom-[65px] left-[23px]
              top-[24px] origin-top
              border-l-[3px] border-dotted
              border-[#AEC8D8]
              md:hidden
            "
            style={{
              scaleY: reduceMotion ? 1 : lineProgress,
            }}
          />

          {/* STEPS GRID */}
          <div
            className="
              grid grid-cols-1 gap-y-10
              md:grid-cols-4 md:gap-y-0
            "
          >
            {steps.map((step, index) => (

              <motion.div
                key={step.number}

                // Controls animation order for
                // the number, icon, title and description.
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                variants={{
                  hidden: {},

                  visible: {
                    transition: {
                      delayChildren: reduceMotion
                        ? 0
                        : index * 0.12,

                      staggerChildren: reduceMotion
                        ? 0
                        : 0.12,
                    },
                  },
                }}
                className={`
                  group relative
                  flex flex-row items-start
                  gap-5

                  md:flex-col md:items-center
                  md:gap-0 md:px-6

                  ${
                    index !== steps.length - 1
                      ? "md:after:absolute md:after:right-0 md:after:top-[88px] md:after:h-[130px] md:after:w-[2px] md:after:bg-[#E4EDF4]"
                      : ""
                  }
                `}
              >

                {/* ================================== */}
                {/* ANIMATED NUMBER CIRCLE             */}
                {/* ================================== */}

                <motion.div
                  variants={numberVariants}
                  className="
                    relative z-10 flex h-[48px]
                    w-[48px] shrink-0
                    items-center justify-center
                    rounded-full bg-[#079BA8]
                    text-[20px] font-extrabold
                    text-white

                    shadow-[0_3px_8px_rgba(0,153,169,0.15)]
                  "
                >
                  {step.number}
                </motion.div>

                {/* ================================== */}
                {/* ICON + CONTENT                     */}
                {/* ================================== */}

                <div
                  className="
                    flex min-w-0 flex-1
                    flex-col items-start

                    md:mt-[22px] md:items-center
                    md:text-center
                  "
                >

                  {/* ================================== */}
                  {/* ANIMATED SVG ICON                  */}
                  {/* ================================== */}

                  <motion.div
                    variants={iconVariants}

                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            rotate: -7,
                            scale: 1.1,
                          }
                    }

                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}

                    className="
                      relative mb-3
                      flex h-[65px] w-[65px]
                      items-center justify-center
                      rounded-2xl

                      bg-[#F1F8FC]

                      transition-colors duration-300
                      group-hover:bg-[#E3F6F5]
                    "
                  >
                    {/* SOFT BACKGROUND ACCENT */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none absolute
                        inset-0 rounded-2xl
                        border border-[#DCEBF2]

                        transition-colors duration-300
                        group-hover:border-[#079BA8]/40
                      "
                    />

                    <StepIcon type={step.icon} />
                  </motion.div>

                  {/* ================================== */}
                  {/* ANIMATED STEP TITLE                */}
                  {/* ================================== */}

                  <motion.h3
                    variants={textVariants}
                    className="
                      mb-3 text-[17px]
                      font-extrabold leading-snug
                      text-[#071E3E]

                      transition-colors duration-300
                      group-hover:text-[#079BA8]

                      md:text-[18px]
                    "
                  >
                    {step.title}
                  </motion.h3>

                  {/* ================================== */}
                  {/* ANIMATED DESCRIPTION               */}
                  {/* ================================== */}

                  <motion.p
                    variants={textVariants}
                    className="
                      max-w-[245px]
                      text-[14px] leading-[1.7]
                      text-[#526579]
                    "
                  >
                    {step.description}
                  </motion.p>

                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section6;
