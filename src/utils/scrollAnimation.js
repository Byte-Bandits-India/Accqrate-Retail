import { useEffect } from "react";

export default function useGsapSmoothScroll() {
  useEffect(() => {
    let smoother;

    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      (async () => {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const { ScrollSmoother } = await import("gsap/ScrollSmoother");

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2.5,  // Smoothness for desktop 
          effects: true, // Enable effects
          smoothTouch: 0.3,  // Smoothness for touch devices
        });
      })();
    }

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);
}
