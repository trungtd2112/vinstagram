import React, {useState, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'

import logo from "../images/logo.png";
import searchIcon from "../images/loupe.png";

import axios from 'axios';
import { TextField, Icon } from '@material-ui/core';
import { AccountCircle, Collections } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';

function Navbar(props) {

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});

  const history = useHistory();

  const URL = "https://sheltered-coast-77536.herokuapp.com/api/";
  
  const avatarStyles = {

    maxWidth : "50px",
    maxHeight : "50px",
    borderRadius : "50%"
  }

  // const fetchAllData = async(url) => {
  //   await axios.get(url).then((res) => {
  //     if (res.data.users) {
  //       setUsers(res.data.users);
  //     }
  //     else if (res.data.posts) {
  //       setPosts(res.data.posts);
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }

  // useEffect(() => {
  //   fetchAllData(URL + 'users');
  //   fetchAllData(URL + 'posts');
  // }, []);

  const getDataFromAPI = (e) => {
    // console.log(e.target.value);
    setSelected({});
    if (e.target.value.trim() !== '') {
      const urls = [
        URL + 'users/search/' + e.target.value.trim(),
        URL + 'posts/search/' + e.target.value.trim()
      ]

      urls.forEach((url) => {
        axios.get(url).then((res) => {
          if (res.data.users) {
            res.data.users.map((user) => {
              // if(options.indexOf(user.username) == -1){
              //   options.push("user.username);
              // }
              var existed = false;
              for (let i = 0; i < options.length; i++) {
                if (options[i].username == user.username) {
                  existed = true;
                  break;
                }
              }
              if (existed == false) options.push(user);
            });
          }
          else if (res.data.posts) {
            res.data.posts.map((post) => {
              // if(options.indexOf("[post] " + post.content) == -1){
              //   options.push("[post] " + post.content);
              // }
              var existed = false;
              for (let i = 0; i < options.length; i++) {
                if (options[i].content == post.content) {
                  existed = true;
                  break;
                }
              }
              if (existed == false) options.push(post);
            });
          }
        }).catch(err => {
          console.log(err);
        })
      })
    }
    else setOptions([]);
  }

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && Object.keys(selected).length !== 0) {
      console.log("submitting");
      history.push("/post/detail");
    }
  }

  const renderIcon = (option) => {
    if (option.username) {
      return <AccountCircle color="secondary" />
    }
    else return <Collections color="secondary" />
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
                getOptionLabel={option => {
                  return option.username ? option.username : option.content;
                }}
                renderOption={option => {
                  return (
                    <Fragment>
                      {renderIcon(option)}
                      {option.username ? option.username : option.content}
                    </Fragment>
                  );
                }}
                renderInput={(params) => (
                  <TextField {...params}
                    style={{ textAlign: 'center' }}
                    onChange={getDataFromAPI}
                    variant="outlined"
                    label="Search Box"
                  />
                )}
                onChange={(event, newValue) => {
                  <span>
                    {setSelected(newValue)}
                  </span>
                }}
                onKeyDown={handleOnKeyDown}
              />
              {selected && selected.username ? <img src={selected.avatar} style={{width: 50, height: 50, borderRadius: 50/2}} /> : null}
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

