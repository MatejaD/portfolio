import React, { useState } from "react"
import { ImHome } from "react-icons/im"
import { IoPersonSharp } from "react-icons/io5"
import { BsGithub, BsLinkedin, BsDiscord, BsTools } from "react-icons/bs"
import { MdWork } from "react-icons/md"
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
  const [showText, setShowText] = useState(false)

  const navigate = useNavigate()

  return (
    <nav className=" left-0 w-16 h-full py-2 flex flex-col items-center justify-between bg-grayDark">
      <div className="h-1/3 w-full flex justify-center items-start">
        <h2>M</h2>
      </div>

      <div className="w-full h-1/3  flex flex-col justify-evenly items-center text-3xl">
        <span
          onClick={() => navigate("/", { replace: true })}
          className="home cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
        >
          <ImHome />
        </span>

        <span
          onClick={() => navigate("/about", { replace: true })}
          className="about cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
        >
          <IoPersonSharp />
        </span>

        <span
          onClick={() => navigate("/skills", { replace: true })}
          className="skills cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
        >
          <BsTools />
        </span>

        <span
          onClick={() => navigate("/projects", { replace: true })}
          className="skills cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
        >
          <MdWork />
        </span>
      </div>

      <div className="w-fu;; h-1/3 flex flex-col justify-end items-end gap-6 text-xl ">
        <a target={"_blank"} href="http://github.com/MatejaD">
          <BsGithub />
        </a>

        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/mateja-drobnjak-755147227/"
        >
          <BsLinkedin />
        </a>

        <a target={"_blank"} href="http://github.com/MatejaD">
          <BsDiscord />
        </a>
      </div>
    </nav>
  )
}
