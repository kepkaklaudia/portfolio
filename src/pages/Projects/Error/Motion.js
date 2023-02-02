import { motion } from "framer-motion";

const initial = {
  pathLength: 0,
  opacity: 0
};

const animate = {
  pathLength: 1,
  opacity: 1
};

const transition = (i) => {
  return {
    opacity: 1,
    duration: 1,
    delay: 1 + 0.5 * i,
  }
};

export const MotionLine1 = () => (
    <motion.line
      initial={initial}
      animate={animate}
      transition={transition(0)}
      stroke="#990000"
      strokeWidth="8px"
      strokeLinecap="round"
      x1="0"
      y1="0"
      x2="70"
      y2="70"
    />
  );

export const MotionLine2 = () => (
    <motion.line
      initial={initial}
      animate={animate}
      transition={transition(1)}
      stroke="#990000"
      strokeWidth="8px"
      strokeLinecap="round"
      x1="0"
      y1="70"
      x2="70"
      y2="0"
    />
  );

