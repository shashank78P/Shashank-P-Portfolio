import React from 'react'

const FileIco = ({ width, height, color }: { width: number, height: number, color?: string }) => {
    return (
        <svg fill={color ? color : "#2F4858"} width={width} height={height} viewBox="-6 0 46 46" xmlns="http://www.w3.org/2000/svg">
            <path id="_12.File" data-name="12.File" d="M37,47H11a4,4,0,0,1-4-4V5a4,4,0,0,1,4-4H30a.984.984,0,0,1,.776.395l9.829,9.829A.981.981,0,0,1,41,12h0V43A4,4,0,0,1,37,47ZM31,4.381V11h6.619ZM39,13H30a1,1,0,0,1-1-1V3H11A2,2,0,0,0,9,5V43a2,2,0,0,0,2,2H37a2,2,0,0,0,2-2ZM33,39H15a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Zm0-8H15a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Zm0-8H15a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Z" transform="translate(-7 -1)" fill-rule="evenodd" />
        </svg>
    )
}

export default FileIco
