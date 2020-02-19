import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import HomePage from './pages/HomePage/HomePage';
import AllProjects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import AboutUser from './pages/AboutUserPage/AboutUserPage';

function App() {
  const [finished, setFinished] = useState(false);

  return (
    <Router>
      <Header setFinished={setFinished} />
      <Switch>
        <Route exact path="/" render={() => <HomePage finished={finished} setFinished={setFinished} />} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/allprojects" component={AllProjects} />
        <Route exact path="/aboutuser" component={AboutUser} />
      </Switch>
    </Router>
  );
}

export default App;
