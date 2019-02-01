import React, { Component } from 'react';

class SideNav extends Component {

  render() {
    return (
     <ul id="slide-out" className="sidenav amber lighten-5">
    <li><div className="divider"></div></li>
    <li><a className='waves-effect sidenav-close' href="#tools">Tools</a></li>
    <li><a className='waves-effect' href="#measuring">Measuring</a></li>
    <li><div className="divider"></div></li>
  </ul>
    );
  }

}

export default SideNav;
