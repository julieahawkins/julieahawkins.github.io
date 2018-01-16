import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import '../../styles/AppThemes.css';
  
const App = () => {
  return(
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/" component={Home} />
    </Switch>
  )
};

export default App;
