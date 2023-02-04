import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled(Navbar).attrs(({ theme }) => ({
  bg: theme.colors.bg,
  variant: theme.colors.variant,
  expand: "lg",
  fixed: "top",
}))`
  padding-right: 0 !important;  ${ /* prevent moving while Modal active */'' }
`;

export const StyledNavBrand = styled(Navbar)`
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.styledNavLink};

  &:hover {
    color: ${({ theme }) => theme.colors.styledNavLinkHover};
  }
`;

export const Image = styled.img.attrs(({ theme }) => ({
  src: theme.icon,
  height: "30",
  className: "d-inline-block align-top",
  alt: "Navbar logo",
}))``;

export const StyledNavToggle = styled(Navbar)`
  transition: 0.3s;
  border: none;

  &:focus {
    box-shadow: none;
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  }

  &.navbar-toggler {
    margin-right: 0 !important;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.styledNavLink};
  transition: 0.3s;
    
  &:hover {
    color: ${({ theme }) => theme.colors.styledNavLinkHover};
  }
`;