import React from 'react'
import Image from 'next/image'
import { images } from '@/constants'

const LogoItem = () => {
  return (
    <div className='fixed z-10 top-0 left-0 logoItem p-2 py-3 '>
      <div className='flex flex-row items-center gap-2'>
        <Image src={images.logo} alt="logo" width={50} height={50}/>
        <p className='text-2xl font-bold'><span className='text-blue-500'>NR</span><span className='text-red-500'>.S</span></p>
      </div>
    </div>
  )
}

export default LogoItem
