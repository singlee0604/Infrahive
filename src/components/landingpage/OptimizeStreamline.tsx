import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Circles from '../../../public/assets/images/Circles.png';

const OptimizeStreamline = () => {
  return (
    <div className="grid grid-cols-1 gap-8  px-3  pt-20 md:columns-1 md:grid-cols-1 md:px-5 xl:px-0 ">
      <div className="relative mt-0 py-5 md:mt-20 md:py-40">
        <div className="pointer-events-none absolute left-2/4 top-2/4 z-0 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <Image alt='circles' src={Circles} />
        </div>
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="flex flex-col text-center text-3xl font-bold text-white dark:text-white md:text-5xl">
            Optimize and Streamline the{' '}
            <span className="relative mt-0 whitespace-nowrap md:mt-5">
              AI Development
              <span className="absolute left-1/2 top-14 -mt-3 -translate-x-1/2 md:mt-1">
                <svg
                  className="lg:w-55 mx-auto w-40 sm:w-40 md:w-60 xl:w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="249"
                  height="17"
                  viewBox="0 0 249 17"
                  fill="none"
                >
                  <path
                    d="M1.5 16.0001C26.4689 5.1524 193.217 -2.00002 248 3.50006"
                    stroke="url(#paint0_linear_47_101)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_47_101"
                      x1="10.3914"
                      y1="14.1023"
                      x2="242.344"
                      y2="14.1023"
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
          </h2>
        </div>
        <div className="">
          <div className="relative flex justify-center pt-5 md:pt-0">
            <span>
              <p
                style={{
                  height: '400%',
                  width: '20%',
                  top: '-200%',
                  left: '30%',
                  transform: 'translateX(50%)',
                  position: 'absolute',
                  borderRadius: '582px',
                  background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                  filter: 'blur(80px)'
                }}
              ></p>
            </span>
            <button className="border-white-500 hello rounded-full border-2 px-6 py-3 text-sm text-[#FFF] duration-300 md:text-xl">
              Unleash Limitless Possibilities
            </button>
          </div>
          <div className="mt-10 flex justify-center">
            <p className="w-100 text-center text-sm text-white md:text-xl">
              Sign up & Start Building with InfraHive now and soar to new heights of AI-powered success.
            </p>
          </div>
          <div className=" mt-10 justify-center text-center">
            <Link href="https://getwaitlist.com/waitlist/9765">
              <span className="cursor-pointer rounded-full border bg-white p-3 px-5 font-bold text-black">Get Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizeStreamline;
