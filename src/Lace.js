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
        <h5>First Side</h5>
      <div className='col s12 l4'>
      Establish key spokes properly, this sets up everything else
Locate two spoke holes closest to centered on hub logo
Count 2, 4, 6, 8.. Put spokes in the hub flange holes labelled 8, opposite directions
These will be on either side of valve hole, put one directly against the valve hole, and other with one empty spoke hole btw it and the valve

      </div>
      <div className='col s12 l8'>
        <div className='row'>
      <div className='col s12 l6'>
      <img alt='2468 method' className="materialboxed responsive-img" width="100%" src="./photos/key_spokes_hub.JPG" />
      </div>
      <div className='col s12 l6'>
      <img alt='2468 method' className="materialboxed responsive-img" width="100%" src="./photos/key_spokes_rim.JPG" />
      </div>
    </div>
      <div className='row'>
        <div className='col s12 l12'>
          <img alt='2468 method' className="materialboxed responsive-img" width="100%" src="./photos/key_spokes.JPG" />
      </div>
    </div>
      </div>

      </div>
      <Check>There should be two spokes in the hub, with 8 spokeholes between them. They should be opposite in orientation. At the rim, one should be installed in the spoke hole next to the rim and the other should have one empty spoke hole between it and the rim</Check>

      <div className='row'>
      <div className='col s12 l6'>
      lace all spokes of one direction
      </div>
      <div className='col s12 l6'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_half_leading.JPG" />
      </div>
      </div>

      <Check>All spokes of same direction should leave hub in the same orientation, with one spoke hole inbetween. At the rim, there should be 3 spoke holes between spokes of the same direction.</Check>


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
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_half_all.JPG" />
      </div>
      </div>

      <Check>Trace each outer spoke with your finger, ensure that it crosses 3 spokes and is <TT interlace text='interlaced' /> with the third. Trace it all the way to the rim, there should be an empty spoke hole on either side. The nearest spoke on both sides should be of the opposite direction</Check>

      <div className='row'>
        <h5>Second Side</h5>
        <div className='col s12 l4'>
          Once again, getting first spoke right is most important part
          Spoke holes will be shifted slightly
Start with inner spokes
Find spoke that has an empty hole btw it and valve on rim, poke thru spoke holes in hub to find one that is offset towards that hole. That’s the spoke that should go to there!
Install this spoke
Valve should be framed as pictured.
Use it as a guide for all other spokes on this side

        </div>
        <div className='col s12 l4'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_start_other_side.JPG" />
        </div>
        <div className='col s12 l4'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_other_side_valve_framed.JPG" />
        </div>
      </div>
      <div className='row'>
        <div className='col s12 l4'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_wangle_spoke.JPG" />
        </div>
        <div className='col s12 l4'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_first_spoke_other_side.JPG" />
        </div>
        <div className='col s12 l4'>
        </div>
      </div>
      <Check>One spoke should be installed on the second side. It should leave the hub on the inside, and enter rim directly next to valve.</Check>
      <div className='row'>
        <div className='col s12 l6'>
          install remaining spokes of same direction.
        </div>
        <div className='col s12 l6'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_leading_other_side.JPG" />
        </div>
      </div>
      <Check>At hub, there should be an empty spoke hole next to each installed spoke and they all leave the hub on the inside. At the rim, there are 3 spoke holes between each of these spokes (2 with spokes in them, 1 empty)</Check>

      <div className='row'>
        <div className='col s12 l6'>
          install last set of spokes - outside
          need to cross 3 spokes, interlace
        </div>
        <div className='col s12 l6'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src="./photos/lace_all_spokes.JPG" />
        </div>
      </div>

      <Check>The final check -- trace every outside spoke on both sides. At the hub, it should have an inner spoke on either side of it. Trace it with your finger, it should cross 3 spokes on its way to the rim and interlace the last one.</Check>

    <p>If you've been following along and your wheel has passed every check... then congratulations! Your wheel is laced properly.</p>
      </div>
    );
  }

}

export default Lace;
