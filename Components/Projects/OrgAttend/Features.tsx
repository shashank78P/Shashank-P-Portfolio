import { philosopher } from '@/app/philosopher'
import React from 'react'

const Features = () => {
    return (
        <div className='my-4'>
            <h1 className={`text-lg ${philosopher.className}`}>Key Features</h1>

            <ul className='mb-2 pl-2 text-base font-medium'>
                <li className='list-disc'>Effortlessly switch between multiple organizations, each with its distinct structure and workforce.</li>
                <li className='list-disc'>Owners can define and assign custom job titles, representing specific roles within the organization.</li>
                <li className='list-disc'>Facilitate enhanced collaboration with dynamic teams, comprised of leaders, co-leaders, and members.</li>
                <li className='list-disc'>Team leaders, co-leaders, and organization owners can efficiently take attendance, ensuring accurate tracking of team participation.</li>
                <li className='list-disc'>Users can sign up manually with their email and password or also by Google account</li>
                <li className='list-disc'>Employees can submit leave requests, with approvals handled by team leaders, co-leaders, or the organization owner.</li>
                <li className='list-disc'>Authentication is done using a JWT token</li>
            </ul>

        </div>
    )
}

export default Features
