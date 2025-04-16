"use client"
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const HeaderBg = () => {
  const { scrollY } = useScroll();
  
  // Animate background color from transparent to white
  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );
  
  // Animate backdrop blur and opacity
  const backdropFilter = useTransform(
    scrollY,
    [0, 500],
    [
      "blur(0px) brightness(100%) contrast(100%)", 
      "blur(12px) brightness(100%) contrast(100%)"
    ]
  );
  
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 500],
    [0, 0.9]
  );

  return (
    <motion.div
      style={{
        backgroundColor,
        backdropFilter,
        opacity: backgroundOpacity
      }}
      className="w-full fixed z-8 top-0 left-0 h-20 smHeader"
    />
  );
}

export default HeaderBg;