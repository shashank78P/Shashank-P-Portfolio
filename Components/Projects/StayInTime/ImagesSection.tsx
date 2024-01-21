import React from 'react'
import { EmployeePages, JobTitlePages, OrganizationPages, TeamsPages, UsersPages } from './type'
import { philosopher } from '@/app/philosopher'

const ImagesSection = () => {
    return (
        <div className='my-4'>
            <h1 className={`text-lg ${philosopher.className}`}>Images</h1>

            <ul className='w-full mb-2'>
                <li className='text-base font-semibold'>Stay In Time</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            UsersPages?.map((img, i) => {
                                return (
                                    <div className='w-full h-auto my-1 inline-block rounded-lg overflow-hidden border shadow-lg cursor-pointer' key={i}>
                                        <img
                                            src={`/images/StayInTime/${img}`}
                                            alt={img}
                                            className='object-cover border'
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </li>
            </ul>

            <ul className='w-full mb-4'>
                <li className='text-base font-semibold'>Organization</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            OrganizationPages?.map((img, i) => {
                                return (
                                    <div className='w-full h-auto my-1 inline-block rounded-lg overflow-hidden border shadow-lg cursor-pointer' key={i}>
                                        <img
                                            src={`/images/StayInTime/${img}`}
                                            alt={img}
                                            className='object-cover border'
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </li>
            </ul>
            <ul className='w-full mb-4'>
                <li className='text-base font-semibold'>Job Title Page</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            JobTitlePages?.map((img, i) => {
                                return (
                                    <div className='w-full h-auto my-1 inline-block rounded-lg overflow-hidden border shadow-lg cursor-pointer' key={i}>
                                        <img
                                            src={`/images/StayInTime/${img}`}
                                            alt={img}
                                            className='object-cover border'
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </li>
            </ul>
            
            {/* Teams Page */}
            <ul className='w-full mb-4'>
                <li className='text-base font-semibold'>Teams Page</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            TeamsPages?.map((img, i) => {
                                return (
                                    <div className='w-full h-auto my-1 inline-block rounded-lg overflow-hidden border shadow-lg cursor-pointer' key={i}>
                                        <img
                                            src={`/images/StayInTime/${img}`}
                                            alt={img}
                                            className='object-cover border'
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </li>
            </ul>
            
            {/* Employee Page */}
            <ul className='w-full mb-4'>
                <li className='text-base font-semibold'>Employee Page</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            EmployeePages?.map((img, i) => {
                                return (
                                    <div className='w-full h-auto my-1 inline-block rounded-lg overflow-hidden border shadow-lg cursor-pointer' key={i}>
                                        <img
                                            src={`/images/StayInTime/${img}`}
                                            alt={img}
                                            className='object-cover border'
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default ImagesSection
