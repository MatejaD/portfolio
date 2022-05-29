import React, { useEffect, useState } from "react"

import ImagoImage from "../Images/CubeImages/ImagoImage.png"

// Techonology
import ReactIcon from "../Images/CubeImages/ReactIcon.png"
import FirebaseIcon from "../Images/CubeImages/FirebaseLogo.png"
import TailwindIcon from "../Images/CubeImages/TailwindLogo.png"
import CssIcon from "../Images/CubeImages/CSSLogo.png"
import ReduxIcon from "../Images/CubeImages/ReduxIcon.png"

export default function Projects() {
  const [m, setM] = useState(false)
  const [y, setY] = useState(false)

  const [w, setW] = useState(false)
  const [o, setO] = useState(false)
  const [r, setR] = useState(false)
  const [k, setK] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setM(true)
    }, 100)

    setTimeout(() => {
      setY(true)
    }, 200)

    setTimeout(() => {
      setW(true)
    }, 100)

    setTimeout(() => {
      setO(true)
    }, 300)

    setTimeout(() => {
      setR(true)
    }, 200)

    setTimeout(() => {
      setK(true)
    }, 400)
  }, [])

  const [posts, setPosts] = useState([
    {
      image: ImagoImage,
      tech: [ReactIcon, FirebaseIcon, ReduxIcon, CssIcon, TailwindIcon],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero tenetur. Quidem vitae magnam tempora deleniti alias animi porro harum et eaque voluptates officiis expedita velit veniam, repellat aperiam, autem ex libero numquam. Doloremque deleniti sint inventore cum, officia aliquid quisquam modi quo ab fuga saepe minima obcaecati molestiae reiciendis veniam hic ea repellendus asperiores consequuntur expedita illo laborum fugit optio! Facere libero nisi error aliquam. Sint, distinctio quis! Enim animi impedit minus eveniet voluptas modi, quas consequuntur quia vitae provident ut amet hic iure laudantium aspernatur quisquam excepturi! Fugit ut, dolor magni quos sint tempora commodi architecto temporibus quasi?",
      gitHub: "https://github.com/MatejaD/Imago",
      demo: "https://immago.netlify.app",
    },
    {
      image: ImagoImage,
      tech: [ReactIcon, CssIcon, TailwindIcon],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero tenetur. Quidem vitae magnam tempora deleniti alias animi porro harum et eaque voluptates officiis expedita velit veniam, repellat aperiam, autem ex libero numquam. Doloremque deleniti sint inventore cum, officia aliquid quisquam modi quo ab fuga saepe minima obcaecati molestiae reiciendis veniam hic ea repellendus asperiores consequuntur expedita illo laborum fugit optio! Facere libero nisi error aliquam. Sint, distinctio quis! Enim animi impedit minus eveniet voluptas modi, quas consequuntur quia vitae provident ut amet hic iure laudantium aspernatur quisquam excepturi! Fugit ut, dolor magni quos sint tempora commodi architecto temporibus quasi?",
    },
    {
      image: ImagoImage,
      tech: [ReactIcon, CssIcon, TailwindIcon],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero tenetur. Quidem vitae magnam tempora deleniti alias animi porro harum et eaque voluptates officiis expedita velit veniam, repellat aperiam, autem ex libero numquam. Doloremque deleniti sint inventore cum, officia aliquid quisquam modi quo ab fuga saepe minima obcaecati molestiae reiciendis veniam hic ea repellendus asperiores consequuntur expedita illo laborum fugit optio! Facere libero nisi error aliquam. Sint, distinctio quis! Enim animi impedit minus eveniet voluptas modi, quas consequuntur quia vitae provident ut amet hic iure laudantium aspernatur quisquam excepturi! Fugit ut, dolor magni quos sint tempora commodi architecto temporibus quasi?",
    },
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(1)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)
  let pageNumbers = []

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="w-10/12 h-5/6 flex justify-center items-center  ">
      <div className="w-11/12 h-full  flex flex-col justify-between items-start gap-2  text-6xl ">
        <div className="w-1/2 h-20 gap-6 flex">
          <div className="flex justify-start items-start border-b-2 rounded-md border-purple">
            <div className={`${m ? "M" : ""} `}>
              <span
                onMouseLeave={() => setM(true)}
                onMouseEnter={() => setM(false)}
                className=" hover:text-blue"
              >
                {currentPage === 1 ? "I" : currentPage === 2 ? "E" : "P"}
              </span>
            </div>

            <div className={`${y ? "M" : ""} `}>
              <span
                onMouseLeave={() => setY(true)}
                onMouseEnter={() => setY(false)}
                className=" hover:text-blue"
              >
                {currentPage === 1 ? "m" : currentPage === 2 ? "-" : "o"}
              </span>
            </div>
            <div className={`${w ? "M" : ""} `}>
              <span
                onMouseLeave={() => setW(true)}
                onMouseEnter={() => setW(false)}
                className=" hover:text-blue"
              >
                {currentPage === 1 ? "a" : currentPage === 2 ? "c" : "r"}
              </span>
            </div>

            <div className={`${o ? "M" : ""} `}>
              <span
                onMouseLeave={() => setO(true)}
                onMouseEnter={() => setO(false)}
                className=" hover:text-blue"
              >
                {currentPage === 1 ? "g" : currentPage === 2 ? "o" : "t"}
              </span>
            </div>

            <div className={`${r ? "M" : ""} `}>
              <span
                onMouseLeave={() => setR(true)}
                onMouseEnter={() => setR(false)}
                className=" hover:text-blue"
              >
                {currentPage === 1 ? "o" : currentPage === 2 ? "m" : "f"}
              </span>
            </div>

            <div className={`${r ? "M" : ""} `}>
              <span
                onMouseLeave={() => setR(true)}
                onMouseEnter={() => setR(false)}
                className=" hover:text-blue"
              >
                {currentPage === 3 && "o"}
              </span>
            </div>

            <div className={`${r ? "M" : ""} `}>
              <span
                onMouseLeave={() => setR(true)}
                onMouseEnter={() => setR(false)}
                className=" hover:text-blue"
              >
                {currentPage === 3 && "l"}
              </span>
            </div>

            <div className={`${r ? "M" : ""} `}>
              <span
                onMouseLeave={() => setR(true)}
                onMouseEnter={() => setR(false)}
                className=" hover:text-blue"
              >
                {currentPage === 3 && "i"}
              </span>
            </div>

            <div className={`${r ? "M" : ""} `}>
              <span
                onMouseLeave={() => setR(true)}
                onMouseEnter={() => setR(false)}
                className=" hover:text-blue"
              >
                {currentPage === 3 && "o"}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative   border-purple  rounded-md  flex flex-col justify-between gap-6 border-b items-center">
          {currentPost.map((project) => {
            return (
              <>
                <div
                  className="absolute right-0 flex justify-between items-center w-1/6 h-10 -top-10 z-20
                 px-4"
                >
                  <a
                    target={"_blank"}
                    href={project.gitHub}
                    className="text-base"
                  >
                    gitHub
                  </a>
                  <a
                    target={"_blank"}
                    href={project.demo}
                    className="text-base"
                  >
                    Demo
                  </a>
                </div>
                <div className=" project1 overflow-hidden w-full h-full relative  flex flex-col justify-cetner items-center rounded-md">
                  <div className="w-full h-full   relative  rounded-md">
                    <img
                      className="w-full h-full rounded-md "
                      src={project.image}
                      alt="Project image"
                    />
                    <div className="project1-overlay duration-700 text-lg flex flex-col justify-start items-start p-4 ease-in-out rounded-t-md absolute w-full h-full bg-purple gap-4  border-purple z-50 ">
                      <div className="w-full h-1/6 border-b-2 border-background flex justify-start gap-4 items-center">
                        <h2 className="text-4xl">Build with:</h2>
                        <div className="flex gap-8 justify-start items-center">
                          {project.tech.map((item) => {
                            return (
                              <img className="w-10" src={item} alt="icon" />
                            )
                          })}
                        </div>
                      </div>
                      <div className="w-full h-5/6 border-b-2 border-background flex justify-start px-6 items-start">
                        <p className="text-2xl">{project.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <ul className="flex flex-col justify-center items-center gap-8 text-5xl w-1/4 h-1/3">
        {pageNumbers.map((num) => {
          return (
            <li key={num}>
              <a
                className={`${
                  currentPage === num && "text-blue"
                } cursor-pointer`}
                onClick={() => paginate(num)}
              >
                {num}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
