import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';
import EmailForm from '../EmailForm/EmailForm';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Home from '../Home/Home';
import '../../styles/App.css';
  
const App = ({ renderForm }) => {
  const emailForm = renderForm
    ? <EmailForm />
    : null;

  return (
    <main>
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={AboutMe} />
        <Route path='/' component={Home} />
      </Switch>
      {emailForm}
    </main>
  );
};

const mapStateToProps = ({ renderForm }) => ({ renderForm });

export default withRouter(connect(mapStateToProps, null)(App));
