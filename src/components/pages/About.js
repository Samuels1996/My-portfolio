import React from 'react';
import '../../styles/About.css';
// import jung from '../../images/jungFace.png';
import Myself from '../../images/meCoding.png';


export default function About() {
  return (
    <div className='about'>
      <h1>About Me Page</h1>
      <hr />
      <img src={Myself} className='center' />
      <p>
       My name is Brian Samuels. I am a Software Engineer just getting into the industry. In December of 2021 I had decided that I wanted to change my career entirely from being in automotive to going into the tech sector. So far it has been one of the most rewarding experiences I have had. I was able to learn so much in such a short amount of time and it has been so much fun! I have been able to learn how to make some super awesome things and I am excited to see where the rest of this field is able to take me! 
      </p>
      <p>
        I started out working in the food industry where I was able to obtain very useful customer service skills as well as quick thinking. From there I transitioned into the automotive industry where I then gained even more useful customer service, time management, as well as employee management skills. I was also able to become a very fast learner and picking up on skills needed to make sure I can complete the task correctly the first time. 
      </p>
      {/* <img src={jung} /> */}

    </div>
  );
}
