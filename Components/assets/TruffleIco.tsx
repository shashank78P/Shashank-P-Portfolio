import React from 'react'

const TruffleIco = ({ width, height, color }: { width: number, height: number, color?: string }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 301 296" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> 
                <image  href="/images/truffle-logo.png" />
            </svg>

        </>
    )
}

export default TruffleIco
