import React from 'react'

export default function Result() {
  return (
    <div className='shadow-xl mt-5'>
      <h2 className='text-4xl text-center'>City name</h2>
      <div className='text-2xl flex justify-around my-2'>
        <h2>Max Temp : 40deg</h2>
        <h2>Min Temp : 40deg</h2>
      </div>
      <div className='text-2xl flex justify-around my-2'>
        <h2>Icon</h2>
        <h2>Weather Type</h2>
      </div>
    </div>
  )
}
