import React from 'react'

const NodeIco = ({width , height,color} : {width : number , height : number , color? : string}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15_355)">
                <path d="M9.25925 0.125497C8.96171 -0.0418322 8.60842 -0.0418322 8.31089 0.125497L0.482807 4.64392C0.185273 4.81125 0.0179443 5.12735 0.0179443 5.462V14.5173C0.0179443 14.8521 0.203903 15.1682 0.482807 15.3355L8.31089 19.8539C8.60842 20.0212 8.96171 20.0212 9.25925 19.8539L17.0873 15.3355C17.3849 15.1682 17.5522 14.8521 17.5522 14.5173V5.462C17.5522 5.12735 17.3662 4.81125 17.0873 4.64392L9.25925 0.125497Z" fill="url(#paint0_linear_15_355)" />
                <mask id="mask0_15_355" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="-1" width="18" height="21">
                    <path d="M9.25925 0.125252C8.96171 -0.0420763 8.60842 -0.0420763 8.31089 0.125252L0.482807 4.64368C0.185273 4.81101 0.0179443 5.1271 0.0179443 5.46176V14.5171C0.0179443 14.8518 0.203903 15.1679 0.482807 15.3353L8.31089 19.8536C8.60842 20.021 8.96171 20.021 9.25925 19.8536L17.0873 15.3353C17.3849 15.1679 17.5522 14.8518 17.5522 14.5171V5.46176C17.5522 5.1271 17.3662 4.81101 17.0873 4.64368L9.25925 0.125252Z" fill="white" />
                </mask>
                <g mask="url(#mask0_15_355)">
                    <path d="M17.106 4.64383L9.24058 0.125538C9.16619 0.0884147 9.07325 0.0512229 8.99887 0.0325928L0.185303 15.1309C0.259686 15.2239 0.3527 15.2983 0.445577 15.3541L8.31092 19.8725C8.53407 20.0026 8.79441 20.0398 9.03612 19.9654L17.3104 4.82978C17.2546 4.7554 17.1803 4.69965 17.1059 4.64389L17.106 4.64383Z" fill="url(#paint1_linear_15_355)" />
                </g>
                <mask id="mask1_15_355" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="-1" width="18" height="21">
                    <path d="M9.25925 0.125252C8.96171 -0.0420763 8.60842 -0.0420763 8.31089 0.125252L0.482807 4.64368C0.185273 4.81101 0.0179443 5.1271 0.0179443 5.46176V14.5171C0.0179443 14.8518 0.203903 15.1679 0.482807 15.3353L8.31089 19.8536C8.60842 20.021 8.96171 20.021 9.25925 19.8536L17.0873 15.3353C17.3849 15.1679 17.5522 14.8518 17.5522 14.5171V5.46176C17.5522 5.1271 17.3662 4.81101 17.0873 4.64368L9.25925 0.125252Z" fill="white" />
                </mask>
                <g mask="url(#mask1_15_355)">
                    <path d="M17.1246 15.3355C17.3477 15.2054 17.515 14.9822 17.5894 14.7405L8.96176 0.0139994C8.73861 -0.0231924 8.4969 -0.00463074 8.29238 0.125506L0.482788 4.62537L8.90601 19.9841C9.01751 19.9655 9.14772 19.9283 9.2593 19.8725L17.1246 15.3356V15.3355Z" fill="url(#paint2_linear_15_355)" />
                </g>
            </g>
            <defs>
                <linearGradient id="paint0_linear_15_355" x1="1195.64" y1="349.38" x2="337.586" y2="1697.6" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#41873F" />
                    <stop offset="0.3288" stop-color="#418B3D" />
                    <stop offset="0.6352" stop-color="#419637" />
                    <stop offset="0.9319" stop-color="#3FA92D" />
                    <stop offset="1" stop-color="#3FAE2A" />
                </linearGradient>
                <linearGradient id="paint1_linear_15_355" x1="741.31" y1="1101.8" x2="2890.19" y2="-65.6952" gradientUnits="userSpaceOnUse">
                    <stop offset="0.1376" stop-color="#41873F" />
                    <stop offset="0.4032" stop-color="#54A044" />
                    <stop offset="0.7136" stop-color="#66B848" />
                    <stop offset="0.9081" stop-color="#6CC04A" />
                </linearGradient>
                <linearGradient id="paint2_linear_15_355" x1="-74.5983" y1="999.29" x2="1736.79" y2="999.29" gradientUnits="userSpaceOnUse">
                    <stop offset="0.09192" stop-color="#6CC04A" />
                    <stop offset="0.2864" stop-color="#66B848" />
                    <stop offset="0.5968" stop-color="#54A044" />
                    <stop offset="0.8624" stop-color="#41873F" />
                </linearGradient>
                <clipPath id="clip0_15_355">
                    <rect width="17.54" height="20" fill="white" transform="translate(0.0150146)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default NodeIco
