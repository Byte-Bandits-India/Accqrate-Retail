import React, { useContext, useState, useEffect } from "react";
import Skeleton from "../components/skeleton";
import { LoadingContext } from "../utils/LoadingContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import AccordionCard from "../components/ui/accordion";
export default function Transform() {
  const { loading } = useContext(LoadingContext);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const element = document.getElementById("transformSection", "ownerSection");
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin: "0px", threshold: 0.3 }
    );

    observer.observe(element);
    return () => element && observer.unobserve(element);
  }, []);

  const sectionPadding =
    "mt-24px md:mt-[32px] lg:mt-[40px] px-24px md:px-[32px] max-w-[1280px] mx-auto";

  if (loading || !isVisible) {
    return (
      <>
        {/* Heading & Description */}
        <section className="mt-48px px-24px text-center max-w-[1200px] mx-auto">
          <Skeleton height="36px" width="70%" className="mx-auto mb-6" />
          <Skeleton height="20px" width="90%" className="mx-auto mb-3" />
          <Skeleton height="20px" width="80%" className="mx-auto" />
        </section>

        {/* Transform Section (Cards) */}
        <section id="transformSection" className={sectionPadding}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px]">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg w-full sm:h-[280px] md:h-[320px] lg:h-[340px] p-4 flex flex-col justify-start"
              >
                {/* Card header */}
                <Skeleton height="20px" width="70%" className="mb-4" />

                {/* Mobile/desktop simulated content */}
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  <Skeleton height="16px" width="80%" />
                  <Skeleton
                    height="120px"
                    width="100%"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Owner Section */}
        <section
          id="ownerSection"
          className="bg-[#F2F2F2] w-full max-w-[1280px] h-auto md:h-[190px] mx-auto flex items-center justify-center mt-24px rounded-lg px-24px py-8 md:py-0"
        >
          <div className="flex items-center justify-center text-center md:text-left max-w-2xl w-full">
            <div className="w-full">
              <Skeleton
                height="28px"
                width="90%"
                className="mb-5 mx-auto md:mx-0"
              />
              <Skeleton height="16px" width="40%" className="mx-auto md:mx-0" />
            </div>
          </div>
        </section>
      </>
    );
  }

  // Framer Motion variants
  const containerVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Framer Motion variants for right-to-left slide
  const variant = {
    hidden: { x: 100, opacity: 0 }, // start offscreen right
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cards = [
    {
      title: "No POS hardware needed",
      desc: "Works instantly on Android, iOS, Windows, and Mac",
      video: "/videos/card1.mp4",
    },
    {
      title: "Zero hassle setup",
      desc: "Cloud-based and ready to use — no installations or IT assistance needed.",
      video: "/videos/card2.mp4",
    },
    {
      title: "Plug-and-Play Printers",
      desc: "No drivers, no manual setup—automatic detection and configuration",
      video: "/videos/card3.mp4",
    },
    {
      title: "Auto-Print & Cut",
      desc: "Receipts print, cut and display for customers instantly.",
      video: "/videos/card4.mp4",
    },
  ];

  return (
    <>
      <h1 className="text-center text-fluid-h2 leading-tight tracking--5 font-semibold  mt-48px md:mt-[56px] lg:mt-[80px] px-24px md:px-[32px]">
        Transform Your Retail Operations with{" "}
        <span className="text-[#C2185B]"> Zero-Hassle </span> Onboarding
      </h1>
      <p className="text-center text-fluid-caption mt-16px md:mt-[32px] px-24px md:px-[32px] lg:mt-[40px] font-light tracking--2  text-black  ">
        Get up and running in minutes, not days. Accqrate Retail’s cloud-native
        architecture means you can onboard each outlet effortlessly—no dedicated
        POS hardware, no complex installations.
      </p>
      <section id="transformSection" className={sectionPadding}>
        {/* Grid Layout: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] w-full max-w-[1280px] mx-auto">
          {cards.map((card, idx) => (
            <AccordionCard
              key={idx}
              title={card.title}
              desc={card.desc}
              video={card.video}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </section>
      <section
        id="ownerSection"
        className="bg-[#F2F2F2] w-full max-w-[1280px] mx-auto mt-24px md:mt-[32px] lg:mt-[40px] rounded-lg px-24px py-8 lg:py-10"
      >
        <motion.div
          className="w-full"
          variants={variant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* On mobile → max-w, on md+ → full width */}
          <div className="max-w-[1168px] mx-auto text-left md:max-w-full">
            <p className="font-light leading-snug text-fluid-caption md:text-fluid-body lg:text-fluid-h3 mb-5">
              “We set up 5 new outlets in under an hour no IT team needed.”
            </p>
            <p className="text-gray-500 text-xs sm:text-base md:text-fluid-body flex justify-end">
              — Retail Owner, Jeddah
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
