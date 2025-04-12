"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggler";
import { Navigation } from "./Navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderFullSidebar, setShouldRenderFullSidebar] = useState(false);

  const SIDEBAR_WIDTH = 300;

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at ${SIDEBAR_WIDTH - 40}px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(30px at ${SIDEBAR_WIDTH - 40}px 40px)`,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const toggleSidebar = () => {
    if (!isOpen) {
      setShouldRenderFullSidebar(true);
      setIsOpen(true);
    } else {
      setIsOpen(false); // triggers animation
    }
  };

  const handleAnimationComplete = () => {
    if (!isOpen) {
      setShouldRenderFullSidebar(false);
    }
  };

  return (
    <div
      style={{
        width: shouldRenderFullSidebar ? "300px" : "6rem",
        height: shouldRenderFullSidebar ? "100vh" : "6rem",
        transition: "width 0.3s ease, height 0.3s ease",
      }}
      className="fixed top-0 right-0 z-50 overflow-hidden bg-transparent sidebar"
    >
      <MenuToggle toggle={toggleSidebar} isOpen={isOpen} />

      <motion.div
        variants={sidebar}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onAnimationComplete={handleAnimationComplete}
        className="absolute top-0 right-0 bottom-0 w-[300px] bg-white p-6"
      >
        <Navigation />
      </motion.div>
    </div>
  );
};

export default Sidebar;
