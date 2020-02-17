import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Pages/signIn/SignIn';
import Register from './Pages/register/Register';
import HomePage from './Pages/homePage/HomePage';
import Projects from './Pages/projects/Projects';
import Header from './components/header/Header';


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/projects" component={Projects} />
      </Switch>

    </Router>
  );
}

export default App;
