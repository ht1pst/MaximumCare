
import img from "../assets/img3.jpg";

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

function Section7() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071E34] text-white">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/10 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#0C9B97]/10 blur-[100px]" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">

        {/* LEFT CONTENT */}
        <div className="max-w-[620px]">

          {/* SMALL HEADING */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#0C9B97]"></span>

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6DE0D3] sm:text-[12px]">
              YOUR PARTNER IN HEALTHCARE LOGISTICS
            </p>
          </div>

          {/* MAIN HEADING */}
          <h2 className="max-w-[600px] text-[36px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[52px]">
            Your Deliveries Matter.
            <span className="mt-2 block text-[#6DE0D3]">
              Your Trust Matters More.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-[540px] text-[15px] leading-[1.9] text-[#CBD5E1] sm:text-[16px]">
            At Maximum Care LLC, we understand that every
            medical delivery matters. From scheduled courier
            services to time-sensitive transportation, we're
            committed to providing dependable solutions that
            support your healthcare operations.
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            {/* REQUEST QUOTE */}
            <a
              href="mailto:maximumcaree@gmail.com?subject=Medical%20Courier%20Quote%20Request"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(12,155,151,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7C] hover:shadow-[0_15px_35px_rgba(12,155,151,0.25)]"
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
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* CALL BUTTON */}
            <a
              href="tel:+17087330065"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-7 text-[15px] font-semibold text-white transition-all duration-300 hover:border-[#6DE0D3] hover:bg-white/10"
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
                <path d="M22 16.92v3a2 2 0 0 1-3.27 2.07 19.8 19.8 0 0 1-8.63-8.63A19.8 19.8 0 0 1 8.03 4.73 2 2 0 0 1 10.1 1.46h3a2 2 0 0 1 2 1.72c.12.96.35 1.91.69 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.56 6.56l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.69a2 2 0 0 1 1.72 2z" transform="translate(2 1) scale(.82)" />
              </svg>

              Call 708-733-0065
            </a>
          </div>

          {/* SMALL TRUST STATEMENT */}
          <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0C9B97]/15">

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
            </div>

            <p className="text-[13px] leading-6 text-[#CBD5E1]">
              Fast. Secure. Reliable.
              <span className="block text-white/60">
                Professional Medical Courier Services
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative">

          {/* IMAGE CONTAINER */}
          <div className="relative h-[360px] overflow-hidden rounded-[24px] border border-white/10 bg-[#102A43] shadow-[0_25px_70px_rgba(0,0,0,0.25)] sm:h-[440px] lg:h-[500px]">

            <img
              src={img}
              alt="Maximum Care medical courier services"
              className="h-full w-full object-cover"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071E34]/85 via-[#071E34]/10 to-transparent"></div>

            {/* IMAGE BOTTOM CONTENT */}
            <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-9">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-md">

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
              </div>

              <h3 className="text-[23px] font-bold leading-tight text-white sm:text-[27px]">
                Delivering Care With Precision.
              </h3>

              <p className="mt-2 max-w-[350px] text-[14px] leading-6 text-white/80">
                Supporting healthcare organizations across
                Fargo–Moorhead and surrounding communities.
              </p>
            </div>
          </div>

          {/* FLOATING LOCATION CARD */}
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-[#E3EDF2] bg-white p-4 shadow-[0_15px_45px_rgba(0,0,0,0.15)] sm:-left-7 sm:right-auto sm:min-w-[285px] sm:p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F6F5]">

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
                <p className="text-[15px] font-extrabold text-[#102A43]">
                  Proudly Locally Based
                </p>

                <p className="mt-1 text-[12px] text-[#526579]">
                  Moorhead, Minnesota
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM FEATURE STRIP */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-12 pt-8 sm:px-8 lg:px-12">

        <div className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-8">

          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="flex items-start gap-4"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0C9B97]/15">

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
              </div>

              <div>
                <h4 className="text-[15px] font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-[13px] text-[#CBD5E1]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Section7;
