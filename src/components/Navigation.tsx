"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Links } from "@/lib/data";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul
    variants={variants}
    className="flex flex-col gap-2 h-[100%] pt-20 justify-between"
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
);
