import React, { useEffect, useState } from "react"
import Sidebar from "./Components/Sidebar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import { Route, Routes } from "react-router-dom"
import Projects from "./Pages/Projects"
import Loading from "./Pages/Loading"

export default function App() {
  const [isLoading, setIsLoading] = useState()

  let array = []

  for (let i = 0; i <= 100; i++) {
    array.push("*")
  }

  const randomNumber = () => {}

  return (
    <main className="font-text w-screen h-screen relative flex flex-col md:flex-row  justify-start items-center gap-10 md:gap-24 shadow-md shadow-white bg-background text-white">
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
