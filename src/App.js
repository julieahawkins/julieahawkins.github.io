import React, { Component } from 'react';
import Nav from './Nav/Nav';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      angle: null
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
    console.log(e.target.checked)

  }

  render() {
    return (
      <div className='App'>
        <Nav 
          angle={this.state.angle}
          handleBlur={this.handleBlur}
          handleHover={this.handleHover}
        />

        <h1>Julie Hawkins</h1>

        <div className='contact-wrapper'>
          <a 
            href='https://github.com/julieahawkins' 
            target='_blank' 
            rel="noopener noreferrer">
            <div id='github'></div>
          </a>
          <a 
            href='https://www.linkedin.com/in/julie-hawkins/' 
            target='_blank' 
            rel="noopener noreferrer">
            <div id='linkedIn'></div>
          </a>
        </div>

        <div className='toggle-wrapper'>
          <span id='toggle'>
            <input type="checkbox" onChange={this.toggleTheme}/>
            <label data-on="dark" data-off="light"></label>
          </span>
        </div>

      </div>
    );
  }
}

export default App;
