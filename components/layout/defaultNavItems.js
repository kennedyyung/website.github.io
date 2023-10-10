import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// import { NavItem } from "./Sidebar";

export const defaultNavItems = [
  {
    label: "Home",
    href: "/pages/HomePage",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "/pages/Projects",
    icon: <FolderIcon className="w-6 h-6" />,
  },

];
