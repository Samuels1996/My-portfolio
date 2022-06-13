import React from 'react';
import ThisIsWar from '../../images/this-is-war-img.png';
import Dashboard from '../../images/Dashboard-Daily.png';
import Portfolio from '../../images/Brians-Portfolio.png';
import Mockup from '../../images/mockup.png';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <p>This is War 2</p>
        <a href='https://this-is-war-2.herokuapp.com/'><img src={Mockup} alt='Portfolio img' /></a>
        <a href='https://github.com/Samuels1996/this-is-war-2'>GitHub repository</a>
      </div>
      {/* <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div> */}
    </div>
  );
}
