
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// ==========================================
// GOOGLE MAP LOCATION
// ==========================================

const mapEmbedUrl =
  "https://www.google.com/maps?q=Moorhead%2C%20Minnesota&output=embed";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Moorhead%2C%20Minnesota";

// ==========================================
// CONTACT SECTION 4
// ==========================================

function ContactSection4() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section
      id="contact-final-cta"
      className="
        w-full bg-[#F3F8FB]
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
          {...reveal}
          className="mb-7 text-center"
        >
          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            OUR LOCATION
          </p>

          <h2
            className="
              mt-2 text-[28px]
              font-extrabold leading-tight
              text-[#102A43]
              sm:text-[35px]
            "
          >
            Find Us in{" "}
            <span className="text-[#0C9B97]">
              Moorhead, Minnesota.
            </span>
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[650px]
              text-[13px] leading-[1.75]
              text-[#526579]
              sm:text-[14px]
            "
          >
            Maximum Care LLC is based in Moorhead,
            Minnesota, supporting healthcare
            transportation across Fargo–Moorhead
            and surrounding communities.
          </p>
        </motion.div>

        {/* ====================================== */}
        {/* MAP + FINAL CTA */}
        {/* ====================================== */}

        <div
          className="
            grid items-stretch gap-5
            lg:grid-cols-2
            lg:gap-6
          "
        >

          {/* ================================== */}
          {/* LEFT — GOOGLE MAP */}
          {/* ================================== */}

          <motion.div
            {...reveal}
            className="
              overflow-hidden rounded-[20px]
              border border-[#DCE7ED]
              bg-white p-3
              shadow-[0_12px_35px_rgba(7,30,52,0.06)]
            "
          >
            {/* MAP */}
            <div
              className="
                overflow-hidden rounded-[14px]
                bg-[#E2EAF0]
              "
            >
              <iframe
                src={mapEmbedUrl}
                title="Google Map of Moorhead, Minnesota"
                className="
                  h-[250px] w-full border-0
                  sm:h-[300px]
                  lg:h-[310px]
                "
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* MAP FOOTER */}
            <div
              className="
                flex flex-wrap items-center
                justify-between gap-3
                px-2 pb-1 pt-4
              "
            >
              <div>
                <h3
                  className="
                    text-[14px] font-extrabold
                    text-[#102A43]
                  "
                >
                  Moorhead, Minnesota
                </h3>

                <p
                  className="
                    mt-1 text-[12px]
                    text-[#617589]
                  "
                >
                  Maximum Care LLC home city
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  text-[12px] font-extrabold
                  text-[#0C9B97]
                  transition-colors
                  hover:text-[#087F7C]
                "
              >
                Open Google Maps
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>

          {/* ================================== */}
          {/* RIGHT — FINAL CTA */}
          {/* ================================== */}

          
        </div>

        {/* ====================================== */}
        {/* MAP DISCLAIMER */}
        {/* ====================================== */}

        <p
          className="
            mx-auto mt-5
            max-w-[850px]
            text-center text-[11px]
            leading-[1.7]
            text-[#718398]
          "
        >
          The map shows our home city and surrounding
          region, not an exact office location or
          guaranteed service boundary.
        </p>
      </div>
    </section>
  );
}

export default ContactSection4;
