import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../Content/Content";
import StyledPostsSection, {
  StyledButton,
  StyledPopUpFooter,
} from "./StyledPostsSection";
import Post from "../Post/Post";
import { AddCircle } from "iconsax-react";
import Form from "../Form/Form";
import postService from "../../services/posts";

const PostsSection = () => {
  const { posts, setPosts } = useContext(AppContext);
  const [showForms, setShowForms] = useState(false);
  const [newPost, setNewPost] = useState("");

  let colours = ["#9EC41C", "#06A3CB", "#8ABDB0", "#DD5F5F", "#FFBA00"];
  let pathName = window.location.pathname.slice(1);

  const rotateVariant = {
    close: {
      rotate: 135,
      scale: 0.9,
    },
  };

  const loudestPosts = (() => {
    function quickSortPosts(arr) {
      if (arr.length === 0) {
        return arr;
      }
      let piv = arr.shift();
      let greater = [];
      let lesser = [];
      for (let p of arr) {
        if (p.votes > piv.votes) {
          greater.push(p);
        } else {
          lesser.push(p);
        }
      }
      return [...quickSortPosts(greater), piv, ...quickSortPosts(lesser)];
    }
    let newPosts = [...posts];
    let sortedVotes = quickSortPosts(newPosts);
    return sortedVotes;
  })();

  const mostCommented = (() => {
    function quickSortComments(arr) {
      if (arr.length === 0) {
        return arr;
      }
      let piv = arr.shift();
      let greater = [];
      let lesser = [];
      for (let p of arr) {
        if (p.comments.length > piv.comments.length) {
          greater.push(p);
        } else {
          lesser.push(p);
        }
      }
      return [...quickSortComments(greater), piv, ...quickSortComments(lesser)];
    }
    let newPosts = [...posts];
    let sortedComments = quickSortComments(newPosts);
    return sortedComments;
  })();

  const newest = (() => {
    let newPosts = [...posts];
    return newPosts.reverse();
  })();

  const postsToShow =
    pathName === `mostcommented`
      ? mostCommented
      : pathName === `loudest`
      ? loudestPosts
      : pathName === `newest`
      ? newest
      : posts;

  function handlePostChange(event) {
    setNewPost(event.target.value);
  }

  function addPost(event) {
    event.preventDefault();
    if (newPost.length < 1) {
      return;
    }
    const postObject = {
      content: newPost,
      time: new Date(),
      votes: 0,
      id: posts.length,
      comments: [],
      colour: colours[Math.floor(Math.random() * colours.length)],
    };

    postService.create(postObject).then((returnedPost) => {
      setPosts(posts.concat(returnedPost));
    });
    setNewPost("");
    setShowForms((prevState) => !prevState);
  }

  return (
    <StyledPostsSection>
      {postsToShow.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <StyledButton
        variants={rotateVariant}
        animate={showForms ? "close" : ""}
        onClick={() => setShowForms(!showForms)}
      >
        <AddCircle color={showForms ? "red" : "#FF9908"} size="60" />
      </StyledButton>
      {showForms && (
        <StyledPopUpFooter>
          <Form
            placeholder="Post anything anonymously"
            addPost={addPost}
            newPost={newPost}
            handlePostChange={handlePostChange}
          />
        </StyledPopUpFooter>
      )}
    </StyledPostsSection>
  );
};

export default PostsSection;
