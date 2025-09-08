import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function useGsapSmoothScroll() {
  useEffect(() => {
    // Create ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper", 
      content: "#smooth-content", 
      smooth: 2.5,  // scroll postion smoothing 
      effects: true, 
      smoothTouch: 0.3, // smoothness on touch devices
    });

    return () => {
      // cleanup
      smoother.kill();
    };
  }, []);
}
