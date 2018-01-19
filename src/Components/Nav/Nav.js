import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setThemeClass } from '../../helpers/helper';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: null
    };
  }

  componentDidMount() {
    const { navBar } = this.props;
    if (navBar) {
      this.handleMoth();
    }
  }

  setAngle = (angleLeft) => {
    const angle = angleLeft ? 'left' : 'right';

    this.setState({ angle });
  }

  handleHover = (event) => {
    const angleLeft = (event.target.id === 'toProjects');

    this.setAngle(angleLeft);
  }

  handleMoth = () => {
    const angleLeft = (this.props.pageName === '/projects');

    this.setAngle(angleLeft);
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
    const { theme, navBar } = this.props;

    const navClass = this.addNavBarClass('Nav');
    const navLinkClass = this.addNavBarClass('nav-link');

    const mothClass = this.addNavBarClass(angle);
    const mothStyle = theme === 'light' 
      ? require('../../assets/moth.png')
      : require('../../assets/moth-glow.png');

    const mothLink = 
      <NavLink 
        exact to='/'
        className={setThemeClass(theme, 'home-link')}>
        <img 
          id='Moth' 
          alt='moth'
          src={mothStyle}
          className={mothClass} 
        />
        <span> HOME </span>
      </NavLink>;

    const bigMoth = 
      <img 
        id='Moth' 
        alt='moth'
        src={mothStyle}
        className={mothClass} />;
    
    const moth = navBar ? mothLink : bigMoth;

    return (
      <nav className={setThemeClass(theme, navClass)}>
        <NavLink
          to='/projects' 
          id='toProjects' 
          onMouseOut={this.handleBlur}
          onMouseOver={this.handleHover}
          className={setThemeClass(theme, navLinkClass)}>
          Projects
        </NavLink>
        {moth}
        <NavLink
          to='/resume' 
          id='toResume' 
          onMouseOut={this.handleBlur}
          onMouseOver={this.handleHover}
          className={setThemeClass(theme, navLinkClass)}>
          Resume
        </NavLink>
      </nav>
    );
  }
}

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, null)(Nav);

Nav.propTypes = {
  navBar: PropTypes.bool,
  theme: PropTypes.string,
  pageName: PropTypes.string
};

