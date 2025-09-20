import { useContext, useEffect, useRef } from "react";
import Skeleton from "../components/skeleton";
import { LoadingContext } from "../utils/LoadingContext";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Choose() {
  const { loading } = useContext(LoadingContext);

  const chooseRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);
  const readyRef = useRef(null);

  // GSAP ScrollReveal animations
  useEffect(() => {
    const elements = [chooseRef.current, paragraphRef.current, listRef.current, readyRef.current];

    elements.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 40, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    });

    // List items stagger separately
    if (listRef.current) {
      gsap.from(listRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  const buttons = ["REQUEST A DEMO", "CONTACT SALES", "LEARN MORE"];

  if (loading) {
    return (
      <>
        <section id="chooseSection" className="bg-[#f2f2f2] text-center font-sans min-h-full py-8">
          <Skeleton height="36px" width="60%" className="mb-6 mx-auto" />
          <Skeleton height="300px" width="700px" className="mb-6 mx-auto" />
          <Skeleton height="80px" width="80px" className="mb-6 mx-auto" />
          <Skeleton height="20px" width="80%" className="mb-3 mx-auto" />
          <Skeleton height="20px" width="80%" className="mb-3 mx-auto" />
          <Skeleton height="20px" width="80%" className="mb-3 mx-auto" />
        </section>

        <section id="readySection" className="bg-gray-200 py-12 px-4 text-center min-h-full mt-20">
          <Skeleton height="36px" width="60%" className="mb-8 mx-auto rounded-md" />
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((_, idx) => (
              <Skeleton key={idx} height="44px" width="180px" className="rounded-full" />
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Choose Section */}
      <section id="chooseSection" className="bg-[#F2F2F2] text-center font-sans min-h-full py-12 px-4">
        <h2 ref={chooseRef} className="text-fluid-h2 font-normal mb-12">
          Why Choose Accqrate Retail?
        </h2>

        <div className="flex flex-col gap-12 items-center md:flex-row md:justify-center md:items-start">
          <div className="relative inline-block max-w-[600px] md:max-w-[600px]">
            <Image
              src="/images/choose.svg"
              alt="Why Choose Accqrate Retail"
              width={700}
              height={300}
              className="w-full h-auto md:h-[450px] block"
              loading="lazy"
            />
            <Image
              src="/gif/Shopping.gif"
              alt="Animated Character"
              width={80}
              height={80}
              className="absolute right-0 bottom-0 md:bottom-16 md:right-[-10px] w-[100px] h-auto pointer-events-none"
              loading="lazy"
            />
          </div>

          <div className="max-w-[600px] text-left md:max-w-[500px]">
            <p ref={paragraphRef} className="text-black font-light mb-8 text-fluid-h3 leading-tight">
              <span className="font-semibold">Compliance by design:</span>
              <br />
              Stay ready for every regulation—<br />
              no last-minute changes.
            </p>
            <ol ref={listRef} className="pl-4 pr-20 text-black font-light space-y-8 text-fluid-body">
              <li>1. Device & vendor freedom: Use any hardware, any printer, no lock-in.</li>
              <li>2. Future-proof scaling: Grow from single store POS to a full ERP suite, no re-implementation.</li>
              <li>3. Total control: See your data, operations, and compliance in real time.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Ready Section */}
      <section id="readySection" className="bg-[#F2F2F2] py-12 px-4 text-center min-h-full mt-20">
        <h2 ref={readyRef} className="text-black font-normal mb-8 text-fluid-h2">
          Ready to accelerate your retail business?
        </h2>
        <div className="flex flex-col lg:flex-row md:max-w-[700px] mx-auto justify-center gap-4 mt-8">
          {buttons.map((label, idx) => (
            <button
              key={idx}
              className="bg-[#C2185C] hover:bg-pink-800 text-white font-light rounded-lg px-6 py-2 w-[260px] md:w-[300px] mx-auto text-center transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
