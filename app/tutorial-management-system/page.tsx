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
import ScrollToTop from '@/Components/GlobalComponents/ScrollToTop'

const Page = () => {
    const images = [
        "LoginPage.jpeg",
        "HomePageDesktop.png",
        "HomePage.jpeg",
        "StudentsDetailsForm.jpeg",
        "ParentsDetailsForm.jpeg",
        "OtherDetailsForm.jpeg",
        "OtherDetailsForm2.jpeg",
        "student_details_page.png",
        "StudentDetailsUpdateForm.jpeg",
        "AddClass.jpeg",
        "AddTeacherForm.jpeg",
        "TeachersDetails.jpeg",
        "UpdateFeeForm.jpeg",
        "FeeDetails.jpeg",
        "Messages.jpeg",
    ]
    return (
        <div className='w-full h-auto flex items-start justify-center bg-white text-black_c_1'>
            <ScrollToTop />
            <div className='h-auto w-full 2xl:w-4/5 p-2'>
                <nav className='w-full h-auto '>
                    <div className={`text-lg sm:text-2xl font-semibold ${philosopher.className}`}>
                        Tutorial Management System
                    </div>
                </nav>

                <div className='my-4'>
                    <img
                        src={"/images/TutorialManagementSystem/HomePage.jpeg"} alt=''
                        className='w-full h-auto object-contain'
                    />
                </div>

                {/* action */}
                <div className='my-4'>
                    <ul className='w-full flex items-start'>
                        <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_TUTORIAL_MANAGEMENT_SYSTEM_GIT_FRONTEND_CODE, "_blank")
                            }}
                        >
                            <GitIco height={20} width={20} />
                        </li>
                        <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_TUTORIAL_MANAGEMENT_SYSTEM_GIT_BACKEND_CODE, "_blank")
                            }}
                        >
                            <GitIco height={20} width={20} />
                        </li>
                        <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_TUTORIAL_MANAGEMENT_SYSTEM_LIVE, "_blank")
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
                        Tutorial Management System is a project has some objective to be proficient suitable for most
                        of the training center , it manages job of admin in admission of new student record ,updating fee
                        of existing student and teachers by allocating them a classes .This help admin of respective
                        tutorial go paperless and effortless in searching records.</p>
                </div>

                {/* features */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Key Features</h1>
                    <ul className='p-2'>
                        <li>Separate Admin, Teachers and Students page</li>
                        <li>Fee Management</li>
                        <li>Allocating classes to students</li>
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
                                <JSIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Java Script</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <ReactIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>React Js</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <NodeIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Node Js</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <ExpressIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Express Js</li>
                        </ul>
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <MySqlIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>MySql</li>
                        </ul>
                    </div>
                </div>

                {/* video demo */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Video Demo</h1>
                    <div className='w-full flex justify-center items-center my-2'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TbZwKGdO9SI?si=T7uOt42CysQE1OBn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                    </div>
                </div>

                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Images</h1>
                    <div className='columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            images?.map((img, i) => {
                                return (
                                    <div className='w-full h-auto my-1 inline-block rounded-lg overflow-hidden border shadow-lg cursor-pointer' key={i}>
                                        <img
                                            src={`/images/TutorialManagementSystem/${img}`}
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
        </div>
    )
}

export default Page