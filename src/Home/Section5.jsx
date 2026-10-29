
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const locations = [
  { city: "Moorhead", state: "MN" },
  { city: "Dilworth", state: "MN" },
  { city: "Fargo", state: "ND" },
  { city: "West Fargo", state: "ND" },
];

function Section5() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 18 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.2,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.55,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="service-areas"
      className="
        w-full overflow-hidden
        bg-[#071E34]
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
      "
    >
      <div
        className="
          mx-auto grid max-w-[1200px]
          grid-cols-1 gap-9
          lg:grid-cols-[1fr_1fr]
          lg:items-center lg:gap-16
        "
      >

        {/* LEFT — INTRODUCTION */}
        <motion.div {...reveal(0)}>

          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#6DE0D3]
            "
          >
            OUR COVERAGE
          </p>

          <h2
            className="
              mt-3 max-w-[520px]
              text-[30px] font-extrabold
              leading-[1.15]
              tracking-[-0.035em]
              text-white
              sm:text-[38px]
              lg:text-[42px]
            "
          >
            Serving Fargo–Moorhead
            <span className="block text-[#6DE0D3]">
              & Beyond.
            </span>
          </h2>

          <p
            className="
              mt-4 max-w-[470px]
              text-[14px] leading-[1.8]
              text-[#C9DCE5]
              sm:text-[15px]
            "
          >
            Based in Moorhead, Minnesota,
            Maximum Care LLC provides medical
            courier solutions for healthcare
            organizations across the
            Fargo–Moorhead region and
            surrounding communities.
          </p>

          <Link
            to="/service-areas"
            className="
              group mt-6 inline-flex
              items-center gap-2
              text-[13px] font-bold
              text-[#6DE0D3]
              transition-colors
              hover:text-white
            "
          >
            Explore Service Areas

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </motion.div>

        {/* RIGHT — COMPACT LOCATION LIST */}
        <motion.div
          {...reveal(0.1)}
          className="w-full"
        >

          <p
            className="
              mb-3 text-[11px] font-extrabold
              uppercase tracking-[0.17em]
              text-[#6DE0D3]
            "
          >
            PRIMARY SERVICE AREAS
          </p>

          <div className="border-t border-white/20">

            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: 15 }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion
                    ? 0
                    : index * 0.07,
                }}
                className="
                  flex items-center
                  justify-between gap-4
                  border-b border-white/20
                  py-3.5
                "
              >

                <div className="flex items-center gap-3">

                  <span
                    className="
                      h-[6px] w-[6px]
                      shrink-0 rounded-full
                      bg-[#6DE0D3]
                    "
                  />

                  <h3
                    className="
                      text-[16px] font-bold
                      text-white
                      sm:text-[18px]
                    "
                  >
                    {location.city}
                  </h3>
                </div>

                <span
                  className="
                    text-[11px] font-extrabold
                    tracking-[0.1em]
                    text-[#6DE0D3]
                  "
                >
                  {location.state}
                </span>
              </motion.div>
            ))}
          </div>

          {/* SMALL COVERAGE NOTE */}
          <p
            className="
              mt-4 max-w-[550px]
              text-[12px] leading-[1.75]
              text-[#B7CBD5]
            "
          >
            Surrounding communities are also served.
            Additional routes throughout Minnesota
            and North Dakota may be considered
            based on scheduling, requirements,
            and availability.
          </p>

        </motion.div>
      </div>
    </section>
  );
}

export default Section5;
