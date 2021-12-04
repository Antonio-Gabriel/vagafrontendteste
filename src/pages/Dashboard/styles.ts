import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  aside {
    padding: 0 1.625rem;
    background: var(--hilight-color);
    width: 22rem;
    position: fixed;
    height: 100vh;
  }

  section {
    margin-left: 22rem;
    width: 100%;
    padding: 2.25rem 2.625rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .divider {
    width: 100%;
    height: 1px;

    background: #5a5a66;

    margin-top: 18px;
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

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  background: var(--hilight-color);
  padding: 0.4rem 1.375rem;
  margin-top: 1.375rem;
  border-radius: 8px;

  .eJYuYY {
    border-color: transparent !important;
    background: transparent;
    :focus {
      border-color: transparent !important;
    }
  }

  .sc-jRQBWg.ffzmrl {
    background: transparent;
    border: transparent;

    :focus {
      background: transparent;
    }
  }

  i {
    font-size: 1.5rem;
  }

  button {
    width: 84px;
    height: 46px;
    border: none;
    border-radius: 6px;

    font-weight: 700;
    font-size: 12px;
    color: var(--text-color);
    background: var(--primary-color);

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const AsideHeader = styled.header`
  padding: 1.75rem 0;
  border-bottom: 1px solid #5a5a66;

  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const SectionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.125rem 0 2rem 0;

  i {
    font-size: 2.2rem;
  }

  .left {
    display: flex;
    align-items: center;
  }
`;

export const BtnGroups = styled.div`
  margin-left: 1.375rem;
  display: flex;

  div {
    + div {
      margin-left: 0.5rem;
    }
  }
`;

export const Cards = styled.div`
  padding: 0 0 1rem 0;

  ${Grid} {
    gap: 0.2rem;
  }
`;
