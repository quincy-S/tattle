import React, { useContext, useState } from "react";
import { AppContext } from "../../components/Content/Content";
import { useParams, useNavigate } from "react-router-dom";
import StyledComments, {
  StyledHeader,
  StyledBody,
  StyledFooter,
} from "./StyledComments";
import { ArrowLeft2 } from "iconsax-react";
import Post from "../../components/Post/Post";
import Comment from "../../components/Comment/Comment";
import Form from "../../components/Form/Form";
import postService from "../../services/posts";

const Comments = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(AppContext);
  const post = posts.find((post) => post.id == id);
  const [newText, setNewText] = useState("");

  function addComment(event) {
    event.preventDefault();
    const changedPost = { ...post, comments: [...post.comments, newText] };
    postService.update(post.id, changedPost).then((returnedNote) => {
      setPosts(posts.map((el) => (el.id !== post.id ? el : returnedNote)));
    });
    setNewText("");
  }

  function handleCommentChange(event) {
    setNewText(event.target.value);
  }

  return (
    <StyledComments>
      <StyledHeader>
        <ArrowLeft2 onClick={() => navigate(-1)} />
        <h1>Comments</h1>
      </StyledHeader>
      <StyledBody>
        <Post post={post} />
        {post.comments.map((comment) => (
          <Comment colour={post.colour} key={comment} comment={comment} />
        ))}
      </StyledBody>
      <StyledFooter>
        <Form
          placeholder="Comment anonymously"
          addPost={addComment}
          newPost={newText}
          handlePostChange={handleCommentChange}
        />
      </StyledFooter>
    </StyledComments>
  );
};

export default Comments;
