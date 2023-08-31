import Search from '@mui/icons-material/Search';
import FooterPage from 'components/landingpage/Footer';
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AppBar from 'ui-component/extended/AppBar';
import useConfig from 'hooks/useConfig';
import Link from 'next/link';

const AppCard = (props: { logo: string; heading: string; desc: string; url: string; color: string }) => {
  return (
    <Link
      href={{
        pathname: props.url,
        query: { id: props.url.split('/').pop() }
      }}
    >
      {/* <a> */}
      <div className="min-h-[12rem] rounded-md border border-slate-500 bg-[#0E0C15] p-4 text-white">
        <img src={props.logo} alt={props.heading} className={`h-12 ${props.color} p-2`} />
        <p className="text-md mt-4 font-semibold">{props.heading}</p>
        <p className="text-sm text-slate-400 ">{props.desc}</p>
      </div>
      {/* </a> */}
    </Link>
  );
};

const Data: {
  logo: string;
  heading: string;
  desc: string;
  url: string;
  category: 'all' | 'data' | 'analysis' | 'generation' | 'custom';
  color: 'bg-yellow-500' | 'bg-blue-500' | 'bg-orange-400' | 'bg-green-400';
}[] = [
  {
    logo: '/assets/images/apps/sentiment.png',
    heading: 'Sentiment Analyze',
    desc: 'Assess the sentiment of any text as positive or negative.',
    url: '/apps/sentiment-analyze',
    category: 'custom',
    color: 'bg-orange-400'
  },
  {
    logo: '/assets/images/apps/text_summarise.png',
    heading: 'Text Summarize',
    desc: 'Summarize any text, exactly how you need it.',
    url: '/apps/text-summarize',
    category: 'analysis',
    color: 'bg-green-400'
  },
  {
    logo: '/assets/images/apps/entity.png',
    heading: 'Entity Extract',
    desc: 'Detect, extract, and count relevant keywords and phrases from text data',
    url: '/apps/entity-extract',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/transformer.png',
    heading: 'Data Transformer',
    desc: 'A general purpose interface to apply a function to a set of points.',
    url: '/apps/data-transformer',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/video.png',
    heading: 'Video Summarize',
    desc: 'Summarize any video or audio file from a Google Drive URL',
    url: '/apps/video-summerize',
    category: 'custom',
    color: 'bg-orange-400'
  },
  {
    logo: '/assets/images/apps/sql.png',
    heading: 'SQL Write with Pasted Schema',
    desc: 'Write SQL from natural language by pasting in your schema with the request.',
    url: '/apps/sql-write',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/text_classification.png',
    heading: 'Text Classification',
    desc: 'Craft any type of content.',
    url: '/apps/text-classification',
    category: 'generation',
    color: 'bg-yellow-500'
  },
  {
    logo: '/assets/images/apps/translator.png',
    heading: 'Language Translate',
    desc: 'Translate text from any language to any language.',
    url: '/apps/language-translate',
    category: 'analysis',
    color: 'bg-green-400'
  }
];

const CategoriesBar: { name: string; value: string; color: string }[] = [
  {
    name: 'All Categories',
    value: 'all',
    color: 'red-500'
  },
  {
    name: 'Data',
    value: 'data',
    color: 'blue-400'
  },
  {
    name: 'Text Analysis',
    value: 'analysis',
    color: 'green-500'
  },
  {
    name: 'Text Generation',
    value: 'generation',
    color: 'yellow-500'
  },
  {
    name: 'Custom',
    value: 'custom',
    color: 'orange-500'
  }
];

const index = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const { onChangeMenuType } = useConfig();
  useEffect(() => {
    onChangeMenuType('light');
  }, []);
  return (
    <div className="min-h-screen bg-[#0E0C15]">
      <AppBar background={'transparent'} />
      <div className="mx-auto mt-24 max-w-5xl px-4">
        <h1 className="my-4 text-center text-2xl font-semibold  text-[#FFFFFF]">Explore Apps</h1>
        <hr className="opacity-40" />
        {/* Categories */}
        <div className="my-4 flex justify-between">
          <div className="flex gap-4">
            {CategoriesBar.map((cat, index) => (
              <button key={index} onClick={() => setCategory(cat.value)}>
                <p className={`${category === cat.value ? 'font-semibold text-white' : 'font-semibold text-slate-500'} text-xs md:text-sm`}>
                  {cat.name}
                </p>
              </button>
            ))}
          </div>

          {/* <div className="flex border rounded-full border-slate-500">
            <input
              placeholder="Search"
              value={searchText}
              onChange={handleSearch}
              className="bg-transparent px-2 rounded-l-full text-slate-500"
            />
            <Search className="text-slate-500" />
          </div> */}
        </div>
        <p
          style={{
            height: '30%',
            width: '10%',
            top: '20%',
            right: '22%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(90px)'
          }}
        ></p>
        <p
          style={{
            height: '20%',
            width: '10%',
            bottom: '10%',
            left: '10%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(120px)'
          }}
        ></p>
        {/* Apps */}
        <div className="my-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  ">
          {Data.map((app, index) =>
            category === 'all' ? (
              <AppCard
                logo={app.logo}
                desc={app.desc}
                heading={app.heading}
                // url={'https://calendly.com/infrahive/infrahive-demo'}
                url={app.url}
                key={index}
                color={app.color}
              />
            ) : (
              category === app.category && (
                <AppCard
                  logo={app.logo}
                  desc={app.desc}
                  heading={app.heading}
                  url={'https://calendly.com/infrahive/infrahive-demo'}
                  key={index}
                  color={app.color}
                />
              )
            )
          )}
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default index;
