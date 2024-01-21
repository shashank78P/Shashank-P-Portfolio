"use client"
import React from 'react'
import { philosopher } from '../philosopher'
import HtmlIco from '@/Components/assets/HtmlIco'
import CssIco from '@/Components/assets/CssIco'
import JSIco from '@/Components/assets/JSIco'
import DetailedPageFooter from '@/Components/GlobalComponents/DetailedPageFooter'
import GitIco from '@/Components/assets/GitIco'
import EyeIco from '@/Components/assets/EyeIco'
import ScrollToTop from '@/Components/GlobalComponents/ScrollToTop'
import DjangoIco from '@/Components/assets/DjangoIco'
import ImagesSection from '@/Components/Projects/StayInTime/ImagesSection'
// import VideoSection from '@/Components/Projects/DailyDash/VideoSection'
// import Features from '@/Components/Projects/DailyDash/Features'

const Page = () => {

    return (
        <div className='w-full h-auto flex items-start justify-center bg-white text-black_c_1 '>
            <ScrollToTop />
            <div className='h-auto w-full 2xl:w-4/5 p-2'>
                <nav className='w-full h-auto '>
                    <div className={`text-lg sm:text-2xl font-semibold ${philosopher.className}`}>
                        Stay In Time
                    </div>
                </nav>

                <div className='my-4 '>
                    <img
                        src={"/images/StayInTime/UserHomePage.png"} alt=''
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
                        {/* <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_DAILY_DASH_LIVE, "_blank")
                            }}
                        >
                            <EyeIco height={20} width={20} />
                        </li> */}
                    </ul>
                </div>

                {/* Introduction */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Introduction</h1>
                    <p className='p-2 text-justify'>
                    DailyDash is a dynamic project I contributed to, offering a versatile communication and productivity platform. Leveraging JWT token authentication, it ensures secure user logins while monitoring device activity. Users can register manually, via Google, and manage their device logins effectively. The platform integrates quick access features, bookmark organization with sorting and filtering capabilities, and a robust chat system supporting private conversations, file sharing, and group interactions. Additionally, DailyDash facilitates seamless scheduled meetings with email notifications, real-time chat, multimedia sharing, and participant engagement features. My involvement encompassed feature design, implementation, and user experience enhancements within the DailyDash project.                    </p>
                </div>

                {/* features */}
                {/* <Features /> */}

                {/* technologies used */}
                <div className='my-4'>
                    <h1 className={`text-lg ${philosopher.className}`}>Technologies Used</h1>
                    <div className='flex justify-center items-center flex-wrap'>

                        {/* HTML */}
                        <ul className='border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <HtmlIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>HTML</li>
                        </ul>
                        
                        {/* CSS */}
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <CssIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>CSS</li>
                        </ul>
                        
                        {/* JS */}
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <JSIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Java Script</li>
                        </ul>
                        
                        {/* Django */}
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <DjangoIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Django</li>
                        </ul>
                        
                    </div>
                </div>

                {/* video demo */}
                {/* <VideoSection /> */}

                <ImagesSection />

                <DetailedPageFooter />

            </div>
        </div >
    )
}

export default Page