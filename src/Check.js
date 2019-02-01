import React, { Component } from 'react';

class Check extends Component {

  render() {
    return (
      <div className='row'>
      <div className='divider'></div>
      <details>
      <summary><i className='material-icons warning'>warning</i> Check!</summary>
      {this.props.children}
      </details>
      <div className='divider'></div>
      </div>
    );
  }

}

export default Check;
