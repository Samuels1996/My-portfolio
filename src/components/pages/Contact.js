import React from 'react';
import '../../styles/App.css';

const styles = {
  contactInfo: {
    background: '#e8eaf6',
    
  }
}

export default function Contact() {
  return (
    <div className='about'>
      <h1>Contact Page</h1>
      <hr></hr>
      <p style={styles.contactInfo}>
        To contact me please email me at samuels.brian9@gmail.com. 
      </p>
    </div>
  );
}
