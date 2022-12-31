import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 50rem;
    margin: 0 auto;
  }
`;

export default StyledContent;
