import styled from "styled-components";
import { darken } from "polished";

interface IbuttonProps {
  width: number;
  height: number;
  unity?: string; 
}

export const Container = styled.div<IbuttonProps>`
  margin-top: 1rem;
  width: 100%;

  button {
    width: ${({ width, unity = "%" }) => (width + unity)};
    height: ${({ height, unity = "rem" }) => height + unity};

    border: none;
    outline: none;

    background: var(--primary-color);
    border-radius: 8px;

    font-size: 1rem;
    font-weight: bold;
    color: var(--text-color);
    text-transform: uppercase;

    position: relative;

    .circle {
      position: absolute;
      width: 36px;
      height: 36px;
      top: 25%;
      bottom: 30%;
      left: 1.5rem;
      background-color: #f3a83f;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    :hover {
      background: ${darken(0.1, "#f3a83f")};
    }
  }
`;
