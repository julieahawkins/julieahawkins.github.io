import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setThemeClass } from '../../helpers/helper';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: null,
      navBar: false
    };
  }

  componentDidMount() {
    const { navBar } = this.props;
    if (navBar) {
      this.setState({ navBar });
      this.handleMoth();
    }
  }

  setAngle = (conditional) => {
    const angle = conditional ? 'left' : 'right';

    this.setState({ angle });
  }

  handleHover = (event) => {
    const conditional = (event.target.id === 'toProjects');

    this.setAngle(conditional);
  }

  handleMoth = () => {
    const conditional = (this.props.pageName === '/projects');

    this.setAngle(conditional);
  }

  handleBlur = () => {
    if (this.props.pageName === '/') {
      this.setState({ angle: null });
    } else {
      this.handleMoth();
    }
  }

  addNavBarClass = (className) => {
    const newClass = this.props.navBar
      ? `${className} navBar`
      : `${className}`;

    return newClass;
  }

  render() {
    const { angle } = this.state;
    const { theme } = this.props;

    const navClass = this.addNavBarClass('Nav');
    const navLinkClass = this.addNavBarClass('nav-link');
    const mothClass = this.addNavBarClass(angle);

    const mothStyle = theme === 'light' 
      ? require('../../assets/moth.png')
      : require('../../assets/moth-glow.png');
        
    return (
      <nav className={setThemeClass(theme, navClass)}>
        <NavLink
          to='/projects' 
          onMouseOver={this.handleHover}
          onMouseOut={this.handleBlur}
          id='toProjects' 
          className={setThemeClass(theme, navLinkClass)}>
          Projects
        </NavLink>
        <NavLink exact to='/'>
          <img 
            src={mothStyle}
            alt='moth'
            className={mothClass} 
            id='Moth' />
        </NavLink>
        <NavLink
          to='/resume' 
          onMouseOver={this.handleHover}
          onMouseOut={this.handleBlur}
          id='toResume' 
          className={setThemeClass(theme, navLinkClass)}>
          Resume
        </NavLink>
      </nav>
    );
  }
}

Nav.propTypes = {
  navBar: PropTypes.bool,
  theme: PropTypes.string,
  pageName: PropTypes.string
};

export default Nav;