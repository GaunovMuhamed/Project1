import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './Pages/signIn/SignIn';
import Register from './Pages/register/Register';
import HomePage from './Pages/homePage/HomePage';
import AllProjects from './Pages/projects/Projects';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/allprojects" component={AllProjects} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
