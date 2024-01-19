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
    label: "Projects",
    href: "/Projects",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/12a9glpo9-Xu8Nnj-Zl8fUGtEo0NBvdyC/view?usp=sharing",
    rel: "noopener noreferrer",
    target: "_blank",
    icon: <DocumentTextIcon className="w-6 h-6" />,
    
  },

];
