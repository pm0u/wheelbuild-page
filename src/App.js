import React, { Component } from 'react';
import NavBar from './NavBar'
import SideNav from './SideNav'
import Intro from './Intro'
import Measure from './Measure'
import Tools from './Tools'
import TT  from './TT.js'
import Prep from './Prep'
import Lace from './Lace'
import './App.css'

class App extends Component {

  state = {
    count: 0
  }

  startCounter = () => {
    this.setState(() => ({
      timer: setInterval(() => this.setState(prevState => ({ count: prevState.count + Math.floor(Math.random() * 4000) })), 1000)}))
  }

  componentDidMount = () => {
    this.startCounter()
    this.setState(() => {
      return {startingVal: Math.floor(Math.random() * 100000) + 1000000}
    })
  }

  render() {
    return (
      <div>
        <SideNav />
        <NavBar />
        <div className='container'>
        <h3>There are currently <span className='counter'><TT text={this.state.startingVal + this.state.count} tip='(this is completely made up)'/></span> ways to build a bicycle wheel and this is one of them
        </h3>
        <div className='divider'></div>
        <Intro />
        <div className='divider'></div>
        <Tools />
        <div className='divider'></div>
        <Measure />
        <div className='divider'></div>
        <Prep />
        <div className='divider'></div>
        <Lace />
        </div>
      </div>
    );
  }
}

export default App;
