import React from 'react'

type Props = {}

function MyAccount({}: Props) {
  return (
      <div className='flex-grow p-4'>
          <h1 className='text-[1.2rem] mt-5'>My account</h1>

          <div className='w-full flex flex-col'>
              <div className='flex items-center justify-start'>
                  <div className='w-full p-4 mt-5 flex flex-col gap-2 items-start'>
                      <label htmlFor="name">Name</label>
                      <input className='w-full p-3 border-2 rounded-md' placeholder='Infrahive' />
                  </div>
                  <div className='w-full p-4 mt-5 flex flex-col gap-2 items-start'>
                      <label htmlFor="email">Email</label>
                      <input className='w-full p-3 border-2 rounded-md' placeholder='myemail@gmail.com' />
                  </div>
              </div>
              <div className='w-full p-4 mt-5 flex flex-col gap-2 items-start'>
                  <label htmlFor="account">Infrahive account</label>
                  <input className='w-full p-3 border-2 rounded-md' placeholder='show 1 app' />
                  <p className='mt-5'>Your diffy account and associated user data.</p>
              </div>
          </div>
      </div>
  )
}

export default MyAccount