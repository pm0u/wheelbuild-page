import React, { Component } from 'react';
import { tension_spoke_not_turned, tension_spoke_threads_gone,tension_check,destress,dish_check} from './photos'
import TT from './TT'

class Tension extends Component {

  render() {
    return (
      <div id='tension' className='section'>
      <h4>Tensioning</h4>
      <p>Break out that truing stand, tensiometer, and chain lube. Put the wheel (yes, you can call it a wheel now!) in the truing stand and before beginning anything else, put a piece of tape where valve is to help keep reference. Beginning at the valve, put a small drop of chain lube at the base of every spoke nipple, where it touches the rim. This will help keep nipples easy to turn.</p>

    <p>In this stage we are going to tighten all the spokes so that the wheel is stiff and actually usable. The maximum tension that your wheel should have is determined by the rim, this information is usually available from the manufacturer (sometimes you have to call them). If no information is available, 80-100kgf is a safe range for most components</p>

    <p>This tension will not be the tension of every spoke on the wheel, the spokes on opposite sides are going to have different tension. The hub flange that is closer to the center of the hub is going to have a higher tension. All spokes on the same side of a wheel, regardless of orientation or direction, should have the same tension within a couple units on a park tensiometer.</p>

    <div className='row'>
      <div className='col s12 l4'>
        <p>The goal here is to add tension slowly and evenly. If your spokes are the right length, and you add tension perfectly evenly then in theory you wouldn't have to true the wheel at all in the end! This never happens, but we can come close. Start by going around and turning all the spoke nipples to hide the threads of the spoke. Once that is complete, we want to continue this process, but we don't have the threads for reference so we go by turns of the spoke wrench. Usually one or two go arounds of a whole turn per spoke nipple is possible. Then decrease to 1/2, then 1/4.. I can't give you exact answers here, but check the tension every so often and don't go past 50-60% max tension by this method.
        </p>
      </div>
      <div className='col s12 l4'>
      <img alt='workspace' className="materialboxed responsive-img" width="100%" src={tension_spoke_not_turned} />
      </div>
      <div className='col s12 l4'>
      <img alt='workspace' className="materialboxed responsive-img" width="100%" src={tension_spoke_threads_gone} />
      </div>
    </div>
    <div className='row'>
      <p>We are part way there, about half tensioned. At this point, I suggest being a bit more structured in your approach. I have 5 separate steps that I usually repeat over and over until the wheel is completed. Typically they are in the following order, but use your judgement and jump around if you feel it is best.</p>
    </div>
    <div className='row'>
      <details>
        <summary>Check and Balance Tension</summary>
      <div className='col s12 l6'>
        <p>Go around the whole wheel with the tensiometer and check the tension on every spoke, one side at a time. Find the average for a side, and then tighten or loosen spokes to get all spokes on a side within 1-2 units of that tension. Repeat for the other side. Go back and check the first side. Don't move on until both sides are relatively even. The first time will be the trickiest.</p>
      </div>
      <div className='col s12 l6'>
      <img alt='workspace' className="materialboxed responsive-img" width="100%" src={tension_check} />
      </div>
    </details>
      </div>
    <div className='row'>
      <details>
        <summary>Increase Tension</summary>
      <div className='col s12 l12'>
        <p>Like before, go around the whole wheel and apply 1/4 turn to every spoke. After a few rounds (within 1-3 units of final tension) decrease this to 1/8 of a turn.</p>
      </div>
    </details>
      </div>
    <div className='row'>
      <details>
        <summary>Destress</summary>
      <div className='col s12 l6'>
        <p>Destressing is an extremely important part of wheelbuilding, and a big part of what separates a cheap machine built wheel from a high quality hand built wheel. Destressing stretches all the spokes and helps them settle into their final resting place so that this doesn't happen on the first trip out on the bike</p>
        <p>You still have that block of wood right? Place it on the ground and put one end of the hub on it so the rim is parallel to the ground. Put your hands on the top of the rim across from each other and lightly lean your weight onto the wheel. Repeat in a few different spots, flip the wheel, and do the same to the other side. Hearing pops and creaks is normal!</p>
      </div>
      <div className='col s12 l6'>
      <img alt='workspace' className="materialboxed responsive-img" width="100%" src={destress} />
      </div>
    </details>
      </div>
    <div className='row'>
      <details>
        <summary>Check True</summary>
      <div className='col s12 l4'>
        <p>Truing a wheel is a skill forever practiced and never mastered. It's a bit outside the scope of this tutorial to go deep into how to best true a wheel. Briefly, there are two ways that a wheel can be out of true: Radially and Laterally.</p>
        <h5>Radial Trueness</h5>
        <p>If a wheel is radially out of true, the center of the rim is not concentric with the hub. How to set up the truing stand for this and what a radial hop looks like is shown in the first video. The basic process for correcting this is to tighten a few spokes in the area where the rim is too close to the gauges and loosen a few spokes where it is too far away from the gauges.</p>
        <h5>Lateral Trueness</h5>
        <p>The second video shows a lateral hop and how to arrange the truing stand guides for this type of issue. Similar to a radial hop, if the rim is too far to one side, loosen 1-2 spokes on the side it is closer to and tighten their nearest spokes on the other side to in effect 'pull' the rim into the proper spot.</p>
        <br />
        <p>If you would like more guidance for truing, I would recommend <a href='https://www.parktool.com/blog/repair-help/wheel-and-rim-truing'>Park Tool's explanation.</a></p>
      </div>
      <div className='col s12 l8'>
        <div className='row'>
          <div className='center-align'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Oy6lt2Rx5cM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
        <div className='row'>
          <div className='center-align'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XFTU-pHjtl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </details>
      </div>
    <div className='row'>
      <details>
        <summary>Check <TT dished text='Dish' /></summary>
      <div className='col s12 l6'>
        <p>Check the <TT dished /> of the wheel using the dishing gauge. In the photo shown to the right, the rim is off center towards the side the dishing gauge is on. Pay attention to this, when you come to your increase tension step, try just turning spokes on one side to help pull the rim closer to center rather than turning all the spokes on the wheel. In the case of the wheel shown, for the tension step I would turn all spokes on the bottom side 1/4 turn and then move on to the rest of the steps.</p>
      </div>
      <div className='col s12 l6'>
      <img alt='workspace' className="materialboxed responsive-img" width="100%" src={dish_check} />
      </div>
    </details>
      </div>
      <p>Repeat the steps above until the wheel is true, in dish, and up to tension. Trueness and dish should be within a few millimeters or so, tension even across all spokes for a given side within 1-2 units.</p>
      <p>You are done!!!</p>
    </div>
    );
  }

}

export default Tension;
