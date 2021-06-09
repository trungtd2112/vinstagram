import './App.css';
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostDetail from './components/post/detail/PostDetail';
import Homepage from './components/user/Homepage';
import Admin from './components/admin/Admin';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />

        <Route path="/admin" component={Admin} />

        <Route exact path="/post/detail" component={PostDetail} />
        <Route exact path="/home" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
