import React from 'react';
import Moth from '../Moth/Moth';

const Nav = ({ angle, handleHover, handleBlur }) => {
  return (
    <div className='Nav'>
      <span 
        onMouseOver={handleHover}
        onMouseOut={handleBlur}
        id='toProjects' 
        className='nav-link'>
        Projects
      </span>
      <Moth angle={angle}/>
      <span 
        onMouseOver={handleHover}
        onMouseOut={handleBlur}
        id='toResume' 
        className='nav-link'>
        Resume
      </span>
    </div>
  )
}

export default Nav;