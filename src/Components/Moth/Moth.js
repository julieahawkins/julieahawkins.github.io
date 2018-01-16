import React, { Component } from 'react';

class Moth extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  

  render() {
    const mothStyle = this.props.theme === 'light' 
      ? require('../../assets/moth.png')
      : require('../../assets/moth-glow.png')

    return (
      <img 
        src={mothStyle}
        alt='moth'
        className={this.props.angle} 
        id='Moth' 
      />
    )
  }
};

export default Moth;
