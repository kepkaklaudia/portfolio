import { StyledLink } from "./styled";

export const Link = ({ href, description }) => (
  <StyledLink
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {description}
  </StyledLink>
);