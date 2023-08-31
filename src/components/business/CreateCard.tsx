import React from 'react'
import { IconType } from 'react-icons'

  
  
  
  const CreateCard = (props:{
      index:number,
    heading:string,
    desc:string,
    icon:IconType,
    isActive:number,
    setIsActive:any,
    imageURL:string,
    setImageURL: any
}) => {
    const toggleBtn = () => {
        props.setIsActive(props.index)
        props.setImageURL(props.imageURL)
    }
  return (
    <div className={`flex ${props.isActive === props.index ? "border-l-16 border-l-btn-blue !shadow-custom" : "!shadow-custom-lite"} rounded-md bg-white text-black px-4`} onClick={toggleBtn} >
        {
        props.icon && <props.icon className='my-auto text-btn-blue mx-2 text-xl'/>
        }
            
        <div  className='pl-4'>
            <h4 className='text-lg font-normal'>{props.heading}</h4>
            {
                props.isActive === props.index ? (
                    <p className="opacity-80 -mt-2 max-w-xs">{props.desc}</p>
                ) : ''
            }
        </div>
    </div>
  )
}

export default CreateCard