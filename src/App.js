import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Post from './components/Post'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Post" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
