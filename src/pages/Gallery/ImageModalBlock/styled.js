import styled from "styled-components";
import { Image } from "react-bootstrap";

export const StyledImage = styled(Image)`
  cursor: pointer;

  @media (max-width: 767.98px) {
    cursor: auto;
  }
`;