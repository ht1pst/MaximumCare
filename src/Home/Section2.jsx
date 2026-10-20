
import img from "../assets/section2img.jpg";

function Section2() {
  const features = [
    "Fast and dependable deliveries",
    "Careful and secure handling",
    "Serving Fargo, Moorhead and Dilworth",
  ];

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-[#F7FAFC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20"
    >
      <div className="mx-auto max-w-[1300px]">

        {/* =============================== */}
        {/* SECTION HEADING                 */}
        {/* =============================== */}

        <div className="flex flex-col">

          {/* SMALL LABEL */}
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#00ACC1] sm:text-[13px]">
            GET TO KNOW US
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0D2137] sm:text-[50px] md:text-[58px] lg:text-[65px]">
            WHO WE ARE
            <span className="text-[#00ACC1]">.</span>
          </h2>

          {/* INTRODUCTION */}
          <p className="mt-5 max-w-[530px] text-[15px] leading-[1.8] text-[#1C3A52] sm:text-[16px]">
            We provide courier services to healthcare providers
            across the healthcare value chain.
          </p>

        </div>

        {/* =============================== */}
        {/* MAIN CONTENT GRID               */}
        {/* =============================== */}

        <div className="mt-12 grid grid-cols-1 items-center gap-12 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">

          {/* =============================== */}
          {/* LEFT SIDE - IMAGE              */}
          {/* =============================== */}

          <div className="relative w-full">

            {/* DECORATIVE TOP CORNER */}
            <div
              className="
                absolute -left-2 -top-2 z-0
                h-20 w-20
                rounded-tl-2xl
                border-l-4 border-t-4
                border-[#00ACC1]

                sm:-left-4 sm:-top-4
                sm:h-28 sm:w-28
              "
            />

            {/* MAIN IMAGE */}
            <div
              className="
                relative z-10
                h-[290px] w-full
                overflow-hidden rounded-2xl
                shadow-[0_20px_50px_rgba(13,33,55,0.12)]

                sm:h-[380px]
                md:h-[450px]
                lg:h-[470px]
                xl:h-[500px]
              "
            >
              <img
                src={img}
                alt="Maximum Care medical courier services"
                loading="lazy"
                className="
                  h-full w-full object-cover object-center
                  transition-transform duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* FLOATING CARD */}
            <div
              className="
                relative z-20
                -mt-12 ml-auto mr-2
                w-[min(90%,280px)]
                rounded-2xl
                border border-[#E3EDF2]
                bg-white p-5
                shadow-[0_15px_40px_rgba(13,33,55,0.12)]

                sm:-bottom-5 sm:-right-4
                sm:absolute sm:mt-0
                sm:w-[265px]

                lg:-bottom-7 lg:-right-3
                xl:-right-7
              "
            >
              <div className="mb-3 flex items-center gap-3">

                {/* SHIELD ICON */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F9FB]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00ACC1"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                {/* CARD HEADING */}
                <h3 className="text-[14px] font-extrabold leading-5 text-[#0D2137]">
                  Care in Every Delivery
                </h3>

              </div>

              {/* CARD DESCRIPTION */}
              <p className="text-[12px] leading-[1.8] text-[#64748B]">
                Reliable logistics with a focus on secure
                handling and dependable service.
              </p>
            </div>

          </div>

          {/* =============================== */}
          {/* RIGHT SIDE - TEXT CONTENT      */}
          {/* =============================== */}

          <div className="flex w-full flex-col lg:pl-2">

            {/* SMALL SECTION LABEL */}
            <div className="flex items-center gap-3">

              <span className="h-[2px] w-8 shrink-0 bg-[#00ACC1]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#00ACC1] sm:text-[12px] sm:tracking-[0.2em]">
                RELIABLE MEDICAL COURIER
              </p>

            </div>

            {/* CONTENT HEADING */}
            <h3
              className="
                mt-5 max-w-[600px]
                text-[30px] font-extrabold
                leading-[1.18] tracking-[-0.025em]
                text-[#0D2137]

                sm:text-[38px]
                md:text-[42px]
                lg:text-[38px]
                xl:text-[46px]
              "
            >
              Reliable Medical Courier Services You Can Trust
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6 max-w-[570px]
                text-[15px] leading-[1.9]
                text-[#526579]

                sm:text-[16px]
              "
            >
              We provide reliable medical courier services,
              ensuring fast deliveries, secure handling,
              and dependable logistics for healthcare
              providers.
            </p>

            {/* FEATURE POINTS */}
            <div className="mt-8 flex flex-col gap-5">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  {/* CHECK ICON */}
                  <div
                    className="
                      mt-[2px] flex h-7 w-7
                      shrink-0 items-center justify-center
                      rounded-full bg-[#DDF7F8]
                      text-[#00ACC1]
                    "
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </div>

                  {/* FEATURE TEXT */}
                  <p className="text-[14px] font-semibold leading-7 text-[#1C3A52] sm:text-[15px]">
                    {feature}
                  </p>

                </div>
              ))}

            </div>

            {/* BUTTON */}
            <div className="mt-9">

              <a
                href="/about"
                className="
                  group inline-flex min-h-[54px]
                  w-full items-center justify-center
                  gap-4 rounded-xl
                  bg-[#0D2137] px-7 py-4
                  text-[12px] font-bold
                  tracking-[0.05em] text-white

                  transition-all duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#00ACC1]
                  hover:shadow-[0_12px_30px_rgba(0,172,193,0.20)]

                  sm:w-auto sm:text-[13px]
                "
              >
                ABOUT MAXIMUM CARE

                {/* ARROW ICON */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Section2;
