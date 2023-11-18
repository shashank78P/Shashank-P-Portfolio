import React from 'react'

const ArrowIco = ({ width, height, color }: { width: number, height: number, color?: string }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 17V5.414l3.293 3.293a.999.999 0 101.414-1.414l-5-5a.999.999 0 00-1.414 0l-5 5a.997.997 0 000 1.414.999.999 0 001.414 0L9 5.414V17a1 1 0 102 0z" fill={ color? color : "#2F4858" } />
        </svg>
    )
}

export default ArrowIco
