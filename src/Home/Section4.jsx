
import { motion, useReducedMotion } from "motion/react";

// EXISTING IMAGE
import whyChooseImg from "../assets/service5.webp";

const ease = [0.22, 1, 0.36, 1];

// THREE BENEFITS BASED ON CLIENT BRIEF
const benefits = [
  {
    number: "01",
    title: "Reliable Service",
    description:
      "Dependable pickup and delivery schedules supported by clear, professional communication.",
    icon: (
      <>
        <circle cx="24" cy="24" r="17" />
        <path d="M24 14v11l8 5" />
      </>
    ),
  },
  {
    number: "02",
    title: "Careful Handling",
    description:
      "Appropriate handling, secure transportation, and responsible custody of medical shipments.",
    icon: (
      <>
        <path d="M24 4 40 10v12c0 11-7 18-16 22C15 40 8 33 8 22V10Z" />
        <path d="m16 24 5 5 11-11" />
      </>
    ),
  },
  {
    number: "03",
    title: "Local & Flexible Service",
    description:
      "Moorhead-based courier solutions tailored to scheduled and time-sensitive transportation needs.",
    icon: (
      <>
        <path d="M39 20c0 11-15 24-15 24S9 31 9 20a15 15 0 0 1 30 0Z" />
        <circle cx="24" cy="20" r="5" />
      </>
    ),
  },
];

function Section4() {
  const reduceMotion = useReducedMotion();

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
      amount: 0.15,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="why-choose-us"
      className="
        w-full overflow-hidden
        bg-[#F3F8FB]
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ====================================== */}
        {/* SECTION HEADING */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0)}
          className="mx-auto max-w-[760px] text-center"
        >
          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            WHY CHOOSE US
          </p>

          <h2
            className="
              mt-3 text-[29px]
              font-extrabold leading-[1.2]
              tracking-[-0.035em]
              text-[#102A43]
              sm:text-[38px]
            "
          >
            Why Choose Maximum Care?
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[600px]
              text-[14px] leading-[1.75]
              text-[#526579]
            "
          >
            Professional medical courier solutions
            built on reliability, careful handling,
            and client-focused service.
          </p>
        </motion.div>

        {/* ====================================== */}
        {/* IMAGE + THREE CARDS LAYOUT */}
        {/* ====================================== */}

        <div
          className="
            mt-8 grid grid-cols-1
            items-stretch gap-5
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-7
          "
        >

          {/* ================================== */}
          {/* LEFT IMAGE ON LAPTOP */}
          {/* TOP IMAGE ON MOBILE */}
          {/* ================================== */}

          <motion.div
            {...reveal(0.05)}
            className="
              group relative
              min-h-[240px]
              overflow-hidden
              rounded-[18px]
              bg-[#DCEAF0]
              shadow-[0_10px_30px_rgba(7,30,52,0.08)]
              sm:min-h-[320px]
              lg:min-h-[430px]
            "
          >
            <img
              src={whyChooseImg}
              alt="Maximum Care medical courier transportation"
              loading="lazy"
              decoding="async"
              className="
                absolute inset-0
                h-full w-full
                object-cover object-center
                transition-transform duration-700
                group-hover:scale-[1.04]
              "
            />

            {/* IMAGE OVERLAY */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-gradient-to-t
                from-[#071E34]/80
                via-[#071E34]/10
                to-transparent
              "
            />

            {/* IMAGE TEXT */}
            <div
              className="
                absolute bottom-5
                left-5 right-5
                sm:bottom-7 sm:left-7
              "
            >
              <p
                className="
                  text-[11px] font-bold
                  uppercase tracking-[0.17em]
                  text-[#6DE0D3]
                "
              >
                MAXIMUM CARE LLC
              </p>

              <h3
                className="
                  mt-2 max-w-[380px]
                  text-[23px] font-extrabold
                  leading-[1.2] text-white
                  sm:text-[30px]
                "
              >
                Delivering Care
                <span className="block text-[#6DE0D3]">
                  With Precision.
                </span>
              </h3>
            </div>
          </motion.div>

          {/* ================================== */}
          {/* RIGHT THREE CARDS ON LAPTOP */}
          {/* BELOW IMAGE ON MOBILE */}
          {/* ================================== */}

          <div className="grid grid-cols-1 gap-4">

            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.number}
                {...reveal(
                  reduceMotion ? 0 : 0.1 + index * 0.08
                )}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        x: 4,
                        transition: {
                          duration: 0.25,
                        },
                      }
                }
                className="
                  group flex h-full
                  items-start gap-4
                  rounded-[16px]
                  border border-[#E0EAF0]
                  bg-white p-5
                  shadow-[0_6px_20px_rgba(7,30,52,0.05)]
                  transition-[border-color,box-shadow]
                  duration-300
                  hover:border-[#0C9B97]/40
                  hover:shadow-[0_12px_28px_rgba(7,30,52,0.09)]
                  sm:items-center sm:p-6
                "
              >

                {/* BENEFIT ICON */}
                <div
                  className="
                    flex h-[52px] w-[52px]
                    shrink-0 items-center
                    justify-center
                    rounded-[13px]
                    bg-[#EAF7F5]
                    text-[#0C9B97]
                    transition-colors duration-300
                    group-hover:bg-[#0C9B97]
                    group-hover:text-white
                  "
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {benefit.icon}
                  </svg>
                </div>

                {/* BENEFIT TEXT */}
                <div className="min-w-0 flex-1">

                  <div
                    className="
                      flex flex-wrap items-center
                      justify-between gap-2
                    "
                  >
                    <h3
                      className="
                        text-[17px] font-extrabold
                        leading-[1.35]
                        text-[#102A43]
                        sm:text-[19px]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <span
                      className="
                        text-[11px] font-extrabold
                        text-[#B8CAD3]
                      "
                    >
                      {benefit.number}
                    </span>
                  </div>

                  <p
                    className="
                      mt-2 text-[13px]
                      leading-[1.7]
                      text-[#526579]
                      sm:text-[14px]
                    "
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
