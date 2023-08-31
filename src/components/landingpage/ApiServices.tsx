import React, { useState } from 'react';

const ApiServices = () => {
  const [isServiceEnabled, setIsServiceEnabled] = useState<boolean>(false);
  const [isServiceEnabled2, setIsServiceEnabled2] = useState<boolean>(false);

  const toggleService = () => {
    setIsServiceEnabled(!isServiceEnabled);
  };
  const toggleService2 = () => {
    setIsServiceEnabled2(!isServiceEnabled2);
  };
  return (
    <div className="mx-auto px-3 md:max-w-5xl md:px-5 md:pb-20 md:pt-20 lg:max-w-6xl xl:px-0">
      <div id="main" className="grid grid-cols-1 justify-evenly gap-5 md:grid-cols-2 ">
        <div>
          <p className="mb-5 px-3 text-2xl font-medium text-white dark:text-white md:text-3xl">
            Auto Deployed Back-End Service: Available with API reference
          </p>
          <div className="relative rounded-3xl border border-white p-8 dark:border-[#ffffff1a]">
            <div className="absolute right-2 top-4 flex gap-3 md:right-5 md:top-4">
              <p className="text-white dark:text-white">In service</p>
              <button className={`toggle-button ${isServiceEnabled ? 'on' : ''}`} onClick={toggleService}>
                <div className="slider"></div>
              </button>
            </div>
            <div className="gap-4">
              <h6 className="text-2xl font-medium text-white dark:text-white md:text-3xl">Backend service API</h6>
              <p className="md:text-md relative mt-5 text-lg leading-6 text-white dark:text-[#C2C2C2]">
                Easily integrate into your application
              </p>
            </div>
            <div className="mt-6 gap-4">
              <h6 className="text-2xl font-medium text-white dark:text-white md:text-3xl">API TOKEN:</h6>
              <p className="relative mt-3 break-all text-lg leading-6 text-[#00A3FE]  md:text-xl">https://api.infrahive.io/v1</p>
            </div>
            <div className="mt-2">
              <button className="mt-5 w-full rounded-lg border p-3 text-white dark:text-white sm:w-max">API Reference</button>
            </div>
            <p
              style={{
                height: '50%',
                width: '25%',
                top: '30%',
                left: '50%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
          </div>
        </div>
        <div>
          <p className="mb-5 px-3 text-2xl font-medium text-white dark:text-white md:text-3xl">
            Preview your App before deploying the Front-End
            <span className="invisible">Extra value</span>
          </p>
          <div className="relative rounded-3xl border border-white p-8 dark:border-[#ffffff1a]">
            <div className="absolute right-2 top-4 flex gap-3 md:right-5 md:top-4">
              <p className="text-white dark:text-white">In service</p>
              <button className={`toggle-button ${isServiceEnabled2 ? 'on' : ''}`} onClick={toggleService2}>
                <div className="slider"></div>
              </button>
            </div>
            <div className="gap-4">
              <h6 className="text-2xl font-medium text-white dark:text-white md:text-3xl">Test-app</h6>
              <p className="md:text-md relative mt-5 text-lg leading-6  text-white dark:text-[#C2C2C2]">Ready to use AI WebApp</p>
            </div>
            <div className="mt-6 gap-4">
              <h6 className="text-2xl  font-medium text-white dark:text-white md:text-3xl">public url:</h6>
              <p className="relative mt-3 break-all text-lg leading-6 text-[#00A3FE] md:text-xl">https://api.infrahive.io/v1</p>
            </div>
            <div className="mt-2 flex flex-col  gap-3 md:flex-row md:justify-center">
              <button className="mt-5 rounded-lg border p-3 text-white dark:text-white">Preview</button>
              <button className="mt-5 rounded-lg border p-3 text-white dark:text-white">Share</button>
              <button className="mt-5 rounded-lg border p-3 text-white dark:text-white">Embedded</button>
              <button className="mt-5 rounded-lg border  p-3 text-white dark:text-white">Settings</button>
            </div>
            <p
              style={{
                height: '50%',
                width: '25%',
                top: '30%',
                left: '40%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiServices;
