import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import allReducers from "../Reducers";

export default function configureStore(initialState, history) {
  const middlewares = [thunk, routerMiddleware(history)];
  const storeEnhancers = [];

  const isDev = process.env.NODE_ENV !== "production";
  if (isDev) {
    // eslint-disable-next-line global-require
    const DevTools = require("../Components/ReduxDevTools").default;

    // allow devs to use their own plugged in browser redux dev tool instead of the builtin component
    const devToolsEnhancer = window.devToolsExtension
      ? window.devToolsExtension()
      : DevTools.instrument();
    storeEnhancers.push(devToolsEnhancer);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  storeEnhancers.unshift(middlewareEnhancer);

  const store = createStore(
 allReducers,
    initialState,
    compose(...storeEnhancers)
  );

 
  return store;
}
