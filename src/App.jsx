import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import HomePage from './pages/HomePage/HomePage';
import AllProjects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import AboutUser from './pages/AboutUserPage/AboutUserPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/allprojects" component={AllProjects} />
        <Route exact path="/aboutuser" component={AboutUser} />
      </Switch>
    </Router>
  );
}

export default App;
