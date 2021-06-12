import { TextField } from '@material-ui/core';
import { AccountCircle, Collections } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import React, { Fragment, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import logo from "../images/logo.png";
import searchIcon from "../images/loupe.png";

function Navbar(props) {
  const { userState: { user } } = useContext(UserContext);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});

  const history = useHistory();
  const URL = "https://sheltered-coast-77536.herokuapp.com/api/";

  const getDataFromAPI = (e) => {
    setSelected({});
    if (e.target.value.trim() !== '') {
      const url = URL + 'posts/search/' + e.target.value.trim();
    
      axios.get(url).then((res) => {
        if (res.data.posts) {
          setOptions(prev => res.data.posts);
        }
      }).catch(err => {
        console.log(err);
      })
    }
    else setOptions([]);
  }

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const url = URL + 'posts/search/' + e.target.value.trim();
    
      axios.get(url).then((res) => {
        if (res.data.posts) {
          props.onNavbarSearch(res.data.posts);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const renderIcon = (option) => {
    if (option.username) {
      return <AccountCircle color="secondary" />
    }
    else return <Collections color="secondary" />
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
            <Link to="/home">
              <img
                src={logo}
                alt="logo"
                width={120}
                height={40}
                onClick={() => history.push("/home")}
              />
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav mx-auto">
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <img src={searchIcon} alt="search" width={20} height={20} />
                </span>
              </div>
              <Autocomplete
                style={{ width: 400 }}
                freeSolo
                autoComplete
                autoHighlight
                options={options}
                getOptionSelected={(option, value) => {
                  if (value === "") {
                    return false;
                  } else if (value._id === option._id) {
                    return true;
                  }
                }}
                getOptionLabel={(option) => {
                  return option.username ? option.username : option.content;
                }}
                renderOption={(option) => {
                  return (
                    <Fragment>
                      {renderIcon(option)}
                      {option.username ? option.username : option.content}
                    </Fragment>
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    style={{ textAlign: "center" }}
                    onChange={getDataFromAPI}
                    variant="outlined"
                    label="Search Box"
                  />
                )}
                onChange={(event, newValue) => {
                  <span>{setSelected(newValue)}</span>;
                }}
                onKeyDown={handleOnKeyDown}
              />
              {selected && selected.username ? (
                <img
                  src={selected.avatar}
                  alt="avatar"
                  style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                />
              ) : null}
            </div>
          </form>
        </ul>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <img src={`${user?.avatar}`} alt="avatar" className="avatar" />
            <br />
            <a href="#" className="small-text" onClick={handleLogout}>
              ログアウト
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {

}

export default Navbar

