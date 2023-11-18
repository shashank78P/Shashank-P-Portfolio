import React from 'react'

const MessageCoverIco = ({width , height,color} : {width : number , height : number , color? : string}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2 0H1.8C0.81 0 0.00899999 0.7875 0.00899999 1.75L0 12.25C0 13.2125 0.81 14 1.8 14H16.2C17.19 14 18 13.2125 18 12.25V1.75C18 0.7875 17.19 0 16.2 0ZM16.2 3.5L9 7.875L1.8 3.5V1.75L9 6.125L16.2 1.75V3.5Z" fill={ color ? color : "#2F4858"} />
        </svg>
    )
}

export default MessageCoverIco
