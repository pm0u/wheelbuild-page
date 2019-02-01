import React, { Component } from 'react';

class Lace extends Component {

  render() {
    return (
      <div id='lacing' className='section'>
      <h4>Lacing</h4>
      <p>This is likely the most complicated and time consuming part of this process, don't be afraid to set things down and come back to them fresh.</p>
      <p>We will need to lay out a few concepts to ensure the next section makes sense:</p>

      <p> Spokes have directionality - this is either trailing or leading. In the picture to the right, if the wheel would be turning clockwise while mounted on a bike and moving forward, the trailing spokes are red and leading are blue</p>

      <p> Spokes can also have orientation - they can leave the hub on the outside or the inside of the hub flange</p>

      <p>The installation procedure for a spoke is as follows: thread spoke through hole in hub flange, insert nipple into rim in the appropriate spoke hole (where spoke should lead to), and thread nipple onto spoke a few turns (leave threads showing)</p>

      </div>
    );
  }

}

export default Lace;
