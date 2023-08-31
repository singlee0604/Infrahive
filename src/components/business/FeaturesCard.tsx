
import FeaturesDataType from 'types/business'
import React from 'react'

const FeaturesCard = (props:FeaturesDataType) => {
  return (
    <div className={`flex gap-4 md:gap-16 flex-col  ${props.reverse ? "md:flex-row-reverse": " md:flex-row"} mx-auto justify-center` }>
      <div className='max-w-lg text-left my-auto'>
        <h3 className='text-3xl font-bold'>{props.heading}</h3>
        <p className='mt-4 text-medium'>{props.subHeading}</p>

        <div>

        {props.features.map((feature,index) => (
          <div key={index} className='flex gap-3 md:gap-6 mt-6'>
            <img src='./checkMark.svg' className='h-5 my-auto'/>
            <p>{feature}</p>
            </div>
          ))}
          </div>

      </div>
          <img src={props.gif} className='max-w-[85%] mx-auto md:max-w-[32rem] rounded-lg'/>
      <div>

      </div>
    </div>
  )
}

export default FeaturesCard