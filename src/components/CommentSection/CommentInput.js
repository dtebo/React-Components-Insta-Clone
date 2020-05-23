// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" 
          onSubmit={(e) => {
            props.submitComment({username: "dtebo", text: e.target[0].value});
          }}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
      />
    </form>
  );
};

export default CommentInput;
