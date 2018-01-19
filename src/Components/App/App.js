import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';
import EmailForm from '../EmailForm/EmailForm';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
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
        <Route path='/resume' component={Resume} />
        <Route exact path='/' component={Home} />
      </Switch>
      {emailForm}
    </main>
  );
};

const mapStateToProps = ({ renderForm }) => ({ renderForm });

export default withRouter(connect(mapStateToProps, null)(App));
