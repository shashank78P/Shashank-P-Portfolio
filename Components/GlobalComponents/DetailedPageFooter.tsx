"use client"
import React from 'react'
import CallIco from '../assets/CallIco'
import GitIco from '../assets/GitIco'
import LinkedInIco from '../assets/LinkedInIco'
import LocationIco from '../assets/LocationIco'
import MessageCoverIco from '../assets/MessageCoverIco'
import YouTubeIco from '../assets/YouTubeIco'
import SectionTitle from './SectionTitle'

const DetailedPageFooter = () => {
    return (
        <>
            <SectionTitle height={3} title='Contact Me' width={75} />

            <ul className='w-full my-2 mt-4 flex justify-center items-center flex-wrap'>
                <li className='flex justify-center items-center p-2 border rounded-lg m-2 bg-black_c_1 text-white'>
                    <span><MessageCoverIco height={20} width={20} color='white' /></span>
                    <span className='ml-2 text-sm'>19.shashank.p@gmail.com</span>
                </li>
                <li className='flex justify-center items-center p-2 border rounded-lg m-2 bg-black_c_1 text-white'>
                    <span><LocationIco height={20} width={20} color='white' /></span>
                    <span className='ml-2 text-sm'>Bengaluru, Karnataka, India</span>
                </li>
            </ul>
            <ul className='w-full my-2 flex justify-center items-center '>
                <li className='flex justify-center items-center p-2 border rounded-lg m-2 bg-black_c_1 text-white'>
                    <span>
                        <CallIco height={20} width={20} color='white' />
                    </span>
                    <span className='ml-2 text-sm'>+91 8970364828</span>
                </li>
            </ul>

            <ul className='w-full my-2 flex justify-center items-center '>
                <li className='m-2 cursor-pointer'
                    onClick={() => {
                        window.open(process.env.NEXT_PUBLIC_LINKED_IN, "_blank")
                    }}
                >
                    <LinkedInIco height={20} width={20} />
                </li>
                <li className='m-2 cursor-pointer'
                    onClick={() => {
                        window.open(process.env.NEXT_PUBLIC_GIT_HUB, "_blank")
                    }}
                >
                    <GitIco height={21} width={25} />
                </li>
                <li className='m-2 cursor-pointer'
                    onClick={() => {
                        window.open(process.env.NEXT_PUBLIC_YOU_TUBE, "_blank")
                    }}
                >
                    <YouTubeIco height={20} width={25} />
                </li>
            </ul>
        </>
    )
}

export default DetailedPageFooter
