import React, { Component } from 'react';
import Nav from './Nav/Nav';

import './styles/lightTheme.css';
// import './styles/darkTheme.css';
  

class App extends Component {
  constructor() {
    super();
    this.state = {
      angle: null,
      theme: 'light',
    };
  }

  handleHover = (e) => {
    const { id } = e.target;
    const angle = id === 'toProjects' ? 'left' : 'right';
    this.setState({ angle });
  }

  handleBlur = () => {
    const angle = null;
    this.setState({ angle });
  }

  toggleTheme = (e) => {
    console.log(e.target.checked);
    const theme = !e.target.checked ? 'light' : 'dark';
    this.setState({ theme });
  }

  render() {
    return (
      <div className='App'>
        <Nav 
          theme={this.state.theme}
          angle={this.state.angle}
          handleBlur={this.handleBlur}
          handleHover={this.handleHover}
        />

        <h1>Julie Hawkins</h1>

        <div className='contact-wrapper'>
          <a 
            href='https://github.com/julieahawkins' 
            target='_blank' 
            rel='noopener noreferrer'>
            <div className='github'></div>
          </a>
          <a 
            href='https://www.linkedin.com/in/julie-hawkins/' 
            target='_blank' 
            rel='noopener noreferrer'>
            <div className='linkedIn'></div>
          </a>
        </div>

        <div className='toggle-wrapper'>
          <span id='toggle'>
            <input type='checkbox' onChange={this.toggleTheme}/>
            <label data-on='dark' data-off='light'></label>
          </span>
        </div>

      </div>
    );
  }
}

export default App;
