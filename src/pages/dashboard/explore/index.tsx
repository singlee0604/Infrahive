// material-ui
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
// project imports
import { gridSpacing } from 'store/constant';
import Link from 'next/link';
import AddToAppModal from 'components/dashboard/Default/AddToAppModal';

// ==============================|| Default DASHBOARD ||============================== //



const CategoriesBar: { name: string; value: string; color: string }[] = [
	{
		name: 'All Categories',
		value: 'all',
		color: 'red-500'
	},
	{
		name: 'HR',
		value: 'hr',
		color: 'red-500'
	},
	{
		name: 'Entertainment',
		value: 'entertainment',
		color: 'red-500'
	},
	{
		name: 'Writing',
		value: 'writing',
		color: 'blue-400'
	},
	{
		name: 'Assistant',
		value: 'assistant',
		color: 'green-500'
	},
	{
		name: 'Programming',
		value: 'programming',
		color: 'yellow-500'
	},
	{
		name: 'Translate',
		value: 'translate',
		color: 'orange-500'
	}
];

const Data: {
	heading: string;
	desc: string;
	url: string;
	type: string;
	category: 'all' | 'data' | 'analysis' | 'generation' | 'custom';
	color: 'bg-yellow-500' | 'bg-blue-500' | 'bg-orange-400' | 'bg-green-400';
}[] = [
		{
			heading: 'Sentiment Analyze',
			desc: 'Assess the sentiment of any text as positive or negative.',
			url: '/dashboard/explore/sentiment-analyze',
			category: 'custom',
			color: 'bg-orange-400',
			type: "Chat App"
		},
		{
			heading: 'Sentiment Analyze',
			desc: 'Assess the sentiment of any text as positive or negative.',
			url: '/dashboard/explore/sentiment-analyze',
			category: 'custom',
			color: 'bg-orange-400',
			type: "Chat App"
		},
		{
			heading: 'Sentiment Analyze',
			desc: 'Assess the sentiment of any text as positive or negative.',
			url: '/dashboard/explore/sentiment-analyze',
			category: 'custom',
			color: 'bg-orange-400',
			type: "Chat App"
		},
		{
			heading: 'Sentiment Analyze',
			desc: 'Assess the sentiment of any text as positive or negative.',
			url: '/dashboard/explore/sentiment-analyze',
			category: 'custom',
			color: 'bg-orange-400',
			type: "Chat App"
		},
		{
			heading: 'Sentiment Analyze',
			desc: 'Assess the sentiment of any text as positive or negative.',
			url: '/dashboard/explore/sentiment-analyze',
			category: 'custom',
			color: 'bg-orange-400',
			type: "Chat App"
		},
		{
			heading: 'Sentiment Analyze',
			desc: 'Assess the sentiment of any text as positive or negative.',
			url: '/dashboard/explore/sentiment-analyze',
			category: 'custom',
			color: 'bg-orange-400',
			type: "Chat App"
		},
		{
			heading: 'Text Summarize',
			desc: 'Summarize any text, exactly how you need it.',
			url: '/dashboard/explore/text-summarize',
			category: 'analysis',
			color: 'bg-green-400',
			type: "Chat App"
		},
		{
			heading: 'Entity Extract',
			desc: 'Detect, extract, and count relevant keywords and phrases from text data',
			url: '/dashboard/explore/entity-extract',
			category: 'data',
			color: 'bg-blue-500',
			type: "Chat App"
		},
		{
			heading: 'Data Transformer',
			desc: 'A general purpose interface to apply a function to a set of points.',
			url: '/dashboard/explore/data-transformer',
			category: 'data',
			color: 'bg-blue-500',
			type: "Chat App"
		},
		{
			heading: 'Video Summarize',
			desc: 'Summarize any video or audio file from a Google Drive URL',
			url: '/dashboard/explore/video-summerize',
			category: 'custom',
			color: 'bg-orange-400',
			type: "Chat App"
		},
		{
			heading: 'SQL Write with Pasted Schema',
			desc: 'Write SQL from natural language by pasting in your schema with the request.',
			url: '/dashboard/explore/sql-write',
			category: 'data',
			color: 'bg-blue-500',
			type: "Chat App"
		},
		{
			heading: 'Text Classification',
			desc: 'Craft any type of content.',
			url: '/dashboard/explore/text-classification',
			category: 'generation',
			color: 'bg-yellow-500',
			type: "Chat App"
		},
		{
			heading: 'Language Translate',
			desc: 'Translate text from any language to any language.',
			url: '/dashboard/explore/language-translate',
			category: 'analysis',
			color: 'bg-green-400',
			type: "Chat App"
		}
	];

const Explore = () => {
	const theme = useTheme();
	const [selectedBtn, setSelectedBtn] = useState('All');
	const [cardList, useCardList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
	const [isLoading, setLoading] = useState(true);
	const [category, setCategory] = useState('all');
	const [addingApp, setAddingApp] = useState(false)
	const closeAddingApp = () => setAddingApp(false)
	const openAddingApp = () => setAddingApp(true)

	const headerButtons = ['All', 'App', 'DDD', 'Test-child', 'ChatGPT', 'Image'];

	const AppCard = (props: { heading: string; desc: string; url: string; color: string, type: string }) => {
		return (
			// <Link href={props.url}>
			<div className="min-h-[12rem] cursor-pointer rounded-md border border-slate-200 bg-white p-4 text-black">
				<div className="flex flex-row justify-between align-top">
					<div className='bg-[rgba(254,194,0,0.2)] p-3   rounded-lg'>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none" >
							<path d="M10.643 2.28613H11.929C12.4406 2.28613 12.9312 2.48937 13.293 2.85113C13.6548 3.21289 13.858 3.70353 13.858 4.21513V17.0721C13.858 17.5837 13.6548 18.0744 13.293 18.4361C12.9312 18.7979 12.4406 19.0011 11.929 19.0011H2.929C2.67568 19.0011 2.42484 18.9512 2.1908 18.8543C1.95677 18.7574 1.74412 18.6153 1.56499 18.4361C1.38587 18.257 1.24378 18.0444 1.14684 17.8103C1.04989 17.5763 1 17.3255 1 17.0721V4.21513C1 3.96181 1.04989 3.71097 1.14684 3.47694C1.24378 3.2429 1.38587 3.03025 1.56499 2.85113C1.74412 2.672 1.95677 2.52991 2.1908 2.43297C2.42484 2.33603 2.67568 2.28613 2.929 2.28613H4.215" stroke="#FEC200" stroke-width="1.5" stroke-linejoin="round" />
							<path d="M9.35699 1H5.49999C4.78975 1 4.21399 1.57554 4.21399 2.2855C4.21399 2.99546 4.78975 3.571 5.49999 3.571H9.35699C10.0672 3.571 10.643 2.99546 10.643 2.2855C10.643 1.57554 10.0672 1 9.35699 1Z" stroke="#FEC200" stroke-width="1.5" stroke-linejoin="round" />
						</svg>
					</div>
					<div className='bg-[rgba(126,209,159,0.2)] px-2 py-1 rounded-full h-fit'>{props.type}</div>
				</div>
				<p className="text-md mt-4 font-semibold">{props.heading}</p>
				<p className="text-sm text-slate-400 ">{props.desc}</p>
				<Typography id="transition-modal-description" sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
					<Button
						sx={{
							borderRadius: '20px',
							background: '#FEC200 !important',
							color: 'white',
							fontSize: '13px',
							padding: '5px 10px',
							ml: 1,
							width: "50%"
						}}
						onClick={() => setAddingApp(true)}
					>
						Add to Workspace
					</Button>
					<Button sx={{ borderRadius: '20px', color: '#717579', fontSize: '13px', padding: '5px 20px', width: "50%" }}>
						Customize
					</Button>
				</Typography>
			</div>
			// </Link>	
		);
	};
	useEffect(() => {
		setLoading(false);
		console.log(cardList.length, 'length');
	}, []);
	return (
		<Grid container spacing={gridSpacing} sx={{ backgroundColor: "#F6F6F9", width: "81.5vw", }}>
			<div className="w-[100%] ml-10 px-4 mt-10  mx-auto ">
				<h1 className="my-2  text-2xl font-semibold">Explore Apps by Infrahive</h1>
				<p className='text-[#717579] mb-4'>Use these template apps instantly or customize your own apps based on the templates.</p>
				<hr className="opacity-40" />
				{/* Categories */}
				<div className="w-100 my-4 flex justify-between">
					<div className="flex border-b-2 w-full ">
						{CategoriesBar.map((cat, index) => (
							<div className={`${category === cat.value ? 'border-b-2 border-[#FEC200]' : 'border-b-0'} py-3 border-b-2 px-4 transition-all duration-500`}>
								<button onClick={() => setCategory(cat.value)}>
									<p className={`${category === cat.value ? 'text-black' : 'text-slate-500'}`}>{cat.name}</p>
								</button>
							</div>
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

				{/* Apps */}
				<div className="my-12 grid grid-cols-3 gap-4">
					{Data?.map((app, index) =>
						category === 'all' ? (
							<AppCard
								desc={app.desc}
								heading={app.heading}
								// url={'https://calendly.com/infrahive/infrahive-demo'}
								url={app.url}
								key={index}
								color={app.color}
								type={app.type}
							/>
						) : (
							category === app.category && (
								<AppCard
									desc={app.desc}
									heading={app.heading}
									url={'https://calendly.com/infrahive/infrahive-demo'}
									key={index}
									color={app.color}
									type={app.type}
								/>
							)
						)
					)}
				</div>
			</div>
			<AddToAppModal open={addingApp} ModalClose={closeAddingApp} ModalOpen={openAddingApp} />
		</Grid>
	);
};
Explore.Layout = 'authGuard';
export default Explore;
