import styled from "styled-components";

export const StyledList = styled.ul`
  padding: 0px;
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.colors.icon};
  margin: 5px;
  list-style-type: none;
  border-radius: 20px;
  padding: 5px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.icon};

  &:hover {
    color: ${({ theme }) => theme.colors.iconHover};
  }
`;