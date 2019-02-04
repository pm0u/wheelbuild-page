import React, { Component } from 'react';
import TT from './TT.js'
import { tools_optional, tools_necessary, truing_stand} from './photos'

class Tools extends Component {

  render() {
    return (
      <div id='tools' className='section'>
      <h4>Tools</h4>
      <p>Wheel building requires a fair amount of specific tools. Below I have outlined what I feel is necessary to actually enjoy yourself.</p>
      <div className='row'>
      <div className='col s12 l4'>
      <div className='row'>
      <h5>Necessary Tools</h5>
      <ul>
      <li><TT tru /></li>
      <li><TT tensio /></li>
      <li><TT spokewrench /></li>
      <li><TT nippleset /> - a mulfinger by EVT and ND-1 by Park tools pictured</li>
      <li><TT dish /></li>
      <li>Small block of wood (4"x4"xwhatever)</li>
      </ul>
      <h5>Consumables</h5>
      <p>While these are not strictly necessary, I recommend them</p>
      <ul>
      <li>Spoke prep or grease - to prep spoke threads</li>
      <li>Light chain oil (tri-flow, prolink, etc)</li>
      </ul>
      </div>
      <div className='row'>
      <details>
      <summary>Optional Tools - Measuring hub and <TT erd /></summary>
      With modern components it is often safe to go by manufacturers measurements when calculating spoke length. If this is not available or you would like to take these measurements yourself, here is what you will need. There is a tool designed for this, called ERD sticks. I'm going to assume you don't have those so you need:
      <ul>
      <li>Measuring tape</li>
      <li>2 spokes that are shorter than a quick <TT erd /> measurement of your rim divided by 2 (measure inner diameter of rim with measuring tape)</li>
      <li>2 spoke nipples</li>
      <li>Calipers</li>
      <li>A good straightedge or metal ruler</li>
      </ul></details>
      </div>
      </div>
      <div className='col s12 l4'>
      <div className='row'>
      <img alt='tools' className="materialboxed responsive-img" width="100%" src={tools_necessary} />
      </div><div className='row'>
      <img alt='tools' className="materialboxed responsive-img" width="100%" src={tools_optional} />
      </div>
      </div>
      <div className='col s12 l4'>
      <img alt='tools' className='materialboxed responsive-img' src={truing_stand} />
      </div>
      </div>
      <div className='row'>
      </div>
      </div>
    );
  }

}

export default Tools;
