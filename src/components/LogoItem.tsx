import React from 'react'
import Image from 'next/image'
import { images } from '@/constants'

const LogoItem = () => {
  return (
    <div className='fixed z-10 top-0 left-0 logoItem p-2 py-4 '>
      <div className='flex flex-row items-center gap-2'>
        <Image src={images.logo} alt="logo" width={50} height={50}/>
        <p className='text-lg font-bold'><span className='text-primary'>AMAROBBY</span><span className='text-red-500 '>CLINIC</span></p>
      </div>
    </div>
  )
}

export default LogoItem
