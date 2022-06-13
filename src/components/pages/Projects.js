import React from 'react';
import ThisIsWar from '../../images/this-is-war-img.png';
import Dashboard from '../../images/Dashboard-Daily.png';
import Portfolio from '../../images/Brians-Portfolio.png';
import Mockup from '../../images/mockup.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Projects() {
  return (
    <div className='about row m-5'>
      <h1>My Projects</h1>
      <hr></hr>
      <p>
        Below is a list of some of the projects that I have had the pleasure of taking part in:
      </p>

      <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardImage src={ThisIsWar} position='top' alt='This is War img' />
          <MDBCardBody>
            <MDBCardTitle>This is War</MDBCardTitle>
              <MDBCardText>
              This is War was designed by myself as well as few other colleagues to make a fun medieval fighting game!
             </MDBCardText>
            <MDBBtn href='https://github.com/Samuels1996/this-is-war'>GitHub</MDBBtn>
          <MDBBtn href='http://thisiswar.herokuapp.com/'>Deployed Link</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardImage src={Mockup} position='top' alt='This is War 2 img' />
        <MDBCardBody>
            <MDBCardTitle>This is War 2</MDBCardTitle>
              <MDBCardText>
                This is War 2 was designed to be a fun medieval fighting game. This one is the sequel and was built using mostly React!
              </MDBCardText>
            <MDBBtn href='https://github.com/Samuels1996/this-is-war-2'>GitHub</MDBBtn>
          <MDBBtn href='https://this-is-war-2.herokuapp.com/'>Deployed Link</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }}>
    <MDBCardImage src={Dashboard} position='top' alt='Dashboard Daily img' />
    <MDBCardBody>
        <MDBCardTitle>Dashboard Daily</MDBCardTitle>
          <MDBCardText>
            Dashboard Daily is fun place to check in as you get ready to start your day! It will display new news articles and the weather!
          </MDBCardText>
        <MDBBtn href='https://github.com/Samuels1996/Morning-meme-page'>GitHub</MDBBtn>
        <MDBBtn href='https://samuels1996.github.io/Morning-meme-page/'>Deployed Link</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src={Portfolio} position='top' alt='My portfolio img' />
      <MDBCardBody>
        <MDBCardTitle>My Portfolio</MDBCardTitle>
        <MDBCardText>
          This is the link to my Portfolio that was built and designed with react!
        </MDBCardText>
        <MDBBtn href='https://github.com/Samuels1996/My-portfolio'>GitHub</MDBBtn>
        <MDBBtn href='https://samuels1996.github.io/My-portfolio/'>Deployed Link</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}
