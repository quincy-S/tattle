import React from "react";
import { Send } from "iconsax-react";
import StyledForm from "./StyledForm";

const Form = ({ newPost, handlePostChange, addPost, placeholder }) => {
  return (
    <StyledForm onSubmit={addPost}>
      <form>
        <input
          placeholder={placeholder}
          value={newPost}
          onChange={handlePostChange}
        />
        <button type="submit">
          <Send color="orange" size="40" />
        </button>
      </form>
    </StyledForm>
  );
};

export default Form;
