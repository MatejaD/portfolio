import React, { useEffect, useState } from "react"

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
        <div className="w-full h-full  border-purple flex justify-between border-b items-center">
          <div className="project1 w-1/4 h-3/4 relative overflow-hidden  flex flex-col justify-cetner items-center">
            <div className="w-full h-full bg-blue rounded-md">
              <h2>s</h2>
            </div>
            <p className="text-2xl ">Imago</p>
            <div className="project1-overlay duration-500 text-lg flex justify-center items-start p-4 ease-in-out rounded-t-md absolute w-full h-full bg-purple translate-y-full">
              <p>
                Imago is a habit tracking app that contains character
                customazation, leveling up and much more stuff...
              </p>
            </div>
          </div>

          <div className="w-1/4 h-3/4 flex flex-col justify-cetner items-center bg-white">
            <div className="w-full h-full bg-blue">
              <h2>s</h2>
            </div>
            <p className="text-2xl text-background">E-com store</p>
          </div>

          <div className="w-1/4 h-3/4 flex flex-col justify-cetner items-center bg-white">
            <div className="w-full h-full bg-blue">
              <h2>s</h2>
            </div>
            <p className="text-2xl text-background">Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  )
}
