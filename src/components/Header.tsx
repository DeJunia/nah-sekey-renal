'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import images from '@/constants/images'
import Link from 'next/link'
import { Links as tabs } from '@/lib/data'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Check if a link or any of its sublinks is active
  const isLinkActive = (link: typeof tabs[0]) => {
    if (pathname === link.href) return true;
    if (link.subLinks) {
      return link.subLinks.some(subLink => pathname === subLink.href);
    }
    return false;
  };

  // Get the active sublink name if any
  const getActiveSublinkName = (link: typeof tabs[0]) => {
    if (!link.subLinks) return link.name;
    const activeSublink = link.subLinks.find(subLink => pathname === subLink.href);
    return activeSublink ? activeSublink.name : link.name;
  };

  return (
    <div className='w-full fixed z-50 top-0 left-0 p-5 flex items-center justify-center hd'>
      <div className='w-full bg-white/70 px-2 gap-5 flex flex-row rounded-2xl justify-between backdrop-blur-md backdrop-brightness-100 backdrop-contrast-100 backdrop-grayscale-0 backdrop-invert-0 backdrop-sepia-0 backdrop-hue-rotate-0 backdrop-saturate-100 backdrop- screen h-14'>
        <div className="logo py-1 flex flex-row items-center justify-center">
          <Image src={images.logo} className="size-8 rounded-2xl" alt="nahseky renal care logo" />
        </div>
        <div className="midnav min-h-full">
          <ul className='gap-3 flex flex-row h-full'>
            {tabs.map((item) => {
              const isActive = isLinkActive(item);
              const displayName = getActiveSublinkName(item);

              return (
                <li 
                  key={item.name}
                  className='h-full relative'
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <Link href={item.href} className='h-full'>
                    <motion.div  
                      className='relative flex flex-col items-center justify-center h-full' 
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          backgroundColor: isActive ? 'white' : 'transparent',
                        }}
                        style={{ height: 'fit-content' }}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                          isActive && 'backdrop-blur-lg bg-white/20'
                        }`}
                      >
                        <item.icon className={`${isActive && 'text-primary'}`}/>
                        <p className={`text-sm font-semibold ${isActive && 'text-primary'}`}>
                          {displayName}
                        </p>
                        {item.more && <item.more className={`size-3 ${isActive && 'text-primary'}`}/>}
                      </motion.div>
                      {isActive && (
                        <motion.div 
                          layoutId="underline" 
                          className='h-0.5 bg-primary w-full bottom-0 absolute' 
                        />
                      )}
                    </motion.div>
                  </Link>

                  {/* Sublinks dropdown */}
                  {item.subLinks && (
                    <AnimatePresence>
                      {hoveredTab === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50"
                        >
                          <ul className="py-1">
                            {item.subLinks.map((subLink) => {
                              const isSubLinkActive = pathname === subLink.href;
                              return (
                                <li key={subLink.name}>
                                  <Link
                                    href={subLink.href}
                                    className={`block px-4 py-2 text-sm ${
                                      isSubLinkActive 
                                        ? 'bg-blue-50 text-primary' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                  >
                                    {subLink.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rest flex items-center justify-center">
          <button className='bg-blue-200 py-2 px-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out'>
            Book Appointment
          </button>
        </div>
      </div>  
    </div>
  );
}

export default Header;

// {w-full bg-white/70 px-5 gap-5 flex flex-row rounded-xl justify-between backdrop-blur-md backdrop-brightness-100 backdrop-contrast-100 backdrop-grayscale-0 backdrop-invert-0 backdrop-sepia-0 backdrop-hue-rotate-0 backdrop-saturate-100 backdrop- screen h-12'} 