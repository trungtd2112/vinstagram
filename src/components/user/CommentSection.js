import React, { Component } from "react";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userComment: {
        user: "pedro",
        comment: ""
      },
      input: "",
      disabled: false,
      comments: [{ user: "iamcardib", comment: "cool post!!!" }]
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addCommentHandler = this.addCommentHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ input: e.target.value });
  }

  addComment(comment) {
    const newComment = { ...comment };
    this.setState(prev => ({
      comments: [...prev.comments, newComment]
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
          {this.state.comments.map(c => {
            return (
              <div className="single-comment">
                <p>{c.user}</p> <p>{c.comment}</p>
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
