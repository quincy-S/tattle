import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavbar = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #3a3a3c;
  gap: 5px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  max-width: 50rem;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: orange;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #1c1c1e;
  width: fit-content;
  border-radius: 8px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem;
  color: #8f8e93;
  border-radius: 8px;
  text-align: center;

  &.active {
    background-color: #ff8e00;
    color: black;
  }
`;

export default StyledNavbar;
