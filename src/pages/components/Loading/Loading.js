import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-[100vh] min-w-[100vw]">
      <div className=" z-50 xs:w-[280px] sm:w-[580px] h-[350px] opacity-80  flex justify-center items-center  bg-white border border-gray-300 rounded-lg shadow-md   ">
        <div role="status" className="items-center justify-center flex">
          <svg
            className="animate-spin w-20 h-20 text-blue-600 dark:text-gray-600 "
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#F5AF00"
              strokeWidth="10"
              r="40"
              strokeDasharray="188.49555921538757 64.83185307179586"
              transform="rotate(220.182 50 50)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
