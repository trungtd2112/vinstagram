import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import logo from "../images/logo.png";
import searchIcon from "../images/loupe.png";
import { UserContext } from '../contexts/userContext';
import { useHistory } from 'react-router';


function Navbar(props) {
  const { userState: { user } } = useContext(UserContext);
  const history = useHistory();
  
  const avatarStyles = {

    maxWidth : "50px",
    maxHeight : "50px",
    borderRadius : "50%"
  }

  const handleLogout = (e) => {
    e.preventDefault();
    history.push('/');
  }
  
  return (
    <nav className="navbar navbar-fixed-top navbar-light bg-light main-nav">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <img src={logo} alt="logo" width={120} height={40} />
          </li>
        </ul>
        <ul className="nav navbar-nav mx-auto">
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><img src={searchIcon} alt="search" width={20} height={20}/></span>
              </div>
              <input type="text" className="form-control" placeholder="Search...." aria-describedby="basic-addon1" />
            </div>
          </form>
        </ul>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <img src={`${user?.avatar}`} alt="avatar" className="avatar"/>
            <br/>
            <a href="#" className="small-text" onClick={handleLogout}>ログアウト</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {

}

export default Navbar

