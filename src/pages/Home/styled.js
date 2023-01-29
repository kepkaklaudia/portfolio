import styled from "styled-components";

export const Heading = styled.h1` 
  font-size: 55px;
  background: ${({ theme }) => theme.colors.headingGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title = styled.h2` 
font-size: 45px;
background: ${({ theme }) => theme.colors.headingGradient};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.h3` 
font-size: 40px;
color: ${({ theme }) => theme.colors.subtitle};
`;