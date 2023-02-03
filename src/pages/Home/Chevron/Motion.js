import { motion } from "framer-motion";

export const ChevronMotion = ({ animatedElement }) => {
  const transition = {
    delay: 1,
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  };

  const animate = {
    opacity: [0, 0.7, 1, 0.7, 0]
  };

  return (
    <motion.div
      animate={animate}
      transition={transition}
    >
      {animatedElement}
    </motion.div>
  );
};