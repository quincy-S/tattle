import React from "react";
import StyledComment, { CommentBody, StyledText } from "./StyledComment";
import { MessageText1 } from "iconsax-react";

const Comment = ({ comment, colour }) => {
  console.log(colour);
  return (
    <StyledComment>
      <CommentBody>
        <span>{`2`} ago</span>
        <StyledText color={colour}>{comment}</StyledText>

        <span>{/* <MessageText1 variant="Bold" /> */}</span>
      </CommentBody>
    </StyledComment>
  );
};

export default Comment;
