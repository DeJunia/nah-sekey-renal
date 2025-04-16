"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

const colors = ["#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5"];

export const MenuItem = ({
  items,
  index,
}: {
  items: any;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const style = { background: colors[index % colors.length] };

  const isActive = pathname === items.href || 
    (items.subLinks && items.subLinks.some((sub: any) => pathname === sub.href));

  const getDisplayName = () => {
    if (!items.subLinks) return items.name;
    const activeSublink = items.subLinks.find((sub: any) => pathname === sub.href);
    return activeSublink ? activeSublink.name : items.name;
  };

  const handleItemClick = (e: React.MouseEvent) => {
    if (!items.subLinks) {
      // If no sublinks, navigate to the link
      router.push(items.href);
    } else {
      // If has sublinks, toggle expansion
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.li
      variants={{
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
      }}
      className="rounded-md cursor-pointer"
    >
      <div className="relative">
        {/* Main menu item - now uses a button for better semantics */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-1 py-2 w-full px-2 relative ${
            isExpanded ? 'rounded-t-xl bg-gray-100' : 'rounded-xl' 
          } ${isActive ? 'bg-gray-100' : ''}`}
          onClick={handleItemClick}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            {React.createElement(items.icon)}
          </div>
          <div className="h-10 flex items-center justify-start pl-1 flex-1 font-semibold text-left">
            <p>{getDisplayName()}</p>
          </div>
          {items.subLinks && (
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs"
            >
              <items.more style={{ marginRight: "10px" }}/>
            </motion.span>
          )}
          {isActive && (
            <motion.div 
              layoutId="move" 
              className="w-1 h-6 rounded-2xl absolute left-1"
              style={style}
            />
          )}
        </motion.button>

        {/* Sublinks dropdown */}
        {items.subLinks && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: "auto", 
                  opacity: 1,
                  transition: { 
                    height: { duration: 0.2 },
                    opacity: { duration: 0.1, delay: 0.1 }
                  }
                }}
                exit={{ 
                  height: 0, 
                  opacity: 0,
                  transition: { 
                    height: { duration: 0.2 },
                    opacity: { duration: 0.1 }
                  }
                }}
                className="overflow-hidden p-2 bg-gray-100 rounded-b-xl"
              >
                <ul className="space-y-1 ">
                  {items.subLinks.map((subLink: any, subIndex: number) => {
                    const isSubLinkActive = pathname === subLink.href;
                    return (
                      <motion.li
                        key={subLink.name}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ 
                          x: 0, 
                          opacity: 1,
                          transition: { delay: 0.1 + subIndex * 0.05 }
                        }}
                      >
                        <Link
                          href={subLink.href}
                          className={`relative flex flex-row px-3 py-2 text-sm rounded-lg ${
                            isSubLinkActive 
                              ? ' text-primary font-medium' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <p className="ml-4">{subLink.name}</p>
                          {isSubLinkActive && (
                            <motion.div
                              layoutId="sublink-indicator"
                              className="absolute left-1 top-2.5"
                            >
                              <FaAngleRight className="size-3"/>
                            </motion.div>
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.li>
  );
};