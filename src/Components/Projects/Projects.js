import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setThemeClass } from '../../helpers/helper';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';

const Projects = ({ location, theme }) => {
  return (
    <div className={setThemeClass(theme, 'App')}>
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

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, null)(Projects);

Projects.propTypes = {
  location: PropTypes.object,
  theme: PropTypes.string
};
