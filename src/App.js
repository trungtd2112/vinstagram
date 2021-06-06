import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostDetail from './components/post/detail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />

        <Route exact path="/post/detail" component={PostDetail} />
      </Switch>
    </Router>
  );
}

export default App;
