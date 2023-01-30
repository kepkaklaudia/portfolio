import { StyledItem, StyledLink, StyledList } from "./styled";
import { motion } from "framer-motion";

export const ContactList = () => {
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
    <>
      <StyledList>
        <StyledItem>
          <motion.li
            initial={initial}
            animate={animate}
            transition={transition}
            whileHover={whileHover}
          >
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:kepkaklaudia@gmail.com"
            >
              📩 kepkaklaudia@gmail.com
            </StyledLink>
          </motion.li>
        </StyledItem>
        <StyledItem>
          <motion.li
            initial={initial}
            animate={animate}
            transition={transition}
            whileHover={whileHover}
          >
            📲 515-943-229
          </motion.li>
        </StyledItem>
        <StyledItem>
          <motion.li
            initial={initial}
            animate={animate}
            transition={transition}
            whileHover={whileHover}
          >
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              href="github.com/kepkaklaudia"
            >
              🌐 github.com/kepkaklaudia
            </StyledLink>
          </motion.li>
        </StyledItem>
      </StyledList>
    </>
  );
};