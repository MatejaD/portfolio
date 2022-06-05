import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import letter from "../letter.png"

export default function Home() {
  const [m, setM] = useState(false)
  const [a, setA] = useState(false)

  const [t, setT] = useState(false)

  const [e, setE] = useState(false)

  const [j, setJ] = useState(false)
  const [a2, setA2] = useState(false)
  const [i, setI] = useState(false)

  const [h, setH] = useState(false)

  const [i2, setI2] = useState(false)
  const [m2, setM2] = useState(false)

  const [m3, setM3] = useState(false)

  const [f, setF] = useState(false)
  const [r, setR] = useState(false)
  const [o, setO] = useState(false)
  const [n, setN] = useState(false)
  const [t2, setT2] = useState(false)
  const [e2, setE2] = useState(false)
  const [n2, setN2] = useState(false)
  const [d, setD] = useState(false)

  const [d2, setD2] = useState(false)
  const [e3, setE3] = useState(false)
  const [v, setV] = useState(false)
  const [e4, setE4] = useState(false)
  const [l, setL] = useState(false)
  const [o2, setO2] = useState(false)
  const [p, setP] = useState(false)
  const [e5, setE5] = useState(false)
  const [r2, setR2] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setH(true)
    }, 100)

    setTimeout(() => {
      setI(true)
    }, 200)
    setTimeout(() => {
      setI2(true)
    }, 300)
    setTimeout(() => {
      setM2(true)
    }, 200)

    setTimeout(() => {
      setM3(true)
    }, 300)

    setTimeout(() => {
      setA(true)
    }, 400)

    setTimeout(() => {
      setT(true)
    }, 500)

    setTimeout(() => {
      setE(true)
    }, 400)

    setTimeout(() => {
      setJ(true)
    }, 600)

    setTimeout(() => {
      setA2(true)
    }, 500)
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <article className="md:w-2/6 w-full  px-2 h-full justify-center items-start  md:h-2/3 flex flex-col  md:justify-start md:items-start gap-2 md:gap-4 text-center text-4xl md:text-6xl">
        <article className="w-full flex ">
          <div className={`${h ? "M" : ""}`}>
            <span
              onMouseLeave={() => setH(true)}
              onMouseEnter={() => setH(false)}
              className=" hover:text-blue"
            >
              H
            </span>
          </div>

          <div className={`${i ? "M" : ""}`}>
            <span
              onMouseLeave={() => setI(true)}
              onMouseEnter={() => setI(false)}
              className=" hover:text-blue"
            >
              i,
            </span>
          </div>
        </article>

        <article className="w-full flex gap-4 ">
          <div className="flex">
            <div className={`${i2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setI2(true)}
                onMouseEnter={() => setI2(false)}
                className=" hover:text-blue"
              >
                I'
              </span>
            </div>

            <div className={`${m2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setM2(true)}
                onMouseEnter={() => setM2(false)}
                className=" hover:text-blue"
              >
                m
              </span>
            </div>
          </div>

          <div className="flex">
            <div className={`${m3 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setM3(true)}
                onMouseEnter={() => setM3(false)}
                className=" hover:text-blue"
              >
                M
              </span>
            </div>

            <div className={`${a ? "M" : ""}`}>
              <span
                onMouseLeave={() => setA(true)}
                onMouseEnter={() => setA(false)}
                className=" hover:text-blue"
              >
                a
              </span>
            </div>

            <div className={`${t ? "M" : ""}`}>
              <span
                onMouseLeave={() => setT(true)}
                onMouseEnter={() => setT(false)}
                className=" hover:text-blue"
              >
                t
              </span>
            </div>

            <div className={`${e ? "M" : ""}`}>
              <span
                onMouseLeave={() => setE(true)}
                onMouseEnter={() => setE(false)}
                className=" hover:text-blue"
              >
                e
              </span>
            </div>

            <div className={`${j ? "M" : ""}`}>
              <span
                onMouseLeave={() => setJ(true)}
                onMouseEnter={() => setJ(false)}
                className=" hover:text-blue"
              >
                j
              </span>
            </div>

            <div className={`${a2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setA2(true)}
                onMouseEnter={() => setA2(false)}
                className=" hover:text-blue"
              >
                a
              </span>
            </div>
          </div>
        </article>

        <article className="w-full flex gap-4">
          <div className="flex">
            <div className={`${f ? "M" : ""}`}>
              <span
                onMouseLeave={() => setF(true)}
                onMouseEnter={() => setF(false)}
                className=" hover:text-blue"
              >
                F
              </span>
            </div>

            <div className={`${r ? "M" : ""}`}>
              <span
                onMouseLeave={() => setR(true)}
                onMouseEnter={() => setR(false)}
                className=" hover:text-blue"
              >
                r
              </span>
            </div>

            <div className={`${o ? "M" : ""}`}>
              <span
                onMouseLeave={() => setO(true)}
                onMouseEnter={() => setO(false)}
                className=" hover:text-blue"
              >
                o
              </span>
            </div>

            <div className={`${n ? "M" : ""}`}>
              <span
                onMouseLeave={() => setN(true)}
                onMouseEnter={() => setN(false)}
                className=" hover:text-blue"
              >
                n
              </span>
            </div>

            <div className={`${t2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setT2(true)}
                onMouseEnter={() => setT2(false)}
                className=" hover:text-blue"
              >
                t
              </span>
            </div>

            <div className={`${e2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setE2(true)}
                onMouseEnter={() => setE2(false)}
                className=" hover:text-blue"
              >
                e
              </span>
            </div>

            <div className={`${n2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setN2(true)}
                onMouseEnter={() => setN2(false)}
                className=" hover:text-blue"
              >
                n
              </span>
            </div>

            <div className={`${d ? "M" : ""}`}>
              <span
                onMouseLeave={() => setD(true)}
                onMouseEnter={() => setD(false)}
                className=" hover:text-blue"
              >
                d
              </span>
            </div>
          </div>

          <div className="flex">
            <div className={`${d2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setD2(true)}
                onMouseEnter={() => setD2(false)}
                className="hover:text-blue"
              >
                D
              </span>
            </div>

            <div className={`${e3 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setE3(true)}
                onMouseEnter={() => setE3(false)}
                className=" hover:text-blue"
              >
                e
              </span>
            </div>

            <div className={`${v ? "M" : ""}`}>
              <span
                onMouseLeave={() => setV(true)}
                onMouseEnter={() => setV(false)}
                className=" hover:text-blue"
              >
                v
              </span>
            </div>

            <div className={`${e4 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setE4(true)}
                onMouseEnter={() => setE4(false)}
                className=" hover:text-blue"
              >
                e
              </span>
            </div>

            <div className={`${l ? "M" : ""}`}>
              <span
                onMouseLeave={() => setL(true)}
                onMouseEnter={() => setL(false)}
                className=" hover:text-blue"
              >
                l
              </span>
            </div>

            <div className={`${o2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setO2(true)}
                onMouseEnter={() => setO2(false)}
                className="hover:text-blue"
              >
                o
              </span>
            </div>

            <div className={`${p ? "M" : ""}`}>
              <span
                onMouseLeave={() => setP(true)}
                onMouseEnter={() => setP(false)}
                className=" hover:text-blue"
              >
                p
              </span>
            </div>

            <div className={`${e5 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setE5(true)}
                onMouseEnter={() => setE5(false)}
                className=" hover:text-blue"
              >
                e
              </span>
            </div>

            <div className={`${r2 ? "M" : ""}`}>
              <span
                onMouseLeave={() => setR2(true)}
                onMouseEnter={() => setR2(false)}
                className="hover:text-blue"
              >
                r
              </span>
            </div>
          </div>
        </article>

        <p className="text-sm opacity-40 w-full text-left h-8">
          Frontend Dev / React / Firebase/ Tailwind
        </p>

        <a
          target="_blank"
          href="mailto:matejad356@gmail.com"
          className="projects-btn w-1/2 h-16 flex justify-center items-center text-center rounded-md text-xl font-text"
        >
          Contact Me
        </a>
      </article>

      <div className="w-1/3 h-2/3 hidden  lg:flex justify-center items-center ">
        <img className="letter w-full rotate-6 " src={letter} alt="" />
      </div>
    </>
  )
}
