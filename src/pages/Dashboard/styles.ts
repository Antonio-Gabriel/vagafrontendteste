import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  height: 100vh;

  aside {
    padding: 0 1.625rem;
    background: var(--hilight-color);
  }

  section {
    padding: 2.25rem 2.625rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;      
    }
  }
`;

export const BtnsEvents = styled.div`

  display: flex;

  > div {
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    background: var(--hilight-color);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    i {
      font-size: 1rem;
      color: var(--text-color);
    }

    + div {
      margin-left: 0.5rem;
    }
  }
`;

export const AsideHeader = styled.header`
  padding: 1.75rem 0;
  border-bottom: 1px solid #5a5a66;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .acronym {
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
  }

  .new {
    button {
      transform: translate(0%, -14%);
    }

    .cQYOds button .circle {
      left: 8px;
      top: 50%;
      margin-right: -50%;
      transform: translate(1%, -50%);
    }
  }
`;

export const Favorites = styled.div`
  padding: 1.125rem 0 2.5rem 0;

  article {
    display: flex;
    align-items: center;

    span {
      font-size: 1.125rem;
      font-weight: 700;
      margin-right: 0.625rem;
    }

    svg {
      fill: var(--text-color);
    }
  }
`;
