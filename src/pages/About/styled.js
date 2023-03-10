import styled from "styled-components";
import { Accordion } from "react-bootstrap";

export const LineThrough = styled.span`
  text-decoration: line-through;
`;

export const StyledButton = styled(Accordion)`
  &:hover {
    cursor: pointer;
  }

  &:not(.collapsed) {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.accordionHeader};
  }

  &:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-icon);
 }
`;

export const Heading = styled.h2`
  font-size: 20px;
`;