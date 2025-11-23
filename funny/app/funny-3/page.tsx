import Link from 'next/link'
import React from 'react'

const Funny = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <iframe src="/chala-ja.mp4" className='h-[400px] ' />
      <Link href='/' className='text-3xl bg-red-600  p-7 rounded-lg '> Chala Ja Bhosdk<span className='text-2xl'>❌</span></Link>
    </div>
  )
}

export default Funny
