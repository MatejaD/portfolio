import React, { useEffect, useState } from "react"

import ImagoImage from "../Images/CubeImages/ImagoImage.png"

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

  const [posts, setPosts] = useState([ImagoImage, "secondImage", "thirdImage"])
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
    <div className="w-11/12 h-3/4 ">
      <div className="w-11/12 h-full flex flex-col justify-evenly items-start p-4  text-6xl ">
        <div className="w-full h-20 gap-6 flex">
          <div className="flex">
            <div className={`${m ? "M" : ""} `}>
              <span
                onMouseLeave={() => setM(true)}
                onMouseEnter={() => setM(false)}
                className=" hover:text-blue"
              >
                M
              </span>
            </div>

            <div className={`${y ? "M" : ""} `}>
              <span
                onMouseLeave={() => setY(true)}
                onMouseEnter={() => setY(false)}
                className=" hover:text-blue"
              >
                y
              </span>
            </div>
          </div>
          <div className="flex w-20">
            <div className={`${w ? "M" : ""} `}>
              <span
                onMouseLeave={() => setW(true)}
                onMouseEnter={() => setW(false)}
                className=" hover:text-blue"
              >
                W
              </span>
            </div>

            <div className={`${o ? "M" : ""} `}>
              <span
                onMouseLeave={() => setO(true)}
                onMouseEnter={() => setO(false)}
                className=" hover:text-blue"
              >
                o
              </span>
            </div>

            <div className={`${r ? "M" : ""} `}>
              <span
                onMouseLeave={() => setR(true)}
                onMouseEnter={() => setR(false)}
                className=" hover:text-blue"
              >
                r
              </span>
            </div>

            <div className={`${k ? "M" : ""} `}>
              <span
                onMouseLeave={() => setK(true)}
                onMouseEnter={() => setK(false)}
                className=" hover:text-blue"
              >
                k
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full  border-purple flex justify-between gap-6 border-b items-center">
          {currentPost.map((item) => {
            return (
              <div className="project1  w-1/3 h-3/4 relative overflow-hidden  flex flex-col justify-cetner items-center">
                <div className="w-full h-full overflow-hidden relative bg-blue rounded-md">
                  <img className="w-full h-full" src={item} alt="" />
                  <div className="project1-overlay duration-500 text-lg flex justify-center items-start p-4 ease-in-out rounded-t-md absolute w-full h-full bg-purple z-20 translate-y-full">
                    <p>
                      Imago is a habit tracking app that contains character
                      customazation, leveling up and much more stuff...
                    </p>
                  </div>
                </div>
                <p className="text-2xl ">Imago</p>
              </div>
            )
          })}
          <ul>
            {pageNumbers.map((num) => {
              return (
                <li key={num}>
                  <a onClick={() => paginate(num)}>{num}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
