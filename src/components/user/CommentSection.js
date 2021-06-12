import axios from "axios";
import React, { Component } from "react";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userComment: {
        user: this.props.userComment.username,
        comment: "",
      },
      input: "",
      disabled: false,
      comments: this.props.comments
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addCommentHandler = this.addCommentHandler.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  inputHandler(e) {
    this.setState({ input: e.target.value });
  }

  async postComment(comment) {
    await axios.post(
      `https://sheltered-coast-77536.herokuapp.com/api/posts/${this.props.post._id}`,
      {
        content: comment.comment,
        userId: this.props.userComment._id,
      }
    );
  }

  async addComment(comment) {
    // send comment to server
    await this.postComment(comment);
    this.setState(prev => ({
      comments: [...prev.comments, {
        content: comment.comment,
        user: {
          username: comment.user,
        },
      }]
    }));
  }

  addCommentHandler(e) {
    e.preventDefault();
    let userComment = { ...this.state.userComment };
    userComment.comment = this.state.input;
    this.setState({ userComment, input: "" });
    this.addComment(userComment);
  }
  
  render() {
    return (
      <div className="CommentSection">
        <div className="comments-section">
          <h4>Comments</h4>
          {this.state.comments.map(c => {
            return (
              <div className="single-comment" key={c._id}>
                <p>{c.user.username}</p> <p>{c.content}</p>
              </div>
            );
          })}
        </div>
        <div className="comment-input">
          <input
            type="text"
            value={this.state.input}
            placeholder="Add comment..."
            onChange={this.inputHandler}
          />
          <button
            style={{
              color:
                this.state.input.split("").length > 0 ? "#4a92ff" : "#acc4e8"
            }}
            disabled={
              this.state.input.split("").length > 0
                ? this.state.disabled
                : !this.state.disabled
            }
            onClick={this.addCommentHandler}
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default CommentSection;
