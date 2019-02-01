import React, { Component } from 'react';
import TT from './TT'

class Prep extends Component {

  render() {
    return (
      <div className='section'>
      <h4>Prepare Your Workspace</h4>
      <div className='row'>
      <div className='col s12 l6'>
      <p>If you're thinking this seems trivial, give it a chance.</p>
      <p>I think preparing your workspace sets you up for the best experience and eliminates countless headaches and snags that will slow the process and ultimately waste your mental energy.</p>
      <p>The basic idea is to get all of these items within reach and make sure that they cannot be <TT text='mixed together, knocked over, or spilled.' tip='seriously. do not underestimate how horribly frustrating this can be' /> I would argue these issues contribute to at least half of common frustrations with wheelbuilding. There is nothing worse than mixing all your spokes together so that it's impossible to tell which ones are for which side, or spilling your spoke nipples across the garage floor and losing 1 of them.</p>

      <p>Set out in your work area:</p>
      <ul>
      <li>Spokes, separate them in a way that they can't be spilled or mixed together. Or, I build one side of the wheel at a time, so only bring along spokes for one side, grab the rest later.</li>
      <li>Spoke nipples in a container that can't be knocked over</li>
      <li>Nipple setter</li>
      <li>Hub</li>
      <li>Rim</li>
      </ul>
      </div>
      <div className='col s12 l6'>

      <img alt='workspace' className="materialboxed responsive-img" width="100%" src="./photos/workspace_prep.JPG" />
      </div>
      </div>

      </div>
    );
  }

}

export default Prep;
