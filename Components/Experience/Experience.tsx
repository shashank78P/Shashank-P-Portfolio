import React, { useContext, useEffect, useRef } from 'react'
import SectionTitle from '../GlobalComponents/SectionTitle'
import { GlobalContext } from '../Context/GlobalContext';
import { GlobalContextDto } from '../Context/type';
import UseIsVisible from '../GlobalComponents/UseIsVisible';
import { experienceDetails, experienceDetailsDto } from './type';
import { philosopher } from '@/app/philosopher';
import FileIco from '../assets/FileIco';
import CertificateIco from '../assets/CertificateIco';

const Experience = () => {
    const { setCurrentSectionInView } = useContext<GlobalContextDto>(GlobalContext)
    const experienceRef = useRef<HTMLDivElement>(null);
    const is_visible = UseIsVisible(experienceRef);

    useEffect(() => {
        if (is_visible) {
            setCurrentSectionInView((prev: string[]) => {
                if (prev?.includes("experience")) {
                    return prev
                } else {
                    return [...prev, "experience"]
                }
            })
        } else {
            setCurrentSectionInView((prev: string[]) => prev.filter((ele) => ele != "experience"))
        }
    }, [is_visible])
    return (
        <div className=' my-10 ' ref={experienceRef} id="experience" >
            <SectionTitle height={2} width={70} title='Experience' />
            <div className='w-full flex justify-center items-center p-5'>
                <div className=' px-2 border-l-2 '>
                    {
                        experienceDetails?.map((data: experienceDetailsDto, i) => {
                            return (
                                <ul className='max-w-[500px] min-w-[200px] cursor-pointer border mx-2 my-4 p-4 relative shadow-md rounded-sm before:content-[""] before:absolute before:w-5 before:h-5 before:border before:rounded-full before:bg-gold b before:-left-7 before:-top-1 before:shadow-sm before:shadow-gold before:cursor-pointer' key={i}>
                                    <li className='my-1 text-gold font-medium text-base'>{data?.workPeriod}</li>
                                    <li className={` ${philosopher.className} my-1 text-lg font-medium`}>{data?.role}</li>
                                    <ul className='flex items-center'>
                                        <li className=' border p-1 rounded-md my-1  mr-2 font-light text-sm'>{data?.jobType}</li>
                                        <li className=' border p-1 rounded-md my-1 font-light text-sm'>{data?.workingMode}</li>
                                    </ul>
                                    <li className='my-1 text-sm font-light text-justify'>
                                        <ul className='my-1'>
                                            {
                                                data?.description?.map((description, j) => {
                                                    return (
                                                        <>
                                                            <li className="py-0.5"  key={j}>{j + 1}. {description} </li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    {(data?.certificate || data?.report) && <li className='my-2'>
                                        <ul className='w-full my-1 flex justify-start items-center'>
                                            {data?.certificate && <li
                                                className=' mr-2 cursor-pointer'
                                                onClick={() => {
                                                    window.open(data?.certificate, "_blank")
                                                }}
                                            >
                                                <CertificateIco height={20} width={20} />
                                            </li>}
                                            {data?.report && <li
                                                className=' cursor-pointer'
                                                onClick={() => {
                                                    window.open(data?.report, "_blank")
                                                }}
                                            >
                                                <FileIco height={20} width={20} />
                                            </li>}
                                        </ul>
                                    </li>}
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
