import './App.css';
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostDetail from './components/post/detail/PostDetail';
import Homepage from './components/user/Homepage';
import Admin from './components/admin/Admin';
import SignIn from './components/SignIn';
import DetailPost from './components/post/DetailPost';
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
