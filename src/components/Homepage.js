import logo from "../images/logo.png";

function Homepage(){
    return (
        <div>
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
                      <span className="input-group-text" id="basic-addon1">?</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search...." aria-describedby="basic-addon1" />
                  </div>
                </form>
              </ul>
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Avatar</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
}

export default Homepage;