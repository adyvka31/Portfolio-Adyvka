import { motion } from "framer-motion";

/**
 * Wrapper that fades + slides content into view as it scrolls in.
 * Uses Framer Motion's whileInView for performant intersection animations.
 */
function Reveal({ children, delay = 0, className = "", as = "div", ...rest }) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px", amount: 0.12 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.2, 0.6, 0.2, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
