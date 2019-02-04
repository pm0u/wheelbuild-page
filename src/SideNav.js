import React, { Component } from 'react';

class SideNav extends Component {

  render() {
    return (
     <ul id="slide-out" className="sidenav brown lighten-5">
       <li><a className='waves-effect' href="#intro">Intro</a></li>
    <li><div className="divider"></div></li>
    <li><a className='waves-effect sidenav-close' href="#tools">Tools</a></li>
    <li><a className='waves-effect' href="#measuring">Measuring</a></li>
    <li><a className='waves-effect' href="#prep">Prepare Your Workspace</a></li>
    <li><a className='waves-effect' href="#lace">Lacing</a></li>
    <li><a className='waves-effect' href="#tension">Tensioning</a></li>
    <li><a className='waves-effect' href="#review">Review</a></li>
    <li><div className="divider"></div></li>
    <li><a className='waves-effect' href="#about">About</a></li>
  </ul>
    );
  }

}

export default SideNav;
