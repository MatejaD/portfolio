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
    }, 500)
  }

  return (
    <nav className=" left-0 md:w-20 w-full md:h-full h-20 z-10 py-2 flex flex-row md:flex-col items-center justify-between bg-grayDark">
      <div className="md:h-1/3 h-full md:w-full w-1/5  flex justify-center items-center md:items-start">
        <h2>Mateja</h2>
      </div>

      <div className="md:h-1/3 h-full md:w-full w-1/3 flex flex-row md:flex-col justify-evenly gap-4 md:gap-0 items-center md:text-3xl text-base">
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
          onClick={() => navigateToPage("/projects")}
          className="projects cursor-pointer w-full h-12 flex justify-center items-center relative hover:text-grayDark duration-150 "
        >
          <MdWork />
        </span>
      </div>

      <div className="md:h-1/3 h-full md:w-full w-1/3 flex flex-row md:flex-col justify-center items-center gap-6 md:gap-6 text-xl ">
        <a target={"_blank"} href="http://github.com/MatejaD">
          <BsGithub />
        </a>

        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/mateja-drobnjak-755147227/"
        >
          <BsLinkedin />
        </a>
      </div>
    </nav>
  )
}
