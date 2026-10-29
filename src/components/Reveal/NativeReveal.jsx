import { useEffect, useRef, useState } from "react";

export default function NativeReveal({
  children,
  className = "",
  as: Component = "div",
  delay = 0,
  threshold = 0.15,
  ...props
}) {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);

        observer.disconnect();
      },
      {
        threshold,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={`
        css-reveal-base
        ${className}
        ${isVisible ? "is-visible" : ""}
      `.trim()}
      style={{
        ...props.style,
        transitionDelay: `${delay}s`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
