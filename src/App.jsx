import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import HomePage from './pages/HomePage/HomePage';
import Projects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import AboutUser from './pages/AboutUserPage/AboutUserPage';
import Workers from './pages/WorkersPage/WorkersPage';


function App() {
  const [finished, setFinished] = useState(false);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <HomePage finished={finished} setFinished={setFinished} />} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/aboutuser" component={AboutUser} />
        <Route exact path="/workers" component={Workers} />
      </Switch>
    </Router>
  );
}

export default App;
