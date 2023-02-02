import { motion } from "framer-motion";

const initial = {
  pathLength: 0
};
const transition = {
  duration: 2,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut"
};
const animate = {
  pathLength: 1
};

export const MotionPath1 = () => (
  <motion.path
    initial={initial}
    transition={transition}
    animate={animate}
    d="M 467.8870849609375 486.9999694824219 L 467.8870849609375 469.72998046875 L 470.7471008300781 469.72998046875 L 470.7471008300781 486.9999694824219 L 467.8870849609375 486.9999694824219 M 473.58709716796875 478.6099548339844 L 479.58709716796875 486.9999694824219 L 476.32708740234375 486.9999694824219 L 471.70709228515625 480.1999816894531 L 471.70709228515625 476.77996826171875 L 475.9071044921875 469.72998046875 L 479.1170959472656 469.72998046875 L 473.58709716796875 478.6099548339844 Z"
    fill="transparent"
    transform="matrix(11.232131004333496, 0, 0, 11.232131004333496, -5062.59033203125, -5127.3623046875)"
    strokeWidth="0.7"
    stroke="#000"
  />
);

export const MotionPath2 = () => (
  <motion.path
    initial={initial}
    transition={transition}
    animate={animate}
    d="M236,1309.5l-46-26.7v-53.5l46-26.7l46,26.7v53.5L236,1309.5z M196,1279.3l40,23.3l40-23.3v-46.5l-40-23.3l-40,23.3V1279.3z"
    transform="matrix(-4.57316255569458, 0, 0, -4.57316255569458, 1328.178955078125, 5994.864746093749)"
    fill="transparent"
    strokeWidth="1"
    stroke="#000"
  />
);


