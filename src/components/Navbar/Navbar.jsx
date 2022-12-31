import React from "react";
import StyledNavbar, { StyledNav, StyledLink } from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>tattle</h1>
      <StyledNav>
        <StyledLink to={"/newest"}>Newest</StyledLink>
        <StyledLink to={"/mostcommented"}>Most commented</StyledLink>
        <StyledLink to={"/loudest"}>Loudest</StyledLink>
      </StyledNav>
    </StyledNavbar>
  );
};

export default Navbar;
