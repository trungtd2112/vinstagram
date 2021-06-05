import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
