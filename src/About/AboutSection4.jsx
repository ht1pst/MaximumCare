
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

function AboutSection4() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-commitment"
      className="bg-[#F3F8FB] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* ====================================== */}
        {/* COMMITMENT PANEL */}
        {/* ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 22 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="relative overflow-hidden rounded-[22px] bg-[#071E34] px-6 py-9 text-center text-white shadow-[0_15px_45px_rgba(7,30,52,0.1)] sm:px-10 sm:py-11"
        >
          {/* BACKGROUND GLOWS */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[#0C9B97]/15 blur-[80px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-28 h-72 w-72 rounded-full bg-[#6DE0D3]/10 blur-[80px]"
          />

          <div className="relative z-10 mx-auto max-w-[760px]">

            {/* SMALL HEADING */}
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#6DE0D3]">
              OUR COMMITMENT
            </p>

            {/* MAIN HEADING */}
            <h2 className="mt-3 text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[38px]">
              Delivering Care{" "}
              <span className="text-[#6DE0D3]">
                With Precision.
              </span>
            </h2>

            {/* ORIGINAL COMMITMENT */}
            <div className="mx-auto mt-4 max-w-[680px] space-y-3 text-[14px] leading-[1.8] text-[#D0DFE8] sm:text-[15px]">
              <p>
                At Maximum Care, we believe that dependable
                healthcare logistics contribute to efficient
                medical operations.
              </p>

              <p>
                Our commitment is to provide professional
                courier solutions while respecting the
                importance of each shipment entrusted to
                our care.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/request-quote"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#0C9B97] px-6 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#087F7C]"
              >
                Request a Quote
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-white/25 px-6 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            {/* SMALL TAGLINE */}
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9FB9C9]">
              Maximum Care LLC
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection4;
