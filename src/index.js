import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createHistory from "history/createBrowserHistory";
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import configureStore from "./store";

const basename = process.env.REACT_APP_ROUTER_BASENAME || "";
const history = createHistory({ basename })

const store = configureStore({}, history)

// const store = createStore(
//     allReducers, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
