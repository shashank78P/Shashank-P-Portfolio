import { philosopher } from '@/app/philosopher'
import React from 'react'

const SectionTitle = ({ title, height, width }: { title: string, width: number, height: number }) => {
    return (
        <div className={`w-full h-auto flex flex-col justify-center items-center mb-2 mt-4 ${philosopher.className}`} >
            <span className='w-auto text-gold font-bold text-xl text-center'>{title}</span>
            <span
                className={`bg-gold mt-1 ml-2 rounded-sm`}
                style={{
                    "width" : width,
                    "height" : height,
            }}
            ></span>
        </div>
    )
}

export default SectionTitle
