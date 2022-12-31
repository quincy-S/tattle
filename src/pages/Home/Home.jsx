import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PostsSection from "../../components/PostsSection/PostsSection";
import StyledHome from "./StyledHome";

const Home = () => {
  return (
    <StyledHome>
      <Navbar />
      <PostsSection />
    </StyledHome>
  );
};

export default Home;
