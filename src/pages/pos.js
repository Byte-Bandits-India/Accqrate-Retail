import React, { useContext, useState, useEffect } from "react";
import Skeleton from "../components/skeleton";
import { LoadingContext } from "../utils/LoadingContext";
import { motion } from "framer-motion";

export default function Pos() {
  const { loading } = useContext(LoadingContext);
  const [posVisible, setPosVisible] = useState(false);
  const [erpVisible, setErpVisible] = useState(false);

  // Intersection Observer for each section
  useEffect(() => {
    const posEl = document.getElementById("posSection");
    const erpEl = document.getElementById("erpSection");

    if (posEl) {
      const posObserver = new IntersectionObserver(
        ([entry]) => setPosVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
      posObserver.observe(posEl);
    }

    if (erpEl) {
      const erpObserver = new IntersectionObserver(
        ([entry]) => setErpVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
      erpObserver.observe(erpEl);
    }

    return () => {
      if (posEl) posObserver.unobserve(posEl);
      if (erpEl) erpObserver.unobserve(erpEl);
    };
  }, []);

  // Motion Variants
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
        {/* Skeleton for POS */}
        <section id="posSection" className="bg-gray-200 p-5 rounded-xl shadow-md mt-8">
          <div className="max-w-[1000px] mx-auto">
            <Skeleton height="220px" width="100%" className="rounded-lg mb-6" />
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-400 w-[300px] p-5 rounded-lg flex flex-col">
                  <Skeleton height="32px" width="80%" className="mb-2" />
                  <Skeleton height="20px" width="100%" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skeleton for ERP */}
        <section id="erpSection" className="px-5 max-w-[1200px] mx-auto text-center mt-2">
          <Skeleton height="36px" width="60%" className="mb-4 mx-auto" />
          <Skeleton height="20px" width="80%" className="mb-3 mx-auto" />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center justify-between gap-10 mb-6">
              <Skeleton height="20px" width="60%" className="mb-3 md:mb-0 mx-auto md:mx-0" />
              <Skeleton height="180px" width="100%" className="mx-auto" />
            </div>
          ))}
        </section>
      </>
    );
  }

  return (
    <>
      {/* POS Section */}
      <section id="posSection" className="bg-[#F2F2F2] p-5 rounded-xl mx-4 mt-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-6">
            {/* POS video slides from left */}
            <motion.video
              src="/videos/barcode.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-auto object-contain rounded-lg"
              variants={slideLeft}
              initial="hidden"
              animate={posVisible ? "visible" : "hidden"}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                title: "Direct Interface to Tax portals",
                text: "Generate and transmit e- invoices in real time",
              },
              {
                title: "Custom Invoice Template",
                text: "Tailor layouts, logos and messaging without developer support.",
              },
              {
                title: "Audit Trails & Deletion Logs",
                text: "Track voids and deletions, record reasons—always audit-ready.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-[#8A8A8A] w-[330px] md:w-[290px] h-[100px] md:h-[200px] p-2 md:p-6 rounded-xl transition-transform hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#C2185B] cursor-pointer"
                variants={slideRight}
                initial="hidden"
                animate={posVisible ? "visible" : "hidden"}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="text-white text-lg mb-2">{card.title}</h3>
                <p className="text-white opacity-0 transition-opacity hover:opacity-100">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Section */}
      <section id="erpSection" className="px-5 max-w-[1200px] mx-auto text-center mt-14">
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={erpVisible ? "visible" : "hidden"}
        >
          <h2 className="text-fluid-h2 font-normal mb-2 leading-snug">
            Grows with Your Business—<br />
            <span className="text-fluid-h2 font-normal">
              Scale to Full <span className="text-[#C2185B]">ERP</span> Instantly
            </span>
          </h2>
          <p className="text-fluid-body text-gray-600 mb-12 max-w-4xl mx-auto">
            As your business grows, Accqrate Retail grows with you. Flip the switch to add
            procurement, finance, HR and supply-chain modules—no data migration, no downtime.
          </p>

          {[
            {
              text: "Central procurement: Manage suppliers and POs across all locations.",
              video: "/videos/pos.mp4",
            },
            {
              text: "Real-time inventory: See live stock updates and automate reordering.",
              video: "/videos/dashboard.mp4",
            },
            {
              text: "Safety-stock alerts: Never run out, never over-order.",
              video: "/videos/crm.mp4",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12"
            >
              {/* Text slides from left */}
              <motion.p
                className="flex-1 text-left text-fluid-h3 text-[#C2185B] font-light max-w-md"
                variants={slideLeft}
                initial="hidden"
                animate={erpVisible ? "visible" : "hidden"}
                transition={{ delay: i * 0.2 }}
              >
                {feature.text}
              </motion.p>

              {/* Video slides from right */}
              <motion.div
                className="flex-1 flex justify-center"
                variants={slideRight}
                initial="hidden"
                animate={erpVisible ? "visible" : "hidden"}
                transition={{ delay: i * 0.3 }}
                 viewport={{ once: false, amount: 0.3 }}
              >
                <video
                  src={feature.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full max-w-md h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
