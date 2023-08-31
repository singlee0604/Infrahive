import { Button } from '@mui/material';
import Link from 'Link';
import React from 'react';

const perks: string[] = [
  'Annual licence-based pricing, including overage buffers',
  'Custom AI templates and models tailored to your brand voice',
  'API access',
  'Organization management and user roles for teams',
  'Personal account manager',
  'For teams of more than 5 users'
];

const TypedLink = Link as React.ElementType;

const PricingComp = () => {
  return (
    <div className="pt-38 h-full text-center text-white ">
      <h2 className="mt-24 text-3xl font-semibold lg:ml-4 lg:text-4xl">Try for free and see how AI can work for you</h2>

      {/* Pricing Card */}
      <div className="mx-4 mt-20 max-w-xl rounded-xl bg-grey p-6 text-left md:mx-auto">
        <img src="https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/6315e2a30cc3cf2cba3aabe8_plan3.svg" height={48} />
        <p className="text-2xl ">Enterprise</p>
        <p className="-mt-1 text-lg opacity-75">For content teams looking for personalized, on-brand storytelling.</p>
        <p className="text-4xl font-semibold">Custom</p>
        <div className="">
          {perks.map((perk, index) => (
            <div key={index} className="-mt-2 flex gap-6 text-lg">
              <img src="./checkMark.svg" className="my-auto h-6" />
              <p>{perk}</p>
            </div>
          ))}
        </div>

        <Button
          color="inherit"
          sx={{ color: 'black', height: '43px', width: '100%', marginTop: '4rem' }}
          variant="contained"
          component={TypedLink}
          target={'_blank'}
          href="https://w0zxkfg7yyu.typeform.com/to/uUt0n1S4"
          //  target="_blank"
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};

export default PricingComp;
