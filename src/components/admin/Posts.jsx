import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://sheltered-coast-77536.herokuapp.com/api/posts"
        );
        if (response.status === 200) {
          setPosts(response.data.posts);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleDeleteUser = async (_id) => {
    try {
      const response = await axios.delete(
        `https://sheltered-coast-77536.herokuapp.com/api/posts/${_id}`
      );
      if (response.status === 200) {
        setPosts(posts.filter((post) => post._id !== _id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost = async (_id) => {
    try {
      const response = await axios.delete(
        `https://sheltered-coast-77536.herokuapp.com/api/posts/${_id}`
      );
      if (response.status === 200) {
        setPosts(posts.filter((post) => post._id !== _id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <h3>Posts Table</h3>
      <div className="admin__user table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Content</th>
              <th>Creater</th>
              <th>Date</th>
              {/* <th>Password</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post) => (
                <tr key={post._id}>
                  <td>{post.content}</td>
                  <td>{post.user.username}</td>
                  <td>{post.createdAt}</td>
                  {/* <td>{password}</td> */}
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => handleDeletePost(post._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Posts.propTypes = {

}

export default Posts

