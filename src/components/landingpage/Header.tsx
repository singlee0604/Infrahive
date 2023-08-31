import React, { useEffect, useState } from 'react';
import Bee from '../../../public/bee.png';
import Image from 'next/image';
import { Typography, createStyles } from '@mui/material';
import Pattern from '../../../public/Pattern.png';
import Overview from '../../../public/assets/images/Overview.png';
import Link from 'Link';
export default function Header() {
  const labels = ['Generative AI', 'Enterprise AI'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative mb-10 md:mb-20" id="home">
        <div className="absolute top-0">
          <Image alt="Pattern" src={Pattern} height={500} />
        </div>
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>
        <div className="relative ml-auto w-full pt-36">
          <div className="mx-auto text-center lg:w-2/3">
            <h1 className="before:bg- relative mb-3 flex flex-col  justify-center gap-1 text-4xl font-bold text-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:content-[''] dark:text-white sm:flex-row sm:gap-2 md:text-5xl xl:gap-5 xl:text-6xl">
              With
              <span className="mt-5 md:mt-0">
                InfraH
                <span className="relative">
                  <span className="-left-x-1/2 absolute -top-6 w-7 -translate-x-1/2">
                    <Image alt="Bee" src={Bee} width={35} height={35} className="absolute" />
                  </span>
                  i
                </span>
                ve
                <span>
                  <svg
                    className="lg:w-55 mx-auto w-40 sm:w-40 md:w-60 xl:w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="264"
                    height="18"
                    viewBox="0 0 264 18"
                    fill="none"
                  >
                    <path
                      d="M3 15.4999C97 4.99973 171.5 -3.49993 261 11.5"
                      stroke="url(#paint0_linear_182_83)"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_182_83"
                        x1="139.999"
                        y1="33.9951"
                        x2="373.043"
                        y2="33.995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FEC200" />
                        <stop offset="0.340447" stop-color="#BEF393" />
                        <stop offset="0.646993" stop-color="#7A46B6" />
                        <stop offset="1" stop-color="#EF6DF5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
            </h1>
            <p
              style={{
                height: '50%',
                width: '25%',
                top: '30%',
                left: '30%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
            <div className="flex-row justify-center md:flex">
              <div className="flex flex-col  justify-center gap-5 break-all p-2 text-5xl font-bold text-white dark:text-white  sm:flex-row ">
                <h1> Supercharge </h1>
              </div>
              <div className=" heading flex flex-col  justify-center gap-5 break-all p-2 text-5xl font-bold text-gray-900 dark:text-white  sm:flex-row ">
                <div className="animated flex max-h-[2rem] flex-col gap-[10px]  text-4xl md:text-5xl">
                  <h5 style={{ color: '#FEDE00' }}>AI Powered Apps</h5>
                  <h5
                    style={{
                      color: '#00FE75'
                    }}
                  >
                    Generative AI
                  </h5>
                  <h5
                    style={{
                      color: '#E35961'
                    }}
                  >
                    LLM Platforms
                  </h5>
                  <h5
                    style={{
                      color: '#4B82D8'
                    }}
                  >
                    Teams & More
                  </h5>
                </div>
              </div>
            </div>
            <div className="m-auto flex w-full justify-center text-center">
              <p className="mx-14 mt-8 max-w-3xl leading-[1.5rem] text-white dark:text-gray-300 md:text-[20px]">
                Supercharge Your User-Experience and Team Efficiency with InfraHive. Ideate, Build, Scale & Deploy AI-powered Apps,
                LLM-powered Workflows, Tools and more, at Unmatched speed.
              </p>
            </div>
            <div className="relative mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <a
                href="https://w0zxkfg7yyu.typeform.com/to/uUt0n1S4"
                className="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative flex items-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <g clip-path="url(#clip0_47_79)">
                      <path
                        d="M2.50966 4.00008V13.9905H12.5001V10.5601C12.4896 10.4842 12.4968 10.407 12.521 10.3344C12.5452 10.2618 12.5858 10.1957 12.6396 10.1412C12.6934 10.0868 12.7591 10.0454 12.8314 10.0204C12.9038 9.99539 12.9809 9.98734 13.0569 9.99688H13.9401C14.0119 9.99094 14.0841 10.0008 14.1517 10.0258C14.2193 10.0509 14.2805 10.0904 14.3312 10.1416C14.3818 10.1929 14.4206 10.2546 14.4448 10.3225C14.469 10.3904 14.4781 10.4627 14.4713 10.5345V14.5345C14.4664 14.9184 14.3131 15.2855 14.0434 15.5587C13.7737 15.832 13.4087 15.9902 13.0249 16.0001H1.97846C1.58519 15.9967 1.20917 15.8381 0.932283 15.5588C0.655391 15.2795 0.500041 14.9022 0.500055 14.5089V3.50088C0.498368 3.30536 0.535316 3.11143 0.608778 2.93022C0.68224 2.74901 0.79077 2.5841 0.928136 2.44495C1.0655 2.3058 1.229 2.19515 1.40924 2.11936C1.58949 2.04356 1.78293 2.00412 1.97846 2.00328H6.95766C7.02947 1.99857 7.10147 2.00925 7.16883 2.0346C7.23619 2.05995 7.29736 2.09939 7.34825 2.15028C7.39915 2.20118 7.43859 2.26235 7.46394 2.32971C7.48929 2.39707 7.49997 2.46906 7.49526 2.54088C7.47605 2.85846 7.47605 3.1769 7.49526 3.49448C7.49796 3.56328 7.4864 3.6319 7.4613 3.69602C7.4362 3.76013 7.39812 3.81837 7.34943 3.86705C7.30074 3.91574 7.24251 3.95383 7.17839 3.97893C7.11427 4.00402 7.04566 4.01558 6.97686 4.01288H2.49686L2.50966 4.00008Z"
                        fill="white"
                      />
                      <path
                        d="M12.3401 2.4065C11.9817 2.0481 11.6233 1.7025 11.2841 1.3441C11.1706 1.23983 11.083 1.11055 11.0281 0.9665C10.9927 0.854532 10.9843 0.735751 11.0037 0.619917C11.0231 0.504083 11.0696 0.3945 11.1396 0.300171C11.2096 0.205841 11.3009 0.129457 11.4062 0.0772932C11.5114 0.0251292 11.6275 -0.00132633 11.7449 0.000100079H15.6809C15.7915 -0.00983896 15.903 0.00474596 16.0073 0.0428154C16.1117 0.0808848 16.2063 0.141502 16.2846 0.220345C16.3628 0.299189 16.4227 0.394319 16.4599 0.498954C16.4972 0.60359 16.5109 0.715156 16.5001 0.8257C16.5001 2.1057 16.5001 3.4177 16.5001 4.7169C16.4999 4.86505 16.4565 5.00992 16.3751 5.13377C16.2938 5.25761 16.1782 5.35505 16.0423 5.41415C15.9065 5.47324 15.7563 5.49143 15.6103 5.46649C15.4642 5.44154 15.3286 5.37454 15.2201 5.2737L14.2153 4.2817C14.1794 4.23888 14.1493 4.19154 14.1257 4.1409L13.1465 5.1201L13.0633 5.2097C11.9966 6.27637 10.93 7.34303 9.86331 8.4097L6.55451 11.7249C6.48369 11.8119 6.3944 11.882 6.2931 11.9301C6.19181 11.9783 6.08106 12.0032 5.96891 12.0032C5.85676 12.0032 5.74601 11.9783 5.64472 11.9301C5.54343 11.882 5.45413 11.8119 5.38331 11.7249L4.74331 11.0849C4.66446 11.0158 4.60128 10.9307 4.55799 10.8352C4.5147 10.7397 4.49231 10.6361 4.49231 10.5313C4.49231 10.4265 4.5147 10.3229 4.55799 10.2274C4.60128 10.1319 4.66446 10.0468 4.74331 9.9777L9.46011 5.2865L12.2761 2.4897L12.3401 2.4065Z"
                        fill="#303030"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_47_79">
                        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <Link sx={{ color: 'rgba(48, 48, 48, 1)', textDecoration: 'none' }} href="https://getwaitlist.com/waitlist/9765">
                    Get Demo
                  </Link>
                </span>
              </a>
            </div>
          </div>
          <div className="absolute w-full">
            <Image alt="pattern" src={Pattern} height={500} />
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center pb-10 p-3 md:pd-0">
        <Image
          alt="Overview"
          src={Overview}
          height={430}
          width={779}
          // className="rounded-xl shadow-[rgba(255,255,255,0.5)_15px_10px_20px]"
          className="rounded-xl shadow-[rgba(255,255,255,0.3)_17px_10px_20px] "
        />
      </div>
    </>
  );
}
