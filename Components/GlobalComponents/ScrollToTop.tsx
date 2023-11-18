"use client"
import React from 'react'
import ArrowIco from '../assets/ArrowIco'

const ScrollToTop = () => {
    return (
        <div className='p-2 bg-slate-100 border rounded-full fixed bottom-5 right-5 cursor-pointer'
            onClick={() => {
                window.scrollTo(0, 0)
            }}
        >
            <ArrowIco height={20} width={20} />
        </div>
    )
}

export default ScrollToTop
