import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 84px;
    height: 46px;
    border: none;
    border-radius: 6px;

    font-weight: 700;
    font-size: 12px;
    color: var(--text-color);
    background: var(--hilight-color);

    transition: 0.2s;

    + button {
      margin-left: 0.5rem;
    }

    :hover {
      background: var(--primary-color);
    }
  }
`;
