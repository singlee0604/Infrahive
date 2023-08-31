import React, { useEffect, useState } from "react";
import CreateCard from "./CreateCard";
import { FaBullhorn, FaEnvelope, FaGlobe, FaPalette, FaPenNib } from "react-icons/fa";
import {TbShoppingCart} from 'react-icons/tb'
import { IconType } from "react-icons";


const CreateData:{
    heading:string,
    desc: string,
    icon: IconType,
    image: string
}[] = [
    {
        heading: "Blog articles",
        desc: "Stay ahead with instant drafts of articles, from thought leadership to SEO content.",
        icon: FaPenNib,
        image: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63c153f80d9668b685dd0c79_1%20blog-p-800.png"
    },
    {
        heading: "eCommerce content",
        desc: "Shorten your product launch cycles while optimizing for long-tail SEO keywords.",
        icon: TbShoppingCart,
        image: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63c15565370b511da45c6feb_2%20product-p-800.png"
    },
    {
        heading: "Images & artwork",
        desc: "Spin up campaigns and ad experiments with instantly generated images and art.",
        icon: FaPalette,
        image: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63c155986584d9444cdbb0bc_6%20image%20gen-p-800.png"
    },
    {
        heading: "Paid ads & social media copy",
        desc: "Create distribution content, social media or ad experiment copy.",
        icon: FaBullhorn,
        image: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63c155aa6584d97bcbdbb12b_3%20marketing-p-800.png"
    },
    {
        heading: "Emails & comms",
        desc: "Improve newsletters, 2X your outbound campaigns and easy press releases.",
        icon: FaEnvelope,
        image: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63c155d2dfdf2b6a33b8bba5_4%20email-p-800.png"
    },
    {
        heading: "Website content",
        desc: "Create A/B testing content instantly for faster iterations.",
        icon: FaGlobe,
        image: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63c155e828404a01e87157b1_5%20landing%20page-p-800.png"
    },
]

const Create = () => {
    const [isActive, setIsActive] = useState(0)
    const [imageURL, setImageURL] = useState("")

    useEffect(() => {
        setImageURL(CreateData[isActive].image)
    }, [isActive])
  return (
    <div className="max-w-full md:max-w-[85%] lg:max-w-[70%] mx-4 md:mx-auto">
      <h2 className="text-4xl font-semibold mt-24 ml-4">
        See what your team can create
      </h2>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col gap-2 md:max-w-xl lg:max-w-md mx-auto lg:ml-auto  md:mr-24">
            {CreateData.map((card,index) => (
            <CreateCard heading={card.heading} desc={card.desc} icon={card.icon} index={index} isActive={isActive} setIsActive={setIsActive} imageURL={imageURL} setImageURL={setImageURL} />
            ))}
        </div>
        <div className="hidden lg:block">
                <img src={imageURL} height={600} width={600}/>
        </div>

      </div>
    </div>
  );
};

export default Create;
