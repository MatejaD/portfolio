import React, { useEffect, useRef, useState } from "react"

import ReactIcon from "../Images/CubeImages/ReactIcon.png"
import FirebaseIcon from "../Images/CubeImages/FirebaseLogo.png"
import JsIcon from "../Images/CubeImages/JavaScriptIcon.png"
import GitIcon from "../Images/CubeImages/GitLogo.png"
import HtmlIcon from "../Images/CubeImages/HtmlIcon.png"
import ReduxIcon from "../Images/CubeImages/ReduxIcon.png"

import FluidAnimation from "react-fluid-animation"
export default function About() {
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  const [o, setO] = useState(false)
  const [u, setU] = useState(false)
  const [t, setT] = useState(false)

  const [m, setM] = useState(false)
  const [e, setE] = useState(false)

  useEffect(() => {
    setA(true)
    setTimeout(() => {
      setB(true)
    }, 100)

    setTimeout(() => {
      setO(true)
    }, 200)

    setTimeout(() => {
      setU(true)
    }, 300)

    setTimeout(() => {
      setT(true)
    }, 200)

    setTimeout(() => {
      setT(true)
    }, 400)

    setTimeout(() => {
      setM(true)
    }, 300)

    setTimeout(() => {
      setE(true)
    }, 500)
  }, [])

  return (
    <>
      <div className="md:w-2/4 w-full md:h-3/4 h-3/4  ">
        <div className="md:w-4/5 w-full h-full  flex flex-col justify-evenly items-start p-4  text-5xl md:text-6xl ">
          <div className="w-full h-20 gap-6 flex">
            <div className="flex">
              <div className={`${a ? "M" : ""} `}>
                <span
                  onMouseLeave={() => setA(true)}
                  onMouseEnter={() => setA(false)}
                  className=" hover:text-blue"
                >
                  A
                </span>
              </div>

              <div className={`${b ? "M" : ""} `}>
                <span
                  onMouseLeave={() => setB(true)}
                  onMouseEnter={() => setB(false)}
                  className=" hover:text-blue"
                >
                  b
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

              <div className={`${u ? "M" : ""} `}>
                <span
                  onMouseLeave={() => setU(true)}
                  onMouseEnter={() => setU(false)}
                  className=" hover:text-blue"
                >
                  u
                </span>
              </div>

              <div className={`${t ? "M" : ""} `}>
                <span
                  onMouseLeave={() => setT(true)}
                  onMouseEnter={() => setT(false)}
                  className=" hover:text-blue"
                >
                  t
                </span>
              </div>
            </div>

            <div className="flex w-20">
              <div className={`${m ? "M" : ""} `}>
                <span
                  onMouseLeave={() => setM(true)}
                  onMouseEnter={() => setM(false)}
                  className=" hover:text-blue"
                >
                  M
                </span>
              </div>

              <div className={`${e ? "M" : ""} `}>
                <span
                  onMouseLeave={() => setE(true)}
                  onMouseEnter={() => setE(false)}
                  className=" hover:text-blue"
                >
                  e
                </span>
              </div>
            </div>
          </div>
          <div className="text-container w-full overflow-hidden h-full flex flex-col justify-center duration-300 ease-in-out gap-3 lg:gap-8 items-center text-xl font-smallText">
            <p className="">
              I'm a self taught Frontend developer based in Novi Pazar, Serbia.
              I fell in love with building things from the young age.
            </p>

            <p className="">
              {" "}
              My work is mainly done with React, but im always open to learning
              new technology. I have experience working with state management
              tools such as <e className="text-purple">Redux</e> and useContext.
            </p>

            <p className="">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              sunt neque officiis ipsa aliquam amet blanditiis fugiat vel porro
              quae.
            </p>
          </div>
        </div>
      </div>
      <div className="stage w-1/6 h-1/3 hidden lg:block">
        <div className="cubespinner">
          <div className="face1">
            <img className="w-1/2" src={ReactIcon} alt="React icon" />
          </div>
          <div className="face2">
            <img className="w-1/2" src={FirebaseIcon} alt="Firebase icon" />
          </div>
          <div className="face3">
            <img
              className="w-1/2 rounded-md"
              src={JsIcon}
              alt="Javascript Icon"
            />
          </div>
          <div className="face4">
            <img className="w-1/2 " src={GitIcon} alt="Git icon" />
          </div>
          <div className="face5">
            <img className="w-1/2 " src={HtmlIcon} alt="HTML5 icon" />
          </div>
          <div className="face6">
            <img className="w-1/2 " src={ReduxIcon} alt="CSS3 icon" />
          </div>
        </div>
      </div>
    </>
  )
}
