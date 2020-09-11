import React from 'react';
//router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//pages
import Login from './LoginPage';
import Likes from './Likes';
//styles
import './styles/App.css'
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/likes" component={Likes}/>
          <Route exact path="/linkedin" component={LinkedInPopUp} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
