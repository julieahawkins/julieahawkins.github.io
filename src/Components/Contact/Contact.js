import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayForm } from '../../actions';
import { setThemeClass } from '../../helpers/helper';

const Contact = ({ theme, displayForm }) => {
  return (
    <div className='Contacts'>
      <a 
        href='https://github.com/julieahawkins' 
        target='_blank' 
        rel='noopener noreferrer'>
        <div className={setThemeClass(theme, 'github')}></div>
      </a>
      <button
        onClick={displayForm}
        className={setThemeClass(theme, 'email')}>
      </button>
      <a 
        href='https://www.linkedin.com/in/julie-hawkins/' 
        target='_blank' 
        rel='noopener noreferrer'>
        <div className={setThemeClass(theme, 'linkedIn')}></div>
      </a>
    </div>
  );
};

const mapStateToProps = ({ theme }) => ({ theme });

const mapDispatchToProps = dispatch => ({
  displayForm: () => dispatch(displayForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

Contact.propTypes = {
  theme: PropTypes.string,
  displayForm: PropTypes.func
};
