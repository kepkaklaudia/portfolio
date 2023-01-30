import { motion } from "framer-motion";

export const HeadingMotion = ({ animatedElement }) => {
  const initial = { y: -500 };
  const animate = { y: 0 };
  const transition = { duration: 1 };

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

export const TitleMotion = ({ animatedElement }) => {
  const initial = {
    opacity: 0,
    scale: 0.5
  };
  const animate = {
    opacity: 1,
    scale: 1
  };
  const transition = {
    duration: 1,
    delay: 0.7,
    ease: [0, 0.7, 0.1, 1]
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

export const ImageMotion = ({ animatedElement }) => {
  const initial = { y: 700 };
  const animate = { y: 0 };
  const transition = {
    duration: 1,
    delay: 0.3,
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