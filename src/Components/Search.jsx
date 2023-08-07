import React from 'react'

export default function Search() {
  return (
    <div className='flex shadow-xl'>
    <input type="search" className='border border-black w-full p-3 text-2xl'/>
    <button className='p-3 bg-slate-600 text-white'>Search</button>
    </div>
  )
}
