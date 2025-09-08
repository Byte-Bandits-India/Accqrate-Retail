import { useEffect } from "react";

export default function useGsapSmoothScroll() {
  useEffect(() => {
    let smoother;

    if (typeof window !== "undefined") {
      (async () => {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const { ScrollSmoother } = await import("gsap/ScrollSmoother");

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2.5,
          effects: true,
          smoothTouch: 0.3,
        });
      })();
    }

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);
}
