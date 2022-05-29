import React, { useState } from "react"
import { ImHome } from "react-icons/im"
import { IoPersonSharp } from "react-icons/io5"
import { BsGithub, BsLinkedin, BsDiscord, BsTools } from "react-icons/bs"
import { MdWork } from "react-icons/md"
import { useNavigate } from "react-router-dom"

export default function Sidebar({ isLoading, setIsLoading }) {
  const [showText, setShowText] = useState(false)

  const navigate = useNavigate()

  const navigateToPage = (page) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate(page, { replace: true })
    }, 1500)
  }

  return (
    <nav className=" left-0 w-20 h-full z-10 py-2 flex flex-col items-center justify-between bg-grayDark">
      <div className="h-1/3 w-full flex justify-center items-start">
        <h2>Mateja</h2>
      </div>

      <div className="w-full h-1/3  flex flex-col justify-evenly items-center text-3xl">
        <span
          onClick={() => navigateToPage("/")}
          className="home cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
        >
          <ImHome />
        </span>

        <span
          onClick={() => navigateToPage("/about")}
          className="about cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
        >
          <IoPersonSharp />
        </span>

        <span
          onClick={() => navigateToPage("/skills")}
          className="skills cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
        >
          <BsTools />
        </span>

        <span
          onClick={() => navigateToPage("/projects")}
          className="projects cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
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
