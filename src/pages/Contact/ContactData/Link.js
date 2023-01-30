import { StyledLink } from "./styled";

export const Link = ({ href, description }) => {
  return (
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {description}
    </StyledLink>
  );
}