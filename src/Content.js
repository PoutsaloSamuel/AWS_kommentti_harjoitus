import React, { useState } from "react";
import Data from "./data.json";
import "./App.css";
import image from "./images/avatars/default.jpg";
export default function Content() {
  const reply = (props) => {
    return props.map((post) => {
      // const image = "post.user.image.png";
      return (
        <div className="comment-reply" key={post.id}>
          <div className="icon-name-time">
            <img className="pfp-reply" alt="logo" src={image} />
            <p className="name-reply">{post.user.username}</p>
            <p className="postTime-reply">{post.createdAt}</p>
          </div>
          <p className="content-reply">{post.content}</p>
          <div className="scores-and-reply">
            <div className="scoreContainer">
              <button className="plusScore theScore">+</button>
              <p className="score">{post.score}</p>
              <button className="minusScore theScore">-</button>
            </div>
            <p className="replyButton">Reply</p>
          </div>
        </div>
      );
    });
  };

  return Data.map((post, index) => {
    return (
      <div key={index} className="main">
        {post.comments.map((comment) => (
          <div className="uselessCenter">
            <div className="comment" key={comment.id}>
              <div className="icon-name-time">
                <img
                  className="pfp"
                  alt="logo"
                  src={comment.user.image.png.substring(0)}
                />
                {console.log(comment.user.image.png.substring(1))}
                <p className="name">{comment.user.username}</p>
                <p className="postTime">{comment.createdAt}</p>
              </div>
              <p className="content">{comment.content}</p>
              <div className="scores-and-reply">
                <div className="scoreContainer">
                  <button className="plusScore theScore">+</button>
                  <p className="score">{comment.score}</p>
                  <button className="minusScore theScore">-</button>
                </div>
                <p className="replyButton">Reply</p>
              </div>
            </div>
            {reply(comment.replies)}
          </div>
        ))}
      </div>
    );
  });
}
