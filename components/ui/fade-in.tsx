import React, {useState, useEffect, useRef} from "react";

export const FadeIn = ({ children, delay = 0, className = "" }) => {

    function useInView(threshold = 0.15) {
      const ref = useRef(null);
      const [inView, setInView] = useState(false);
      useEffect(() => {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setInView(true);
          },
          { threshold },
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
      }, []);
      return [ref, inView];
    };

    const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};