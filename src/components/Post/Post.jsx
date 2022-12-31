import React, { useState, useContext } from "react";
import { AppContext } from "../Content/Content";
import StyledPost, { PostBody, StyledText } from "./StyledPost";
import { MessageText1 } from "iconsax-react";
import VotesSection from "../VotesSection/VotesSection";
import postService from "../../services/posts";

const Post = ({ post }) => {
  const { posts, setPosts } = useContext(AppContext);
  const [counter, setCounter] = useState(post.votes);

  function handleDecrease() {
    if (counter === 0) {
      return;
    }
    setCounter((prevState) => prevState - 1);
    const changedPost = { ...post, votes: post.votes - 1 };
    postService.update(post.id, changedPost).then((returnedNote) => {
      setPosts(posts.map((el) => (el.id !== post.id ? el : returnedNote)));
    });
  }

  function handleIncrease() {
    setCounter((prevState) => prevState + 1);
    const changedPost = { ...post, votes: post.votes + 1 };
    postService.update(post.id, changedPost).then((returnedNote) => {
      setPosts(posts.map((el) => (el.id !== post.id ? el : returnedNote)));
    });
  }

  function timeElapsed(time) {
    let now = new Date().getTime();

    let distance = now - time;
    let secs = Math.floor((distance % (1000 * 60)) / 1000);
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)
    );
    if (hours > 0) {
      return `${hours} hours`;
    }
    if (mins > 0) {
      return `${mins} minutes`;
    }
    return `${secs} seconds`;
  }

  return (
    <StyledPost>
      <PostBody to={`/comments/${post.id}`}>
        <span>{timeElapsed(post.time)} ago</span>
        <StyledText color={post.colour}>{post.content}</StyledText>
        <span>
          <MessageText1 variant="Bold" />
          {post.comments.length}
        </span>
      </PostBody>
      <VotesSection
        counter={counter}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
    </StyledPost>
  );
};

export default Post;
