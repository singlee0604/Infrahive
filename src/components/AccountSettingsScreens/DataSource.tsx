/* eslint-disable prettier/prettier */
import Image from 'next/image';
import React from 'react'
import { FaGithub } from 'react-icons/fa';

type Props = {}

function DataSource({ }: Props) {
    return (
        <div className='flex-grow p-4'>

            <h1 className='text-[1.2rem] font-bold mt-5'>Add Data source</h1>
            <div className='flex mt-5'>
                <div className='p-4 h-auto flex flex-col justify-center ml-5 w-[15dvw] rounded-md items-center mt-5 bg-slate-50'>
                    <div className='p-2 mb-5 rounded-md bg-white grid place-content-center '>
                        <Image
                            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png'}
                            width="60" height="60"
                            alt="Notion logo"
                            className=''
                        />
                 </div>
                    <h1 className='text-center text-[1rem] font-bold mb-5'>Notion</h1>
                    <button className='p-2 bg-blue-400 text-white mt-5 rounded-full font-bold w-1/2'>Connect</button>
                </div>
              
            </div>
         
        </div>
    )
}

export default DataSource;