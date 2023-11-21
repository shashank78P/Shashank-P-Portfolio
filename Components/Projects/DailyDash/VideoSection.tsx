import { philosopher } from '@/app/philosopher'
import React from 'react'

const VideoSection = () => {
    return (
        <div className='my-4'>
            <h1 className={`text-lg ${philosopher.className}`}>Video Demo</h1>

            <div className='my-2'>
                <h1 className={`text-base ml-2`}>Daily Dash - login , sign up , reset-password , Quick Access</h1>
                <div className='w-full flex justify-center items-center my-2'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ooq6qw0R6YI?si=FEZJzeMnUSXbBl93" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>

        </div>
    )
}

export default VideoSection
