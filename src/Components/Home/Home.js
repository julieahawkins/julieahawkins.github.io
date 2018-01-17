import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setThemeClass } from '../../helpers/helper';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
  
const Home = ({ location, theme }) => {
  return (
    <div className={setThemeClass(theme, 'App')}>
      <Nav pageName={location.pathname} />

      <h1 className={theme}>
        Julie Hawkins
      </h1>
      <span className={setThemeClass(theme, 'sub-title')}>
        Software Developer
      </span>

      <Contact />

      <ThemeToggle />
    </div>
  );
};

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, null)(Home);

Home.propTypes = {
  theme: PropTypes.string,
  location: PropTypes.object
};
