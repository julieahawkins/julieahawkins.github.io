import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTheme } from '../../actions';

class ThemeToggle extends Component {
  componentDidMount() {
    if (this.props.theme === 'dark') {
      this.checkbox.checked = true;
    }
  }

  setTheme = (event) => {
    const theme = !event.target.checked ? 'light' : 'dark';

    this.props.toggleTheme(theme);
  }

  render() {
    const { theme } = this.props;

    return (
      <div className='ThemeToggle'>
        <span 
          id='toggle' 
          className={theme}>
          <input
            ref={input => this.checkbox = input} 
            type='checkbox' 
            onChange={this.setTheme}
          />
          <label 
            data-on='dark' 
            data-off='light'>
          </label>
        </span>
      </div>    
    );
  }
}

const mapStateToProps = ({ theme }) => ({ theme });

const mapDispatchToProps = dispatch => ({
  toggleTheme: (theme) => dispatch(toggleTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);

ThemeToggle.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
};
