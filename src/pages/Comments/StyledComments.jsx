import styled from "styled-components";

const StyledComments = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${"" /* padding: 0.8rem; */}

  background-color: black;
`;

export const StyledHeader = styled.header`
  display: flex;
  color: white;
  align-items: center;
  background-color: #3a3a3c;
  padding: 1rem;
  gap: 1rem;
`;

export const StyledBody = styled.section`
  ${"" /* padding: 0.8rem; */}
  ${"" /* margin-top:-3px; */}
  padding-bottom: 4rem;
  article {
    border-radius: 0px;
  }
`;

export const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: #3a3a3c;
`;

export default StyledComments;
