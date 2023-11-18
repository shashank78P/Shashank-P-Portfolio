import React, { useContext, useEffect, useRef } from 'react'
import MessageCoverIco from '../assets/MessageCoverIco'
import GitIco from '../assets/GitIco'
import LinkedInIco from '../assets/LinkedInIco'
import SectionTitle from '../GlobalComponents/SectionTitle'
import { GlobalContext } from '../Context/GlobalContext'
import { GlobalContextDto } from '../Context/type'
import UseIsVisible from '../GlobalComponents/UseIsVisible'
import LocationIco from '../assets/LocationIco'
import CallIco from '../assets/CallIco'
import YouTubeIco from '../assets/YouTubeIco'

const Footer = () => {
    const { setCurrentSectionInView } = useContext<GlobalContextDto>(GlobalContext)
    const footerRef = useRef<HTMLDivElement>(null);
    const is_visible = UseIsVisible(footerRef);

    useEffect(() => {
        if (is_visible) {
            setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("contact_me")) {
                    return prev
                } else {
                    return [...prev, "contact_me"]
                }
            })
        } else {
            setCurrentSectionInView((prev: string[]) => prev.filter((ele) => ele != "contact_me"))
        }
    }, [is_visible])
    return (
        <>
            <div className='my-10 ' id="contact_me" ref={footerRef}>
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
            </div>
        </>
    )
}

export default Footer
