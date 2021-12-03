import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropDownItem = styled(Link)`
  font-size: 1.115rem;
  font-weight: 500;

  color: var(--text-color);
  filter: brightness(0.8);

  transition: filter 0.2s;

  :hover {
    filter: brightness(1);
  }
`;
