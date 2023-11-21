"use client"
import React from 'react'
import { philosopher } from '../philosopher'
import HtmlIco from '@/Components/assets/HtmlIco'
import CssIco from '@/Components/assets/CssIco'
import JSIco from '@/Components/assets/JSIco'
import ReactIco from '@/Components/assets/ReactIco'
import NodeIco from '@/Components/assets/NodeIco'
import ExpressIco from '@/Components/assets/ExpressIco'
import MySqlIco from '@/Components/assets/MySqlIco'
import DetailedPageFooter from '@/Components/GlobalComponents/DetailedPageFooter'
import GitIco from '@/Components/assets/GitIco'
import EyeIco from '@/Components/assets/EyeIco'
import MongoDBIco from '@/Components/assets/MongoDBIco'
import ArrowIco from '@/Components/assets/ArrowIco'
import ScrollToTop from '@/Components/GlobalComponents/ScrollToTop'
import NextJsIco from '@/Components/assets/NextJsIco'
import NestIco from '@/Components/assets/NestIco'
import TailwindCssIco from '@/Components/assets/TailwindCssIco'
import TypeScriptIco from '@/Components/assets/TypeScriptIco'
import { bookMark, chat, meeting, quickAccess } from '@/Components/Projects/DailyDash/type'
import ImagesSection from '@/Components/Projects/DailyDash/ImagesSection'
import VideoSection from '@/Components/Projects/DailyDash/VideoSection'
import Features from '@/Components/Projects/DailyDash/Features'

const Page = () => {

    return (
        <div className='w-full h-auto flex items-start justify-center bg-white text-black_c_1 '>
            <ScrollToTop />
            <div className='h-auto w-full 2xl:w-4/5 p-2'>
                <nav className='w-full h-auto '>
                    <div className={`text-lg sm:text-2xl font-semibold ${philosopher.className}`}>
                        Daily Dash
                    </div>
                </nav>

                <div className='my-4'>
                    <img
                        src={"/images/DailyDash/Computer-home-page.png"} alt=''
                        className='w-full h-auto object-contain'
                    />
                </div>

                {/* action */}
                <div className='my-4'>
                    <ul className='w-full flex items-start'>
                        <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_DAILY_DASH_GIT_FRONTEND_CODE, "_blank")
                            }}
                        >
                            <GitIco height={20} width={20} />
                        </li>
                        <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_DAILY_DASH_GIT_BACKEND_CODE, "_blank")
                            }}
                        >
                            <GitIco height={20} width={20} />
                        </li>
                        <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_DAILY_DASH_LIVE, "_blank")
                            }}
                        >
                            <EyeIco height={20} width={20} />
                        </li>
                    </ul>
                </div>

                {/* email - password  */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>{"To explore the project's features, you can use the provided demo account:"}</h1>
                    <ul className='p-2 text-justify'>
                        <li>email: testdailydash@gmail.com</li>
                        <li>password: A&5ErFs7$n-V.*!</li>
                    </ul>
                </div>

                {/* Introduction */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Introduction</h1>
                    <p className='p-2 text-justify'>
                        The Advance To-Do List web app allows a user to create, read, update or delete to-do tasks.Its user-friendly interface includes a secure login system to protect user data. The app features pagination for easy navigation through tasks, ensuring a smooth user experience, especially with a large number of entries. The search functionality allows users to quickly locate specific tasks by task name. Furthermore, users can filter tasks based on their status, distinguishing between active and completed tasks.
                    </p>
                </div>

                {/* features */}
                <Features />

                {/* technologies used */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Technologies Used</h1>
                    <div className='flex justify-center items-center flex-wrap'>
                        <ul className='border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <HtmlIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>HTML</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <CssIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>CSS</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <TailwindCssIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Tailwind Css</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <JSIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Java Script</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <TypeScriptIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Type Script</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <NextJsIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Next Js</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <NodeIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Node Js</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <NestIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Nest Js</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <MongoDBIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Mongo DB</li>
                        </ul>
                    </div>
                </div>

                {/* video demo */}
                <VideoSection />

                <ImagesSection />

                <DetailedPageFooter />

            </div>
        </div >
    )
}

export default Page