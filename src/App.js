import React, { useEffect, useState } from "react"
import Sidebar from "./Components/Sidebar"

import TagCloud from "react3dtagcloud"
import FluidAnimation from "react-fluid-animation"

import letter from "./letter.png"
import Home from "./Pages/Home"
import About from "./Pages/About"

import { Route, Routes } from "react-router-dom"
import Projects from "./Pages/Projects"

export default function App() {
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

  return (
    <main className="font-text w-screen h-screen relative flex justify-start items-center gap-24 shadow-md shadow-white bg-background text-white">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  )
}
