import { Button, Link } from '@mui/material';
import React from 'react';

const GetDemo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-white bg-infra-yellow rounded-lg max-w-full mx-4 md:max-w-[70%] md:mx-auto mt-24 py-16 px-6 md:pl-24  md:pr-12 text-center md:text-left">
      <div className=" my-auto">
        <h3 className="text-3xl font-bold">Launch in as little as 2 weeks</h3>
        <p className="text-lg font-light -mt-4 opacity-80">Kickoff quickly and unlock the power of generative AI for your team.</p>
      </div>

      {/* <button className='bg-btn-blue px-20 py-3 text-base my-auto rounded-lg'>Request Demo</button> */}
      <Button
        color="inherit"
        sx={{
          backgroundColor: 'black',
          height: '55px',
          width: '140px',
          marginTop: 'auto',
          marginBottom: 'auto',
          marginRight: 'auto',
          marginLeft: 'auto',
          ':hover': { color: 'black' }
        }}
        variant="contained"
        component={Link}
        href="/contact"
        target="_blank"
      >
        Request Demo
      </Button>
    </div>
  );
};

export default GetDemo;
