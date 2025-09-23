import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.2,
  baseRotation = 2,
  blurStrength = 2,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  as = "h2", // dynamic tag
}) => {
  const containerRef = useRef(null);

  // Split text into words if children is string
  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;
    return children.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ SSR safe

    let triggers = [];
    let ctx;

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = containerRef.current;
      if (!el) return;

      const scroller = scrollContainerRef?.current || window;

      // Ensure ScrollTrigger refreshes after layout is ready
      ScrollTrigger.refresh();

      // Rotation animation
      triggers.push(
        gsap.fromTo(
          el,
          { transformOrigin: "0% 50%", rotate: baseRotation },
          {
            rotate: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom",
              end: rotationEnd,
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        ).scrollTrigger
      );

      // Determine target elements
      const targets =
        typeof children === "string"
          ? el.querySelectorAll(".word")
          : [el];

      // Opacity animation
      triggers.push(
        gsap.fromTo(
          targets,
          { opacity: baseOpacity, willChange: "opacity" },
          {
            opacity: 1,
            stagger: typeof children === "string" ? 0.05 : 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom-=20%",
              end: wordAnimationEnd,
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        ).scrollTrigger
      );

      // Blur animation
      if (enableBlur) {
        triggers.push(
          gsap.fromTo(
            targets,
            {
              filter:
                typeof children === "string"
                  ? `blur(${blurStrength}px)`
                  : "blur(0px)",
            },
            {
              filter: "blur(0px)",
              stagger: typeof children === "string" ? 0.05 : 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                scroller,
                start: "top bottom-=20%",
                end: wordAnimationEnd,
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          ).scrollTrigger
        );
      }
    })();

    // Cleanup
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
    children,
  ]);

  const Component = as;

  return (
    <Component ref={containerRef} className={`my-5 ${containerClassName}`}>
      {typeof children === "string" ? (
        <span className={`text-center ${textClassName}`}>{splitText}</span>
      ) : (
        children
      )}
    </Component>
  );
};

export default ScrollReveal;