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

const Page = () => {
    const images = [
        "add-new-contact.png",
        "add-quick-access.png",
        "audio-recorder.png",
        "bookmark-card-view.png",
        "bookmark-inner-page.png",
        "bookmark-search.png",
        "bookmark-with-filter.png",
        "bookmark1.png",
        "cearte-bookmark2.png",
        "chat-page.png",
        "chat-page2.png",
        "Computer-home-page.png",
        "create-bookmark.png",
        "create-group.png",
        "create-meeting (2).png",
        "create-meeting.png",
        "edit-bookmark (2).png",
        "edit-bookmark.png",
        "edit-meeeting.png",
        "edit-meeting (2).png",
        "edit-meeting.png",
        "edit-quick-access.png",
        "filter.png",
        "forget-password.png",
        "group-profile-3.png",
        "group-profile1.png",
        "group-profile2 (2).png",
        "group-profile2.png",
        "group_message.png",
        "log-in.png",
        "meeting-inner-page.png",
        "meeting-innerpage.png",
        "meeting-with-filters.png",
        "meeting.png",
        "message.png",
        "message2.png",
        "mobile-home-page.png",
        "options.png",
        "profile-edit.png",
        "profile.png",
        "profile1.png",
        "profile2.png",
        "Screenshot 2023-11-20 060919.png",
        "Screenshot 2023-11-20 061017.png",
        "sign-up.png",
        "video-recorder.png",
    ]
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

                {/* Introduction */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Introduction</h1>
                    <p className='p-2 text-justify'>
                        The Advance To-Do List web app allows a user to create, read, update or delete to-do tasks.Its user-friendly interface includes a secure login system to protect user data. The app features pagination for easy navigation through tasks, ensuring a smooth user experience, especially with a large number of entries. The search functionality allows users to quickly locate specific tasks by task name. Furthermore, users can filter tasks based on their status, distinguishing between active and completed tasks.
                    </p>
                </div>

                {/* features */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Key Features</h1>
                    <ul className='p-2'>
                        <li>Create, Read, Update or Delete to-do tasks</li>
                        <li>Secured login system</li>
                        <li>Search functionality based on to-do task name</li>
                        <li>Pagination</li>
                        <li>Filter to-do task by status</li>
                        <li>Delete and un-do completed to-do task</li>
                    </ul>
                </div>

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
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Video Demo</h1>
                    <div className='w-full flex justify-center items-center my-2'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/TbZwKGdO9SI?si=T7uOt42CysQE1OBn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>

                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Images</h1>
                    <div className='columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            images?.map((img, i) => {
                                return (
                                    <div className='w-full h-auto my-1 inline-block rounded-lg overflow-hidden border shadow-lg cursor-pointer' key={i}>
                                        <img
                                            src={`/images/DailyDash/${img}`}
                                            alt={img}
                                            className='object-cover border'
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <DetailedPageFooter />

            </div>
        </div >
    )
}

export default Page