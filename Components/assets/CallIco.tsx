import React from 'react'

const CallIco = ({ width, height, color }: { width: number, height: number, color?: string }) => {
    return (
        <svg fill={color ? color : "#2F4858"} xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 52 52" enable-background="new 0 0 52 52" >
            <path d="M48.5,37.9L42.4,33c-1.4-1.1-3.4-1.2-4.8-0.1l-5.2,3.8c-0.6,0.5-1.5,0.4-2.1-0.2l-7.8-7l-7-7.8
	c-0.6-0.6-0.6-1.4-0.2-2.1l3.8-5.2c1.1-1.4,1-3.4-0.1-4.8l-4.9-6.1c-1.5-1.8-4.2-2-5.9-0.3L3,8.4c-0.8,0.8-1.2,1.9-1.2,3
	c0.5,10.2,5.1,19.9,11.9,26.7S30.2,49.5,40.4,50c1.1,0.1,2.2-0.4,3-1.2l5.2-5.2C50.5,42.1,50.4,39.3,48.5,37.9z"/>
        </svg>
    )
}

export default CallIco
