import React, { useContext } from "react";
import Skeleton from "../components/skeleton";
import { LoadingContext } from "../utils/LoadingContext";
import { motion } from "framer-motion";

export default function Tools() {
  const { loading } = useContext(LoadingContext);

  // ✅ Animation Variants
  const slideLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  if (loading) {
    return (
      <>
        <section id="toolsSection" className="bg-white py-8 px-4 max-w-[1200px] mx-auto">
          <Skeleton height="36px" width="60%" className="mx-auto mb-4" />
          <Skeleton height="20px" width="80%" className="mx-auto mb-8" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-4 mb-8">
              <div className="flex-1">
                <Skeleton height="24px" width="60%" className="mb-2" />
                <Skeleton height="16px" width="80%" />
              </div>
              <div className="flex-1 flex justify-center">
                <Skeleton height="120px" width="100%" />
              </div>
            </div>
          ))}
        </section>

        <section id="onboardingSection" className="px-5 max-w-6xl mx-auto mt-12">
          <Skeleton height="36px" width="60%" className="mx-auto mb-6 rounded-md" />
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-gray-100 border border-pink-700 rounded-xl p-8 mb-8 shadow-sm w-11/12 max-w-3xl mx-auto"
            >
              <Skeleton height="24px" width="40%" className="mb-3 rounded-md" />
              <Skeleton height="180px" width="100%" className="mb-3 rounded-lg" />
              <Skeleton height="20px" width="80%" className="rounded-md" />
            </div>
          ))}
        </section>
      </>
    );
  }

  return (
    <>
      {/* ✅ Tools Section */}
      <section id="toolsSection" className="bg-white py-8 px-4 max-w-[1200px] mx-auto">
        <h2 className="text-center text-fluid-h2 font-normal mb-2">
          Robust Control &{" "}
          <span className="text-[#C2185B] font-bold">Compliance Tools</span>
        </h2>
        <p className="text-center text-[#000000B2] mb-12 text-fluid-body">
          Maintain tight governance over your retail footprint, from terminal
          permissions to financial integrity
        </p>

        {[
          {
            title: "User-Level Access Controls",
            text: "Assign roles, limit functions and monitor activity logs.",
            video: "/videos/manageroles.mp4",
          },
          {
            title: "Day-End Closure & Auditor Reports",
            text: "Generate comprehensive financial summaries—midnight, festival days, or anytime.",
            video: "/videos/dayclosure.mp4",
          },
          {
            title: "Sales Returns, Credit Notes & Advance Bookings",
            text: "Handle exchanges and pre-orders directly at the counter.",
            video: "/videos/productsearch.mp4",
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-8 mb-12 last:mb-0"
          >
            <motion.div
              className="flex-1"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-[#C2185B] font-bold text-fluid-h3 mb-2">
                {section.title}:
              </h3>
              <p className="text-fluid-h3 leading-tight">{section.text}</p>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <video
                src={section.video}
                muted
                autoPlay
                loop
                playsInline
                className="w-full max-w-md rounded-lg"
              />
            </motion.div>
          </div>
        ))}
      </section>

      {/* ✅ Onboarding Section */}
      <section id="onboardingSection" className="px-5 max-w-6xl mx-auto mt-12">
        <motion.h2
          className="text-center font-medium text-fluid-h2 mb-6"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Fast Data Onboarding & Customization
        </motion.h2>

        {[
          {
            video: "/videos/Master Upload.mp4",
            text: "Bulk uploads: Import your entire product catalog via Excel, fast",
          },
          {
            video: "/videos/Add New Category.mp4",
            text: "Organize categories: Structure your catalog for easy browsing and search.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 border border-pink-700 rounded-xl p-8 mb-8 shadow-sm w-11/12 mx-auto"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="video-wrapper overflow-hidden rounded-xl">
              <video
                src={item.video}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-auto object-contain block"
              />
            </div>
            <p className="text-center font-semibold text-fluid-body mt-3">
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>
    </>
  );
}
