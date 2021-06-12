import React from "react";

function Header({user, post}){
    var date = post.createdAt.toString().slice(0,10);

    return (
      <div className="Header">
        <div className="profile-div">
          <img
            src={user.avatar}
            alt="profilepic"
          />
        </div>

        <div className="Header-text">
          <p>{user.username}</p>
          <p>{date}</p>
        </div>
      </div>
    );
}

export default Header;
