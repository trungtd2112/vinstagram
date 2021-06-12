import React, { Component, useState, useEffect } from "react";

import Header from "./Header";
import Post from "./Post";
import CommentSection from "./CommentSection";

function Card({post}){
    console.log(post);
    return (
      <div className="cardContainer">
        <Header key={post.user._id} user={post.user} post={post}/>
        <Post key={post._id} toukou={post}/>
      </div>
    );
}

export default Card;
