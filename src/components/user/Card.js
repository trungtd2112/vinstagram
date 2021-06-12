import React from "react";
import Header from "./Header";
import Post from "./Post";


function Card({post}){
    return (
      <div className="cardContainer">
        <Header key={post.user._id} user={post.user} post={post}/>
        <Post key={post._id} toukou={post}/>
      </div>
    );
}

export default Card;
