import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";
import CommentSection from "./CommentSection";

function Card(){
    return (
      <div className="cardContainer">
        <Header />
        <Post />
        <CommentSection />
      </div>
    );
}

export default Card;
