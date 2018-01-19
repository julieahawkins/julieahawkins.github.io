import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setThemeClass } from '../../helpers/helper';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';

const Resume = ({ location, theme }) => {
  return (
    <div className={setThemeClass(theme, 'App')}>
      <Nav 
        navBar={true} 
        pageName={location.pathname}
      />
      
      <h1>I will be a resume page!</h1>
      
      <a 
        target='_blank' 
        className='resume'
        rel='noopener noreferrer'
        href='https://www.turing.io/sites/default/files/resumes/JulieHawkinsResume.pdf'>
        To Resume
      </a>

      <h2>Have a question or want to work together?</h2>
      <Contact />
      <ThemeToggle />
    </div>
  );
};

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, null)(Resume);

Resume.propTypes = {
  location: PropTypes.object,
  theme: PropTypes.string
};
