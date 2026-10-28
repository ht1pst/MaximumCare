
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { Link } from "react-router-dom";

// ==========================================
// FAQ DATA
// ==========================================

const faqs = [
  {
    question: "What areas does Maximum Care LLC serve?",
    answer:
      "We primarily serve Moorhead, Fargo, West Fargo, Dilworth, and surrounding communities. Additional routes across Minnesota and North Dakota may be considered based on distance, scheduling, and availability.",
  },
  {
    question: "What medical items do you transport?",
    answer:
      "We provide courier solutions for properly packaged laboratory specimens, pharmacy shipments, medical supplies, suitable equipment, and sealed confidential healthcare documents, subject to applicable requirements.",
  },
  {
    question: "Do you offer scheduled or recurring services?",
    answer:
      "Yes. We discuss regular pickup schedules, delivery locations, and recurring courier arrangements with healthcare organizations.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Complete our online quote form or call 708-733-0065. Include your pickup and delivery locations, shipment type, and preferred schedule.",
  },
  {
    question: "Can you handle urgent or STAT deliveries?",
    answer:
      "Time-sensitive and STAT requests may be considered based on availability, delivery requirements, and scheduling.",
  },
  {
    question: "How are confidential documents handled?",
    answer:
      "We emphasize responsible custody, careful handling of sealed documents, and agreed confidentiality and delivery instructions.",
  },
];

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// COMPACT FAQ SECTION
// ==========================================

function Section8() {
  const [activeIndex, setActiveIndex] = useState(null);
  const reduceMotion = useReducedMotion();

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="
        scroll-mt-24 bg-[#F3F8FB]
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
      "
    >
      <div className="mx-auto max-w-[850px]">

        {/* ====================================== */}
        {/* SECTION HEADING */}
        {/* ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease,
          }}
          className="mb-7 text-center"
        >
          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            QUICK ANSWERS
          </p>

          <h2
            className="
              mt-2 text-[28px]
              font-extrabold leading-tight
              tracking-[-0.03em]
              text-[#102A43]
              sm:text-[35px]
            "
          >
            Frequently Asked Questions
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[550px]
              text-[13px] leading-[1.75]
              text-[#526579]
              sm:text-[14px]
            "
          >
            Find answers to common questions about
            our medical courier services.
          </p>
        </motion.div>

        {/* ====================================== */}
        {/* FAQ ACCORDION */}
        {/* ====================================== */}

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 15 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion
                    ? 0
                    : index * 0.04,
                  ease,
                }}
                className={`
                  overflow-hidden rounded-xl
                  border bg-white
                  transition-[border-color,box-shadow]
                  duration-300
                  ${
                    isOpen
                      ? "border-[#0C9B97]/40 shadow-[0_6px_20px_rgba(16,42,67,0.05)]"
                      : "border-[#E3EDF2]"
                  }
                `}
              >
                {/* QUESTION */}
                <h3>
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="
                      flex w-full items-center
                      justify-between gap-4
                      px-5 py-4 text-left
                      focus-visible:outline-2
                      focus-visible:outline-offset-[-2px]
                      focus-visible:outline-[#0C9B97]
                    "
                  >
                    <span
                      className="
                        text-[13px] font-bold
                        leading-[1.5]
                        text-[#102A43]
                        sm:text-[14px]
                      "
                    >
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS ICON */}
                    <span
                      aria-hidden="true"
                      className={`
                        flex h-7 w-7 shrink-0
                        items-center justify-center
                        rounded-lg text-[19px]
                        font-medium
                        transition-colors duration-300
                        ${
                          isOpen
                            ? "bg-[#0C9B97] text-white"
                            : "bg-[#EAF7F5] text-[#0C9B97]"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={
                        reduceMotion
                          ? false
                          : { height: 0, opacity: 0 }
                      }
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: reduceMotion
                          ? 0
                          : 0.3,
                        ease,
                      }}
                      className="overflow-hidden"
                    >
                      <p
                        className="
                          border-t border-[#EAF0F3]
                          px-5 pb-4 pt-3
                          text-[13px] leading-[1.75]
                          text-[#526579]
                        "
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ====================================== */}
        {/* COMPACT CONTACT CTA */}
        {/* ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease,
          }}
          className="mt-8 text-center"
        >
          <p className="text-[14px] font-bold text-[#102A43]">
            Still have questions?
          </p>

          <p
            className="
              mt-1 text-[13px]
              leading-[1.7]
              text-[#526579]
            "
          >
            We're here to discuss your delivery needs.
          </p>

          <Link
            to="/contact"
            className="
              mt-4 inline-flex min-h-[45px]
              items-center justify-center
              rounded-xl bg-[#0C9B97]
              px-6 text-[13px]
              font-extrabold text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#087F7C]
            "
          >
            Contact Our Team
            <span
              className="ml-2"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Section8;
