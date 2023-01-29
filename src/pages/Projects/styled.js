import styled from "styled-components";

export const Icon = styled.div`{
  padding: 10px;
  color: ${({ theme }) => theme.colors.icon};
  font-size: 75px;

  &:hover {
    color: ${({ theme }) => theme.colors.iconHover};
  }
}`;
