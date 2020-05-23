// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);

  function submitComment(comment){
    if(!comment){
      return; // we don't have a comment, do nothing
    }

    comments.push(comment);

    setComments(comments); // Add new comment
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment) => {
        return <Comment key={comment.username} comment={comment} />
      })}
      <CommentInput submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
