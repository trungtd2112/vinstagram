import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './components/admin/Admin';
import DetailPost from './components/post/DetailPost';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Homepage from './components/user/Homepage';
import UserContextProvider from './contexts/userContext';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />

          <Route path="/admin" component={Admin} />

          <Route exact path="/post/:id" component={DetailPost} />
          <Route exact path="/home" component={Homepage} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
