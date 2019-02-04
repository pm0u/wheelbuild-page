import React, { Component } from 'react';

class TT extends Component {

  render() {
    const tt = this.props
    let text = ''
    let tip = ''
    switch (true) {
      case (tt.erd):
        text = 'ERD'
        tip = 'Effective Rim Diameter - measuremnt of rim used to calculate spoke length'
        break;
      case (tt.tensio):
        text = 'Tensiometer'
        tip = 'A tool used to measure spoke tension by deflecting the spoke'
        break;
      case (tt.dish):
        text = 'Dishing gauge'
        tip = 'A tool used to determine centering of rim relative to the hub.'
        break;
      case (tt.spokewrench):
        text = 'Spoke wrench'
        tip = 'a tool for turning spoke nipples, despite the misleading name'
        break;
      case (tt.tru):
        text = 'Truing stand'
        tip = 'a tool that holds the wheel and has reference gauges to help the truing process'
        break;
      case (tt.nippleset):
        text = 'Nipple setter'
        tip = 'This tool needs to hold the nipple while reaching into the rim to place the nipple and be able to turn the nipple'
        break;
      case (tt.cross3):
        text = '3 cross'
        tip = 'a spoke lacing pattern wher every spoke crosses 3 other spokes between the hub and the rim'
        break;
      case (tt.interlace):
        text = 'interlace'
        tip = 'the inner spoke passes to the outside of a spoke that it crosses (and vice versa)'
        break
      case (tt.ctf):
        text = 'center to flange'
        tip = 'the distance from the center of the hub flange to the center of the hub.'
        break
      case (tt.fd):
        text = 'flange diameter'
        tip = 'the diameter of the circle passing through the center of the spoke holes in the hub flange.'
        break
      case (tt.dished):
        text = 'dish'
        tip = 'the position of the rim relative to the hub, it should be centered.'
        break
    }
    tip = this.props.tip || tip
    text = this.props.text || text

    return ( <
      span className = 'tooltipped'
      data-position = 'top'
      data-tooltip = { tip } > { text } < /span>
    );
  }

}

export default TT;
