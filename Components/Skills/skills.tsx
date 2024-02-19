import React, { useContext, useEffect, useRef } from 'react'
import ReactIco from '../assets/ReactIco'
import NextJsIco from '../assets/NextJsIco'
import JSIco from '../assets/JSIco'
import NodeIco from '../assets/NodeIco'
import ExpressIco from '../assets/ExpressIco'
import MongoDBIco from '../assets/MongoDBIco'
import NestIco from '../assets/NestIco'
import TailwindCssIco from '../assets/TailwindCssIco'
import CssIco from '../assets/CssIco'
import MySqlIco from '../assets/MySqlIco'
import FigmaIco from '../assets/FigmaIco'
import GitIco from '../assets/GitIco'
import PythonIco from '../assets/PythonIco'
import JavaIco from '../assets/JavaIco'
import TypeScriptIco from '../assets/TypeScriptIco'
import SectionTitle from '../GlobalComponents/SectionTitle'
import { GlobalContext } from '../Context/GlobalContext'
import { GlobalContextDto } from '../Context/type'
import UseIsVisible from '../GlobalComponents/UseIsVisible'
import HtmlIco from '../assets/HtmlIco'
import Neo4JIco from '../assets/Neo4JIco'
import DjangoIco from '../assets/DjangoIco'
import Web3Ico from '../assets/Web3Ico'
import TruffleIco from '../assets/TruffleIco'
import GanachIco from '../assets/GanachIco'
import FlaskIco from '../assets/FlaskIco'

const Skills = () => {
    const { setCurrentSectionInView } = useContext<GlobalContextDto>(GlobalContext)
    const skillsRef = useRef<HTMLDivElement>(null);
    const is_visible = UseIsVisible(skillsRef);

    useEffect(() => {
        if (is_visible) {
            setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("skills")) {
                    return prev
                } else {
                    return [...prev, "skills"]
                }
            })
        } else {
            setCurrentSectionInView((prev: string[]) => prev.filter((ele) => ele != "skills"))
        }
    }, [is_visible])
    return (
        <>
            <div id="skills" className='w-full  py-10' ref={skillsRef} >
                <SectionTitle height={2} width={50} title='My Skills' />
                <div className='w-full gap-4 flex flex-wrap justify-center items-center py-2 my-2 mt-4'>
                    {/* java script */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <JSIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Java Script</li>
                    </ul>

                    {/* react js */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <ReactIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>React Js</li>
                    </ul>

                    {/* next js */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <NextJsIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Next Js</li>
                    </ul>
                    {/* node js */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <NodeIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Node Js</li>                </ul>
                    {/* express js */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <ExpressIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Express Js</li>
                    </ul>
                    {/* Nest js */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <NestIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Nest Js</li>
                    </ul>
                    {/* html */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <HtmlIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>HTML</li>
                    </ul>
                    {/* css */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <CssIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Css</li>
                    </ul>
                    {/* tailwind css */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <TailwindCssIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Tailwind Css</li>
                    </ul>
                    {/* Mongo db */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <MongoDBIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Mongo DB</li>
                    </ul>
                    {/* MySql */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <MySqlIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>MySql</li>
                    </ul>
                    {/* Neo4j */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <Neo4JIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Neo4j</li>
                    </ul>
                    {/* Figma */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <FigmaIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Figma</li>
                    </ul>
                    {/* Git */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <GitIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Git Hub</li>
                    </ul>
                    {/* Type script */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <TypeScriptIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Type Script</li>
                    </ul>
                    {/* Python */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <PythonIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Python</li>
                    </ul>
                    {/* Django */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <DjangoIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Django</li>
                    </ul>


                    {/* Flask */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <FlaskIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Flask</li>
                    </ul>

                    {/* Web3 */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <Web3Ico height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Web3.0</li>
                    </ul>

                    {/* truffle */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <TruffleIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Truffle</li>
                    </ul>

                    {/* ganache */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <GanachIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Ganache</li>
                    </ul>

                    {/* Java */}
                    <ul className='w-auto p-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[100px] max-w-[150px] cursor-pointer'>
                        <li>
                            <JavaIco height={50} width={50} />
                        </li>
                        <li className='text-black_c_1 text-sm truncate'>Java</li>
                    </ul>

                </div>
            </div >
        </>
    )
}

export default Skills
