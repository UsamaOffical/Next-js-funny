import Link from 'next/link'
import React from 'react'

const Funny = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <iframe src="/nani.mp4" className='h-[400px] ' />
      <Link href='/funny-3' className='text-3xl bg-red-600  p-7 rounded-lg '> Don't Click <span className='text-2xl'>❌</span></Link>
      
    </div>
  )
}

export default Funny
