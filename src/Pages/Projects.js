import React, { useEffect, useState } from "react"

import ImagoImage from "../Images/CubeImages/ImagoImage.png"
import ImagoImageSmall from "../Images/CubeImages/ImagoImageSmall.png"

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
      imageSmall: ImagoImageSmall,
      tech: [ReactIcon, FirebaseIcon, ReduxIcon, CssIcon, TailwindIcon],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero tenetur. Quidem vitae magnam tempora deleniti alias animi porro harum et eaque voluptates officiis expedita velit veniam, repellat aperiam, autem ex libero numquam. Doloremque deleniti sint inventore cum, officia aliquid quisquam modi quo ab fuga saepe minima obcaecati molestiae reiciendis veniam hic ea repellendus asperiores consequuntur expedita illo laborum fugit optio! Facere libero nisi error aliquam. Sint, distinctio quis! Enim animi impedit minus eveniet voluptas modi, quas consequuntur quia vitae provident ut amet hic iure laudantium aspernatur quisquam excepturi! Fugit ut, dolor magni quos sint tempora commodi architecto temporibus quasi?",
      gitHub: "https://github.com/MatejaD/Imago",
      demo: "https://immago.netlify.app",
    },
    {
      image: ImagoImage,
      imageSmall: ImagoImageSmall,
      tech: [ReactIcon, CssIcon, TailwindIcon],
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero tenetur. Quidem vitae magnam tempora deleniti alias animi porro harum et eaque voluptates officiis expedita velit veniam, repellat aperiam, autem ex libero numquam. Doloremque deleniti sint inventore cum, officia aliquid quisquam modi quo ab fuga saepe minima obcaecati molestiae reiciendis veniam hic ea repellendus asperiores consequuntur expedita illo laborum fugit optio! Facere libero nisi error aliquam. Sint, distinctio quis! Enim animi impedit minus eveniet voluptas modi, quas consequuntur quia vitae provident ut amet hic iure laudantium aspernatur quisquam excepturi! Fugit ut, dolor magni quos sint tempora commodi architecto temporibus quasi?",
    },
    {
      image: ImagoImage,
      imageSmall: ImagoImageSmall,
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
    <div className="md:w-10/12 w-full  h-screen md:h-5/6 flex flex-col md:flex-row  justify-center items-center  ">
      <div className="w-11/12 h-full  flex flex-col justify-between items-start gap-2 md:text-6xl text-5xl ">
        <div className="w-1/2 h-20 gap-6  flex justify-start items-end ">
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
        <div className="md:w-full w-3-4 h-3/4 md:h-full relative   border-purple  rounded-md  flex flex-col justify-between gap-6 border-b items-center">
          {currentPost.map((project) => {
            return (
              <>
                <div
                  className="absolute lg:right-0 right-16 flex justify-between items-center w-1/6 h-10 -top-10 z-20 gap-4
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
                      src={
                        window.innerWidth < 600
                          ? project.imageSmall
                          : project.image
                      }
                      alt="Project image"
                    />
                    <div className="project1-overlay duration-700 text-lg flex flex-col justify-start items-start p-4 ease-in-out rounded-t-md absolute w-full h-full bg-purple gap-4  border-purple z-50 ">
                      <div className="w-full h-1/6 border-b-2 border-background flex justify-start gap-4 items-center">
                        <h2 className="lg:text-4xl text-lg">Build with:</h2>
                        <div className="flex lg:gap-8 gap-6 justify-start items-center">
                          {project.tech.map((item) => {
                            return (
                              <img
                                className="lg:w-10 w-8"
                                src={item}
                                alt="icon"
                              />
                            )
                          })}
                        </div>
                      </div>
                      <div className="w-full h-full  border-b-2 border-background flex justify-start lg:px-6 px-1 items-start">
                        <p className="lg:text-2xl text-xs ">{project.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <ul className="flex flex-row md:flex-col justify-center items-center gap-8 text-2xl md:text-5xl w-1/4 md:h-1/3 h-1/6">
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
