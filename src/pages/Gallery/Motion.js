import { motion } from "framer-motion";

export const Motion = ({animatedElement}) =>{
  const initial = {
    opacity: 0,
    y: -100
  };
  const animate = {
    opacity: 1,
    y: 0
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
    >
      {animatedElement}
    </motion.div>
  );
};