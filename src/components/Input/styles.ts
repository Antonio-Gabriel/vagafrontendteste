import styled, { css } from "styled-components";

interface IContainerProps {
  isFilled: Boolean;
  isFocused: Boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid var(--body-color);
  background-color: var(--body-color);
  border-radius: 8px;
  width: 100%;
  height: 62px;
  padding: 10px 15px;  

  ${(props) =>
    props.isFocused &&
    css`
      border-color: var(--primary-color);
    `}
    
  input {
    flex: 1;
    height: 100%;
    padding-left: 16px;
    font-size: 1rem;
    background-color: transparent;
    color: #fff;
    border: 0;
    outline: none;
  }
  
  i {
    cursor: pointer;
    font-size: 1.4rem;
  }
`;
