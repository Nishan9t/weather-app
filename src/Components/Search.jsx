import React, { useRef } from 'react'

export default function Search(props) {

  const searchInput = useRef();

  return (
    <div className='flex shadow-xl'>
    <input type="search" value={props.searchData} onChange={()=>props.eventHandle(searchInput.current.value)} className='border border-black w-full p-3 text-2xl'ref={searchInput}/>
    <button onClick={props.searchWeather} className='p-3 bg-slate-600 text-white'>Search</button>
    </div>
  )
}
