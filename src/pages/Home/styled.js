import { Link } from "react-router-dom";
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

export const Image = styled.img` 
  border-bottom: 2px solid;
`;

export const StyledLink = styled(Link)` 
  text-decoration: none;
  padding: 15px 60px;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.bodyBackground}; 
  border: 3px solid ${({ theme }) => theme.colors.subtitle};
  color: ${({ theme }) => theme.colors.text}; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.text}; 
  }
    
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.text}; 
  }
`;