import styled from "styled-components";

import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled(Navbar).attrs(() => ({
  bg: "dark",
  variant: "dark",
  expand: "lg",
  fixed: "top",
}))``;

export const StyledNavBrand = styled(Navbar)`
  transition: 0.3s;
  color: white;

  &:hover {
    color: black;
  }
`;



export const StyledNavToggle = styled(Navbar)`
  transition: 0.3s;
  border: none;

  &:focus{
    box-shadow: none;
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  transition: 0.3s;
    
  &:hover {
    color: black;
  }
`;