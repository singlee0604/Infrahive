import FeaturesDataType from "types/business";
import React from "react";
import FeaturesCard from "./FeaturesCard";

const FeaturesData:FeaturesDataType[] = [
  {
      heading: "Train your AI on-brand content",
      subHeading: "We'll help you train our AI to create content that's uniquely your own, by using your own content as training data.",
      features: ["Unique AI model writes in your brand voice","Automatically retrieve your own internal documentation or databases as knowledge references","Your AI model and data stays yours"],
      gif: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63e399c9deb0597a7fa67fe9_Your%20own%20voice-p-500.png",
      reverse:false
  },
  {
      heading: "Factual, original content",
      subHeading: "Hypotenuse AI is the only AI writing platform that provides timely, researched content — built into the content generation workflow.",
      features: ["Content Detective helps you research real-time, factual content from the web","Add your own talking points to give your content your own perspective"],
      gif: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63be8324bd2de3102780c233_2%20-%20%20Research.gif",
      reverse:true
  },
  {
      heading: "Batch create transactional content",
      subHeading: "Easily and quickly create content in bulk – from product descriptions to ad creatives and meta titles.",
      features: ["Instantly batch generate product descriptions, SEO copy & more with our batch generation tool","Publish to your Shopify store, Wordpress site or CMS","API available for you to build internal tools"],
      gif: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/637f201bd2e0aa7cfc4588b0_Bulk-workflows-clean.gif",
      reverse:false
  },
  {
      heading: "Use AI to power your style guide",
      subHeading: "Make sure that all of your content meets the same standard with AI-powered style guide features.",
      features: ["Automatically filter brand-banned words","Easily append templated text to the beginning or end of content","Design AI templates with frameworks for different types of content"],
      gif: "https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/63e3a1132d06fb61fd9d048c_custom-templates-p-500.png",
      reverse:true
  },
]

const Features = () => {
  return (
    <div className="text-center pt-16 text-white px-4 md:px-0">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-12">
        Write as a team, in one voice
      </h2>
      <p className="mt-6 font-light text-white opacity-60 mx-auto text-xl text-center max-w-3xl">
        Hypotenuse AI takes your existing high-performing, on-brand content to
        train an AI that'll be your team's brainstorming partner and first draft
        writer.
      </p>

      <div className="mt-24 flex flex-col gap-12 md:gap-24 lg:gap-32">
        {FeaturesData.map((feat, index) => (
          
            <FeaturesCard
              heading={feat.heading}
              subHeading={feat.subHeading}
              features={feat.features}
              gif={feat.gif}
              key={index}
              reverse={feat.reverse}
            />
          
        ))}
      </div>
    </div>
  );
};

export default Features;
