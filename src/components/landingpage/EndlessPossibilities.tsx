import React from 'react';
import ChatBoat from '../../../public/assets/images/ChatBoat.svg';
import WorkFlows from '../../../public/assets/images/WorkFlows.svg';
import ChatAggent from '../../../public/assets/images/ChatAggent.svg';
import AssistsAI from '../../../public/assets/images/AssistsAI.svg';
import CodeConveter from '../../../public/assets/images/CodeConveter.svg';
import Batch from '../../../public/assets/images/Batch.svg';
import Sql from '../../../public/assets/images/Sql.svg';
import Tools from '../../../public/assets/images/Tools.svg';
import Image from 'next/image';
export default function InfraSpeed() {
  return (
    <div className="mx-auto  px-3 md:max-w-5xl md:px-5 lg:max-w-6xl xl:px-0">
      <div className="text-white dark:text-gray-300" id="testimonials">
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-3xl font-bold text-white dark:text-white md:text-5xl">
            The Endless{' '}
            <span className="relative whitespace-nowrap">
              possibilities <p className="mt-2">with InfraHive</p>
              <span className="absolute left-0 top-14 -mt-5 md:mt-0">
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
        <div className="mt-5 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image alt='ChatBoat' src={ChatBoat} />
            </div>
            <p className="text-2xl">Chat Bots</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image alt='WorkFlows' src={WorkFlows} />
            </div>
            <p className="text-2xl">Workflows</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image alt='ChatAggent' src={ChatAggent} />
            </div>
            <p className="text-2xl">Chat Agents</p>
            <p
              style={{
                height: '30%',
                width: '10%',
                top: '20%',
                left: '52%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(80px)'
              }}
            ></p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image alt='AssistsAI' src={AssistsAI} />
            </div>
            <p className="text-2xl">Assistive AI</p>
          </div>

          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image alt='CodeConveter' src={CodeConveter} />
            </div>
            <p className="text-2xl">Code Converter</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image alt='Batch' src={Batch} />
            </div>
            <p className="text-2xl">Batch Operations</p>
            <p
              style={{
                height: '20%',
                width: '15%',
                top: '60%',
                left: '30%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image alt='sql' src={Sql} />
            </div>
            <p className="text-2xl">SQL Generator</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image alt='tools' src={Tools} />
            </div>
            <p className="text-2xl">Tools</p>
          </div>
        </div>
        <div className="mt-10 flex justify-center pb-5 md:mt-20 md:pb-10">
          <a href="https://getwaitlist.com/waitlist/9765" className="bg rounded-full border px-7 py-2">
            Explore More with a Demo
          </a>
        </div>
      </div>
    </div>
  );
}
