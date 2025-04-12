import { BiHomeAlt2 } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";

export const Links = [
  {
    name: "Home",
    href: "/",
    icon: BiHomeAlt2,
  },
  {
    name: "About",
    href: "/about",
    icon: BsExclamationCircle,
  },
  {
    name: "Services",
    href: "/serve",
    icon:  RiCustomerService2Line,
  },
  {
    name: "Appointment",
    href: "/appointment",
    icon: FaAddressBook,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: MdAddCall,
  }
];