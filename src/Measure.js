import React, { Component } from 'react';
import TT from './TT'
import { hub_etf, hub_ete, flange_d, erd_sticks1, erd_measure, erd_nipple } from './photos'

class Measure extends Component {

  render() {
    return (
<div id='measuring' className='section'>
  <h4>Measuring and Obtaining Spokes</h4>
  <div className='row'>
    <p>As stated above, it is often fine to use stated measurements on modern components. Also, many common hubs and rims are pre entered into spoke calculators. Either way, you will need to use the spoke calculators at the bottom of this section with the measurements you have obtained to calculate your needed spoke length(s)</p>
    <details>
      <summary>Taking Hub Measurements</summary>
      <p>The necessary measurements from the hub are <TT ctf /> distance and the <TT fd /> for both sides of the hub. We also need to note how many holes the hub has (total).</p>

      <div className='row'>
        <div className='col s12 l4'>
          <p>To measure center to flange distance, we have to measure the distance from the flange to the nearest end of the hub and subtract this from the overall width of the hub divided by 2. This is because we don't know where the center of the hub is! I like to use a level working surface and a good straightedge as my references when obtaining these measurements. Record measurements for both sides of the hub.</p>
        </div>
        <div className='col s12 l4'>
          <img className='materialboxed responsive-img' src={hub_ete} />
        </div>
        <div className='col s12 l4'>
          <img className='materialboxed responsive-img' src={hub_etf} />
        </div>
      </div>
      <div className='row'>
        <div className='col s12 l6'>
          <p>Flange diameter is the diameter of the circle that passes through the center of the spoke holes in the hub flange. Record measurements for both sides of the hub.</p>
        </div>
        <div className='col s12 l6'>
          <img className='materialboxed responsive-img' src={flange_d} />
        </div>
      </div>
    </details>
    <div className='row'>
    <details>
      <summary>Taking Rim Measurements</summary>
      <p>There are specific tools to accomplish this, but this section will explain how to take this measurement using simpler tools outlined above</p>
            <div className='row'>
      <div className='col s12 l4'>
      <p>Find two spoke holes that are directly opposite each other (on opposite sides of the rim). I like to start with the one of the spoke holes next to the valve and the one directly opposite it near the seam. Insert a spoke in each of these spoke holes, and thread a nipple on to each spoke until the spoke is flush with flats on the back of the nipple.</p>
      </div>
      <div className='col s12 l4'>
      <img className='materialboxed responsive-img' src={erd_sticks1} />
      </div>
      <div className='col s12 l4'>
      <img className='materialboxed responsive-img' src={erd_nipple} />
      </div>
      </div>
      <div className='row'>
      <div className='col s12 l6'>
      <p>Use the calipers to pull the spokes taught. Your ERD measurement is the length of the two spokes plus the measurement you read on the calipers.</p>
      </div>
      <div className='col s12 l6'>
      <img className='materialboxed responsive-img' src={erd_measure} />
      </div>
      </div>

      </details>
      </div>
      <div className='row'>
      <h5>Spoke Calculators</h5>
      <p> We will now use the measurements we have obtained to calculate our spoke length. These measurements are: center to flange and flange diameter (for both sides of hub), ERD, and hole count. For the purposes of this tutorial we will be building a <TT cross3 /> wheel.</p>
      <p>A couple spoke calculators I like:</p>
      <ul>
      <li><a target='_blank' href='https://leonard.io/edd/'>Edd</a> - probably the simplest spoke calculator available, many preprogrammed measurements</li>
      <li><a target='_blank' href='https://spokes-calculator.dtswiss.com/en/'>DT Swiss</a> - a bit more complicated, but extremely accurate. Aimed towards DT components.</li>
      </ul>
      <h5>Buy Spokes</h5>
      <p>Once you have determined your spoke length(s), it's time to buy them! I would recommend 2.0mm straight gauge spokes for your first wheel builds. Spokes conveniently come in boxes of 50 typically, most bike shops will sell the exact quantity you want (call ahead).</p>
      </div>

  </div>
</div>    );
  }

}

export default Measure;
