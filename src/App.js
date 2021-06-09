import './App.css';
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostDetail from './components/post/detail/PostDetail';
import Header from './components/Header';
import Admin from './components/admin/Admin';
import SignIn from './components/SignIn';
import Post from './components/post/Post';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />

        <Route path="/admin" component={Admin} />
        <Route path="/Post" component={Post} />
        <Route exact path="/post/detail" component={PostDetail} />
        <Route exact path="/home" component={Header} />
      </Switch>
    </Router>
  );
}

export default App;
