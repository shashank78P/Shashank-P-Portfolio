import React from 'react'
import { bookMark, chat, meeting, quickAccess } from './type'
import { philosopher } from '@/app/philosopher'

const ImagesSection = () => {
    return (
        <div className='my-4'>
            <h1 className={`text-lg ${philosopher.className}`}>Images</h1>

            <ul className='w-full mb-2'>
                <li className='text-base font-semibold'>DailyDash</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            quickAccess?.map((img, i) => {
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
                </li>
            </ul>

            <ul className='w-full mb-4'>
                <li className='text-base font-semibold'>Bookmark</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            bookMark?.map((img, i) => {
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
                </li>
            </ul>
            <ul className='w-full mb-4'>
                <li className='text-base font-semibold'>Chat</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            chat?.map((img, i) => {
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
                </li>
            </ul>
            {/* meeting */}
            <ul className='w-full mb-4'>
                <li className='text-base font-semibold'>Meeting</li>
                <li className='w-full'>
                    <div className=' w-full columns-2 md:columns-3 lg:columns-4 gap-3 p-2'>
                        {
                            meeting?.map((img, i) => {
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
                </li>
            </ul>

        </div>
    )
}

export default ImagesSection
