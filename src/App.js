import React, { Component } from 'react';
import Home from './Components/Home/index'
import LoginPage from './Components/Login'
import SignUp from './Components/SignUp'
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
