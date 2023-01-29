import { StyledItem, StyledLink, StyledList } from "./styled";

export const ContactList = () => {
  return (
    <>
      <StyledList>
        <StyledItem>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:kepkaklaudia@gmail.com"
          >
            📩 kepkaklaudia@gmail.com
          </StyledLink>
        </StyledItem>
        <StyledItem>
          📲 515-943-229
        </StyledItem>
        <StyledItem>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="github.com/kepkaklaudia"
          >
            🌐 github.com/kepkaklaudia
          </StyledLink>
        </StyledItem>
      </StyledList>
    </>
  );
};