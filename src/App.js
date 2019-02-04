import React, { Component } from 'react';
import NavBar from './NavBar'
import SideNav from './SideNav'
import Intro from './Intro'
import Measure from './Measure'
import Tools from './Tools'
import TT  from './TT.js'
import Prep from './Prep'
import Lace from './Lace'
import Tension from './Tension'
import Review from './Review'
import About from './About'
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
        <div className='container'>
          <h2>The Joy of Wheelbuilding</h2>
          <hr />
        <h3>There are currently <span className='counter'><TT text={this.state.startingVal + this.state.count} tip='(this is completely made up)'/></span> ways to build a bicycle wheel and this is one of them
        </h3>
        <hr />
        <Intro />
        <hr />
        <Tools />
        <hr />
        <Measure />
        <hr />
        <Prep />
        <hr />
        <Lace />
        <hr />
        <Tension />
        <hr />
        <Review />
        <hr />
        <About />
        </div>
      </div>
    );
  }
}

export default App;

// from melissa:
// fix explanations for Lacing
// proofread
// cut down big blocks of text -- tensioning intro
