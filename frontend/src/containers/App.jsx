import React from 'react';
//router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//pages
import Login from './LoginPage';
import Likes from './Likes';
import Home from './Home';
//styles
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/likes" component={Likes}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
