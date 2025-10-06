"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "../components/ui/skeleton";
import AccordionCard from "../components/ui/AccordionSilverCard";
import { Accordion } from "../components/ui/accordion";
import FadeUp from "../components/ui/FadeUp";

interface ErpFeature {
  text: string;
  subtext: string;
  video: string;
}

const Pos: React.FC = () => {
  const [isPosVisible, setIsPosVisible] = useState<boolean>(false);
  const [isErpVisible, setIsErpVisible] = useState<boolean>(false);

  // IntersectionObserver for multiple sections
  useEffect(() => {
    const posSection = document.getElementById("posSection");
    const erpSection = document.getElementById("erpSection");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "posSection") setIsPosVisible(true);
            if (entry.target.id === "erpSection") setIsErpVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (posSection) observer.observe(posSection);
    if (erpSection) observer.observe(erpSection);

    return () => {
      if (posSection) observer.unobserve(posSection);
      if (erpSection) observer.unobserve(erpSection);
    };
  }, []);

  // Show skeleton only when both sections are not visible
  if (!isPosVisible && !isErpVisible) {
    return (
      <>
        {/* POS Section Skeleton */}
        <section id="posSection" className="px-6 md:px-8 mt-12 md:mt-[56px]">
          <div className="max-w-[1000px] mx-auto">
            {/* Main Video Skeleton */}
            <Skeleton className="w-full h-[220px] md:h-[280px] rounded-lg mb-6" />

            {/* Accordion Cards Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-4">
                  {/* Icon Skeleton */}
                  <Skeleton className="w-12 h-12 rounded-md mb-3" />

                  {/* Title Skeleton */}
                  <Skeleton className="h-6 w-3/4 mb-2" />

                  {/* Content Skeleton */}
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ERP Section Skeleton */}
        <section id="erpSection" className="px-6 md:px-8 mt-24 md:mt-32">
          <div className="max-w-[1200px] mx-auto text-center">
            {/* Heading Skeleton */}
            <div className="max-w-4xl mx-auto mb-6">
              <Skeleton className="h-8 md:h-10 w-3/4 mx-auto mb-4" />
              <Skeleton className="h-6 w-5/6 mx-auto" />
            </div>

            {/* ERP Features Skeleton */}
            <div className="space-y-8 md:space-y-12">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Text Content Skeleton */}
                  <div className="flex-1 text-left space-y-2 max-w-lg">
                    <Skeleton className="h-6 w-4/5" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>

                  {/* Video Skeleton */}
                  <div className="flex-1 flex justify-center">
                    <Skeleton className="w-full max-w-md h-[200px] md:h-[250px] rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // ERP Features
  const erpFeatures: ErpFeature[] = [
    {
      text: "Central procurement:",
      subtext: "Manage suppliers and POs across all locations.",
      video: "/videos/pos.mp4",
    },
    {
      text: "Real-time inventory:",
      subtext: "See live stock updates and automate reordering.",
      video: "/videos/dashboard.mp4",
    },
    {
      text: "Safety-stock alerts: ",
      subtext: "Never run out, never over-order.",
      video: "/videos/crm.mp4",
    },
  ];

  return (
    <>
      {/* POS Section */}
      <section
        id="posSection"
        className="px-6 md:px-8 mt-8 md:mt-[56px] text-[#333333]"
      >
        <div
          className="max-w-[1000px] mx-auto"
        >
          <div>
            <video
              src="/videos/barcode.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          <Accordion
            type="single"
            collapsible
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] mt-6"
          >
            <AccordionCard
              value="card-1"
              icon="/images/instant.png"
              title="Direct Interface to Tax Portals"
            >
              Extra details about <b>Instant Access</b> will appear here when
              expanded.
            </AccordionCard>
            <AccordionCard
              value="card-2"
              icon="/images/invoice.png"
              title="Custom Invoices Templates"
            >
              Extra details about <b>Automated Data Migration</b> will be shown
              here.
            </AccordionCard>
            <AccordionCard
              value="card-3"
              icon="/images/audit.png"
              title="Audit Trails & Deletion Logs"
            >
              Extra details about <b>Role-Based User Setup</b> will go here.
            </AccordionCard>
          </Accordion>
        </div>
      </section>

      {/* ERP Section */}
      <section
        id="erpSection"
        className="px-6 md:px-8 max-w-[1200px] mx-auto text-center mt-[48px] md:mt-[64px] text-[#333333]"
      >
        <div
        >
          <FadeUp>
            <h2 className="text-[24px] md:text-[32px] lg:text-fluid-h2 font-medium tracking-heading leading-tight"
            >
              Grows with Your Business Scale <br className="hidden md:block" /> to Full
              <span className="text-[#C2185B]"> ERP </span>Instantly

            </h2>

            <p className="text-[14px] md:text-fluid-caption text-[#737373] tracking-para max-w-4xl mx-auto mt-6 md:mt-[32px] lg:mt-10 font-light leading-snug"
            >
              As your business grows, Accqrate Retail grows with you. Flip the
              switch <br className="hidden md:block" /> to add procurement, finance, HR and supply-chain modules—no
              data <br className="hidden md:block" /> migration, no downtime.
            </p>
          </FadeUp>

          {erpFeatures.map((feature, i) => (
            <FadeUp
              key={i}
              className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mt-6 md:mt-[48px] lg:mt-10"
            >
              {/* Text stays static */}
              <div className="flex-1">
                <h1 className="text-left leading-snug text-[24px] tracking-heading lg:text-[32px] text-[#C2185B] font-normal max-w-lg">
                  {feature.text}
                  <span className="hidden lg:inline"> {feature.subtext} </span>
                  <span className="lg:hidden"> {/* Alternative content for mobile if needed */}</span>
                </h1>
                <p className="text-left text-[14px] md:text-[16px] tracking-para mt-[16px] lg:hidden">{feature.subtext}</p>
              </div>


              {/* Video slides in left-to-right */}
              <div
                className="flex-1 flex justify-center"
              >
                <video
                  src={feature.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full max-w-md h-auto rounded-lg"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pos;