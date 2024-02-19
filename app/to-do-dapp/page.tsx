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
import ImagesSection from '@/Components/Projects/OrgAttend/ImagesSection'
// import VideoSection from '@/Components/Projects/DailyDash/VideoSection'
import Features from '@/Components/Projects/OrgAttend/Features'
import TailwindCssIco from '@/Components/assets/TailwindCssIco'
import Web3Ico from '@/Components/assets/Web3Ico'
import TruffleIco from '@/Components/assets/TruffleIco'
import GanachIco from '@/Components/assets/GanachIco'
import ReactIco from '@/Components/assets/ReactIco'
import NextJsIco from '@/Components/assets/NextJsIco'

const Page = () => {

    return (
        <div className='w-full h-auto flex items-start justify-center bg-white text-black_c_1 '>
            <ScrollToTop />
            <div className='h-auto w-full 2xl:w-4/5 p-2'>
                <nav className='w-full h-auto '>
                    <div className={`text-lg sm:text-2xl font-semibold ${philosopher.className}`}>
                        ToDo Dpp
                    </div>
                </nav>

                <div className='my-4 '>
                    <img
                        src={"/images/ToDoDapp/ToDoDapp.png"} alt=''
                        className='w-full h-auto object-contain'
                    />
                </div>

                {/* action */}
                <div className='my-4'>
                    <ul className='w-full flex items-start'>
                        <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_DAILY_DASH_GIT_CODE, "_blank")
                            }}
                        >
                            <GitIco height={20} width={20} />
                        </li>
                        {/* <li
                            className='mx-2 p-2 shadow-sm border rounded-full hover:bg-slate-100'
                            onClick={() => {
                                window.open(process.env.NEXT_PUBLIC_DAILY_DASH_GIT_BACKEND_CODE, "_blank")
                            }}
                        >
                            <GitIco height={20} width={20} />
                        </li> */}
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo assumenda praesentium suscipit facilis perferendis, magni harum tenetur vero modi sit ex distinctio delectus. Velit accusamus quisquam laborum ipsa molestias nam.
                    </p>
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
                                <ReactIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Rect.js</li>
                        </ul>

                        {/* Next.js */}
                        <ul className='border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <NextJsIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Next.js</li>
                        </ul>

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

                        {/* tailwind */}
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <TailwindCssIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Tailwind Css</li>
                        </ul>

                        {/* JS */}
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <JSIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Java Script</li>
                        </ul>

                        {/* Web3 */}
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <Web3Ico height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Web 3.0</li>
                        </ul>

                        {/* Truffle */}
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <TruffleIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Truffle</li>
                        </ul>

                        {/* Ganache */}
                        <ul className=' border border-slate-100 w-auto p-2 m-2 flex flex-col justify-center items-center rounded-lg shadow-xl min-w-[80px] max-w-[100px] cursor-pointer'>
                            <li>
                                <GanachIco height={40} width={40} />
                            </li>
                            <li className='text-black_c_1 text-sm truncate'>Ganache</li>
                        </ul>

                    </div>
                </div>

                {/* video demo */}
                {/* <VideoSection /> */}

                <DetailedPageFooter />

            </div>
        </div >
    )
}

export default Page