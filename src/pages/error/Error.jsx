import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section section-error bg-section' style={{ backgroundImage: `url(../images/background-image.jpg)`}}>
      <div className='center-box'>
        <h1>Error</h1>
        <Link to={'/'}>Back to Home</Link>
      </div>
    </section>
  )
}

export default Error;