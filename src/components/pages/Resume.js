import React from 'react';
import Resumeimg from '../../images/brian-resume.png';
import '../../styles/index.css'

export default function Resume() {
  return (
    <div className='about'>
      <h1>My Resume</h1>
      <hr></hr>
      <img src={Resumeimg} alt='This is my resume' className='center' />
    </div>
  );
}
