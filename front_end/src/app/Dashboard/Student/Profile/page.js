"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

export const page = () => {
 
  const route = useRouter();

  return (
    <>
    <button className='btn btn-outline-primary ' onClick={()=>{
      route.push("Fee")
    }} >Just do it</button>
    </>
  )
}

export default page;