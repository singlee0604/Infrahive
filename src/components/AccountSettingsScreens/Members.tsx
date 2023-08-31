/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Image from 'next/image'
import Modal from 'pages/dashboard/Modal';
import React, { useState } from 'react'

const NewApiKeyModal = ({ setIsOpen }: { setIsOpen: (vl: any) => void; }) => {
    return (
        <div className='w-full mt-5 flex flex-col gap-2 items-start'>
            <p className='text-neutral-500 mb-5 text-[.8rem]'>They can access your team data directly after signing in.</p>
            <label htmlFor="email">Email</label>
            <input className='w-full p-3 border-2 rounded-md' placeholder='Input email' />
            <div className='mt-3 flex items-center justify-end gap-3 w-full '>
                <button className='bg-yellow-400 font-bold text-white p-2 pl-4 pr-4 rounded-full w-full border' onClick={() => setIsOpen(false)}>Add</button>
            </div>
        </div>
    )
}

type Props = {}

function Members({ }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex-grow p-4'>
            {
                isOpen && <Modal title={'Add Team member'} isOpen={isOpen} setIsOpen={setIsOpen} >
                    <NewApiKeyModal setIsOpen={setIsOpen} />
                </Modal>
            }
            <div className='p-4 flex justify-between items-center'>
                <div className=' flex items-center gap-3'>
                    <div className='bg-yellow-400 p-1 rounded-md'>
                        <img src={'/assets/images/Image1.png'}
                            className='w-[60px] h-[60px]'
                            alt="logo"

                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold'>Infrahasive workspace</h1>
                        <p>A workspace where you project is live and run</p>
                    </div>
                </div>
                <button className='bg-yellow-400 font-bold text-white p-2 pl-4 pr-4 rounded-full  border' onClick={() => setIsOpen(true)}>Add team member</button>
            </div>

            <table className='w-full text-neutral-600 mt-10 text-left align-left'>
                <tr className='border-b'>
                    <th className='p-4'>Name</th>
                    <th className='p-4'>Last active</th>
                    <th className='p-4'>Roles</th>
                </tr>
                <tr className='border-b'>
                    <td className='p-4'>myemail@gmail.com</td>
                    <td className='p-4'>2 days ago</td>
                    <td className='p-4'>Owner</td>
                </tr>
                <tr className='border-b'>
                    <td className='p-4'>myemail@gmail.com</td>
                    <td className='p-4'>2 days ago</td>
                    <td className='p-4'>Owner</td>
                </tr>
            </table>
        </div>
    )
}

export default Members