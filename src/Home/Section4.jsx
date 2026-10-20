
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

// CARD DATA
const organizations = [
  {
    image: img1,
    title: "Hospitals & Health Systems",
  },
  {
    image: img2,
    title: "Medical Clinics & Physician Offices",
  },
  {
    image: img3,
    title: "Diagnostic & Clinical Laboratories",
  },
  {
    image: img4,
    title: "Pharmacies",
  },
  {
    image: img5,
    title: "Nursing Homes & Long-Term Care Facilities",
  },
  {
    image: img6,
    title: "Medical Supply Companies",
  },
];

function Section4() {
  return (
    <section
      id="who-we-serve"
      className="
        w-full bg-white
        px-5 py-16
        sm:px-8 sm:py-20
        lg:px-12 lg:py-24
        xl:px-16
      "
    >
      <div className="mx-auto max-w-[1300px]">

        {/* ============================== */}
        {/* SECTION HEADING                */}
        {/* ============================== */}

        <div className="mx-auto max-w-[950px] text-center">

          {/* SMALL SECTION HEADING */}
          <p
            className="
              mb-4 text-[12px]
              font-bold uppercase
              tracking-[0.25em]
              text-[#0C9B97]

              md:text-[14px]
            "
          >
            WHO WE SERVE
          </p>

          {/* MAIN HEADING */}
          <h2
            className="
              mx-auto max-w-[950px]
              text-[30px] font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#102A43]

              sm:text-[36px]
              md:text-[42px]
              lg:text-[48px]
            "
          >
            Supporting the Healthcare Community
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto mt-5 max-w-[720px]
              text-[15px] leading-[1.85]
              text-[#526579]

              sm:text-[16px]
            "
          >
            We proudly serve a wide range of healthcare
            organizations throughout Fargo–Moorhead and
            surrounding communities.
          </p>
        </div>

        {/* ============================== */}
        {/* RESPONSIVE CARDS GRID          */}
        {/* ============================== */}

        <div
          className="
            mt-10 grid grid-cols-2
            gap-3

            sm:mt-12 sm:grid-cols-3 sm:gap-5
            md:gap-6

            xl:mt-14 xl:grid-cols-6 xl:gap-5
          "
        >
          {organizations.map((organization, index) => (
            <div
              key={index}
              className="
                group flex h-full min-w-0
                flex-col overflow-hidden
                rounded-[16px]
                border border-[#E3EDF2]
                bg-white

                shadow-[0_8px_24px_rgba(0,27,59,0.06)]

                transition-all duration-300
                ease-out

                hover:-translate-y-1.5
                hover:border-[#0C9B97]/40
                hover:shadow-[0_16px_35px_rgba(0,27,59,0.12)]
              "
            >
              {/* IMAGE CONTAINER */}
              <div
                className="
                  relative h-[120px] w-full
                  shrink-0 overflow-hidden
                  bg-[#E8F2F5]

                  sm:h-[150px]
                  md:h-[170px]
                  lg:h-[190px]
                  xl:h-[145px]
                "
              >
                {/* IMAGE */}
                <img
                  src={organization.image}
                  alt={organization.title}
                  loading="lazy"
                  className="
                    h-full w-full
                    object-cover object-center

                    transition-transform
                    duration-500 ease-out

                    group-hover:scale-110
                  "
                />

                {/* SUBTLE IMAGE OVERLAY */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#102A43]/15
                    to-transparent

                    transition-colors duration-300
                  "
                />
              </div>

              {/* CARD CONTENT */}
              <div
                className="
                  flex min-h-[100px]
                  flex-1 items-center
                  justify-center
                  px-3 py-5

                  sm:min-h-[105px]
                  sm:px-4 sm:py-6

                  xl:min-h-[115px]
                "
              >
                {/* CARD TITLE */}
                <h3
                  className="
                    text-center
                    text-[13px] font-bold
                    leading-[1.5]
                    text-[#001B3B]

                    transition-colors duration-300
                    group-hover:text-[#0C9B97]

                    sm:text-[15px]
                    lg:text-[16px]
                    xl:text-[14px]
                  "
                >
                  {organization.title}
                </h3>
              </div>

              {/* BOTTOM TEAL HOVER LINE */}
              <div
                className="
                  h-[3px] w-full
                  origin-left scale-x-0
                  bg-[#0C9B97]

                  transition-transform duration-300
                  ease-out

                  group-hover:scale-x-100
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Section4;
