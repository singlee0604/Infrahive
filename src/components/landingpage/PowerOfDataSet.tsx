import React from 'react';
import Div1 from '../../../public/assets/images/Div1.svg';
import Div2 from '../../../public/assets/images/Div2.svg';
import Step2 from '../../../public/assets/images/Step2.svg';
import Step3 from '../../../public/assets/images/Step3.svg';
// import Circles from '../../../public/assets/images/Circles.png';
import Accent from '../../../public/assets/images/Accent.svg';

import Image from 'next/image';
export default function PowerOfDataSet() {
  return (
    <div className="grid grid-cols-1 gap-8  px-3  pt-20 md:columns-1 md:grid-cols-1 md:px-5 xl:px-0 ">
      <div className="aspect-auto rounded-3xl  border border-gray-100 bg-transparent p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-[#15131D] dark:shadow-none">
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-3xl font-bold text-white dark:text-white md:text-5xl">
            Data is{' '}
            <span className="relative whitespace-nowrap">
              Fuel to AI
              <span className="absolute left-0 top-10 md:top-14">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="249" height="17" viewBox="0 0 249 17" fill="none">
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
              </span>{' '}
            </span>
          </h2>
        </div>
        <div className="relative ml-auto">
          <div className="mx-auto text-center lg:w-2/3">
            <p className="mt-5 pb-0 text-base leading-7 text-white dark:text-gray-300 md:mt-10 md:pb-10">
              Automatically complete text preprocessing, vectorization and segmentation. No need to learn embedding techniques anymore,
              saving you weeks of development time.
            </p>
          </div>
        </div>
        {/* <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-4xl font-bold text-white dark:text-white md:text-5xl">
            <span className="relative">
              Data is fuel to AI
              <span className="absolute left-0 top-14">
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
              </span>{' '}
              <br />
              <span className="pt-2">Keep it Clean with Auto-Preprocessing</span>
            </span>
          </h2>
        </div> */}
        <div className="mx-auto  md:max-w-5xl lg:max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8  pt-2 sm:pt-20 md:columns-1 md:grid-cols-2">
            <div className="relative aspect-auto rounded-3xl border-gray-100   shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
              <p className="w-max rounded-xl border border-none bg-[#fec2004d] p-2 px-3 text-xl text-white md:text-2xl">Step: 1</p>
              <p className="mt-5 text-xl  text-white md:text-4xl">Create your own dataset from data cleaning and processing.</p>
              <span className="absolute right-20 top-40 hidden lg:block">
                <Image alt="accent" src={Accent} width={168} height={91} />
              </span>
            </div>

            <div className="aspect-auto rounded-3xl bg-transparent p-8">
              <p
                style={{
                  height: '10%',
                  width: '10%',
                  top: '18%',
                  left: '45%',
                  transform: 'translateX(50%)',
                  position: 'absolute',
                  borderRadius: '582px',
                  background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                  filter: 'blur(100px)'
                }}
              ></p>
              <div className="relative">
                <Image alt="div1" src={Div1} className="rounded-xl" />
                <div className="absolute  -top-1/4 left-1/2">
                  <Image alt="div2" src={Div2} className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-auto my-4 w-full border-t" />
        <div className="mx-auto  md:max-w-5xl lg:max-w-6xl">
          <div className="relative grid grid-cols-1 items-center   gap-8 md:columns-1 md:grid-cols-2">
            <p
              style={{
                height: '50%',
                width: '25%',
                top: '50%',
                left: '20%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
            <div className="aspect-auto rounded-3xl border-gray-100 pt-2 shadow-2xl  shadow-gray-600/10 dark:border-gray-700 dark:shadow-none sm:pt-20">
              <Image alt="step2" src={Step2} className="rounded-xl" />
            </div>
            <div className="aspect-auto rounded-3xl bg-transparent p-0 md:p-8">
              <div>
                <p className="ro w-max rounded-xl border border-none bg-[#00fed04d] p-2 px-3 text-xl text-white md:text-2xl">Step: 2</p>
                <p className="mt-5 text-xl text-white md:text-4xl">
                  Import data from your files or Notion to website URL or slack or databases
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-auto my-4 mt-10 w-full border-t" />
        <div className="mx-auto  md:max-w-5xl lg:max-w-6xl">
          <div className="relative grid grid-cols-1 items-center   gap-8 md:columns-1 md:grid-cols-2">
            <div>
              <p className="ro w-max rounded-xl border border-none bg-[#0093fe4d] p-2 px-3 text-xl text-white md:text-2xl">Step: 3</p>
              <p className="mt-5 text-xl text-white md:text-4xl">Fine tune your AI Model with continuous improvement and operation</p>
            </div>
            <p
              style={{
                height: '30%',
                width: '20%',
                top: '50%',
                left: '30%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
            <span className="absolute left-1/3 top-2/3 hidden rotate-12 lg:block">
              <Image alt="accent" src={Accent} />
            </span>
            <div className="aspect-auto rounded-3xl bg-transparent p-8">
              <div className="aspect-auto rounded-3xl border-gray-100 pt-2 shadow-2xl  shadow-gray-600/10 dark:border-gray-700 dark:shadow-none sm:pt-20">
                <Image alt="step3" src={Step3} className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative mt-0 py-5 md:mt-20 md:py-40">
        <div className="absolute left-2/4 top-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <Image src={Circles} />
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
          <a href="https://inrahive.io">
            <div className="mt-10 flex justify-center">
              <button className="rounded-full border bg-white p-3 px-5 font-bold text-black">Sign Up Now</button>
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
}
