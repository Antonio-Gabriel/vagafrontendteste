import styled from "styled-components";

export const Container = styled.div`
  width: 4rem;
  height: 4rem;

  background: var(--body-color);
  border-radius: 50%;
  border: 3px solid var(--primary-color);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  span {
    font-weight: 500;
    font-size: 1.125rem;
  }

  ::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    right: 0;
    bottom: 0;

    background: var(--success-color);
    border-radius: 50%;

    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }
`;
