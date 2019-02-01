import React, { Component } from 'react';
import TT from './TT'
import Check from './Check'

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

      <div className='row'>
      <div className='col s12 l4'>
      Establish key spokes properly, this sets up everything else
Locate two spoke holes closest to centered on hub logo
Count 2, 4, 6, 8.. Put spokes in the hub flange holes labelled 8, opposite directions
These will be on either side of valve hole, put one directly against the valve hole, and other with one empty spoke hole btw it and the valve

      </div>
      <div className='col s12 l4'>
      <img alt='2468 method' className="materialboxed responsive-img" width="100%" src="./photos/key_spokes_hub.JPG" />
      </div>
      <div className='col s12 l4'>
      <img alt='2468 method' className="materialboxed responsive-img" width="100%" src="./photos/key_spokes_rim.JPG" />
      </div>

      </div>

      <div className='row'>
      <div className='col s12 l6'>
      lace all spokes of one direction
      </div>
      <div className='col s12 l6'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_half_leading.JPG" />
      </div>
      </div>

      <div className='row'>
      <div className='col s12 l4'>
      lace all spokes of other direction on same side of hub.
      these spokes will cross 3 other spokes.
      we will need to <TT interlace /> the 3rd
      </div>
      <div className='col s12 l4'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/interlace3.JPG" />
      </div>
      <div className='col s12 l4'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/interlace2.JPG" />
      </div>
      </div>

      <Check />

      </div>
    );
  }

}

export default Lace;
