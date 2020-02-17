import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

//Pages
import SignIn from './components/signInAndRegister/SignIn'
import Register from './components/signInAndRegister/Register'
import Main from './components/main/Main'


function App() {
  return <Router>
    <Switch>
    <Route exact path="/" component={Main}/>
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
}

export default App;
