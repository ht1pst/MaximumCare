
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// ==========================================
// SERVICE LOCATIONS
// ==========================================

const locations = [
  {
    city: "Moorhead",
    state: "Minnesota",
    label: "Primary service area",
  },
  {
    city: "Dilworth",
    state: "Minnesota",
    label: "Service area",
  },
  {
    city: "Fargo",
    state: "North Dakota",
    label: "Service area",
  },
  {
    city: "West Fargo",
    state: "North Dakota",
    label: "Service area",
  },
];

function ServicesSection6() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services-areas"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-7 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
          }}
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97]">
            OUR SERVICE AREAS
          </p>

          <h2 className="mt-3 text-[28px] font-extrabold leading-[1.14] tracking-[-0.035em] text-[#102A43] sm:text-[36px]">
            Local Coverage.{" "}
            <span className="text-[#0C9B97]">
              Clear Coordination.
            </span>
          </h2>

          <p className="mt-3 text-[14px] leading-[1.75] text-[#526579]">
            Based in Moorhead, we coordinate healthcare
            courier requests across the Fargo–Moorhead area.
            Longer-distance routes may be discussed based on
            availability.
          </p>

          <Link
            to="/service-areas"
            className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0C9B97] px-5 text-[13px] font-extrabold text-white transition-colors hover:bg-[#087F7C]"
          >
            Explore Service Areas →
          </Link>
        </motion.div>

        {/* RIGHT LOCATION PANEL */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 18 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
          className="rounded-[20px] bg-[#071E34] p-5 text-white shadow-[0_16px_42px_rgba(7,30,52,0.12)] sm:p-6"
        >
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#6DE0D3]">
            FEATURED SERVICE LOCATIONS · MN + ND
          </p>

          <div className="grid grid-cols-2 gap-3">
            {locations.map((place) => (
              <div
                key={place.city}
                className="rounded-xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"
              >
                <h3 className="text-[15px] font-extrabold leading-tight text-white">
                  {place.city}
                </h3>

                <p className="mt-1 text-[11px] text-[#BBCFDC]">
                  {place.state}
                </p>

                {place.city === "Moorhead" && (
                  <p className="mt-1.5 text-[10px] font-bold text-[#6DE0D3]">
                    Primary area
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-3 text-[11px] leading-5 text-[#B8CDDA]">
            Routes and delivery windows are subject to
            confirmation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection6;
