import { m } from "framer-motion"; 

export function RevealGroup({ children, className = "", stagger = 0.1 }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px", amount: 0.1 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </m.div>
  );
}

export function RevealItem({ children, className = "" }) {
  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.2, 0.6, 0.2, 1] },
        },
      }}
    >
      {children}
    </m.div>
  );
}
