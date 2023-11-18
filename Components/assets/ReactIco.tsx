import React from 'react'

const ReactIco = ({width , height,color} : {width : number , height : number , color? : string}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 57.7312C54.3147 57.7312 57.8125 54.2334 57.8125 49.9187C57.8125 45.604 54.3147 42.1062 50 42.1062C45.6853 42.1062 42.1875 45.604 42.1875 49.9187C42.1875 54.2334 45.6853 57.7312 50 57.7312Z" fill="#00D8FF" />
            <path d="M50 67.8312C40.6098 68.0584 31.2431 66.7926 22.25 64.0812C18.0957 62.7643 14.221 60.6898 10.8219 57.9625C9.52478 57.0308 8.4446 55.8295 7.65544 54.4411C6.86629 53.0526 6.38684 51.5099 6.25 49.9187C6.25 44.7531 11.925 39.6906 21.4312 36.3781C30.6648 33.4429 40.3123 32.0204 50 32.1656C59.5585 32.0321 69.0767 33.4289 78.1937 36.3031C82.1946 37.5786 85.9379 39.5529 89.25 42.1344C90.5249 43.0226 91.5889 44.1804 92.3666 45.5256C93.1442 46.8708 93.6165 48.3706 93.75 49.9187C93.75 55.2875 87.4062 60.7281 77.1875 64.1094C68.3685 66.7324 59.1995 67.9876 50 67.8312ZM50 35.9031C40.7316 35.7792 31.5026 37.1316 22.6594 39.9094C13.9094 42.9625 9.9875 47.1375 9.9875 49.9094C9.9875 52.8094 14.2031 57.3687 23.4594 60.5344C32.0627 63.1152 41.0207 64.3165 50 64.0937C58.8013 64.2511 67.5748 63.0602 76.0156 60.5625C85.625 57.3781 90 52.8125 90 49.9187C89.8423 48.9257 89.4804 47.9761 88.9372 47.13C88.3939 46.284 87.6811 45.5597 86.8438 45.0031C83.8805 42.7129 80.5366 40.9632 76.9656 39.8344C68.2438 37.0961 59.1406 35.769 50 35.9031Z" fill="#00D8FF" />
            <path d="M32.25 88.8844C30.7922 88.9178 29.3516 88.5641 28.075 87.8594C23.6 85.2781 22.05 77.8344 23.9281 67.9437C25.9989 58.4784 29.5869 49.4103 34.5531 41.0906C39.2117 32.7441 45.1756 25.1966 52.2187 18.7344C55.3224 15.9053 58.9027 13.6485 62.7938 12.0687C64.2011 11.4092 65.7364 11.0673 67.2906 11.0673C68.8449 11.0673 70.3801 11.4092 71.7875 12.0687C76.4406 14.75 77.9813 22.9625 75.8094 33.5031C73.6747 42.4549 70.1799 51.0263 65.4469 58.9187C60.9523 67.1667 55.1762 74.6485 48.3344 81.0844C45.1181 84.0243 41.3854 86.3436 37.325 87.925C35.6994 88.5283 33.9836 88.8527 32.25 88.8844ZM37.7906 42.9469C33.0534 50.9135 29.6146 59.5834 27.6031 68.6312C25.875 77.7406 27.5344 83.2187 29.9469 84.6125C32.4469 86.0594 38.5156 84.6875 45.8844 78.25C52.4157 72.0842 57.9289 64.9225 62.2188 57.0312C66.7529 49.486 70.1053 41.291 72.1594 32.7312C74.2031 22.8094 72.4375 16.7344 69.9313 15.2906C68.9919 14.9307 67.9881 14.7696 66.9833 14.8174C65.9785 14.8653 64.9946 15.1211 64.0938 15.5687C60.6303 16.9979 57.446 19.0269 54.6875 21.5625C47.9583 27.7524 42.2615 34.9779 37.8125 42.9656L37.7906 42.9469Z" fill="#00D8FF" />
            <path d="M67.7406 88.925C63.5063 88.925 58.1281 86.3625 52.5281 81.5469C45.3616 75.0259 39.2968 67.3888 34.5688 58.9313C29.6648 50.7262 26.1052 41.7893 24.025 32.4594C23.1229 28.3547 22.9557 24.1225 23.5313 19.9594C23.6643 18.4151 24.1346 16.9187 24.9089 15.5759C25.6832 14.233 26.7426 13.0764 28.0125 12.1876C32.6594 9.49693 40.5438 12.2626 48.5906 19.4063C55.28 25.7256 60.9606 33.0335 65.4344 41.0751C70.3353 49.0886 73.9322 57.8298 76.0906 66.9719C77.0316 71.2273 77.1768 75.62 76.5188 79.9282C76.3622 81.517 75.8639 83.0531 75.0581 84.4312C74.2522 85.8094 73.1579 86.997 71.85 87.9126C70.5943 88.6086 69.176 88.958 67.7406 88.925ZM37.8031 57.0501C42.3389 65.1327 48.1322 72.4418 54.9656 78.7032C61.9938 84.75 67.5688 86.05 69.9656 84.6407C72.4656 83.1875 74.3094 77.2563 72.4094 67.6594C70.3278 58.9311 66.8778 50.5873 62.1875 42.9376C57.9182 35.2411 52.4961 28.2434 46.1094 22.1876C38.5344 15.4626 32.3906 13.9594 29.8875 15.4094C29.1073 16.0434 28.4671 16.8323 28.0072 17.7263C27.5473 18.6202 27.2778 19.5998 27.2156 20.6032C26.7188 24.3159 26.8806 28.0873 27.6938 31.7438C29.6947 40.6661 33.1086 49.2114 37.8063 57.0563L37.8031 57.0501Z" fill="#00D8FF" />
        </svg>
    )
}

export default ReactIco