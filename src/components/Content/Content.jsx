import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyledContent from "./StyledContent";
import Home from "../../pages/Home/Home";
import Comments from "../../pages/Comments/Comments";
import postService from "../../services/posts";

export const AppContext = createContext();

const Content = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((returnedObject) => {
      setPosts(returnedObject);
    });
  }, []);

  return (
    <StyledContent>
      <AppContext.Provider value={{ posts, setPosts }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="comments/:id" element={<Comments />} />
            <Route path="newest" element={<Home />} />
            <Route path="loudest" element={<Home />} />
            <Route path="mostcommented" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </StyledContent>
  );
};

export default Content;
