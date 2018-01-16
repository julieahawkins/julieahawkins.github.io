import React from 'react';
import Moth from '../Moth/Moth';

const Nav = ({ angle, theme, handleHover, handleBlur }) => {
  const dark = theme === 'dark' 
      ? 'dark'
      : null;
      
  return (
    <div className={`Nav ${dark}`}>
      <span 
        onMouseOver={handleHover}
        onMouseOut={handleBlur}
        id='toProjects' 
        className={`nav-link ${dark}`}>
        Projects
      </span>
      <Moth 
        angle={angle}
        theme={theme}
      />
      <span 
        onMouseOver={handleHover}
        onMouseOut={handleBlur}
        id='toResume' 
        className={`nav-link ${dark}`}>
        Resume
      </span>
    </div>
  )
}

export default Nav;