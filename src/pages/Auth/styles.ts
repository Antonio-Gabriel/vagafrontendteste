import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.div`
  margin-right: 7.5rem;
  margin-left: 7.5rem;

  header {
    padding: 1.5rem 0 0.2rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > div {
      width: 2.125rem;
      height: 2.125rem;
      border-radius: 50%;
      background: var(--hilight-color);

      display: flex;
      align-items: center;
      justify-content: center;

      i {
        font-size: 1rem;
        color: var(--text-color);
      }

      + div {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  place-content: center;
  align-items: center;

  height: calc(100vh - 4rem);

  .text {
    h1 {
      font-size: 3rem;
      font-weight: 700;
      max-width: 27.5rem;

      margin-bottom: 2rem;
    }
  }

  .auth {
    display: flex;
    justify-content: flex-end;

    .card {
      background: var(--hilight-color);
      width: 28rem;
      height: 24.3125rem;
      border-radius: 8px;

      padding: 0 2.125rem;
    }
  }
`;

export const Header = styled.header`
  margin: 0 !important;
  padding: 0 !important;

  display: flex;
  justify-content: flex-start !important;

  h2 {
    padding-top: 3.125rem;
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${Grid} {
    gap: 0.5rem;
  }

  margin-top: 2.75rem;
`;
