
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// SEO DETAILS FOR EACH PAGE
const pages = {
  "/": {
    title:
      "Maximum Care LLC | Medical Courier Services in Fargo–Moorhead",
    description:
      "Maximum Care LLC provides medical courier services for healthcare organizations in Moorhead, Fargo, and surrounding Minnesota and North Dakota communities.",
  },

  "/about": {
    title:
      "About Maximum Care LLC | Reliable Healthcare Logistics",
    description:
      "Learn about Maximum Care LLC, a locally owned medical courier company based in Moorhead, Minnesota.",
  },

  "/services": {
    title:
      "Medical Courier Services | Maximum Care LLC",
    description:
      "Explore laboratory specimen transportation, pharmacy deliveries, medical supplies, confidential document delivery, and scheduled or STAT courier services.",
  },

  "/service-areas": {
    title:
      "Medical Courier Service Areas | Fargo–Moorhead",
    description:
      "Explore Maximum Care LLC's primary service areas, including Moorhead, Dilworth, Fargo, West Fargo, and surrounding communities.",
  },

  "/contact": {
    title:
      "Contact Maximum Care LLC | Medical Courier Inquiries",
    description:
      "Contact Maximum Care LLC to discuss your organization's medical courier and healthcare transportation needs.",
  },

  "/request-quote": {
    title:
      "Request a Medical Courier Quote | Maximum Care LLC",
    description:
      "Request a medical courier quote from Maximum Care LLC for scheduled, routine, or time-sensitive transportation.",
  },

  "/privacy-policy": {
    title:
      "Privacy Policy | Maximum Care LLC",
    description:
      "Read Maximum Care LLC's website privacy policy and information about submitting inquiries.",
  },
};

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path =
      pathname === "/"
        ? "/"
        : pathname.replace(/\/+$/, "");

    const page = pages[path];

    if (!page) return;

    // UPDATE BROWSER PAGE TITLE
    document.title = page.title;

    // UPDATE META DESCRIPTION
    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      page.description
    );
  }, [pathname]);

  return null;
}

export default SeoManager;
