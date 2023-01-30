import { motion } from "framer-motion";

export const Motion = ({ animatedElement }) => {
  const initial = { y: 100, opacity: 0 };
  const animate = { y: 0, opacity: 1 };

return (
  <motion.div
    initial={initial}
    animate={animate}
  >
    {animatedElement}
  </motion.div>
);
}