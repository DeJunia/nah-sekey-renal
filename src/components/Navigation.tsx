"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { sideLinks as Links } from "@/lib/data";
import { div } from "framer-motion/client";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <div className="h-full overflow-y-scroll px-6 py-1 navigation">
    <motion.p variants={variants} className="text-base font-semibold pt-6.5"><span className="text-primary">AMAROBBY</span> <span className="text-red-500">CLINIC</span></motion.p>
    <motion.ul
    variants={variants}
    className="flex flex-col gap-2 h-full pt-10 justify-between"
  >
    <div className="flex flex-col gap-3"> 
    {Links.map((item, index) => (
     
     <MenuItem items={item} index={index}  key={item.name} />

   ))}
    </div>
    <div>
      <p className="text-sm">© 2025 Nah-Sekey Renal Institute</p>
    </div>
  </motion.ul>
  </div>
 
);
