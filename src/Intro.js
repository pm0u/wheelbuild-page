import React, { Component } from 'react';
import TT from './TT'

class Intro extends Component {

  render() {
    return (
      <div id='intro' className='section'>
      <p>There are many right ways to build a bicycle wheel, and only a few truly wrong ones. In this guide, I would like to
      share my preferred method that I have developed. It is by no means exhaustive or the only way to accomplish a well-built wheel. If you desire more extensive
      explanations, there are additional links found at the bottom of this guide.</p>
    <p>In this guide you will see important terms <TT text='underlined.' tip='you found it!' /> If you hover over them, there will be additional info.
      Occasionally, additional or optional information will be contained in a dropdown.</p>
      <p>Grab your relaxing beverage of choice and remember to have fun through the challenge.</p>
      <p>To begin this guide, it is assumed that you understand how to use the tools involved and are familiar with the parts of a bicycle wheel (decent guides <a href='https://cyclingquestions.com/parts-of-a-bicycle-wheel-diagram-simple-explanation-faq/'>here</a> and <a href='https://en.wikipedia.org/wiki/Bicycle_wheel'>here</a>). It is also assumed that you have a hub and a rim with the same number of spoke holes.</p>
      </div>
    );
  }

}

export default Intro;
