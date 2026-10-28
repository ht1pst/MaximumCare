
import { motion, useReducedMotion } from "motion/react";

const benefits = [
  {
    number: "01",
    title: "Reliable Service",
    description:
      "We understand the importance of dependable pickup and delivery schedules for healthcare operations.",
  },
  {
    number: "02",
    title: "Careful Handling",
    description:
      "We prioritize appropriate handling, secure transportation, and responsible custody of medical shipments.",
  },
  {
    number: "03",
    title: "Professional Communication",
    description:
      "We believe in keeping clients informed and maintaining clear communication throughout the delivery process.",
  },
  {
    number: "04",
    title: "Local Service",
    description:
      "As a Moorhead-based company, we focus on building lasting relationships with healthcare organizations throughout the Fargo–Moorhead region.",
  },
  {
    number: "05",
    title: "Flexible Courier Solutions",
    description:
      "We work with clients to understand their transportation needs and explore suitable scheduled or time-sensitive delivery arrangements.",
  },
];

const smoothEase = [0.22, 1, 0.36, 1];

function Section5() {
  const reduceMotion = useReducedMotion();

  // Section heading animation
  const headingReveal = (delay = 0) => ({
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
      amount: 0.3,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  // Alternating timeline text animation
  const textReveal = (isLeft) => ({
    hidden: {
      opacity: 0,
      x: isLeft ? -55 : 55,
      filter: "blur(6px)",
    },

    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.85,
        ease: smoothEase,
        staggerChildren: 0.12,
      },
    },
  });

  // Title and description appear one after another
  const childReveal = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.65,
        ease: smoothEase,
      },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="h-auto overflow-hidden bg-[#F4F7FB] px-5 pb-10 pt-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* =============================== */}
        {/* ANIMATED SECTION HEADING        */}
        {/* =============================== */}

        <div className="mx-auto w-full max-w-[1200px] px-5 pt-8">

          {/* SMALL HEADING */}
          <motion.p
            {...headingReveal(0)}
            className="mb-4 text-center text-[12px] font-bold uppercase tracking-[0.25em] text-[#0C9B97] md:text-[14px]"
          >
            WHY CHOOSE US
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h2
            {...headingReveal(0.12)}
            className="mx-auto mb-5 max-w-[950px] text-center text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#102A43] sm:text-[36px] md:text-[45px]"
          >
            Why Healthcare Organizations Choose Maximum Care
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            {...headingReveal(0.25)}
            className="mx-auto max-w-[720px] text-center text-[15px] leading-[1.8] text-[#526579] md:text-[16px]"
          >
            We go beyond delivery we're a trusted partner in
            your healthcare mission.
          </motion.p>

        </div>

        {/* =============================== */}
        {/* TIMELINE                        */}
        {/* =============================== */}

        <div className="relative mx-auto mt-10 max-w-[900px]">

          {/* VERTICAL LINE - NO ANIMATION */}
          <div
            aria-hidden="true"
            className="absolute bottom-9 top-9 left-[36px] w-[2px] -translate-x-1/2 bg-[#23B5C6] md:left-1/2"
          />

          {benefits.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.number}
                className="relative grid min-h-[155px] grid-cols-[72px_minmax(0,1fr)] items-center gap-x-5 pb-10 last:pb-0 md:grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)] md:gap-x-6 md:pb-12"
              >

                {/* =============================== */}
                {/* ANIMATED TEXT ONLY              */}
                {/* =============================== */}

                <motion.div
                  variants={
                    reduceMotion
                      ? undefined
                      : textReveal(isLeft)
                  }
                  initial={
                    reduceMotion ? undefined : "hidden"
                  }
                  whileInView={
                    reduceMotion ? undefined : "visible"
                  }
                  viewport={{
                    once: false,
                    amount: 0.35,
                  }}
                  className={`
                    col-start-2 row-start-1
                    max-w-[350px]

                    ${
                      isLeft
                        ? "md:col-start-1 md:justify-self-end md:text-right"
                        : "md:col-start-3 md:justify-self-start md:text-left"
                    }
                  `}
                >

                  {/* ANIMATED BENEFIT TITLE */}
                  <motion.h3
                    variants={
                      reduceMotion
                        ? undefined
                        : childReveal
                    }
                    className="mb-2 text-[20px] font-extrabold text-[#0D223B]"
                  >
                    {item.title}
                  </motion.h3>

                  {/* ANIMATED BENEFIT DESCRIPTION */}
                  <motion.p
                    variants={
                      reduceMotion
                        ? undefined
                        : childReveal
                    }
                    className="text-[14px] leading-[1.8] text-[#496178]"
                  >
                    {item.description}
                  </motion.p>

                </motion.div>

                {/* =============================== */}
                {/* NUMBER CIRCLE - NO ANIMATION    */}
                {/* =============================== */}

                <div className="relative z-10 col-start-1 row-start-1 flex justify-self-center md:col-start-2">

                  <div
                    className={`
                      flex h-[72px] w-[72px]
                      items-center justify-center
                      rounded-full border-[5px]
                      border-white
                      text-[20px] font-extrabold
                      text-white
                      shadow-[0_10px_24px_rgba(13,34,59,0.13)]

                      ${
                        isLeft
                          ? "bg-[#0D223B]"
                          : "bg-[#00A9BC]"
                      }
                    `}
                  >
                    {item.number}
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Section5;
