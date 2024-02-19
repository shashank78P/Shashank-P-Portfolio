import React from 'react'

const Web3Ico = ({ width, height, color }: { width: number, height: number, color?: string }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 513 512" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <image href="/images/web3-logo.png" />
            </svg>
        </>
    )
}

export default Web3Ico
