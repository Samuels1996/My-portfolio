import React from 'react';
import Resumeimg from '../../images/myResume.png';

export default function Resume() {
  return (
    <div className='about'>
      <h1>My Resume</h1>
      <hr></hr>
      <p >
        Below you will find my resume attached. 
      </p>
      <img src={Resumeimg} alt='This is a photo of my resume' className='center' />
    </div>
  );
}
