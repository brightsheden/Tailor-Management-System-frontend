'use client';

import {  Spinner } from 'flowbite-react';

export default function Loader() {
  return (
    <div className='flex justify-center '>
   
    
        <Spinner aria-label="Center-aligned  spinner button example" />
        <span className="pl-3">
          Loading...
        </span>
   
    </div>
  )
}


