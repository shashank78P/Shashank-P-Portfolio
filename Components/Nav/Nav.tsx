"use client"
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { GlobalContextDto } from '../Context/type'

const Nav = () => {
  const { setCurrentSectionInView, currentSectionInView } = useContext<GlobalContextDto>(GlobalContext)
  console.log(currentSectionInView)
  return (
    <>
      <div className='w-full flex justify-center items-center sticky top-0 bg-white z-50'>
        <ul className='flex justify-center items-center'>
          <li
            onClick={() => {
              setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("home")) {
                  return prev;
                } else {
                  return [...prev, "home"];
                }
              })
            }}
            className={` p-1 sm:p-2 cursor-pointer text-xs xs:text-sm sm:text-lg ${currentSectionInView?.includes("home") && " border-b-gold text-gold font-semibold border border-b-2 border-transparent "}`}
          >
            <Link href={"#home"} >
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              setCurrentSectionInView(
                setCurrentSectionInView((prev: string[]) => {
                  if (prev?.includes("skills")) {
                    return prev;
                  } else {
                    return [...prev, "skills"];
                  }
                })
              )
            }}
            className={`p-1 sm:p-2 cursor-pointer text-xs xs:text-sm sm:text-lg text-black_c_1 ${currentSectionInView?.includes("skills") && " border-b-gold text-gold font-semibold border border-b-2 border-transparent "}`}
          >
            <Link href={"#skills"} >
              Skills
            </Link>
          </li>
          <li
            onClick={() => {
              setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("projects")) {
                  return prev;
                } else {
                  return [...prev, "projects"];
                }
              })
            }}
            className={`p-1 sm:p-2 cursor-pointer text-xs xs:text-sm sm:text-lg text-black_c_1 ${currentSectionInView?.includes("projects") && " border-b-gold text-gold font-semibold border border-b-2 border-transparent "}`}
          >
            <Link href={"#projects"} >
              Projects
            </Link>
          </li>
          <li
            onClick={() => {
              setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("experience")) {
                  return prev;
                } else {
                  return [...prev, "experience"];
                }
              })
            }}
            className={`p-1 sm:p-2 cursor-pointer text-xs xs:text-sm sm:text-lg text-black_c_1 ${currentSectionInView?.includes("experience") && " border-b-gold text-gold font-semibold border border-b-2 border-transparent "}`}
          >
            <Link href={"#experience"} >
              Experience
            </Link>
          </li>
          <li
            onClick={() => {
              setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("contact_me")) {
                  return prev;
                } else {
                  return [...prev, "contact_me"];
                }
              })
            }}
            className={`p-1 sm:p-2 cursor-pointer text-xs xs:text-sm sm:text-lg text-black_c_1 ${currentSectionInView?.includes("contact_me") && " border-b-gold  text-gold font-semibold border border-b-2 border-transparent"}`}
          >
            <Link href={"#contact_me"} >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
