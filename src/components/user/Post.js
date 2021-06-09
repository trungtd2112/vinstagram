import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      likeCount: 0
    };
    this.likePost = this.likePost.bind(this);
  }

  likePost() {
    const likeUpdate = !this.state.liked
      ? this.state.likeCount + 1
      : this.state.likeCount - 1;
    this.setState({
      liked: !this.state.liked,
      likeCount: likeUpdate
    });
  }
  render() {
    return (
      <div className="Post">
        <div className="Post-image-div">
          <img
            src="https://yt3.ggpht.com/a/AGF-l79vfoevX9zBnynHuFrP_kfCulzKO7PVd4aJCg=s900-c-k-c0xffffffff-no-rj-mo"
            alt="post img"
          />
        </div>
        <div className="icon-section">
          <p>{this.state.likeCount} likes</p>
          <div className="icons">
            <img
              onClick={this.likePost}
              src={
                !this.state.liked
                  ? "https://i.imgur.com/XHJNXJk.png "
                  : "https://i.imgur.com/h2p1b91.png"
              }
              alt="heart"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;