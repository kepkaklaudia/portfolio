import styled from "styled-components";
import { Link } from "react-router-dom";

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