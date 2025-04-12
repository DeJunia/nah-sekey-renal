"use client"
import React from 'react'
import Image from 'next/image'
import images from '@/constants/images'
import Link from 'next/link'
import { Links as tabs} from '@/lib/data'
import { usePathname } from 'next/navigation'
import * as motions from 'motion/react-client'

const Header = () => {

  const pathname = usePathname();

  return (
    <div className='w-full fixed z-50 top-0 left-0 p-5 flex items-center justify-center hd'>
      <div className='w-full bg-white/70 px-5 gap-5 flex flex-row rounded-xl justify-between backdrop-blur-md backdrop-brightness-100 backdrop-contrast-100 backdrop-grayscale-0 backdrop-invert-0 backdrop-sepia-0 backdrop-hue-rotate-0 backdrop-saturate-100 backdrop- screen h-12' 
      >
        <div className="logo py-1 flex flex-row items-center justify-center">
          <Image  src={images.logo} className="size-8 rounded-2xl" alt="nahseky renal care logo" />
        </div>
        <div className="midnav min-h-full">
          <ul className='gap-3 flex flex-row h-full'>
            {
              tabs.map((item, _index) => {
                const isActive = pathname === item.href;
                return(
                <Link key={item.name} href={item.href} className='h-full'>
                  <motions.div  
                  className='relative flex flex-col items-center justify-center h-full' 
                  >
                    <motions.div
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? 'white' : 'transparent',
                    }}
                    style={{ height: 'fit-content'}}
                    className={`flex items-center gap-2  rounded-md px-3 py-1
                    ${isActive && 'backdrop-blur-lg backdrop-brightness-100 backdrop-contrast-100 backdrop-grayscale-0 backdrop-invert-0 backdrop-sepia-0 backdrop-hue-rotate-0 backdrop-saturate-100 backdrop-screen bg-white/20'}`}>

                      <item.icon className={`${isActive && 'text-blue-500'}`}/>
                    <p className={`text-sm ${isActive && 'text-blue-500'}`}>{item.name}</p>

                    </motions.div>
                    {
                      isActive && (
                        <motions.div layoutId="underline" className='h-0.5 bg-blue-400 w-full bottom-0 absolute' />
                      )
                    }
                  </motions.div>
                 
                </Link>)
              })
            }
          </ul>
        </div>
        <div className="rest size-10">

        </div>
      </div>  
    </div>
  )
}

export default Header
