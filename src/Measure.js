import React, { Component } from 'react';
import TT from './TT'

class Measure extends Component {

  render() {
    return (
<div id='measuring' className='section'>
  <h4>Measuring and Obtaining Spokes</h4>
  <div className='row'>
    <p>As stated above, it is often fine to use stated measurements on modern components. Or perhaps you are only missing one of them. Also, many common hubs and rims are pre entered into spoke calculators. Either way, you will need to use the spoke calculators at the bottom of this section with the measurements you
      have obtained to calculate your needed spoke length(s)</p>
    <details>
      <summary>Taking Hub Measurements</summary>
      <p>The necessary measurements we need at center to flange distance and flange diameter for each side of the hub. We also need to make note of how many holes the rim has.</p>

      <div className='row'>
        <div className='col s12 l4'>
          <p>explain how to measure CTF</p>
        </div>
        <div className='col s12 l4'>
          <img className='materialboxed responsive-img' src='./photos/measure_hub_ete.JPG' />
        </div>
        <div className='col s12 l4'>
          <img className='materialboxed responsive-img' src='./photos/measure_hub_etf.JPG' />
        </div>
      </div>
      <div className='row'>
        <div className='col s12 l6'>
          <p>explain measuring flange diameter</p>
        </div>
        <div className='col s12 l6'>
          <img className='materialboxed responsive-img' src='./photos/measure_hub_fd.JPG' />
        </div>
      </div>
    </details>
    <div className='row'>
    <details>
      <summary>Taking Rim Measurements</summary>
      <p>I'm going to assume that if you have ERD sticks, you will know how to use them. This section will explain how to take this measurement using simpler tools outlined above</p>
            <div className='row'>
      <div className='col s12 l4'>
      <p>put nipple in rim, etc</p>
      </div>
      <div className='col s12 l4'>
      <img className='materialboxed responsive-img' src='./photos/erd_sticks_1.JPG' />
      </div>
      <div className='col s12 l4'>
      <img className='materialboxed responsive-img' src='./photos/erd_sticks_nipple2.JPG' />
      </div>
      </div>
      <div className='row'>
      <div className='col s12 l6'>
      <p>explain measuring ERD</p>
      </div>
      <div className='col s12 l6'>
      <img className='materialboxed responsive-img' src='./photos/erd_sticks_measure.JPG' />
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
      <p>Once you have determined your spoke length(s), it's time to buy them! I would recommend 2.0mm straight gauge spokes or 2.0/1.8mm double butted for something a bit nicer. Spokes conveniently come in boxes of 50 typically, most bike shops will sell the exact quantity you want (call ahead).</p>
      </div>

  </div>
</div>    );
  }

}

export default Measure;
