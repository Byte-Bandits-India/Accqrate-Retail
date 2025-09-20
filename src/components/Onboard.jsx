"use client";

import React, { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";
import useInView from "../utils/useInView";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionCard } from "@/components/ui/accordion"; // ✅ import Accordion components
import { FaChevronDown } from "react-icons/fa";
import FeatureCard from "./ui/FeatureCard";

export default function FeatureSection() {
  const { loading } = useContext(LoadingContext);
  const onboardRef = useRef(null);
  const isVisible = useInView(onboardRef);

  if (loading || !isVisible) {
    return (
      <section
        ref={onboardRef}
        className="w-full max-w-[1280px] mx-auto font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        {/* Heading skeletons */}
        <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
        <Skeleton height="22px" width="50%" className="mb-4 mt-4 mx-auto" />
        <Skeleton height="22px" width="60%" className="mb-4 mx-auto" />

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-16 mt-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[320px] md:w-[340px] h-[270px] md:h-[400px] rounded-xl p-4 bg-[#F2F2F2] shadow"
            >
              <Skeleton className="w-full h-32 md:h-48 rounded-lg mb-4" />
              <Skeleton className="w-3/4 h-5 rounded mb-2" />
              <Skeleton className="w-full h-4 rounded mb-2" />
              <Skeleton className="w-5/6 h-4 rounded" />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F2F2F2] font-inter w-full md:rounded-lg md:h-[560px] px-6 py-10">
          <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
          <Skeleton height="20px" width="50%" className="mb-8 mx-auto" />
          <div className="flex flex-col gap-4 max-w-xs md:mt-14 mx-auto md:grid md:grid-cols-3 md:max-w-5xl md:gap-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative group bg-[#dddcdc] rounded-md w-full h-[200px] overflow-hidden"
              >
                <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] -translate-x-1/2 scale-90"></div>
                <Skeleton
                  height="28px"
                  width="80%"
                  className="relative z-10 mx-auto mt-8"
                />
                <Skeleton
                  height="16px"
                  width="90%"
                  className="absolute inset-0 flex items-center justify-center text-center opacity-50 mx-auto my-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="px-[24px] max-w-[1280px] mx-auto font-inter">
        {/* Heading */}
        <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-inter text-[#000000] text-center mb-4">
          Effortless <span className="text-[#1976D2]">Onboarding</span> &
          Flexible Deployment
        </h2>

        {/* Shared description */}
        <p className="mb-6 text-[#000000B2] lg:text-fluid-body text-[14px] md:text-[16px] text-center max-w-3xl mx-auto">
          Accqrate Books is fully cloud-native – no complex installations, no
          specialized IT needed. Set up your accounting in minutes, not weeks.
        </p>
        <div className="flex flex-col md:flex-row justify-center mx-auto gap-6 items-center lg:gap-16 mb-[48px]">
          {/* Card 1 */}
          <FeatureCard
            videoSrc="videos/cloud-first.mp4"
            title="Cloud-first or On-Prem"
            description="Choose cloud for instant launch, or on-premises for full data control."
          />

          {/* Card 2 */}
          <FeatureCard
            videoSrc="videos/all-devices.mp4"
            title="Works on all devices"
            description="Manage accounts from  desktop, laptop, tablet, or mobile."
          />

          {/* Card 3 */}
          <FeatureCard
            videoSrc="videos/no-special-hardware.mp4"
            title="No special hardware"
            description="Access your books anywhere – your data is always secure, always available."
          />
        </div>

        {/* Heading */}
        <h2 className="text-[24px] md:text-fluid-h2 font-semibold text-center mb-4">
          <span className="text-[#1976D2]">Zero-Friction</span> Setup
        </h2>
        <p className="text-center text-gray-700 text-[14px] md:text-fluid-body max-w-5xl mx-auto mb-6">
          As your business grows, Accqrate Retail grows with you. Flip the
          switch to add procurement, finance, HR and supply-chain modules—no
          data migration, no downtime.
        </p>
        {/* Accordion Section */}
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4
        sm:grid sm:grid-cols-2 sm:gap-6
        md:grid md:grid-cols-3 md:max-w-5xl md:mt-14 mx-auto md:gap-12 md:mb-12"
        >
          <AccordionCard
            value="card-1"
            icon="/images/Mask group.png"
            title="Instant Access"
            content={
              <>Extra details about <b>Instant Access</b> will appear here when expanded 1.</>
            }
          />

          <AccordionCard
            value="card-2"
            icon="/images/Mask group (1).png"
            title="Automated Data Migration"
            content={
              <>Extra details about <b>Automated Data Migration</b> will be shown here 2.</>
            }
          />

          <AccordionCard
            value="card-3"
            icon="/images/Mask group (2).png"
            title="Role-Based User Setup"
            content={
              <>Extra details about <b>Role-Based User Setup</b> will go here 3.</>
            }
          />
        </Accordion>

        {/* Testimonial Section */}
        <div className="mt-6">
          <div
            className="bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8] rounded-lg mx-auto
              p-6 sm:p-6 md:p-10 md:max-w-5xl
              h-auto sm:h-[110px] md:h-[129px] lg:h-[182px]
              flex flex-col items-center justify-center"
          >
            <div className="max-w-[1000px] w-full">
              <p className="text-fluid-body font-normal text-[#333333] md:leading-10 text-left md:text-center">
                “We set up 5 new outlets in under an hour—no IT team needed.”
              </p>
              <p className="text-[11px] sm:text-sm md:text-base md:leading-10 text-[#333333] mt-2 text-right pr-4">
                — Retail Owner, Jeddah
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------- ZATCA Compliance Section -------- */}
      <div className="mt-[48px] max-w-[1280px] mx-auto font-inter text-center px-6">
        <h2 className="lg:hidden text-[24px] md:text-[24px] text-[#333333] font-semibold mb-4">
          100% <span className="text-[#1976D2]">ZATCA</span> Phase 2 <br />
          E-Invoicing Compliance
        </h2>
        <h2 className="hidden lg:block text-fluid-h2 mt-[24px] text-[#333333] font-medium mb-[24px] ">
          100% <span className="text-[#1976D2]">ZATCA</span> Phase 2 E-Invoicing
          Compliance
        </h2>

        <p className="text-center text-fluid-body lg:text-[20px] mb-[24px] text-[#737373] leading-relaxed">
          Compliance is non-negotiable. With Accqrate Books, you’re always
          audit-ready.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-3 justify-center items-center md:items-stretch gap-[16px] mx-w-[1280px] mx-auto md:gap-8 lg:gap-12 md:mt-[40px] mb-6 md:mb-8 lg:mb-10">
          {/* Seamless Integration */}
          <div className="bg-[#F0F0F0] border border-[#737373] md:border-none relative group rounded-xl shadow-lg overflow-hidden cursor-pointer p-6
            md:h-[251px] lg:h-[292px] w-full h-[190px]
            flex flex-col items-center justify-center text-center"
          >
            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
              -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
              group-hover:top-1/2 group-hover:scale-[2.2] z-0"
            ></div>

            <div className="transition-opacity duration-500 
              w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
              mx-auto flex flex-col items-center justify-center 
              group-hover:opacity-0 text-center"
            >
              <h4 className="lg:text-[28px] xl:text-[24px] text-[20px] 
                font-semibold md:font-normal text-[#1976D2] mb-4 leading-tight"
              >
                Seamless Integration
              </h4>
              <img
                src="images/zatcha.svg"
                alt="Seamless Integration"
                className="h-[142px] md:h-[149px] lg:h-[149px]
                  mx-auto rounded-lg object-cover"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center 
              text-white opacity-0 transition-opacity duration-500 
              group-hover:opacity-100 text-center px-[70px] py-[27px]"
            >
              <h4 className="text-fluid-body font-bold mb-2">
                Seamless Integration
              </h4>
              <p className="text-fluid-small leading-relaxed">
                Phase 2 E-invoicing Integration – Generate, validate and
                transmit XML e-invoices directly to ZATCA.
              </p>
            </div>
          </div>

          {/* Digital Archive */}
          <div className="bg-[#F0F0F0] border border-[#737373] md:border-none relative group rounded-xl shadow-lg overflow-hidden cursor-pointer p-6 
            md:h-[251px] lg:h-[292px] w-full h-[190px]
            flex flex-col items-center justify-center text-center"
          >
            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
              -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
              group-hover:top-1/2 group-hover:scale-[2.2] z-0"
            ></div>

            <div className="transition-opacity duration-500 
              w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
              mx-auto flex flex-col items-center justify-center 
              group-hover:opacity-0 text-center p-2"
            >
              <h4 className="lg:text-[28px] xl:text-[24px]
                font-semibold md:font-normal text-[#1976D2] mb-4 text-[20px] leading-tight">
                Digital Archive
              </h4>
              <video
                className="h-[142px] md:h-[149px] lg:h-[149px]
                  mx-auto rounded-lg object-contain"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="videos/digital-archive.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center 
              text-white opacity-0 transition-opacity duration-500 
              group-hover:opacity-100 text-center px-[70px] py-[27px]"
            >
              <h4 className="text-fluid-body font-bold mb-2">
                Digital Archive
              </h4>
              <p className="text-fluid-small leading-relaxed">
                Securely store all e-invoices with audit trails and QR code
                integration.
              </p>
            </div>
          </div>

          {/* Regulation Ready */}
          <div className="bg-[#F0F0F0] border border-[#737373] md:border-none relative group rounded-xl shadow-md overflow-hidden cursor-pointer p-6 
            md:h-[251px] lg:h-[292px] w-full h-[190px]
            flex flex-col items-center justify-center text-center"
          >
            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
              -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
              group-hover:top-1/2 group-hover:scale-[2.2] z-0"
            ></div>

            <div className="transition-opacity duration-500 
              w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
              mx-auto flex flex-col items-center justify-center 
              group-hover:opacity-0 text-center p-2"
            >
              <h4 className="lg:text-[28px] xl:text-[24px] 
                font-semibold md:font-normal text-[#1976D2] mb-4 text-[20px] leading-tight"
              >
                Regulation-Ready
              </h4>
              <video
                className="h-[142px] md:h-[149px] lg:h-[149px]
                  mx-auto rounded-lg object-contain"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="videos/regulation-ready.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-[70px] py-[27px] 
              text-white opacity-0 transition-opacity duration-500 
              group-hover:opacity-100 text-center"
            >
              <h4 className="text-fluid-body font-bold mb-2">
                Regulation-Ready
              </h4>
              <p className="text-fluid-small leading-relaxed">
                Real-time updates keep you in sync with KSA rules.
              </p>
            </div>
          </div>
        </div>

        {/* 100_zatcha_e-invoicing-complaince Video */}
        <video
          className="w-full h-[201px] max-w-[1128px] mx-auto"
          autoPlay
          muted
          loop
        >
          <source src="/videos/100_zatcha_e-invoicing-complaince.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
