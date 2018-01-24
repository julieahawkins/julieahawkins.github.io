import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setThemeClass } from '../../helpers/helper';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';

const AboutMe = ({ location, theme }) => {
  return (
    <div className={setThemeClass(theme, 'App')}>
      <Nav 
        navBar={true} 
        pageName={location.pathname}
      />
      
      <h2>About Me</h2>
      <p>I am a software developer, currently at Turing School for Software and Design learning Front-End technologies.
      I love to solve problems and puzzles, 
      I live in Denver, CO with my husband Ben and pets Luigi, Luna and Neeko</p>      
      <h2>Have a question or want to work together?</h2>
      <a 
        target='_blank' 
        className='resume'
        rel='noopener noreferrer'
        href='https://www.turing.io/sites/default/files/resumes/JulieHawkinsResume.pdf'>
        Resume
      </a>

      <Contact />
      <ThemeToggle />
    </div>
  );
};

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, null)(AboutMe);

AboutMe.propTypes = {
  location: PropTypes.object,
  theme: PropTypes.string
};
