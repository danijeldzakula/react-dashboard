import React from 'react'

const LoadingMessage = ({ massage }) => {
  return (
    <div className='massage'>
      <h2 className='text-center pt-8'>{massage}</h2>
    </div>
  )
}

export default LoadingMessage