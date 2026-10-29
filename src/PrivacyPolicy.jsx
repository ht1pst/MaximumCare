
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const policySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Maximum Care LLC respects the privacy of visitors, healthcare organizations, and other individuals who use our website.",
      "This Privacy Policy explains the types of information collected through our website, how that information is used, and how to contact us with privacy-related questions.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "When you complete our Contact or Request a Quote forms, we may collect your name, business or healthcare facility name, email address, phone number, and the information you include in your inquiry.",
      "Quote requests may also include pickup and delivery locations, service type, delivery frequency, preferred schedule, and other transportation requirements.",
      "Our website and its technology providers may also process technical information associated with website visits, such as IP addresses, browser information, and usage data.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "Information submitted through our website is used to respond to inquiries, review courier service requests, discuss transportation arrangements, communicate with prospective clients, and support website operations.",
    ],
  },
  {
    title: "4. Website Services and Third Parties",
    paragraphs: [
      "Maximum Care LLC may use third-party service providers to support website hosting, form processing, communications, and other website functions. Information necessary to provide these functions may be processed by those providers.",
      "Our website may also display third-party content, including Google Maps. Such services may process technical information according to their own privacy practices.",
    ],
  },
  {
    title: "5. Sensitive Medical Information",
    paragraphs: [
      "Please do not submit patient names, medical records, diagnoses, prescription details, or other protected health information through our general website forms.",
      "Contact Maximum Care LLC directly to discuss appropriate arrangements for shipments involving sensitive or confidential healthcare materials.",
    ],
  },
  {
    title: "6. Data Retention and Security",
    paragraphs: [
      "Information submitted through our website may be stored or processed through the systems used to manage inquiries and quote requests.",
      "Questions about how long submitted information is retained, how it is protected, or how to request its removal should be directed to Maximum Care LLC using the contact information below.",
    ],
  },
  {
    title: "7. Changes to This Privacy Policy",
    paragraphs: [
      "Maximum Care LLC may update this Privacy Policy to reflect changes to our website, services, or information-handling practices. The latest version will be made available on this page.",
    ],
  },
];

function PrivacyPolicy() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#F7FAFC]">

      {/* ====================================== */}
      {/* PAGE HEADER */}
      {/* ====================================== */}

      <section className="bg-[#071E34] px-5 pb-14 pt-36 text-center sm:px-8 sm:pb-16">
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
          className="mx-auto max-w-[750px]"
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#6DE0D3]">
            MAXIMUM CARE LLC
          </p>

          <h1 className="mt-3 text-[34px] font-extrabold tracking-tight text-white sm:text-[46px]">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-[1.8] text-[#C9DCE5]">
            Information about how we handle website
            inquiries, quote requests, and privacy-related
            questions.
          </p>

          <p className="mt-5 text-[12px] text-[#A8C2D0]">
            Last updated: October 28, 2026
          </p>
        </motion.div>
      </section>

      {/* ====================================== */}
      {/* POLICY CONTENT */}
      {/* ====================================== */}

      <section className="px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-[950px]">

          <div className="rounded-[20px] border border-[#DFE9EE] bg-white p-6 shadow-[0_10px_35px_rgba(7,30,52,0.04)] sm:p-9 lg:p-12">

            {policySections.map((section, index) => (
              <div
                key={section.title}
                className={
                  index === 0
                    ? "pb-7"
                    : "border-t border-[#E5EDF2] py-7"
                }
              >
                <h2 className="text-[19px] font-extrabold leading-[1.4] text-[#102A43] sm:text-[21px]">
                  {section.title}
                </h2>

                <div className="mt-3 space-y-3">
                  {section.paragraphs.map(
                    (paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-[13px] leading-[1.9] text-[#526579] sm:text-[14px]"
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* ================================== */}
            {/* CONTACT INFORMATION */}
            {/* ================================== */}

            <div className="border-t border-[#E5EDF2] pt-7">
              <h2 className="text-[19px] font-extrabold text-[#102A43] sm:text-[21px]">
                8. Contact Us
              </h2>

              <p className="mt-3 text-[13px] leading-[1.9] text-[#526579] sm:text-[14px]">
                For privacy-related questions or inquiries
                about information submitted through this
                website, contact Maximum Care LLC.
              </p>

              <div className="mt-5 space-y-2 text-[13px] text-[#526579] sm:text-[14px]">
                <p>
                  <strong className="text-[#102A43]">
                    Business:
                  </strong>{" "}
                  Maximum Care LLC
                </p>

                <p>
                  <strong className="text-[#102A43]">
                    Address:
                  </strong>{" "}
                  609 38th Avenue South,
                  Moorhead, MN 56560
                </p>

                <p>
                  <strong className="text-[#102A43]">
                    Phone:
                  </strong>{" "}
                  <a
                    href="tel:+17087330065"
                    className="font-semibold text-[#0C9B97] hover:underline"
                  >
                    708-733-0065
                  </a>
                </p>

                <p>
                  <strong className="text-[#102A43]">
                    Email:
                  </strong>{" "}
                  <a
                    href="mailto:maximumcaree@gmail.com"
                    className="break-all font-semibold text-[#0C9B97] hover:underline"
                  >
                    maximumcaree@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* ================================== */}
          {/* RETURN HOME */}
          {/* ================================== */}

          <div className="mt-7 text-center">
            <Link
              to="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0C9B97] px-6 text-[13px] font-extrabold text-white transition-colors hover:bg-[#087F7C]"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
