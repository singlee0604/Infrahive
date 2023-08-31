import React from 'react';
import Notions from '../../../public/assets/images/Nations.svg';
import Slack from '../../../public/assets/images/Slack.svg';
import Drive from '../../../public/assets/images/Drive.svg';
import GitHub from '../../../public/assets/images/GitHub.svg';
import Hero from '../../../public/assets/images/Hero.svg';

import Image from 'next/image';
export default function LanguageCodeType() {
  return (
    <div className="mx-auto pt-0 md:max-w-5xl md:px-5 md:pt-20 lg:max-w-6xl xl:px-0">
      <div className="relative grid grid-cols-1 gap-8 px-3 pb-0 pt-0 md:columns-1 md:grid-cols-2 md:pb-40 md:pt-10">
        <div className="aspect-auto rounded-3xl  border-gray-100  shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
          <div className="gap-4">
            <h6 className="text-4xl font-medium leading-10 text-white dark:text-white md:text-5xl">
              Transform your data, the smart way
            </h6>
          </div>
          <p className="mt-8 text-sm leading-8 text-[#C2C2C2] md:text-base ">
            {' '}
            Enhance your internal data by seamlessly integrating it with cutting-edge semantic search engines, ensuring that it is readily
            available to advanced language models and applications.
          </p>
          <p className="mt-8 text-sm leading-8 text-[#C2C2C2] md:text-base">
            With the utmost security, effortlessly connect Notion, Slack, and platforms alike, benefiting from continuously updated and
            highly effective embeddings.
          </p>
        </div>
        <p
          style={{
            height: '30%',
            width: '10%',
            top: '5%',
            left: '40%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(80px)'
          }}
        ></p>
        <span className="absolute left-1/3 top-80 hidden lg:block">
          <Image alt='hero' src={Hero} width={154} height={250} />
        </span>
        <div className="aspect-auto rounded-3xl  border border-gray-100 bg-transparent p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
          <div>
            <div>
              <p className="text-2xl text-white md:text-3xl">Manage Data Sources</p>
              <p className="mt-5 text-sm text-white md:text-base">Continuously synchronized with te products you use. </p>
            </div>
            <div className="mt-5 w-full flex-none items-center justify-between sm:flex">
              <div className="flex justify-center rounded-full bg-white p-2 px-6">
                <Image alt='notions' src={Notions} width={71} height={26} />
              </div>
              <div className="mt-2 flex items-center justify-between sm:mt-0 w-full sm:w-auto gap-2">
                <button className="h-7 w-24 rounded-md border border-none bg-[#00B05C] text-white">Synchronized</button>
                <div>3 days ago</div>
              </div>
            </div>
            <div className="mt-5 w-full flex-none items-center justify-between sm:flex">
              <div className="flex justify-center rounded-full bg-white p-2 px-6">
                <Image alt='slack' src={Slack} width={71} height={26} />
              </div>
              <div className="mt-2 flex items-center justify-between sm:mt-0 w-full sm:w-auto gap-2">
                <button className="h-7 w-24 rounded-md border border-none bg-[#00B05C] text-white">Synchronized</button>
                <div>1 day ago</div>
              </div>
            </div>
            <div className="mt-5 w-full flex-none items-center justify-between sm:flex">
              <div className="flex justify-center rounded-full bg-white p-2 px-6">
                <Image alt='drive' src={Drive} width={71} height={26} />
              </div>
              <div className="mt-2 flex items-center sm:mt-0">
                <button className="h-7 w-24 rounded-md border  bg-transparent text-white">Connect</button>
                <div className="invisible">3 days ago</div>
              </div>
            </div>
            <div className="mt-5 w-full flex-none items-center justify-between sm:flex">
              <div className="flex justify-center rounded-full bg-white p-2 px-6">
                <Image alt='github' src={GitHub} width={71} height={26} />
              </div>
              <div className="mt-2 flex items-center sm:mt-0">
                <button className="h-7 w-24 rounded-md border  bg-transparent text-white ">Connect</button>
                <div className="invisible">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
