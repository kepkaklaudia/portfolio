import styled from "styled-components";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';

export const Icon = styled.div`
  padding: 10px;
  color: ${({ theme }) => theme.colors.icon};
  font-size: 75px;

  &:hover {
    color: ${({ theme }) => theme.colors.iconHover};
  }

  @media (max-width: 767.98px) {
    font-size: 65px;
  }

  @media (max-width: 575.98px) {
    font-size: 50px;
  }
`;

export const StyledCard = styled(Card)`
  color: ${({ theme }) => theme.colors.cardText}; 
  width: 300px; 
  margin: 10px auto;
`;

export const StyledButton = styled(Button).attrs(() => ({
  className: "w-100",
  target: "_blank",
  rel: "noopener noreferrer"
}))`
  background-color: ${({ theme }) => theme.colors.buttonBackground}; 
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
    
  &.btn-primary:active {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const StyledTooltip = styled(Tooltip)`
  inset: auto auto -30px 0 !important;
`;