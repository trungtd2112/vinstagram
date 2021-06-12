import Navbar from "./Navbar";

function Header(props){
    return (
        <div>
          <Navbar onNavbarSearch={props.onSearch}/>
        </div>
    );
}

export default Header;