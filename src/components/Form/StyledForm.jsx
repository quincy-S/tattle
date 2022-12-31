import styled from "styled-components";

const StyledForm = styled.div`
  form {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 50rem;
    margin: 0 auto;
  }

  input {
    border: 0px;
    padding: 0 1rem;
    font-size: 1rem;
    ${"" /* background-color: #3a3a3c; */}
    background-color:white;
    width: 100%;
    outline: none;
    color: #3a3a3c;
    outline: none;
    height: 2rem;
    border-radius: 50px;
  }

  button {
    background-color: transparent;
    border: 0px;
  }
`;
export default StyledForm;
