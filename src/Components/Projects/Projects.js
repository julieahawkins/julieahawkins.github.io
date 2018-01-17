import React from 'react';
import PropTypes from 'prop-types';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';

const Projects = ({ location }) => {
  return (
    <div className='App'>
      <Nav 
        navBar={true} 
        pageName={location.pathname}
      />
      <h1>I will be a Projects page!</h1>
      <Contact />
      <ThemeToggle />
    </div>
  );
};

Projects.propTypes = {
  location: PropTypes.object
};

export default Projects;