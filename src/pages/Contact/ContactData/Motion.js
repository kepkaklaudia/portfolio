import { motion } from "framer-motion";

export const Motion = ({ animatedElement }) => {
  const initial = {
    opacity: 0,
    y: -500
  };
  const animate = {
    opacity: 1,
    y: 0
  };
  const transition = {
    type: "spring",
    stiffness: 50
  };
  const whileHover = {
    scale: 1.1,
    originX: 0
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
    >
      {animatedElement}
    </motion.div>
  );
};