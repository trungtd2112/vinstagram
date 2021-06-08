import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Posts from './Posts'
import Users from './Users'

import './Admin.css'

function Admin(props) {
  let { path, url } = useRouteMatch();

  return (
    <div className="admin">
      <Navbar />

      <div className="container-fluid admin__content">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to={`${url}`}>Posts</Link>
                </li>
                <li className="nav-item">
                  <Link to={`${url}/users`}>Users</Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-5 py-3">
            <Switch>
              <Route exact path={path} render={props => <Posts {...props} />} />
              <Route exact path={`${path}/users`} render={props => <Users {...props} />} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  )
}

Admin.propTypes = {

}

export default Admin

