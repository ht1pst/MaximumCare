
import { motion, useReducedMotion } from "motion/react";
import img from "../assets/img3.webp";

const highlights = [
  {
    title: "Responsive Service",
    description: "Professional communication",
  },
  {
    title: "Careful Handling",
    description: "Every shipment matters",
  },
  {
    title: "Local & Regional",
    description: "Fargo–Moorhead area",
  },
];

const smoothEase = [0.22, 1, 0.36, 1];

function Section7() {
  const reduceMotion = useReducedMotion();

  // Reusable scroll animation
  const reveal = (direction = "up", delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          x:
            direction === "left"
              ? -45
              : direction === "right"
              ? 45
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
      className="
        relative isolate overflow-hidden
        bg-[#071E34] text-white
      "
    >
      {/* =============================== */}
      {/* BACKGROUND DECORATION           */}
      {/* =============================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 -top-40
          h-[450px] w-[450px]
          rounded-full bg-[#0C9B97]/10
          blur-[110px]
        "
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 45, 0],
                y: [0, 30, 0],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="
          pointer-events-none absolute
          bottom-0 right-0
          h-[350px] w-[350px]
          rounded-full bg-[#0C9B97]/10
          blur-[100px]
        "
      />

      {/* =============================== */}
      {/* MAIN CONTAINER                  */}
      {/* =============================== */}

      <div
        className="
          relative z-10 mx-auto grid
          max-w-[1280px] items-center
          gap-14 px-5 py-20

          sm:px-8

          lg:grid-cols-2
          lg:gap-16 lg:px-12 lg:py-28
        "
      >
        {/* =============================== */}
        {/* LEFT CONTENT                    */}
        {/* =============================== */}

        <div className="max-w-[620px]">

          {/* SMALL HEADING */}
          <motion.div
            {...reveal("left", 0)}
            className="mb-6 flex items-center gap-3"
          >
            <motion.span
              initial={
                reduceMotion
                  ? false
                  : { scaleX: 0 }
              }
              whileInView={{ scaleX: 1 }}
              viewport={{
                once: false,
                amount: 0.5,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.15,
              }}
              className="
                h-[2px] w-9 shrink-0
                origin-left bg-[#0C9B97]
              "
            />

            <p
              className="
                text-[11px] font-bold
                uppercase tracking-[0.25em]
                text-[#6DE0D3]

                sm:text-[12px]
              "
            >
              YOUR PARTNER IN HEALTHCARE LOGISTICS
            </p>
          </motion.div>

          {/* =============================== */}
          {/* ANIMATED MAIN HEADING          */}
          {/* =============================== */}

          <h2
            className="
              max-w-[600px]
              text-[36px] font-extrabold
              leading-[1.15] tracking-[-0.03em]
              text-white

              sm:text-[44px]
              lg:text-[52px]
            "
          >
            <motion.span
              {...reveal("left", 0.1)}
              className="block"
            >
              Your Deliveries Matter.
            </motion.span>

            <motion.span
              {...reveal("left", 0.25)}
              className="
                mt-2 block text-[#6DE0D3]
              "
            >
              Your Trust Matters More.
            </motion.span>
          </h2>

          {/* =============================== */}
          {/* ANIMATED DESCRIPTION           */}
          {/* =============================== */}

          <motion.p
            {...reveal("up", 0.3)}
            className="
              mt-7 max-w-[540px]
              text-[15px] leading-[1.9]
              text-[#CBD5E1]

              sm:text-[16px]
            "
          >
            At Maximum Care LLC, we understand that every
            medical delivery matters. From scheduled courier
            services to time-sensitive transportation, we're
            committed to providing dependable solutions that
            support your healthcare operations.
          </motion.p>

          {/* =============================== */}
          {/* ANIMATED BUTTONS               */}
          {/* =============================== */}

          <motion.div
            {...reveal("up", 0.4)}
            className="
              mt-9 flex flex-col gap-4
              sm:flex-row
            "
          >
            {/* REQUEST QUOTE */}
            <motion.a
              href="/request-quote"
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
                items-center justify-center
                gap-3 rounded-xl
                bg-[#0C9B97] px-7
                text-[15px] font-bold text-white

                shadow-[0_10px_30px_rgba(12,155,151,0.18)]

                transition-colors duration-300
                hover:bg-[#087F7C]
              "
            >
              Request a Quote

              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.a>

            {/* CALL BUTTON */}
            <motion.a
              href="tel:+17087330065"
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
                inline-flex min-h-[54px]
                items-center justify-center
                gap-3 rounded-xl
                border border-white/25
                bg-white/5 px-7
                text-[15px] font-semibold
                text-white

                transition-colors duration-300
                hover:border-[#6DE0D3]
                hover:bg-white/10
              "
            >
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
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-3.27 2.07 19.8 19.8 0 0 1-8.63-8.63A19.8 19.8 0 0 1 8.03 4.73 2 2 0 0 1 10.1 1.46h3a2 2 0 0 1 2 1.72c.12.96.35 1.91.69 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.56 6.56l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.69a2 2 0 0 1 1.72 2z"
                  transform="translate(2 1) scale(.82)"
                />
              </svg>

              Call 708-733-0065
            </motion.a>
          </motion.div>

          {/* =============================== */}
          {/* ANIMATED TRUST STATEMENT       */}
          {/* =============================== */}

          <motion.div
            {...reveal("up", 0.5)}
            className="
              mt-9 flex items-center gap-3
              border-t border-white/10 pt-7
            "
          >
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -10,
                      scale: 1.1,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full bg-[#0C9B97]/15
              "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6DE0D3"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </motion.div>

            <p
              className="
                text-[13px] leading-6
                text-[#CBD5E1]
              "
            >
              Fast. Secure. Reliable.

              <span className="block text-white/60">
                Professional Medical Courier Services
              </span>
            </p>
          </motion.div>
        </div>

        {/* =============================== */}
        {/* RIGHT IMAGE AREA                */}
        {/* =============================== */}

        <div className="relative">

          {/* ANIMATED IMAGE CONTAINER */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 60,
                    scale: 0.95,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              delay: reduceMotion ? 0 : 0.15,
              ease: smoothEase,
            }}
            className="
              group relative h-[360px]
              overflow-hidden rounded-[24px]
              border border-white/10
              bg-[#102A43]

              shadow-[0_25px_70px_rgba(0,0,0,0.25)]

              sm:h-[440px]
              lg:h-[500px]
            "
          >
            {/* IMAGE ZOOM ON HOVER */}
            <motion.img
              src={img}
              alt="Maximum Care medical courier services"
              loading="lazy"
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.07 }
              }
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              className="
                h-full w-full object-cover
              "
            />

            {/* IMAGE OVERLAY */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-gradient-to-t
                from-[#071E34]/85
                via-[#071E34]/10
                to-transparent
              "
            />

            {/* =============================== */}
            {/* ANIMATED IMAGE BOTTOM TEXT     */}
            {/* =============================== */}

            <motion.div
              {...reveal("up", 0.35)}
              className="
                absolute bottom-7 left-6 right-6
                sm:bottom-9 sm:left-9
              "
            >
              {/* TRUCK ICON */}
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        rotate: -6,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  mb-4 flex h-12 w-12
                  items-center justify-center
                  rounded-xl border border-white/20
                  bg-white/15 backdrop-blur-md
                "
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 7h11v10H3z" />
                  <path d="M14 10h4l3 4v3h-7z" />
                  <circle cx="7.5" cy="18" r="2" />
                  <circle cx="17.5" cy="18" r="2" />
                </svg>
              </motion.div>

              <h3
                className="
                  text-[23px] font-bold
                  leading-tight text-white
                  sm:text-[27px]
                "
              >
                Delivering Care With Precision.
              </h3>

              <p
                className="
                  mt-2 max-w-[350px]
                  text-[14px] leading-6
                  text-white/80
                "
              >
                Supporting healthcare organizations across
                Fargo–Moorhead and surrounding communities.
              </p>
            </motion.div>
          </motion.div>

          {/* =============================== */}
          {/* ANIMATED FLOATING LOCATION CARD */}
          {/* =============================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 55,
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
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.4,
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
                      stiffness: 260,
                      damping: 20,
                    },
                  }
            }
            className="
              absolute -bottom-6
              left-4 right-4
              rounded-2xl
              border border-[#E3EDF2]
              bg-white p-4

              shadow-[0_15px_45px_rgba(0,0,0,0.15)]

              sm:-left-7 sm:right-auto
              sm:min-w-[285px] sm:p-5
            "
          >
            <div className="flex items-center gap-3">

              {/* LOCATION ICON */}
              <div
                className="
                  flex h-12 w-12
                  shrink-0 items-center
                  justify-center rounded-xl
                  bg-[#E6F6F5]
                "
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0C9B97"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <p
                  className="
                    text-[15px] font-extrabold
                    text-[#102A43]
                  "
                >
                  Proudly Locally Based
                </p>

                <p
                  className="
                    mt-1 text-[12px]
                    text-[#526579]
                  "
                >
                  Moorhead, Minnesota
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =============================== */}
      {/* ANIMATED BOTTOM FEATURE STRIP   */}
      {/* =============================== */}

      <div
        className="
          relative z-10 mx-auto
          max-w-[1280px]
          px-5 pb-12 pt-8

          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid gap-6
            border-t border-white/10
            pt-8

            sm:grid-cols-3 sm:gap-8
          "
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion
                  ? 0
                  : index * 0.15,
                ease: smoothEase,
              }}
              className="
                group flex items-start gap-4
              "
            >
              {/* CHECK ICON */}
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.12,
                        rotate: 10,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="
                  flex h-10 w-10
                  shrink-0 items-center
                  justify-center rounded-full
                  bg-[#0C9B97]/15
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6DE0D3"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </motion.div>

              {/* FEATURE TEXT */}
              <div>
                <h4
                  className="
                    text-[15px] font-bold
                    text-white
                    transition-colors duration-300
                    group-hover:text-[#6DE0D3]
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    mt-1 text-[13px]
                    text-[#CBD5E1]
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section7;
