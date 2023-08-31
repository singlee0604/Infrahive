/* eslint-disable prettier/prettier */
import Card from 'components/forms/chart/OrgChart/Card';
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Modal from 'pages/dashboard/Modal';

type Props = {}

const NewApiKeyModal = ({ setIsOpen }: { setIsOpen: (vl: any) => void; }) => {
    return (
        <div className='w-full mt-5 flex flex-col gap-2 items-start'>
            <label htmlFor="api-key">Api key</label>
            <input className='w-full p-3 border-2 rounded-md' placeholder='Enter your api key' />
            <a className='mt-3 text-blue-300 cursor-pointer'>Get your serpApi key from serpAPI account page.</a>
            <div className='mt-3 flex items-center justify-end gap-3 w-full '>
                <button className='border-yellow-400 text-yellow-400 border-2 font-bold p-2 pl-4 pr-4 rounded-full  ' onClick={() => setIsOpen(false)}>Cancel</button>
                <button className='bg-yellow-400 font-bold text-white p-2 pl-4 pr-4 rounded-full  border' onClick={() => setIsOpen(false)}>Save</button>
            </div>
        </div>
    )
}

function Intergration({ }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex-grow p-4'>
            {
                isOpen && <Modal title={'Add Apikey'} isOpen={isOpen} setIsOpen={setIsOpen} >
                    <NewApiKeyModal setIsOpen={setIsOpen} />
                </Modal>
            }
            <h1 className='text-[1.2rem] font-bold mt-5'>Connected</h1>
            <div className='flex mt-5'>
                <div className='p-4 h-auto flex flex-col justify-center ml-5 w-[15dvw] rounded-md items-center mt-5 bg-slate-50'>
                    <h1 className='text-[3rem] p-4 bg-white rounded-full mb-5'><FaGithub /></h1>
                    <h1 className='text-center text-[1rem] font-bold mb-5'>Github</h1>
                    <button className='p-2 bg-blue-400 text-white mt-5 rounded-full font-bold w-1/2'>Connect</button>
                </div>
                <div className='p-4 h-auto flex flex-col justify-center ml-5 w-[15dvw] rounded-md items-center mt-5 bg-slate-50'>
                    <h1 className='text-[3rem] p-4 bg-white rounded-full mb-5'><FaGoogle /></h1>
                    <h1 className='text-center text-[1rem] font-bold mb-5'>Google</h1>
                    <button className='p-2 bg-blue-400 text-white mt-5 rounded-full font-bold w-1/2'>Connect</button>
                </div>
            </div>
            <div className='flex flex-col justify-start items-start p-4 mt-5'>

                <div className='w-full p-4 flex items-center justify-between'>
                    <h1 className='text-[1.1rem] font-bold tracking-wider'>Plugins</h1>
                </div>
                <div className='w-full p-4 flex items-center justify-between'>
                    <h1 className='text-[1.1rem] font-bold tracking-wider'>serpApi</h1>
                    <button className='bg-yellow-400 font-bold text-white px-5 py-2  rounded-full' onClick={() => setIsOpen(true)}>Add key</button>
                </div>
            </div>
        </div>
    )
}

export default Intergration;