import { motion } from "framer-motion";

export const Motion = ({ x, y, animatedElement }) => {
  const initial = {
    x,
    y,
    opacity: 0
  };
  const animate = {
    x: 0,
    y: 0,
    opacity: 1
  };
  const transition = {
    type: "spring"
  };

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