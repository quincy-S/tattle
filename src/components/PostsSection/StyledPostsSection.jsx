import styled from "styled-components";
import { motion } from "framer-motion";

const StyledPostsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  flex: 1;
  background-color: black;
  gap: 0.8rem;
  padding-bottom: 4rem;
  padding-top: 7.6rem;
`;

export const StyledButton = styled(motion.span)`
  position: absolute;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 13%;
  width: fit-content;
`;

export const StyledPopUpFooter = styled.footer`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
`;
export default StyledPostsSection;
