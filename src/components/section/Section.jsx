import React from 'react';

const Section = ({ children, superClass }) => {
  return (
    <section className={`section ${superClass || ''}`}>
      <div className='wrapper'>
        <div className='overflow-lock'>
          <div className='overflow-style border'>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section;