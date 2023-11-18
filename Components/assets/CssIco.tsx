import React from 'react'

const CssIco = ({width , height,color} : {width : number , height : number , color? : string}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.13385 17.0006L2.7301 1.25H18.1601L16.7545 16.9981L10.4357 18.75L4.13385 17.0006Z" fill="#1572B6" />
            <path d="M10.4451 17.4112L15.5513 15.9956L16.7526 2.53809H10.4451V17.4112Z" fill="#33A9DC" />
            <path d="M10.4451 8.24435H13.0013L13.1776 6.26623H10.4451V4.33435H15.2888L15.2426 4.85248L14.7682 10.1762H10.4451V8.24435Z" fill="white" />
            <path d="M10.457 13.2612L10.4482 13.2637L8.29697 12.6825L8.15947 11.1418H6.22009L6.49072 14.175L10.4476 15.2737L10.457 15.2712V13.2612Z" fill="#EBEBEB" />
            <path d="M12.8369 10.0944L12.6044 12.6812L10.4501 13.2625V15.2725L14.4101 14.175L14.4394 13.8487L14.7751 10.0944H12.8369Z" fill="white" />
            <path d="M10.4519 4.33435V6.26623H5.78567L5.74692 5.83185L5.6588 4.85248L5.61255 4.33435H10.4519ZM10.445 8.24435V10.1762H8.32067L8.28192 9.74185L8.19442 8.76248L8.14817 8.24435H10.445Z" fill="#EBEBEB" />
        </svg>
    )
}

export default CssIco
