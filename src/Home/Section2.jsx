
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

import img from "../assets/section2img.webp";

function Section2() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="bg-[#F7FAFC] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2 lg:gap-12">

        {/* LEFT IMAGE */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: -25 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
          className="relative overflow-hidden rounded-[18px] bg-[#DCECF3]"
        >
          <img
            src={img}
            alt="Maximum Care LLC medical courier services"
            loading="lazy"
            decoding="async"
            className="h-[255px] w-full object-cover sm:h-[320px] lg:h-[360px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071E34]/75 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6DE0D3]">
              MAXIMUM CARE LLC
            </p>

            <h3 className="mt-2 text-[21px] font-extrabold leading-tight text-white">
              Delivering Care With Precision.
            </h3>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97]">
            WELCOME TO MAXIMUM CARE
          </p>

          <h2 className="mt-3 text-[29px] font-extrabold leading-[1.17] tracking-[-0.035em] text-[#102A43] sm:text-[38px]">
            Your Trusted Partner
            <span className="block text-[#0C9B97]">
              in Medical Transportation.
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-[1.85] text-[#526579] sm:text-[15px]">
            Maximum Care LLC is a locally owned medical
            courier company based in Moorhead, Minnesota,
            serving healthcare organizations across
            Minnesota and North Dakota.
          </p>

          <p className="mt-3 text-[14px] leading-[1.85] text-[#526579] sm:text-[15px]">
            Built on professionalism, reliability,
            accountability, and respect for sensitive
            medical shipments, we provide dependable
            scheduled and time-sensitive courier solutions.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Locally Owned",
              "Healthcare-Focused",
              "Reliable Service",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-[#D4EBE8] bg-[#EAF7F5] px-3 py-2 text-[11px] font-bold text-[#28736F]"
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-6 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#102A43] px-6 text-[13px] font-bold text-white transition-colors hover:bg-[#0C9B97]"
          >
            More About Maximum Care
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Section2;
