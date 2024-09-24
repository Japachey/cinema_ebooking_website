import React from 'react';
import GreenCheckmark from '../images/GreenCheckmark.png';

const RegistrationCheckmark = () => {
  return (
    <div style={{ height: '150px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', }}>
            <h1>Registration Confirmation</h1>
            <p>You have successfully registered!</p>
            <p>You can now login to Cinema eBooking.</p>
            <img src={GreenCheckmark} style={{width: '200px'}} alt="Success" />   
        </div>
    </div> 
  );
};

export default RegistrationCheckmark;
