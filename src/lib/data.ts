import { BiHomeAlt2 } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";


export interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  subLinks?: NavItem[];
  more?: React.ComponentType<{ className?: string }>;
}


export const Links: NavItem[] = [
  {
    name: "HOME",
    href: "/",
    icon: BiHomeAlt2,
  },
  {
    name: "OUR COMPANY",
    href: "/about",
    icon: FaBuildingCircleArrowRight,
    more: FaAngleDown,
    subLinks: [
      {
        name: "WHO WE ARE",
        href: "/about",
        icon: FaBuildingCircleArrowRight,
      },
      {
        name: "PARTNERS & TEAM",
        href: "/about/team",
        icon: FaBuildingCircleArrowRight,
      }
    ]
  },
  {
    name: "SERVICES",
    href: "/serve",
    icon: RiCustomerService2Line,
    more: FaAngleDown,
    subLinks: [
      {
        name: "DIALYSIS CARE",
        href: "/serve",
        icon: RiCustomerService2Line,
      },
      {
        name: "CKD CLINIC",
        href: "/serve/treat1",
        icon: RiCustomerService2Line,
      },
      {
        name: "SURGICAL SERVICES",
        href: "/serve/treat2",
        icon: RiCustomerService2Line,
      },
      {
        name: "TRANSPLANT PREP",
        href: "/serve/treat3",
        icon: RiCustomerService2Line,
      }
    ]
  },
  {
    name: "FAQS",
    href: "/appointment",
    icon: FaAddressBook,
  },
  {
    name: "CONTACTS",
    href: "/contact",
    icon: MdAddCall,
    more: FaAngleDown,
    subLinks: [
      {
        name: "OUR CONTACTS",
        href: "/contact",
        icon: RiCustomerService2Line,
      },
      {
        name: "EMAIL US",
        href: "/serve/service1",
        icon: RiCustomerService2Line,
      },
    ]
  },

];
export const sideLinks: NavItem[] = [
  {
    name: "HOME",
    href: "/",
    icon: BiHomeAlt2,
  },
  {
    name: "OUR COMPANY",
    href: "/about",
    icon: FaBuildingCircleArrowRight,
    more: FaAngleDown,
    subLinks: [
      {
        name: "WHO WE ARE",
        href: "/about",
        icon: FaBuildingCircleArrowRight,
      },
      {
        name: "PARTNERS & TEAM",
        href: "/about/team",
        icon: FaBuildingCircleArrowRight,
      }
    ]
  },
  {
    name: "SERVICES",
    href: "/serve",
    icon: RiCustomerService2Line,
    more: FaAngleDown,
    subLinks: [
      {
        name: "DIALYSIS CARE",
        href: "/serve",
        icon: RiCustomerService2Line,
      },
      {
        name: "CKD CLINIC",
        href: "/serve/treat1",
        icon: RiCustomerService2Line,
      },
      {
        name: "SURGICAL SERVICES",
        href: "/serve/treat2",
        icon: RiCustomerService2Line,
      },
      {
        name: "TRANSPLANT PREP",
        href: "/serve/treat3",
        icon: RiCustomerService2Line,
      }
    ]
  },
  {
    name: "FAQS",
    href: "/appointment",
    icon: FaAddressBook,
  },
  {
    name: "CONTACTS",
    href: "/contact",
    icon: MdAddCall,
    more: FaAngleDown,
    subLinks: [
      {
        name: "OUR CONTACTS",
        href: "/contact",
        icon: RiCustomerService2Line,
      },
      {
        name: "EMAIL US",
        href: "/serve/service1",
        icon: RiCustomerService2Line,
      },
    ]
  },
  {
    name: "PATIENTS",
    href: "/contact",
    icon: FaPeopleGroup,
  }

];

// export const Links = [
//   {
//     name: "Home",
//     href: "/",
//     icon: BiHomeAlt2,
//   },
//   {
//     name: "About",
//     href: "/about",
//     icon: BsExclamationCircle,
//   },
//   {
//     name: "Services",
//     href: "/serve",
//     icon:  RiCustomerService2Line,
//   },
//   {
//     name: "Appointment",
//     href: "/appointment",
//     icon: FaAddressBook,
//   },
//   {
//     name: "Contact",
//     href: "/contact",
//     icon: MdAddCall,
//   }
// ];