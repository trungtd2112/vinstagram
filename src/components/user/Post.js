import React, { Component } from "react";

function Post({toukou}){
  return (
    <div>
      <div className="Post">
        <div className="Post-image-div">
          <p className="caption">{toukou.content}</p>
          <img
            src={toukou.imageURL}
            alt="post img"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;