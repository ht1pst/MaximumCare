
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import img from "../assets/faqimg.webp";

// =======================================
// FAQ DATA
// =======================================

const faqs = [
  {
    question: "What areas does Maximum Care LLC serve?",
    answer:
      "Maximum Care LLC is based in Moorhead, Minnesota, and primarily serves Fargo, Moorhead, Dilworth, West Fargo, and surrounding communities. Additional routes throughout Minnesota and North Dakota may be considered based on distance, scheduling, and availability.",
  },
  {
    question: "What types of medical items do you transport?",
    answer:
      "We provide courier solutions for properly packaged laboratory specimens, prescription and pharmacy-related shipments, medical supplies, suitable medical equipment, and sealed confidential healthcare documents. All services are subject to applicable transportation requirements.",
  },
  {
    question: "Do you offer scheduled or recurring courier services?",
    answer:
      "Yes! Maximum Care LLC offers scheduled and routine courier arrangements for healthcare organizations with regular transportation needs. We work with clients to establish suitable pickup schedules, delivery locations, and recurring routes.",
  },
  {
    question: "How do I request a medical courier quote?",
    answer:
      "You can call us at 708-733-0065, email maximumcaree@gmail.com, or complete our online quote request form. Share your pickup and delivery locations, shipment type, and preferred schedule so we can discuss your needs.",
  },
  {
    question: "Can you handle urgent or STAT medical deliveries?",
    answer:
      "Maximum Care LLC offers time-sensitive and STAT courier solutions for urgent medical transportation needs. Pickup availability, delivery expectations, and specific handling requirements are confirmed before accepting each assignment.",
  },
  {
    question: "How do you handle confidential medical documents?",
    answer:
      "Our approach emphasizes responsible custody, appropriate confidentiality practices, and careful handling of sealed medical documents. Specific security and handoff requirements are discussed before accepting shipments.",
  },
];

const smoothEase = [0.22, 1, 0.36, 1];

// =======================================
// FAQ SECTION
// =======================================

function Section8() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // Open one FAQ at a time.
  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  // Reusable scroll animation.
  const reveal = (direction = "up", delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          x:
            direction === "left"
              ? -35
              : direction === "right"
              ? 35
              : 0,
          y: direction === "up" ? 30 : 0,
          filter: "blur(5px)",
        },

    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
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
  });

  return (
    <section
      id="faq"
      className="
        relative w-full overflow-hidden
        bg-[#F3F8FB]
        px-5 py-16
        sm:px-8
        lg:px-12 lg:py-24
      "
    >
      {/* SOFT BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[150px] -top-[150px]
          h-[450px] w-[450px]
          rounded-full bg-[#0C9B97]/[0.05]
          blur-[100px]
        "
      />

      <div
        className="
          relative z-10 mx-auto grid
          max-w-[1250px] items-start
          gap-12 lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
        "
      >
        {/* ======================================= */}
        {/* LEFT CONTENT                           */}
        {/* ======================================= */}

        <div className="w-full">

          {/* SMALL HEADING */}
          <motion.div
            {...reveal("left", 0)}
            className="mb-5 flex items-center gap-3"
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
                duration: reduceMotion ? 0 : 0.65,
                ease: smoothEase,
              }}
              className="
                h-[2px] w-8 shrink-0
                origin-left bg-[#008C96]
              "
            />

            <p
              className="
                text-[12px] font-bold
                uppercase tracking-[0.25em]
                text-[#008C96]
              "
            >
              FREQUENTLY ASKED QUESTIONS
            </p>
          </motion.div>

          {/* ANIMATED MAIN HEADING */}
          <h2
            className="
              max-w-[480px]
              text-[34px] font-extrabold
              leading-[1.15] tracking-[-0.03em]
              text-[#102A43]
              sm:text-[40px]
              lg:text-[46px]
            "
          >
            <motion.span
              {...reveal("left", 0.1)}
              className="block"
            >
              Got Questions?
            </motion.span>

            <motion.span
              {...reveal("left", 0.22)}
              className="mt-2 block text-[#008C96]"
            >
              We've Got Answers.
            </motion.span>
          </h2>

          {/* DESCRIPTION */}
          <motion.p
            {...reveal("up", 0.3)}
            className="
              mt-6 max-w-[460px]
              text-[15px] leading-[1.9]
              text-[#526579]
              sm:text-[16px]
            "
          >
            Have questions about our medical courier services?
            We've answered some of the most common questions
            about Maximum Care LLC, our delivery solutions,
            and the areas we serve.
          </motion.p>

          <motion.p
            {...reveal("up", 0.4)}
            className="
              mt-4 max-w-[460px]
              text-[15px] leading-[1.9]
              text-[#526579]
            "
          >
            Can't find the answer you're looking for?
            Our team is happy to discuss your organization's
            transportation needs.
          </motion.p>

          {/* ======================================= */}
          {/* ANIMATED CONTACT BUTTON                 */}
          {/* ======================================= */}

          <motion.a
            {...reveal("up", 0.45)}
             href="/contact"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -4,
                    scale: 1.04,
                  }
            }
            whileTap={
              reduceMotion
                ? undefined
                : { scale: 0.97 }
            }
            className="
              group mt-8 inline-flex min-h-[48px]
              items-center justify-center
              gap-3 rounded-xl
              bg-[#102A43] px-7
              text-[14px] font-bold text-white

              transition-colors duration-300
              hover:bg-[#0C9B97]
            "
          >
            Contact Our Team

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </motion.a>

          {/* ======================================= */}
          {/* ANIMATED IMAGE                         */}
          {/* ======================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -45,
                    scale: 0.96,
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
              duration: reduceMotion ? 0 : 0.95,
              delay: reduceMotion ? 0 : 0.1,
              ease: smoothEase,
            }}
            className="
              group relative mt-10 h-[250px]
              w-full overflow-hidden rounded-[20px]
              bg-[#DCECF3]
              shadow-[0_18px_45px_rgba(16,42,67,0.12)]

              sm:h-[320px]
            "
          >
            {/* IMAGE WITH HOVER ZOOM */}
            <motion.img
              src={img}
              alt="Healthcare and medical courier services"
              loading="lazy"
              className="h-full w-full object-cover"
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.08 }
              }
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
            />

            {/* GRADIENT OVERLAY */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-gradient-to-t
                from-[#102A43]/80
                via-transparent
                to-transparent
              "
            />

            {/* IMAGE BOTTOM CONTENT */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
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
                delay: reduceMotion ? 0 : 0.3,
                ease: smoothEase,
              }}
              className="
                absolute bottom-6 left-6 right-6
              "
            >
              <h3
                className="
                  text-[20px] font-bold text-white
                  sm:text-[23px]
                "
              >
                Delivering Care With Precision.
              </h3>

              <p className="mt-2 text-[13px] text-white/85">
                Fast. Secure. Reliable.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ======================================= */}
        {/* RIGHT SIDE — ANIMATED ACCORDION         */}
        {/* ======================================= */}

        <div className="w-full space-y-4">

          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <motion.div
                key={faq.question}

                // CARD SCROLL REVEAL
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 35,
                        y: 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion
                    ? 0
                    : index * 0.08,
                  ease: smoothEase,
                }}
                className={`
                  group overflow-hidden
                  rounded-[16px]
                  border bg-white

                  transition-[border-color,box-shadow]
                  duration-300

                  ${
                    isActive
                      ? "border-[#0C9B97]/40 shadow-[0_12px_35px_rgba(16,42,67,0.09)]"
                      : "border-[#E3EDF2] shadow-[0_4px_20px_rgba(16,42,67,0.04)] hover:border-[#0C9B97]/30"
                  }
                `}
              >
                {/* QUESTION BUTTON */}
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isActive}
                    aria-controls={answerId}
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex min-h-[76px] w-full
                      items-center justify-between
                      gap-4 px-5 py-5 text-left
                      sm:px-6
                    "
                  >
                    <span className="flex min-w-0 items-center gap-4">

                      {/* ANIMATED QUESTION ICON */}
                      <motion.span
                        animate={{
                          scale: isActive ? 1.06 : 1,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.25,
                        }}
                        className={`
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-full

                          transition-colors duration-300

                          ${
                            isActive
                              ? "bg-[#0C9B97] text-white"
                              : "bg-[#E6F6F5] text-[#0C9B97]"
                          }
                        `}
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
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4" />
                          <path d="M12 17h.01" />
                        </svg>
                      </motion.span>

                      {/* QUESTION TEXT */}
                      <span
                        className={`
                          text-[15px] font-bold
                          leading-[1.5]
                          transition-colors duration-300
                          sm:text-[16px]

                          ${
                            isActive
                              ? "text-[#0C9B97]"
                              : "text-[#102A43] group-hover:text-[#0C9B97]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </span>

                    {/* ======================================= */}
                    {/* ANIMATED PLUS / MINUS BUTTON             */}
                    {/* ======================================= */}

                    <motion.span
                      animate={{
                        rotate: isActive ? 180 : 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                        ease: smoothEase,
                      }}
                      className={`
                        relative flex h-9 w-9
                        shrink-0 items-center justify-center
                        rounded-full

                        transition-colors duration-300

                        ${
                          isActive
                            ? "bg-[#E6F6F5] text-[#0C9B97]"
                            : "bg-[#F3F7F9] text-[#102A43]"
                        }
                      `}
                    >
                      {/* HORIZONTAL LINE */}
                      <span
                        className="
                          absolute h-[2px] w-3.5
                          rounded-full bg-current
                        "
                      />

                      {/* VERTICAL LINE */}
                      <motion.span
                        animate={{
                          rotate: isActive ? 90 : 0,
                          opacity: isActive ? 0 : 1,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.3,
                        }}
                        className="
                          absolute h-3.5 w-[2px]
                          rounded-full bg-current
                        "
                      />
                    </motion.span>
                  </button>
                </h3>

                {/* ======================================= */}
                {/* SMOOTH MOTION ACCORDION ANSWER           */}
                {/* ======================================= */}

                <motion.div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isActive}

                  // Avoid an opening animation on first load
                  initial={false}

                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}

                  transition={{
                    height: {
                      duration: reduceMotion ? 0 : 0.5,
                      ease: smoothEase,
                    },
                    opacity: {
                      duration: reduceMotion ? 0 : 0.3,
                    },
                  }}

                  className="overflow-hidden"
                >
                  <div
                    className="
                      px-5 pb-6
                      sm:pl-[80px] sm:pr-7
                    "
                  >
                    {/* DIVIDER */}
                    <div className="mb-4 h-px w-full bg-[#E3EDF2]" />

                    {/* ANSWER */}
                    <motion.p
                      animate={{
                        y: isActive ? 0 : -8,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        ease: smoothEase,
                      }}
                      className="
                        text-[14px] leading-[1.9]
                        text-[#526579]
                        sm:text-[15px]
                      "
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* ======================================= */}
          {/* ANIMATED BOTTOM CONTACT STRIP          */}
          {/* ======================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
                    scale: 0.97,
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
              duration: reduceMotion ? 0 : 0.8,
              ease: smoothEase,
            }}
            className="
              mt-7 rounded-[16px]
              border border-[#CBE7E6]
              bg-[#E6F6F5]
              p-6 sm:p-7
            "
          >
            <div className="flex items-start gap-4">

              {/* PHONE ICON */}
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: -8,
                        scale: 1.1,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-xl bg-white
                  text-[#0C9B97]
                "
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-17.64-17.64A2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-.57 1.79L7.8 9.8a16 16 0 0 0 6.4 6.4l1.29-1.31a2 2 0 0 1 1.79-.57l3 .5A2 2 0 0 1 22 16.92Z" />
                </svg>
              </motion.div>

              <div>
                <h3
                  className="
                    text-[18px] font-extrabold
                    text-[#102A43]
                  "
                >
                  Need More Information?
                </h3>

                <p
                  className="
                    mt-2 text-[14px]
                    leading-7 text-[#526579]
                  "
                >
                  Speak with Maximum Care LLC about your
                  medical courier requirements.
                </p>

                <a
                  href="tel:+17087330065"
                  className="
                    group mt-3 inline-flex
                    items-center gap-2
                    text-[15px] font-bold
                    text-[#0C9B97]
                    transition-colors duration-300
                    hover:text-[#087F7C]
                  "
                >
                  Call 708-733-0065

                  <span
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section8;
