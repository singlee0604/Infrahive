import { IconSend } from '@tabler/icons';
import Image from 'next/image';
import React from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { TbSend } from 'react-icons/tb';

type Props = {};

function Page({ }: Props) {
  return (
    <div className="h-[100dvh] w-full flex justify-start items-start bg-slate-50">
      <div className="  h-full bg-white w-3/12 flex flex-col p-5">
        <div className="w-full h-auto p-3 flex items-center justify-center">
          <Image alt="logo" width={'70'} height={'70'} src={'/assets/images/Image1.png'} />
          <h1 className="text-[1.6rem] text-black">
            {' '}
            Infra<span className="text-orange-400">Hive</span>
          </h1>
        </div>
        <button className="w-full p-3 bg-[#FEC200] font-[600] flex place-self-center mt-5 text-white rounded-full justify-center gap-3 items-center">
          <FaPlus /> New Chat
        </button>
        <p className="place-self-start mt-6 text-neutral-400"> Today</p>

        <div className="w-full p-3 bg-[#F8F8F8] font-[600] flex place-self-center mt-5 text-neutral-400 rounded-full justify-evenly gap-3 items-center">
          <p>Hello how can i assist...</p>
          <FaEdit />
        </div>
      </div>
      <div className=" h-full flex-grow p-3 flex-col flex w-9/12">
        <div className='w-full p-4 border-b'>
          <h1 className='text-black text-[1.2rem]'>Debugging and Previewing</h1>
        </div>
        <div className='w-full flex-grow overflow-auto p-4'>
          <div className='flex justify-end items-end mt-5 gap-2 float-right clear-both'>
            <div className='bg-[#fec30032] p-3 rounded-lg rounded-br-none w-[50%] pt-5 w-auto max-w-[90%]'>
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
            </div>
            <Image
              src={'/assets/images/profile/img-user.png'}
              width={'100'}
              height={'100'}
              alt={'user image'}
              className='w-[40px] h-[40px] rounded-full'
            />
          </div>
          <div className='flex justify-start items-end mt-5 gap-2 float-left clear-both'>
            <Image
              src={'/assets/images/Image1.png'}
              width={'100'}
              height={'100'}
              alt={'user image'}
              className='w-[40px] h-[40px] rounded-full'
            />
            <div className='bg-[#ffffff] p-3 rounded-lg rounded-bl-none pt-5 w-auto max-w-[90%]'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus
            </div>
          </div>
          

          <div className='flex justify-end items-end mt-5 gap-2 float-right clear-both'>
            <div className='bg-[#fec30032] p-3 rounded-lg rounded-br-none w-[50%] pt-5 w-auto max-w-[90%]'>
              sed quia consequuntur magni dolores
            </div>
            <Image
              src={'/assets/images/profile/img-user.png'}
              width={'100'}
              height={'100'}
              alt={'user image'}
              className='w-[40px] h-[40px] rounded-full'
            />
          </div>
          <div className='flex justify-end items-end mt-5 gap-2 float-right clear-both'>
            <div className='bg-[#fec30032] p-3 rounded-lg rounded-br-none w-[50%] pt-5 w-auto max-w-[90%]'>
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
            </div>
            <Image
              src={'/assets/images/profile/img-user.png'}
              width={'100'}
              height={'100'}
              alt={'user image'}
              className='w-[40px] h-[40px] rounded-full'
            />
          </div>
          
        </div>
        <div className='w-full p-4 '>
          <div className='w-full bg-white flex items-center rounded-md border shadow-md center p-2'>
            <input type="text" className='w-full bg-none border-none outline-none p-2' placeholder='Ask something...' />
            <button className='p-2 bg-[#FEC200] text-white font-bold rounded-md'>
              <span className=' rotate-45 block'><IconSend /></span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Page;
