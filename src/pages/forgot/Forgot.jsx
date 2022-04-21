import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <section className='section section-forgot bg-section' style={{ backgroundImage: `url(../images/background-image.jpg)`}}>
      <div className='center-box'>
        <h1>Forgot</h1>
        <Link to={'/'}>Back to Home</Link>        
      </div>
    </section>
  )
}

export default Forgot;