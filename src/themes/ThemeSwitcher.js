import styled from "styled-components";

export const ThemeContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 15px;
  display: grid;
  grid-row-gap: 10px;
  padding: 10px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.4);
  `;

export const ThemeButton = styled.button`
  padding: 10px;
  border: 1px solid hsl(0, 0%, 87%);
  border-radius: 6px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(1);
  }
}
`;