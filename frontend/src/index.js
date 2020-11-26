import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from "react-redux";
import { createStore , compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from './reducers/index';
import "bootstrap/dist/css/bootstrap.min.css";
import { loadState, saveState } from "./actions/State.js";

const state={
  user:loadState(),
  movieslist :{
    movie : {
      name:"",
      image:"",
      gender:"",
    }
  },
  likedmovies:[],
  selections:[],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  state,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(function () {
  saveState(store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

