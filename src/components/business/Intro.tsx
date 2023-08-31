import { Button, Link } from '@mui/material';
import React from 'react';

const Intro = () => {
  return (
    <div className="text-center pt-16 pb-12 md:pb-24 text-white px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold ">Generative AI, tailored to your business</h1>
      <p className="text-xl mt-8">Train AI on your own data to create on-brand content at scale.</p>
      <div className="flex justify-center mt-12 gap-2 text-md">
        <Button
          color="inherit"
          sx={{ color: 'black', height: '55px', width: '140px' }}
          variant="contained"
          component={Link}
          href="/contact"
          target="_blank"
        >
          Request demo
        </Button>
        <Button
          sx={{
            color: '#FFFFFF',
            fontWeight: 'bold',
            background: 'rgb(234, 179, 8)',
            width: '140px'
          }}
          variant="contained"
          href="https://w0zxkfg7yyu.typeform.com/to/uUt0n1S4"
          target={'_blank'}
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};

export default Intro;
