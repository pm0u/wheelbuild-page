import React, { Component } from 'react';

class TT extends Component {

  render() {
    const tt = this.props
    let text = tt.text || ''
    let tip = tt.tip || ''
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
      case (tt.hub):
        text = 'hub'
        tip = 'hub explanation'
        break
        case (tt.rim):
        text = 'rim'
        tip = 'rim explanation'
    }

    return ( <
      span className = 'tooltipped'
      data-position = 'top'
      data-tooltip = { tip } > { text } < /span>
    );
  }

}

export default TT;
