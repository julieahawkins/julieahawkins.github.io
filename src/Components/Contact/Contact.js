import React from 'react';
import { setThemeClass } from '../../helpers/helper';

const Contact = ({ theme }) => {
  const displayForm = () => {
    console.log('email form would pop up')
    alert('email form would pop up')
  }

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
  )
}

export default Contact;