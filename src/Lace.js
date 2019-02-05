import React, { Component } from 'react';
import TT from './TT'
import Check from './Check'
import { key_spokes, key_spokes_hub, key_spokes_rim, lace_half_all, lace_half_leading, interlace1, lace_all_spokes, lace_start_other_side, lace_wangle_spoke, lace_first_spoke_other_side, lace_leading_other_side, lace_other_side_valve_framed, lace_trailing, lace_leading } from './photos'

class Lace extends Component {

  render() {
      return (
<div id='lace' className='section'>
  <h4>Lacing</h4>
  <div className='row'>
  <div className='col s12 l6'>
  <p>This is likely the most complicated and time consuming part of this process, don't be afraid to set things down and come back to them fresh.</p>
  <p>We will need to lay out a few concepts to ensure the next section makes sense:</p>

  <p> Spokes have directionality - this is either trailing or leading. In the picture to the right, if the wheel would be turning clockwise while mounted on a bike and moving forward, the trailing spokes are red and leading are blue</p>

  <p> Spokes can also have orientation - they can leave the hub on the outside or the inside of the hub flange</p>

  <p>The installation procedure for a spoke is as follows: insert spoke through hole in hub flange, insert nipple into rim in the appropriate spoke hole (where spoke should lead to), and thread nipple onto spoke a few turns (leave threads showing)</p>
  </div>
  <div className='col s12 l6'>
    <div className='col s12 l6'>
          <img alt='leading' className="materialboxed responsive-img" width="100%" src={lace_leading} />
    </div>
    <div className='col s12 l6'>
          <img alt='trailing' className="materialboxed responsive-img" width="100%" src={lace_trailing} />
    </div>
  </div>

</div>

  <div className='row'>
    <div className='divider'></div>
    <h5>First Side</h5>
    <div className='col s12 l4'>
      <p>The first two spokes we will install are called key spokes, they set up the entire rest of the wheel, so ensure they are correct! Find the two spoke holes most centered over the logo of the hub. Count spoke holes in pairs moving outward, up to 8 (4 pairs). The spoke holes that you are now pointing at are where your key spokes go. When installed in the rim, these will be on either side of the valve hole. One of them will have an empty spoke hole between it and the valve hole. Install the spokes in opposite directions and orientations.</p>
    </div>
    <div className='col s12 l8'>
      <div className='row'>
        <div className='col s12 l6'>
          <img alt='2468 method' className="materialboxed responsive-img" width="100%" src={key_spokes_hub} />
        </div>
        <div className='col s12 l6'>
          <img alt='2468 method' className="materialboxed responsive-img" width="100%" src={key_spokes_rim} />
        </div>
      </div>
      <div className='row'>
        <div className='col s12 l12'>
          <img alt='2468 method' className="materialboxed responsive-img" width="100%" src={key_spokes} />
        </div>
      </div>
    </div>

  </div>
  <Check>There should be two spokes in the hub, with 6 spoke holes between them. They should be opposite in orientation. At the rim, one should be installed in the spoke hole next to the valve hole and the other should have one empty spoke hole between it and the valve hole.</Check>

  <div className='row'>
    <div className='col s12 l6'>
      <p>Now install all spokes of one direction. These will all exit the hub on the same side as the first one you installed of that direction and there will be 3 spoke holes between each of these spokes.</p>
    </div>
    <div className='col s12 l6'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={lace_half_leading} />
    </div>
  </div>

  <Check>All spokes of same direction should leave hub in the same orientation, with one spoke hole in between. At the rim, there should be 3 spoke holes between spokes of the same direction.</Check>


  <div className='row'>
    <div className='col s12 l4'>
      <p>Now lace all spokes of the other direction for this same side of the hub. Again, these spokes should all leave the hub on the same side as the first spoke that you installed of this direction.  Use the key spoke as a guide -- the spokes next to it at the hub should be 3 spoke holes away at the rim, continue the pattern from there. These spokes will cross 3 other spokes of the same direction on their way to the rim, and it will need to <TT interlace /> the third spoke it crosses (see photo to right).</p>
    </div>
    <div className='col s12 l4'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={interlace1} />
    </div>
    <div className='col s12 l4'>
      <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={lace_half_all} />
    </div>
  </div>

  <Check>Trace each outer spoke with your finger, ensure that it crosses 3 spokes and is <TT interlace text='interlaced' /> with the third. Trace it all the way to the rim, there should be an empty spoke hole on either side. The nearest spoke on
    both sides should be of the opposite direction.</Check>

  <div className='row'>
    <h5>Second Side</h5>
    <div className='col s12 l4'>
      <p>Once again, getting the first spoke correct is the most important part. The spoke holes on this side of the hub will be shifted slightly relative to the other side. Start with inner spokes, and find the spoke from the other side that has a hole between it and the valve. Poke a spoke through the spoke holes in the hub that are closest to it to find the hole that is closest and offset towards the empty spoke hole next to the valve hole. Install the spoke, it will be a bit trickier to get it through... I like to thread it through the spokes on the opposite side as shown in the third photo. The valve hole should be framed as shown in the second photo when the spoke is installed correctly.</p>
    </div>
    <div className='col s12 l8'>
      <div className='row'>
        <div className='col s12 l6'>
          <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={lace_start_other_side} />
        </div>
        <div className='col s12 l6'>
          <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={lace_other_side_valve_framed} />
        </div>
      </div>
      <div className='row'>
        <div className='col s12 l6'>
          <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={lace_wangle_spoke} />
        </div>
        <div className='col s12 l6'>
          <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={lace_first_spoke_other_side} />
        </div>
      </div>
    </div>
  </div>
    <Check>One spoke should be installed on the second side. It should leave the hub on the inside, and enter rim directly next to valve.</Check>
    <div className='row'>
      <div className='col s12 l6'>
        Install all the remaining spokes of this direction, these will all be inside spokes. Wheel should look as pictured when finished.
      </div>
      <div className='col s12 l6'>
        <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={lace_leading_other_side} />
      </div>
    </div>
    <Check>At hub, there should be an empty spoke hole next to each installed spoke and they all leave the hub on the inside. At the rim, there are 3 spoke holes between each of these spokes (2 with spokes in them, 1 empty).</Check>

    <div className='row'>
      <div className='col s12 l6'>
        <p>Install the final set of spokes, these will be tricky as all the other spokes will get in the way... This is why we made sure the outside spokes were last! Same as the other side, these will cross 3 other spokes on the way to the rim and will need to <TT interlace /> the 3rd.</p>
      </div>
      <div className='col s12 l6'>
        <img alt='lace all leading' className="materialboxed responsive-img" width="100%" src={lace_all_spokes} />
      </div>
    </div>

    <Check>The final check -- trace every outside spoke on both sides. At the hub, it should have an inner spoke on either side of it. Trace it with your finger, it should cross 3 spokes on its way to the rim and interlace the last one.</Check>

    <p>If you've been following along and your wheel has passed every check... then congratulations! Your wheel is laced properly.</p>
  </div>
    );
  }

}

export default Lace;
