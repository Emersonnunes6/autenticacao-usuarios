import "./styles.scss"

export default function BackgroundLogin(props: any) {

  return (
    <>
      <div className={props.classBackground}>
        <div>
          <svg className="ring" xmlns="http://www.w3.org/2000/svg" width="208" height="207" viewBox="0 0 398 207" fill="none">
            <path d="M270.743 201.668C425.144 217.935 555.35 179.081 561.567 114.885C567.783 50.6887 447.657 -14.5401 293.257 -30.8074C138.856 -47.0748 8.65019 -8.22073 2.43333 55.9756C-3.78352 120.172 116.343 185.401 270.743 201.668Z" stroke="#E93F78" strokeWidth="2.98511" />
          </svg>
        </div>
        <div className="watermark">
          <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="531" viewBox="0 0 1400 531" fill="none">
            <g opacity="0.05" filter="url(#filter0_f_1_179)">
              <path d="M0 41.8156C0 41.8156 116.063 85.061 292.813 164.016C469.563 242.971 525.513 341.622 697.098 337.072C868.683 332.522 830.715 272.906 1013.97 215.729C1197.22 158.553 1440 128.93 1440 128.93V470.833C1440 470.833 1389.04 259.611 1195.76 275.127C1085.98 283.941 1068 269.767 929.189 329.839C790.378 389.911 761.589 489.628 619.95 489.498C478.31 489.367 424.773 314.18 264.306 216.961C103.839 119.742 0 164.016 0 164.016V41.8156Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_f_1_179" x="-41" y="0.815552" width="100vw" height="529.682" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="20.5" result="effect1_foregroundBlur_1_179" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </>
  )
}