import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setThemeClass } from '../../helpers/helper';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      projectIndex: 0
    }

    this.projects = [
      {
        title: 'Stella-Via',
        image: require('../../assets/iOS-view.png'),
        link: 'https://youtu.be/SO0-MmjgApo',
        repo: 'https://github.com/katiescruggs/stella-via'
      },
      {
        title: 'Weathrly',
        image: require('../../assets/welcome-screen.png'),
        link: 'https://jpweathrly.surge.sh',
        repo: 'https://github.com/jessepackwood/weathrly'
      },
      {
        title: 'Meteor Defense',
        image: require('../../assets/meteor-defense-start.png'),
        link: null,
        repo: 'https://github.com/julieahawkins/game-time'
      },
    ];
  }

  handleClick = (event) => {
    const indexChange = event.target.id === 'right' ? 1 : -1;

    let projectIndex = this.state.projectIndex + indexChange;

    if (projectIndex < 0) {
      projectIndex = this.projects.length - 1;
    } else if (projectIndex > 2) {
      projectIndex = 0;
    }

    this.setState({ projectIndex }); 
  }

  render() {
    const { theme, location } = this.props;

    const project = this.projects[this.state.projectIndex];

    return (
      <div className={setThemeClass(theme, 'App')}>

        <Nav 
          navBar={true} 
          pageName={location.pathname}
        />

        <section className={setThemeClass(theme, 'Projects')}>

          <button 
            onClick={this.handleClick}
            id='left'>
          </button>

          <div className='project-view'>
            <div className='project-links'>
              <a
                className={setThemeClass(theme, 'repo-link')}
                href={project.link} 
                target='_blank' 
                rel='noopener noreferrer'>
                visit
              </a>
              <a 
                className={setThemeClass(theme, 'repo-link')}
                href={project.repo} 
                target='_blank' 
                rel='noopener noreferrer'>
                <div className={setThemeClass(theme, 'repo-icon')}></div>
                git-hub repo
              </a>
            </div>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <img 
                src={project.image} 
                alt='project screen shot' 
              />
            </a>
          </div>

          <button 
            onClick={this.handleClick}
            id='right'>
          </button>

        </section>

        <Contact />

        <ThemeToggle />

      </div>
    );
  }
};

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, null)(Projects);

Projects.propTypes = {
  location: PropTypes.object,
  theme: PropTypes.string
};
