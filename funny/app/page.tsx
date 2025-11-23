import Link from 'next/link'
import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black flex items-center justify-center'>
      <Link href='/funny' className='text-3xl bg-red-600  p-7 rounded-lg '> Don't Click <span className='text-2xl'>❌</span></Link>
    </div>
  )
}

export default App
