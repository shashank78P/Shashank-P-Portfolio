import React from 'react'

const HtmlIco = ({ width, height, color }: { width: number, height: number, color?: string }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.6888 17.0006L2.28442 1.25H17.7157L16.3094 16.9981L9.99067 18.75L3.6888 17.0006Z" fill="#E44F26" />
            <path d="M10 17.4112L15.1063 15.9956L16.3075 2.53809H10V17.4112Z" fill="#F1662A" />
            <path d="M10 8.37936H7.44375L7.2675 6.40124H10V4.46936H5.15625L5.2025 4.98811L5.67688 10.3112H10V8.37936ZM10 13.3962L9.99125 13.3987L7.84 12.8181L7.7025 11.2775H5.76312L6.03375 14.31L9.99125 15.4087L10 15.4062V13.3962Z" fill="#EBEBEB" />
            <path d="M9.99316 8.37936V10.3112H12.3719L12.1482 12.8169L9.99316 13.3981V15.4081L13.9538 14.31L13.9825 13.9837L14.4363 8.89811L14.4838 8.37936H9.99316ZM9.99316 4.46936V6.40124H14.6594L14.6982 5.96749L14.7863 4.98811L14.8325 4.46936H9.99316Z" fill="white" />
        </svg>

    )
}

export default HtmlIco
