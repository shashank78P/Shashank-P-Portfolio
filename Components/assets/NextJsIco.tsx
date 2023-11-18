import React from 'react'

const NextJsIco = ({ width, height, color }: { width: number, height: number, color?: string }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15_367)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.554932 7.99997C0.55498 6.7058 0.889911 5.43366 1.52716 4.30726C2.1644 3.18085 3.08228 2.23851 4.19154 1.57186C5.30079 0.905205 6.56368 0.536932 7.8574 0.502846C9.15112 0.468761 10.4316 0.770023 11.5745 1.37734C12.7173 1.98465 13.6835 2.87736 14.3792 3.96864C15.0749 5.05993 15.4763 6.31266 15.5445 7.60504C15.6127 8.89741 15.3453 10.1854 14.7684 11.3439C14.1914 12.5023 13.3245 13.4917 12.2519 14.216L5.46193 4.70997C5.40041 4.62375 5.3131 4.5593 5.21258 4.5259C5.11207 4.49251 5.00354 4.49189 4.90266 4.52415C4.80177 4.55641 4.71374 4.61987 4.65124 4.70538C4.58875 4.7909 4.55502 4.89405 4.55493 4.99997V12.5H5.55493V6.55997L11.3849 14.722C10.2413 15.2886 8.97204 15.5541 7.6972 15.4932C6.42236 15.4324 5.18414 15.0472 4.09974 14.3741C3.01534 13.701 2.12065 12.7624 1.50034 11.6469C0.880028 10.5315 0.554626 9.27626 0.554932 7.99997ZM10.5549 10.5V4.49997H11.5549V10.5H10.5549Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_15_367">
                    {/* <rect width="15" height="15" fill="white" transform="translate(0.554932 0.5)" /> */}
                    <rect width={width - 1} height={height - 1} fill="white" transform="translate(0.554932 0.5)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default NextJsIco