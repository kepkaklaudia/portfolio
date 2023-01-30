import { motion } from "framer-motion";

export const Motion = ({ x, y, duration, type, animatedElement }) => {
  const initial = {
    x,
    y,
    opacity: 0
  }
  const animate = {
    x: 0,
    y: 0,
    opacity: 1
  }
  const transition = {
    duration,
    type,
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {animatedElement}
    </motion.div>
  );
};