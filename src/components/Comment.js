import React from "react";

const Comment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.image} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.authorName}
        </a>
        <div className="metadata">
          <span className="date">{props.postedTime}</span>
        </div>
        <div className="text">{props.commentMsg}</div>
      </div>
    </div>
  );
};

export default Comment;
