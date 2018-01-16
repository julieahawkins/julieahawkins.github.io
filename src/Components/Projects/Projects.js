import React from 'react';
import Nav from '../Nav/Nav';
import Contact from '../Contact/Contact';

const Projects = ({ location }) => {
  return(
    <div className='App'>
      <Nav 
        theme='light'
        navBar={true} 
        pageName={location.pathname}
      />
      <h1>I will be a Projects page!</h1>
      <Contact />
    </div>
  )
};

export default Projects;