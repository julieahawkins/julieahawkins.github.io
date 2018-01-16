import React, { Component } from 'react';
import { setThemeClass } from '../../helpers/helper';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
  
class Home extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
    };
  }

  toggleTheme = (e) => {
    const theme = !e.target.checked ? 'light' : 'dark';
    this.setState({ theme });
  }

  render() {
    const { theme } = this.state;

    return (
      <div className={setThemeClass(theme, 'App')}>
        <Nav 
          theme={theme} 
          pageName={this.props.location.pathname} />

        <h1 className={theme}>Julie Hawkins</h1>
        <span className={setThemeClass(theme, 'sub-title')}>Software Developer</span>

        <Contact theme={theme} />

        <div className='toggle-wrapper'>
          <span id='toggle' className={theme}>
            <input type='checkbox' onChange={this.toggleTheme}/>
            <label data-on='dark' data-off='light'></label>
          </span>
        </div>

      </div>
    );
  }
}

export default Home;
