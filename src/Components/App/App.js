import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import '../../styles/AppThemes.css';
import Nav from '../Nav/Nav';
  
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

  displayForm = () => {
    console.log('email form would pop up')
    alert('email form would pop up')
  }

  render() {

  /*{ <div className="App">
          <Header />
          <main>
            <Switch>
              <Route path="/projects" component={Projects} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
        </div> }*/

    const dark = this.state.theme === 'light' 
      ? null
      : 'dark';

    return (
      <div className={`App ${dark}`}>
        <Nav 
          theme={this.state.theme}
          angle={this.state.angle}
          handleBlur={this.handleBlur}
          handleHover={this.handleHover}
        />

        <h1 className={dark}>Julie Hawkins</h1>

        <div className='contact-wrapper'>
          <a 
            href='https://github.com/julieahawkins' 
            target='_blank' 
            rel='noopener noreferrer'>
            <div className={`github ${dark}`}></div>
          </a>
          <button
            onClick={this.displayForm} 
            className={`email ${dark}`}>
          </button>
          <a 
            href='https://www.linkedin.com/in/julie-hawkins/' 
            target='_blank' 
            rel='noopener noreferrer'>
            <div className={`linkedIn ${dark}`}></div>
          </a>
        </div>

        <div className='toggle-wrapper'>
          <span id='toggle' className={dark}>
            <input type='checkbox' onChange={this.toggleTheme}/>
            <label data-on='dark' data-off='light'></label>
          </span>
        </div>

      </div>
    );
  }
}

export default App;
