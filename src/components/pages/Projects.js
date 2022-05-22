import React from 'react';
import ThisIsWar from '../../images/this-is-war-img.png';
import Dashboard from '../../images/Dashboard-Daily.png';
import Portfolio from '../../images/Brians-Portfolio.png'

export default function Projects() {
  return (
    <div className='about'>
      <h1>My Projects</h1>
      <hr></hr>
      <p>
        Below is a list of some of the projects that I have had the pleasure of taking part in:
      </p>
      <div className='portfolio'>
        <p>This is war</p>
        <a href="http://thisiswar.herokuapp.com/"><img src={ThisIsWar} alt='This is war img' /></a>
        <a href="https://github.com/Samuels1996/this-is-war">GitHub repository</a>
        <p>Dashboard Daily</p>
        <a href="https://samuels1996.github.io/Morning-meme-page/"><img src={Dashboard} alt='Dashboard daily img' /></a>
        <a href='https://github.com/Samuels1996/Morning-meme-page'>GitHub repository</a>
        <p>My Portfolio</p>
        <a href='https://github.com/Samuels1996/My-portfolio'><img src={Portfolio} alt='Portfolio img' /></a>
        <a href='https://github.com/Samuels1996/My-portfolio'>GitHub repository</a>
      </div>
    </div>
  );
}
