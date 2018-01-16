import React from 'react';
import Nav from '../Nav/Nav';
import Contact from '../Contact/Contact';

const Resume = ({ location }) => {
  return(
    <div className='App'>
      <Nav 
        theme='light'
        navBar={true} 
        pageName={location.pathname}
      />
      <h1>I will be a resume page!</h1>
      <Contact />
    </div>
  )
};

export default Resume;