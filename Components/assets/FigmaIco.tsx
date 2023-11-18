import React from 'react'

const FigmaIco = ({width , height,color} : {width : number , height : number , color? : string}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15_345)">
                <path d="M4.01168 20C5.85168 20 7.34501 18.5067 7.34501 16.6667V13.3334H4.01168C2.17168 13.3334 0.678345 14.8267 0.678345 16.6667C0.678345 18.5067 2.17168 20 4.01168 20Z" fill="#0ACF83" />
                <path d="M0.678345 9.99996C0.678345 8.15996 2.17168 6.66663 4.01168 6.66663H7.34501V13.3333H4.01168C2.17168 13.3333 0.678345 11.84 0.678345 9.99996Z" fill="#A259FF" />
                <path d="M0.678345 3.33333C0.678345 1.49333 2.17168 0 4.01168 0H7.34501V6.66667H4.01168C2.17168 6.66667 0.678345 5.17333 0.678345 3.33333Z" fill="#F24E1E" />
                <path d="M7.34509 0H10.6784C12.5184 0 14.0118 1.49333 14.0118 3.33333C14.0118 5.17333 12.5184 6.66667 10.6784 6.66667H7.34509V0Z" fill="#FF7262" />
                <path d="M14.0118 9.99996C14.0118 11.84 12.5184 13.3333 10.6784 13.3333C8.83843 13.3333 7.34509 11.84 7.34509 9.99996C7.34509 8.15996 8.83843 6.66663 10.6784 6.66663C12.5184 6.66663 14.0118 8.15996 14.0118 9.99996Z" fill="#1ABCFE" />
            </g>
            <defs>
                <clipPath id="clip0_15_345">
                    <rect width={width} height={height} fill="white" transform="translate(0.675049)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default FigmaIco
