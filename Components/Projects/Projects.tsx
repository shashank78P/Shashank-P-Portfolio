import React, { useContext, useEffect, useRef, useState } from 'react'
import SectionTitle from '../GlobalComponents/SectionTitle'
import { philosopher } from '@/app/philosopher'
import UseIsVisible from '../GlobalComponents/UseIsVisible'
import { GlobalContext } from '../Context/GlobalContext'
import { GlobalContextDto } from '../Context/type'
import { projectDto, projectsData } from './type'
import Link from 'next/link'
import EyeIco from '../assets/EyeIco'

const Projects = () => {
    const { setCurrentSectionInView } = useContext<GlobalContextDto>(GlobalContext)
    const projectRef = useRef<HTMLDivElement>(null);
    const is_visible = UseIsVisible(projectRef);

    useEffect(() => {
        if (is_visible) {
            setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("projects")) {
                    return prev
                } else {
                    return [...prev, "projects"]
                }
            })
        } else {
            setCurrentSectionInView((prev: string[]) => prev.filter((ele) => ele != "projects"))
        }
    }, [is_visible])

    return (
        <>
            <div id='projects' className=' w-full p-5 sm:p-10 pb-10' ref={projectRef} >
                <SectionTitle height={2} width={70} title='My Projects' />

                {
                    projectsData?.map((project: projectDto, i: number) => {
                        if (i % 2 == 0) {
                            return (
                                <>
                                    <div className='w-full h-[500px] sm:h-[400px] my-2 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 p-2 gap-2 content-center mt-14 relative'>
                                        <div className=' w-full flex justify-center sm:justify-start items-center '>
                                            <div className='min-w-[200px] max-h-[400px] min-h-[200px] max-w-[400px] h-full border-8 border-gold rounded-lg relative overflow-visible shadow-xl aspect-square'>
                                                <div className='min-w-[200px] max-h-[400px] min-h-[200px] max-w-[400px] w-full h-full bg-slate-100  rounded-lg absolute bottom-5 -right-5 shadow-2xl overflow-hidden'>
                                                    <div className={`min-w-[200px]  max-h-[250px] sm:max-h-[400px] min-h-[200px] max-w-[400px] w-full ${project?.isImageAllowToScroll ? "overflow-y-scroll h-auto" : " h-full "} `}>
                                                        <img src={project?.imageUrl ? project?.imageUrl : '/images/HeroSection.png'} alt='herosection' className={`w-full h-full ${project?.isImageAllowToScroll ? " object-cover " : " object-contain "} `} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full h-full pl-2 sm:pl-7 pr-2 flex flex-col justify-center items-start'>
                                            <h1 className={`${philosopher.className} text-black_c_1 text-2xl sm:text-3xl md:text-4xl `}>
                                                {project?.Title}
                                            </h1>
                                            <p className='w-full max-h-[200px] min-h-[100px] text-black_c_1 text-sm my-2 text-justify line-clamp-4'>
                                                {project?.description}
                                            </p>
                                            <div className='flex items-center'>
                                                <Link href={`/${project?.route}`} className='p-2 text-white bg-black_c_1  rounded-lg font-medium my-2'>
                                                    Read more
                                                </Link >
                                                <span className='ml-4 p-2 border rounded-full bg-black_c_1 cursor-pointer'
                                                    onClick={() => {
                                                        window?.open(project?.live, "_blank")
                                                    }}
                                                >
                                                    <EyeIco height={25} width={25} color='white' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <div className='w-full h-[500px] sm:h-[400px] my-2 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 p-2 gap-2 content-center mt-14 relative'>
                                        <div className=' w-full sm:hidden flex justify-center items-center '>
                                            <div className='min-w-[200px] max-h-[400px] min-h-[200px] max-w-[400px]  h-full border-8 border-gold rounded-lg relative overflow-visible shadow-xl aspect-square'>
                                                <div className='min-w-[200px] max-h-[400px] min-h-[200px] max-w-[400px] w-full h-full bg-slate-100  rounded-lg absolute bottom-5 -right-5 shadow-2xl overflow-hidden'>
                                                    <div className={` min-w-[200px] max-h-[250px] min-h-[200px] max-w-[400px] w-full ${project?.isImageAllowToScroll ? " overflow-y-scroll h-auto" : " h-full "} `}>
                                                        <img src={project?.imageUrl ? project?.imageUrl : '/images/HeroSection.png'} alt='herosection' className={` w-full h-full ${project?.isImageAllowToScroll ? " object-cover " : " object-contain "} `} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full h-full pl-2 sm:pl-7 pr-2 flex flex-col justify-center items-start'>
                                            <h1 className={`${philosopher.className} text-black_c_1 text-2xl sm:text-3xl md:text-4xl`}>
                                                {project?.Title}
                                            </h1>
                                            <p className='w-full max-h-[200px] min-h-[100px] text-black_c_1  text-sm my-2 text-justify line-clamp-4'>
                                                {project?.description}
                                            </p>
                                            <div className='flex items-center'>
                                                <Link href={`/${project?.route}`} className='p-2 text-white bg-black_c_1  rounded-lg font-medium my-2'>
                                                    Read more
                                                </Link >
                                                <span className='ml-4 p-2 border rounded-full bg-black_c_1 cursor-pointer'
                                                    onClick={() => {
                                                        window?.open(project?.live, "_blank")
                                                    }}
                                                >
                                                    <EyeIco height={25} width={25} color='white' />
                                                </span>
                                            </div>

                                        </div>
                                        <div className=' w-full hidden sm:flex justify-end items-center '>
                                            <div className='min-w-[200px] max-h-[400px] min-h-[200px] max-w-[400px]  h-full border-8 border-gold rounded-lg relative overflow-visible shadow-xl aspect-square'>
                                                <div className='min-w-[200px] max-h-[400px] min-h-[200px] max-w-[400px] w-full h-full bg-slate-100  rounded-lg absolute bottom-5 -right-5 shadow-2xl overflow-hidden'>
                                                    <div className={` min-w-[200px] max-h-[400px] min-h-[200px] max-w-[400px] w-full ${project?.isImageAllowToScroll ? " h-auto overflow-y-scroll " : " h-full "} `}>
                                                        <img src={project?.imageUrl ? project?.imageUrl : '/images/HeroSection.png'} alt='herosection' className={` w-full h-full ${project?.isImageAllowToScroll ? " object-cover " : " object-contain "} `} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default Projects
