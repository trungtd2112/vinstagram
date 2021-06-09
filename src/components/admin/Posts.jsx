import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Posts(props) {
  const [users, setUsers] = useState([
    { id: 1, username: "aaaa", email: "aa@aa.com", password: "bbbb" },
    { id: 2, username: "aaaa", email: "aa@aa.com", password: "bbbb" },
    { id: 3, username: "aaaa", email: "aa@aa.com", password: "bbbb" },
    { id: 4, username: "aaaa", email: "aa@aa.com", password: "bbbb" },
    { id: 5, username: "aaaa", email: "aa@aa.com", password: "bbbb" },
  ]);
  
  return (
    <div>
      <h3>Posts Table</h3>
      <div className="admin__user table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Num</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(({ id, username, email, password }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <button 
                      type="button" 
                      className="btn btn-danger"
                      // onClick={}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

Posts.propTypes = {

}

export default Posts

