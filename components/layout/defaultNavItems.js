import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    label: "Education",
    href: "#education",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "#projects",
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
