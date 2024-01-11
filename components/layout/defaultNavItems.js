import React from "react";

import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
// import { NavItem } from "./Sidebar";

export const defaultNavItems = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "/Projects",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1_brSqVhScD-YEhd3aSr6CskTAB1smtxh/view?usp=sharing",
    rel: "noopener noreferrer",
    target: "_blank",
    icon: <DocumentTextIcon className="w-6 h-6" />,
    
  },

];
