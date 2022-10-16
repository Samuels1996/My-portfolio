import React from 'react';
import Resumeimg from '../../images/myResume.png';
import '../../styles/index.css'

export default function Resume() {
  return (
    <div className='about'>
      <h1>My Resume</h1>
      <hr></hr>
      <img src={Resumeimg} alt='This is a photo of my resume' className='center' />
    </div>
  );
}
