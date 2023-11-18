import { philosopher } from '@/app/philosopher'
import React, { useContext, useEffect, useRef } from 'react'
import LinkedInIco from '../assets/LinkedInIco'
import GitIco from '../assets/GitIco'
import MessageCoverIco from '../assets/MessageCoverIco'
import { GlobalContext } from '../Context/GlobalContext'
import { GlobalContextDto } from '../Context/type'
import UseIsVisible from '../GlobalComponents/UseIsVisible'
import YouTubeIco from '../assets/YouTubeIco'
import Link from 'next/link'

const Hero = () => {
    const { setCurrentSectionInView } = useContext<GlobalContextDto>(GlobalContext)
    const homeRef = useRef<HTMLDivElement>(null);
    const is_visible = UseIsVisible(homeRef);

    useEffect(() => {
        if (is_visible) {
            setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("home")) {
                    return prev
                } else {
                    return [...prev, "home"]
                }
            })
        } else {
            setCurrentSectionInView((prev: string[]) => prev.filter((ele) => ele != "home"))
        }
    }, [is_visible])
    return (
        <div ref={homeRef} className='w-full h-auto grid grid-cols-1 md:grid-cols-2 content-center justify-center items-center' id='home'>
            <div className='h-auto w-full md:hidden flex justify-center items-center object-cover p-2'>
                <img src={"/images/HeroSection.png"} alt='Shashank P' className='object-contain ' />
            </div>
            <div className='w-full max-w-lg p-2 px-4 md:px-2 grid content-center'>
                <h1 className={`${philosopher.className} text-black_c_1 text-3xl md:text-4xl my-3`}>
                    Hello, I’m<br />
                    Shashank P An <br />
                    Full Stack Developer
                </h1>
                <p className='text-black_c_1 text-sm my-3 text-justify'>
                    To seek an intellectually challenging job in where my knowledge and skills can be honed by working with the latest
                    technologies and contribute towards the goals of the organization.
                </p>
                <div className=' flex w-full my-3' >
                    {/* <button className='p-2 text-white bg-black_c_1 rounded-lg font-medium mr-2'>
                        Hire Me
                    </button> */}
                    <Link href={process.env.NEXT_PUBLIC_RESUME ?? ""} download={true} className='p-2 text-sm text-white bg-black_c_1 rounded-lg font-medium mr-2'>
                        Download CV
                    </Link>
                </div>
                <ul className='flex items-center my-3'>
                    <li className='mr-2'
                        onClick={() => {
                            window.open(process.env.NEXT_PUBLIC_LINKED_IN, "_blank")
                        }}
                    ><LinkedInIco width={20} height={19} /></li>
                    <li className='mr-2'
                        onClick={() => {
                            window.open(process.env.NEXT_PUBLIC_GIT_HUB, "_blank")
                        }}
                    ><GitIco width={21} height={20} /></li>
                    <li className='mr-2'
                        onClick={() => {
                            window.open(process.env.NEXT_PUBLIC_YOU_TUBE, "_blank")
                        }}
                    ><YouTubeIco width={25} height={20} /></li>
                </ul>
            </div>
            <div className='h-auto w-full hidden  md:flex justify-center items-center object-cover p-2'>
                <img src={"/images/HeroSection.png"} alt='Shashank P' height={500} className='' />
            </div>
        </div>
    )
}

export default Hero
