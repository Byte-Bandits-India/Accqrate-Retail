import React, { useContext, useState, useEffect } from "react";
import Skeleton from "../components/skeleton";
import { LoadingContext } from "../utils/LoadingContext";
import { motion } from "framer-motion";

// import scrollreveal for text animations
import ScrollReveal from "../components/ui/ScrollReveal";

// Motion wrapper for left-to-right animation
const SlideInLeft = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default function Tools() {
  const { loading } = useContext(LoadingContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toolsElement = document.getElementById("toolsSection");
    const onboardingElement = document.getElementById("onboardingSection");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { rootMargin: "0px", threshold: 0.3 }
    );

    if (toolsElement) observer.observe(toolsElement);
    if (onboardingElement) observer.observe(onboardingElement);

    return () => {
      if (toolsElement) observer.unobserve(toolsElement);
      if (onboardingElement) observer.unobserve(onboardingElement);
    };
  }, []);

  if (loading || !isVisible) {
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
      {/* Tools Section */}
      <motion.section
        id="toolsSection"
        className="bg-white mt-48px px-24px max-w-[1200px] mx-auto"
      >
        <SlideInLeft>
          <h2 className="text-center text-fluid-h2 font-medium tracking--5">
            Robust Control & <span className="text-[#C2185B] font-medium">Compliance Tools</span>
          </h2>
        </SlideInLeft>

        <SlideInLeft delay={0.2}>
          <p className="text-center text-[#000000B2] tracking--2 text-fluid-caption max-w-lg mt-12px leading-tight mx-auto">
            Maintain tight governance over your retail footprint, from terminal permissions to financial integrity
          </p>
        </SlideInLeft>

        {/* Tools Cards */}
        {[
          {
            title: "User-Level Access Controls",
            text: "Assign roles, limit functions and monitor activity logs.",
            video: "/videos/manageroles.mp4",
          },
          {
            title: "Day-End Closure & Auditor Reports",
            text: "Generate comprehensive financial summaries midnight, festival days, or anytime.",
            video: "/videos/dayclosure.mp4",
          },
          {
            title: "Sales Returns, Credit Notes & Advance Bookings",
            text: "Handle exchanges and pre-orders directly at the counter.",
            video: "/videos/productsearch.mp4",
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col lg:flex-row lg:items-start gap-[24px] mt-24px tracking--5"
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <SlideInLeft delay={idx * 0.2}>
              <div className="flex-1">
                <h3 className="text-[#C2185B] font-semibold tracking--5 text-fluid-h3 ">
                  {section.title}:
                </h3>
                <p className="text-fluid-body leading-tight tracking--2">{section.text}</p>
              </div>
            </SlideInLeft>

            <SlideInLeft delay={idx * 0.3}>
              <div className="flex-1 flex justify-center">
                <video
                  src={section.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </SlideInLeft>
          </motion.div>
        ))}
      </motion.section>

      {/* Onboarding Section */}
      <motion.section id="onboardingSection" className="px-5 max-w-6xl mx-auto mt-48px">
        <SlideInLeft>
          <ScrollReveal
            as="h2"
            containerClassName="text-center font-medium text-fluid-h2 tracking--5"
          >
            Fast Data Onboarding & Customization
          </ScrollReveal>
        </SlideInLeft>

        {[{
          video: "/videos/Master Upload.mp4",
          text: "Bulk uploads: Import your entire product catalog via Excel, fast",
        },
        {
          video: "/videos/Add New Category.mp4",
          text: "Organize categories: Structure your catalog for easy browsing and search.",
        }].map((item, idx) => (
          <SlideInLeft key={idx} delay={idx * 0.2}>
            <div className="bg-gray-100 border border-pink-700 rounded-xl p-6 mt-24px shadow-sm w-11/12 mx-auto">
              <div className="video-wrapper overflow-hidden rounded-xl">
                <video
                  src={item.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                  className="w-full h-auto object-contain block"
                />
              </div>
              <p className="text-center font-semibold text-fluid-caption mt-12px tracking--2">
                {item.text}
              </p>
            </div>
          </SlideInLeft>
        ))}
      </motion.section>
    </>
  );
}
