import styled from "styled-components";
import { Grid } from "../../styles/Grid";

type IActiveCardProps = {
  hasActive: boolean;
};

export const Container = styled.article<IActiveCardProps>`
  background: var(--hilight-color);
  border-radius: 8px;
  padding: 1.375rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ::after {
    content: "";
    position: absolute;
    width: ${({ hasActive }) => (hasActive ? "100%" : "0")};
    height: ${({ hasActive }) => (hasActive ? "100%" : "0")};
    left: 0;
    border-radius: 8px;
    background: var(--hilight-color);
    z-index: 2;

    transition: 0.2s;
  }

  .hasHover {
    visibility: ${({ hasActive }) => (hasActive ? "visible" : "hidden")};
    opacity: ${({ hasActive }) => (hasActive ? "1" : "0")};

    transition: 0.2s;
  }

  :hover {
    .hasHover {
      visibility: visible;
      opacity: 1;
    }

    ::after {
      width: 100%;
      height: 100%;
    }
  }

  .left {
    display: flex;
    align-items: center;

    .acronym {
      width: 3.75rem;
      height: 3.75rem;

      background: var(--body-color);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 500;

      margin-right: 1rem;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${Grid} {
      gap: 2.2rem;
    }

    .top {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .time {
        font-size: 10px;
        opacity: 0.6;
        font-weight: 600;
        margin-bottom: 6px;
      }

      .hour {
        font-size: 14px;
        color: var(--text-color);
        font-weight: 600;
      }
    }

    .acronyms {
      display: flex;
      align-self: flex-end;

      .circle {
        width: 46px;
        height: 46px;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;

        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        :nth-child(3) {
          background-color: var(--primary-color);
          z-index: 2;
        }

        :nth-child(2) {
          background-color: var(--success-color);
          margin-right: -1rem;
          z-index: 1;
        }

        :nth-child(1) {
          background-color: #202024;
          margin-right: -1rem;
        }
      }
    }
  }
`;

export const Description = styled.div`
  z-index: 99;

  ${Grid} {
    gap: 0.8rem;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  .text {
    display: inline-flex;
    align-items: center;

    .circle {
      background: var(--success-color);
      font-size: 11px;
      font-weight: 700;
      padding: 0.2rem;
      border-radius: 50%;

      margin-right: 6px;
    }

    p {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  .prohibited {
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }

    span {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;

export const IsActive = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;

  padding: 1.375rem;

  display: flex;
  justify-content: space-between;

  width: 100%;

  input[type="checkbox"] {
    background: var(--body-color);
    width: 34px;
    height: 34px;
    border: 0.15em solid var(--body-color);
    border-radius: 0.75em;

    margin-left: 11px;
    margin-top: 12px;
  }

  .options {
    display: flex;

    > div {
      width: 2.125rem;
      height: 2.125rem;
      border-radius: 5px;
      background: var(--body-color);

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      i {
        font-size: 1rem;
        color: var(--text-color);
      }

      + div {
        margin-left: 0.2rem;
      }

      :hover {
        filter: brightness(0.8);
      }
    }
  }
`;
