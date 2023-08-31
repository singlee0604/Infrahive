import React from 'react';
import Robot from '../../../public/assets/images/Robot.png';
import ChatGPT from '../../../public/assets/images/ChatGPT.png';
import Image from 'next/image';
const Partnership = () => {
  return (
    <div className="mx-auto px-3 md:max-w-5xl md:px-5 md:pb-20 md:pt-20 lg:max-w-6xl xl:px-0">
      <div className="mt-10 text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-4xl  font-bold text-white dark:text-white md:text-5xl">
            The Product{' '}
            <span className="relative">
              Philosophy{' '}
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
            </span>
          </h2>
        </div>
        <div className="gap-6 space-y-8 md:columns-2 lg:columns-4">
          <div className="h-[20.5rem]  w-full rounded-3xl  bg-gradient-to-b from-yellow-500 via-gray-900 to-gray-900 p-0.5">
            <div className=" relative  h-[20.30rem] rounded-3xl  bg-[#0E0C15] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none ">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-2xl font-medium text-white dark:text-white">Embracing Tomorrow Today, Empowering Humans</h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
                </div>
              </div>
              <p className="relative mt-8 leading-6 text-[#C2C2C2]">
                We prioritize human-centric AI development to enhance abilities, streamline processes, and improve user experiences.
              </p>
              <div className="absolute bottom-0 left-20 right-0 opacity-10">
                <Image alt='robot' src={Robot} />
              </div>
            </div>
          </div>
          <div className="h-[20.5rem]  w-full rounded-3xl  bg-gradient-to-b from-teal-500 via-gray-900 to-gray-900 p-0.5">
            <div className="relative aspect-auto h-[20.30rem] rounded-3xl  bg-[#0E0C15]  p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none ">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-2xl font-medium leading-8 text-white dark:text-white">Uncompromising Data Security & Privacy</h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
                </div>
              </div>
              <p className="mt-8  leading-6 text-[#C2C2C2]">
                {' '}
                Our AI solutions prioritize ethics, responsibility, and societal benefit. Designed towards fairness, transparency, and
                privacy protection in every aspect of deployment.
                <p
                  style={{
                    height: '30%',
                    width: '50%',
                    top: '60%',
                    left: '20%',
                    transform: 'translateX(50%)',
                    position: 'absolute',
                    borderRadius: '582px',
                    background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                    filter: 'blur(80px)'
                  }}
                ></p>
              </p>
            </div>
          </div>
          <div className="h-[20.5rem]  w-full rounded-3xl  bg-gradient-to-b from-purple-700 via-gray-900 to-gray-900 p-0.5">
            <p
              style={{
                height: '30%',
                width: '10%',
                zIndex: '10',
                top: '30%',
                left: '55%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
            <div className="aspect-auto h-[20.30rem] rounded-3xl  bg-[#0E0C15] p-8 shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
              <div className="flex gap-4">
                <div className="relative">
                  <h6 className="text-2xl font-medium leading-8 text-white dark:text-white">Where Solutions Transend Boundaries</h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p> */}
                </div>
              </div>
              <p className="mt-8 leading-6 text-[#C2C2C2]">
                Pursuing innovation, embracing challenges with audacious ideas to improve experiences, products and possibilities.
              </p>
            </div>
          </div>
          <div className="h-[20.5rem]  w-full rounded-3xl bg-gradient-to-b from-yellow-500 via-gray-900 to-gray-900 p-0.5">
            <div className="relative aspect-auto h-[20.30rem] rounded-3xl  bg-[#0E0C15] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-2xl font-medium leading-8 text-white dark:text-white">Architecting Tomorrow with AI Core</h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p> */}
                </div>
              </div>
              <p className="mt-8 leading-6 text-[#C2C2C2]">
                Making AI the cornerstone of progress for all sectors. A bold vision to build foundations with innovative solutions
                anticipating challenges and forge new paths to success.
              </p>
              <div className="absolute bottom-0 left-20 right-0 opacity-10">
                <Image alt='chatgpt' src={ChatGPT} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
