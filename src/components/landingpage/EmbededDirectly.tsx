import Image from 'next/image';
import React from 'react';
import Alpha from '../../../public/assets/images/Alpha.png';
import AsChatBot from '../../../public/assets/images/AsChatBot.png';
import AsFullWebsite from '../../../public/assets/images/AsFullWebsite.png';
import Pattern from '../../../public/Pattern.png';
import Robot2 from '../../../public/assets/images/Robot2.png';
import Eclipse from '../../../public/assets/images/Eclipse.svg';

export default function Howtowork3() {
  return (
    // <div className="m-auto pb-20 md:max-w-5xl lg:max-w-6xl" style={{ maxWidth: '1380px' }}>
    //   <div className="text-gray-600 dark:text-gray-300">
    //     <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2">
    //       <div className="relative col-start-1 col-end-7 rounded-3xl border border-[#ffffff1a] bg-[#ffffff1a] p-10">
    //         <div className="absolute top-0">
    //           <Image src={Pattern} height={500} />
    //         </div>
    //         <div className="space-y-4 px-8 pb-10 md:px-0 ">
    //           <h2 className="mt-20 text-center text-3xl  font-bold text-gray-800 dark:text-white md:text-5xl">
    //             Embed app directly in two forms
    //           </h2>
    //         </div>
    //         <div className="sm-auto grid grid-rows-1 justify-center gap-12 pt-10 lg:grid-flow-col">
    //           <div className="relative rounded-3xl border border-[#ffffff1a] ">
    //             <h2 className="rounded-xl bg-[#0E0C15] p-6 text-center text-lg text-white md:text-2xl">As full website</h2>
    //             <div className="flex justify-center py-12">
    //               <Image src={Alpha} width={110} height={110} />
    //             </div>
    //             <div className="m-3 rounded-xl bg-[#0E0C15]">
    //               <p className="p-7">To add the chat app anywhere on your website, add this iframe to your HTML code.</p>
    //               <p className="p-7 pt-0 leading-7">
    //                 {'<iframe'}
    //                 {' src="https://infrahive.app/chatbot/m3soNSzVDs reQ90" '}
    //                 {'style="width: 100%; height: 100%; min-height: 700px" frameborder="0"'}
    //                 {' allow="microphone">'}
    //                 {'</iframe>'}
    //               </p>
    //             </div>
    //           </div>
    //           <div className="relative rounded-3xl border border-[#ffffff1a] ">
    //             <h2 className="rounded-xl bg-[#0E0C15] p-6 text-center text-lg text-white md:text-2xl">As chatbot</h2>
    //             <div className="flex justify-center py-12">
    //               <Image src={Robot2} width={110} height={110} />
    //             </div>
    //             <div className="m-3 rounded-xl bg-[#0E0C15]">
    //               <p className="p-7">To add a chat app to the bottom right of your website add this code to your HTML.</p>
    //               <p className="p-7 pt-0 leading-7">
    //                 {'<iframe'}
    //                 {' src="https://infrahive.app/chatbot/m3soNSzVDs reQ90" '}
    //                 {'style="width: 100%; height: 100%; min-height: 700px" frameborder="0"'}
    //                 {' allow="microphone">'}
    //                 {'</iframe>'}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="m-auto px-5 pb-10 md:max-w-5xl md:pb-20 lg:max-w-6xl" style={{ maxWidth: '1380px' }}>
      <div className="text-gray-600 dark:text-gray-300">
        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2">
          <div className="relative col-start-1 col-end-7 rounded-3xl border border-t-white bg-transparent p-10 dark:border-[#ffffff1a] dark:bg-[#15131D]">
            {/* <div className="absolute top-0">
              <Image src={Pattern} height={500} />
            </div> */}
            <div className="space-y-4 px-8 pb-5 md:px-0 md:pb-10">
              <h2 className="mt-0 text-center text-2xl font-bold text-white dark:text-white md:mt-20 md:text-5xl">
                Embed app directly in two forms
              </h2>
            </div>
            <div className="sm-auto grid grid-rows-1 justify-center gap-12 pt-0 md:pt-10 lg:grid-flow-col">
              <div className="relative rounded-3xl border border-t-white dark:border-[#ffffff1a] ">
                <h2 className="rounded-t-3xl bg-[#0F0C16] p-6 text-center text-lg text-white md:text-2xl">As full website</h2>
                <div className="relative flex justify-center py-12">
                  <span className="absolute left-[168px]">
                    <Image src={Eclipse} alt="" />
                  </span>
                  <Image src={Alpha} alt="" width={110} height={110} />
                </div>
                <div className="m-3 flex flex-col justify-center rounded-xl bg-[#0E0C15] text-white dark:text-white">
                  <p className="p-7 text-sm  md:text-xs">
                    To add the chat app anywhere on your website, add this iframe to your HTML code.
                  </p>
                  <Image className="m-auto object-contain" src={AsFullWebsite} alt="AsFullWebsite" width={420} height={110} />
                </div>
              </div>
              <div className="relative rounded-3xl border border-t-white dark:border-[#ffffff1a] ">
                <h2 className="rounded-t-3xl bg-[#0E0C15] p-6 text-center text-lg text-white md:text-2xl">As chatbot</h2>
                <div className="relative flex justify-center py-12">
                  <span className=" absolute left-[168px]">
                    <Image src={Eclipse} alt="Eclipse" />
                  </span>
                  <Image src={Robot2} alt="Robot2" width={110} height={110} />
                </div>
                <div className="m-3 flex flex-col justify-center rounded-xl bg-[#0E0C15] text-white dark:text-white">
                  <p className="p-7 text-sm md:text-xs">
                    To add a chat app to the bottom right of your website add this code to your HTML.
                  </p>
                  <Image className="m-auto object-contain" src={AsChatBot} alt="AsChatBot" width={420} height={110} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute">
            <Image src={Pattern} height={500} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
