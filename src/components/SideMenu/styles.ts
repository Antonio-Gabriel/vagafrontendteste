import styled from "styled-components";

type ISideMenuProps = {
  isOpen: boolean;
};

export const NavigationDropDown = styled.nav<ISideMenuProps>`
  margin-top: 1rem;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "100rem" : "24px")};
  transition: 0.4s ease-in-out;

  header {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      font-size: 1.175rem;
      font-weight: 500;
      margin-left: 0.5rem;
    }

    svg {
      transition: 0.4s;
      transform: rotate(${({ isOpen }) => (isOpen ? "-0deg" : "-90deg")});
    }
  }
`;

export const DropDownCollapse = styled.ul`
  border-radius: 0.25rem;
  margin-top: 0.625rem;

  background: var(--body-color);

  li {
    display: grid;
    row-gap: 0.2rem;
    padding: 0.75rem 2.5rem 0.75rem 1.8rem;    
  }
`;

