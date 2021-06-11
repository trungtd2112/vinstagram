import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://sheltered-coast-77536.herokuapp.com/api/users');
        if (response.status === 200) {
          setUsers(response.data.users);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleDeleteUser = async _id => {
    try {
      const response = await axios.delete(`https://sheltered-coast-77536.herokuapp.com/api/users/${_id}`);
      if (response.status === 200) {
        setUsers(users.filter(user => user._id !== _id));
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h3>Users Table</h3>
      <div className="admin__user table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(({ _id, username, email, password }) => (
                <tr key={_id}>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <button 
                      type="button" 
                      className="btn btn-danger"
                      onClick={e => handleDeleteUser(_id)}
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
    </>
  )
}

Users.propTypes = {

}

export default Users

