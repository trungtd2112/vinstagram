import React from 'react'
import PropTypes from 'prop-types'

import logo from "../images/logo.png";
import searchIcon from "../images/loupe.png";


function Navbar(props) {
  
  const avatarStyles = {

    maxWidth : "50px",
    maxHeight : "50px",
    borderRadius : "50%"
  }
  
  return (
    <nav className="navbar navbar-fixed-top navbar-light bg-light main-nav">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <img src={logo} width={120} height={40} />
          </li>
        </ul>
        <ul className="nav navbar-nav mx-auto">
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><img src={searchIcon} width={20} height={20}/></span>
              </div>
              <input type="text" className="form-control" placeholder="Search...." aria-describedby="basic-addon1" />
            </div>
          </form>
        </ul>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <img src="https://img4.thuthuatphanmem.vn/uploads/2020/03/23/nhung-hinh-anh-dep-nhat-cua-rose-black-pink-trong-nam-2020_051300950.jpg" className="avatar"/>
            <br/>
            <a href="#" className="small-text">ログアウト</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {

}

export default Navbar

