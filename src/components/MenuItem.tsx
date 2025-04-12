"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motions from "motion/react-client";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5"];

export const MenuItem = ({
  items,
  index,
}: {
  items: any;
  index: number;
}) => {
  const style = { background: ` ${colors[index % colors.length]}` };

  const pathname = usePathname();
  const isActive = pathname === items.href;

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-md cursor-pointer"
    >
      <Link href={items.href} className="flex items-center gap-2 py-2 rounded-xl bg-gray-100 px-2 relative">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
        >
          {React.createElement(items.icon)}
        </div>
        <div
          className="h-10 w-30  flex items-center justify-start pl-2"
        >
          {items.name}
        </div>
        {
          isActive && (
            <motions.div layoutId="move" className="w-1 h-6 rounded-2xl absolute left-1 " style={style}></motions.div>
          )
        }
      </Link>
    </motion.li>
  );
};
