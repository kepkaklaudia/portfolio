import { motion } from "framer-motion";

export const Motion = ({ x, animatedElement }) => {
  const initial = {
    x
  };
  const transition = {
    duration: 0.7
  };
  const whileInView = {
    x: 0
  };
  const viewport = {
    once: true,
    amount: 0.1
  };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
    >
      {animatedElement}
    </motion.div>
  );
};