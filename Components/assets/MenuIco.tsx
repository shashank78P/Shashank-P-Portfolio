import React from 'react'

const MenuIco = ({width , height,color} : {width : number , height : number , color? : string}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20V16.6667H20V20H0ZM0 11.6667V8.33333H20V11.6667H0ZM0 3.33333V0H20V3.33333H0Z" fill={color ? color : "#2F4858"} />
        </svg>
    )
}

export default MenuIco
