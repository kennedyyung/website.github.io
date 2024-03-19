import React, { useRef } from "react"
import classNames from "classnames"
import Link from "next/link"
import Image from "next/image"
import { defaultNavItems } from "./defaultNavItems"
import { useOnClickOutside } from "usehooks-ts"
const Sidebar = ({ open, setOpen }) => {
  const ref = useRef(null)
  useOnClickOutside(ref, e => {
    setOpen(false)
  })
  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-sidebar dark:bg-dark_nav text-black": true, // colors
        "md:w-full md:sticky md:top-1 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-screen w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !open //hide sidebar to the left when closed
        
      })}
      ref={ref}
    >
      <nav className="md:sticky top-0 md:top-1 bg-sidebar">
        {/* nav items */}
        <div className="flex items-center justify-center mt-10">
        <Image
            src="/pfp.jpg" // Provide the correct path to your image
            height={200}
            width={200}
            alt="profile image"
            className="rounded-full"
        />
          </div>

          <div className="font-bold text-lg text-black flex items-center justify-center mt-2 mb-2 ">Kennedy Yung</div>
        <div className="grid grid-flow-row flex items-center justify-center">
        <div>
            <Link href="https://www.linkedin.com/in/kennedy-yung/" rel="noopener noreferrer" target="_blank">
          <img src="linkedin.png" alt="" className="inline-block w-8 h-8 mx-10 hover:bg-sky-100"/>
            </Link>
            <Link href="https://github.com/kennedyyung" rel="noopener noreferrer" target="_blank">
          <img src="github.png" alt="" className="inline-block w-8 h-8 mx-10 hover:bg-sky-100"/>
            </Link>
          </div>
        </div>
        <ul className="py-1 flex flex-col gap-1">
          {defaultNavItems.map((item, index) => {
            return (
              <a key={index} href={item.href}>
                <li
                  className={classNames({
                    "text-black hover:bg-indigo-900": true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-2": true //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </a>
            )
          })}
        </ul>
      </nav>
      {/* account  */}
      {/* <div className="border-t border-t-indigo-800 p-4">
        <div className="flex gap-4 items-center">
          <Image
            src={
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            height={36}
            width={36}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex flex-col ">
            <span className="text-indigo-50 my-0">Tom Cook</span>
            <Link href="/" className="text-indigo-200 text-sm">
              View Profile
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  )
}
export default Sidebar
