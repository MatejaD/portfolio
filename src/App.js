import React, { useEffect, useState } from "react"
import Sidebar from "./Components/Sidebar"

import TagCloud from "react3dtagcloud"
import FluidAnimation from "react-fluid-animation"

import letter from "./letter.png"
import Home from "./Pages/Home"
import About from "./Pages/About"

import { Route, Routes } from "react-router-dom"
import Projects from "./Pages/Projects"
import Loading from "./Pages/Loading"

export default function App() {
  const [isLoading, setIsLoading] = useState()

  const tagName = [
    "Javscript",
    "HTML5",
    "CSS3",
    "React",
    "Redux",
    "Tailwind",
    "Firebase",
    "Git",
    "Netlify",
  ]

  let array = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",

    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",

    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",

    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",

    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",

    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",

    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",

    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",

    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]

  const randomNumber = () => {}

  return (
    <main className="font-text w-screen h-screen relative flex justify-start items-center gap-24 shadow-md shadow-white bg-background text-white">
      <Sidebar isLoading={isLoading} setIsLoading={setIsLoading} />
      {array.map((item) => {
        return (
          <h4
            style={{
              padding: `${Math.random() * 0.3}rem`,
              left: `${Math.random() * 95}%`,
              // bottom: `${Math.random() * 95}%`,
              opacity: `${Math.random() * 0.4} `,
              animationDuration: `${(Math.random() + 3) * 20}s`,
              animationName: "snowflake",
              animationDelay: `${Math.random() * 80}s`,
              marginBottom: `${Math.random() * 20}rem`,
              animationIterationCount: "infinite",
            }}
            className={`snowflake `}
          ></h4>
        )
      })}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </>
      )}
    </main>
  )
}
