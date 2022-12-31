import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPost = styled.article`
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  display: flex;
  background-color: #3a3a3c;
  gap: 1rem;
`;

export const PostBody = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: white;
  text-decoration: none;
  flex: 1;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
  }
`;

export const StyledText = styled.p`
  color: ${(props) => props.color};
`;

export default StyledPost;
