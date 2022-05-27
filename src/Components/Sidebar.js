import React from "react"
import { ImHome } from "react-icons/im"
import { IoPersonSharp } from "react-icons/io5"
import { BsGithub, BsLinkedin, BsDiscord, BsTools } from "react-icons/bs"

export default function Sidebar() {
  return (
    <nav className="absolute left-0 w-16 h-full py-2 flex flex-col items-center justify-between bg-grayDark">
      <div className="h-1/3 w-full flex justify-center items-center">
        <h2>M</h2>
      </div>

      <div className="w-full h-1/3  flex flex-col justify-evenly items-center text-3xl">
        <span>
          <ImHome />
        </span>

        <span>
          <IoPersonSharp />
        </span>

        <span>
          <BsTools />
        </span>
      </div>

      <div className="w-fu;; h-1/3 flex flex-col justify-end items-end gap-6 text-xl ">
        <span>
          <BsGithub />
        </span>

        <span>
          <BsLinkedin />
        </span>

        <span>
          <BsDiscord />
        </span>
      </div>
    </nav>
  )
}
