import Image from 'next/image';
import React from 'react';
import OpenAI from '../../../public/assets/images/OpenAI.svg';
import ChatGPT2 from '../../../public/assets/images/ChatGPT2.svg';
import Anthrop from '../../../public/assets/images/Anthrop.svg';
import Claude from '../../../public/assets/images/Claude.svg';
import Cohere from '../../../public/assets/images/Cohere.svg';
import HugFace from '../../../public/assets/images/HugFace.svg';
import LangChain from '../../../public/assets/images/LangChain.svg';
import Pattern from '../../../public/Pattern.png';

export default function Howtowork2() {
  return (
    <div className="mx-auto px-3 pb-5 pt-10 md:max-w-5xl md:px-5 md:pb-10 md:pt-32 lg:max-w-6xl xl:px-0">
      <div className="text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-4xl font-bold text-white dark:text-white md:text-5xl">
            Diverse{' '}
            <span className="relative whitespace-nowrap">
              LLM support
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
        <div className="relative ml-auto pb-10 md:pb-20">
          <div className="mx-auto px-5 text-center md:px-1 lg:w-2/3">
            <button className="border-white-500 hello rounded-full border-2 px-6 py-3 text-[#FFF] duration-300">
              Unleash the Potent Fusion of Diverse AI Models on a Unified Platform
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image alt="OpenAI" src={OpenAI} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image alt="ChatGPT2" src={ChatGPT2} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image alt="Anthrop" src={Anthrop} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image alt="Claude" src={Claude} width={176} height={48} />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center sm:mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image alt="Cohere" src={Cohere} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image alt="HugFace" src={HugFace} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image alt="LangChain" src={LangChain} width={176} height={48} />
            </div>
          </div>
        </div>

        {/* <div className="mt-20 grid grid-cols-6 gap-4">
          <div className="relative col-start-1 col-end-7 rounded-3xl border border-[#ffffff1a] bg-[#ffffff1a]">
            <div className="absolute top-0">
              <Image alt="Pattern" src={Pattern} height={500} />
            </div>
            <div className="space-y-4 px-6 pb-10 md:px-0">
              <h2 className="mt-20 text-center text-5xl font-bold text-gray-800 dark:text-white md:text-5xl">
                Embed app directly in two forms
              </h2>
            </div>
            <div className="grid h-64 grid-flow-col grid-rows-1 gap-4">
              <div className="w-26 h-12 bg-green-700">1</div>
              <div className="w-26 h-12 bg-green-500">2</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
