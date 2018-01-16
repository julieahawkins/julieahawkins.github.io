import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';

const Projects = ({ location }) => {
  return (
    <div className='App'>
      <Nav 
        theme='light'
        navBar={true} 
        pageName={location.pathname}
      />
      <h1>I will be a Projects page!</h1>
      <Contact />
    </div>
  );
};

Projects.propTypes = {
  location: PropTypes.object
};

export default Projects;