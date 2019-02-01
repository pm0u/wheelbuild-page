import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className='navbar-fixed'>
        <nav style={styles.nav} className='amber lighten-5'>
    <div className="nav-wrapper amber lighten-5">
      <span data-target="slide-out" className="sidenav-trigger left" style={styles.menu}><i className="material-icons" style={styles.icon}>menu</i></span>
      <a style={styles.icon} className="brand-logo">The Joy of Wheelbuilding</a>
    </div>
  </nav>
  </div>
    );
  }

}


const styles = {
  nav: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  menu: {
    cursor: 'pointer'
  },
  icon: {
    color: '#455a64'
  }
}

export default NavBar;
