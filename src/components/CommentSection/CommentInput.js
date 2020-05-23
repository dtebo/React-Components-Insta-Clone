// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form">
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onKeyDown={(e) => {
          if(e.keyCode === 13){
            props.submitComment({username: "dtebo", text: e.target.value});
          }
          else{
            e.target.value += e.key.toString();
          }
        }}
      />
    </form>
  );
};

export default CommentInput;
