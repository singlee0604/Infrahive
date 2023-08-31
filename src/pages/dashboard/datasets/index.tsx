import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';

import { gridSpacing } from '../../../store/constant';
// import OnBoarding from 'pages/onboarding';
import IsFormFilled from '../../../components/dashboard/Default/IsFormFilled';
import AppCard from '../../../components/dashboard/Default/AppCard';
import NewCard from '../../../components/dashboard/Default/NewCard';
import { Button, Checkbox, FormControlLabel, Grid, Radio, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';
import { IconPlus } from '@tabler/icons';
import Image from 'next/image';
import EmptyDataSetModal from 'components/dashboard/Default/EmptyDatasetModal';
import { divide } from 'lodash';
const FromFileIcon = '/assets/images/datasets/fromFile.png';
const FromNotion = '/assets/images/datasets/fromNotion.png';
const FromWebsite = '/assets/images/datasets/fromWeb.png';
import { CgFileDocument } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Datasets = () => {
	const router = useRouter();
	const [isLoading, setLoading] = useState(true);
	const [openEmpty, setOpenEmpty] = useState(false);
	const openEmptyModal = () => setOpenEmpty(true);
	const closeEmptyModal = () => setOpenEmpty(false);

	useEffect(() => {
		setLoading(false);
	}, []);

	const interests = useSelector((state: any) => state.personalInterest.interests);

	const handleFormFilledClick = () => {
		router.push('/onboarding');
	};
	const [creatingDataset, setCreatingDataset] = useState(false);
	const [activeTab, setActiveTab] = useState(1);
	const [selectedImport, SetSelectedImport] = useState("file")

	return (
		<Grid container spacing={gridSpacing}>
			{creatingDataset ? (
				<Grid item xs={12}>
					{/* <Grid container spacing={gridSpacing} sx={{ paddingTop: '10px' }}>
						<Grid item lg={4} md={6} sm={6} xs={12}>
							<Box sx={{ p: 1.5, height: '200px' }}>
								<Grid
									container
									direction="column"
									sx={{
										height: '100%',
										borderRadius: '5px',
										border: '1px dashed rgba(113, 117, 121, 0.30)',
										display: 'flex',
										alignItems: 'center',
										textAlign: 'center'
									}}
								>
									<Grid item sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: "1px", gap: "1px", margin: 'auto', textAlign: 'center', justifyContent: 'center' }}>
										<Button
											sx={{
												fontWeight: 500,
												// color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#717579',
												borderRadius: '10px',
												border: '1px dashed #809FB8',
												display: 'flex',
												alignItems: 'center',
												padding: '5px',
												height: '100%',
												background: '#F4F9FB',
												width: '60%'
											}}
											onClick={() => setCreatingDataset(true)}
										>
											<Box sx={{ padding: '3px', border: '1px solid #D9E1E7', borderRadius: '10px' }}>
												<IconPlus size="12" color="#F7B64B" />
											</Box>
											<span style={{ marginLeft: 'px', color: '#202224' }}>Create New Dataset</span>
										</Button>
										<p className='text-xs pt-5'>Import your own text data or write data in real-time via Webhook for LLM context enhancement.</p>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid> */}
					<div className="bg-white w-full p-4 my-4">
						<p>Create Dataset</p>
						<div className="my-2 relative py-5">
							{activeTab === 1 ? (
								<div className=" w-full h-1 bg-[#F6F6F9] "></div>
							) : activeTab === 2 ? (
								<div className=" w-full h-1 flex flex-row ">
									<div className="w-[50%] h-full bg-[#FEC200]"></div>
									<div className="w-[50%] h-full bg-[#F6F6F9]"></div>
								</div>
							) : (
								<div className=" w-full h-1 bg-[#FEC200] "></div>
							)}
							<div className="absolute  top-[10%] w-full flex flex-row justify-between  ">
								<div className="p-1 rounded-full bg-[#FEC200] cursor-pointer" onClick={() => setActiveTab(1)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none" className="w-5 h-5">
										<path
											d="M15.3673 2L6.01019 12.6972L2 8.68572"
											stroke="white"
											stroke-width="3"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								{activeTab >= 2 ? (
									<div className="p-1 rounded-full bg-[#FEC200] cursor-pointer" onClick={() => setActiveTab(2)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none" className="w-5 h-5">
											<path
												d="M15.3673 2L6.01019 12.6972L2 8.68572"
												stroke="white"
												stroke-width="3"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								) : (
									<div className="w-6 h-6 bg-[#F6F6F9] rounded-full"></div>
								)}
								{activeTab === 3 ? (
									<div className="p-1 rounded-full bg-[#FEC200] cursor-pointer" onClick={() => setActiveTab(3)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none" className="w-5 h-5">
											<path
												d="M15.3673 2L6.01019 12.6972L2 8.68572"
												stroke="white"
												stroke-width="3"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								) : (
									<div className="w-6 h-6 bg-[#F6F6F9] rounded-full"></div>
								)}
							</div>
							<div className="flex flex-row justify-between mt-7">
								<p className="text-[#FEC200]">Choose Data Source</p>
								<p className={`${activeTab >= 2 && 'text-[#FEC200]'}`}>Text Preprocessing and Cleaning</p>
								<p className={`${activeTab === 3 && 'text-[#FEC200]'}`}>Execute and finish</p>
							</div>
						</div>
					</div>
					{activeTab === 1 ? (
						<>
							<div className="bg-white w-full p-4 my-4">
								<div className="flex flex-row gap-3">
									<div className="w-[50%]">
										<Box sx={{ padding: '10px 30px' }}>
											<Typography
												sx={{
													color: '#202224',
													fontFamily: 'Poppins',
													fontSize: '14px',
													fontStyle: 'normal',
													fontWeight: '500',
													lineHeight: 'normal',
													padding: '10px 0px'
												}}
											>
												<Typography color="#717579" fontSize={12}>
													You can add more features for the chatbot
												</Typography>
											</Typography>
											<button onClick={() => SetSelectedImport("file")} className='w-full hover:bg-[#F4F9FB] my-2 bg-[#F6F6F9] rounded-xl'>
												<Box
													sx={{
														padding: '10px 20px',
														display: 'flex',
														justifyContent: 'space-between',
														borderRadius: '10px',
														alignItems: 'center'
													}}
												>
													<div className="flex gap-2 items-center">
														<div className="border-2 rounded-md p-4 w-[70px]">
															<Image alt="image" src={FromFileIcon} width={20} height={20} style={{ marginTop: 4, }} />
														</div>
														<div className="w-[80%]">
															<p className='text-[#202224]'>Import from text file</p>
														</div>
													</div>
													<div>
														{selectedImport === "file" && (<div className="bg-[#7ED19F] p-1 rounded-full">
															<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
																<path d="M15.3673 2L6.01019 12.6972L2 8.68572" fill="#7ED19F" />
																<path
																	d="M15.3673 2L6.01019 12.6972L2 8.68572"
																	stroke="white"
																	stroke-width="3"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</div>)}
													</div>
												</Box>
											</button>
											<button onClick={() => SetSelectedImport("notion")} className='w-full hover:bg-[#F4F9FB] my-2 bg-[#F6F6F9] rounded-xl'>
												<Box
													sx={{
														padding: '10px 20px',
														display: 'flex',
														justifyContent: 'space-between',
														borderRadius: '10px',
														alignItems: 'center',
													}}
												>
													<div className="flex gap-2 items-center">
														<div className="border-2 rounded-md p-4 w-[70px]">
															<Image alt="image" src={FromNotion} width={20} height={30} style={{ marginTop: 4, width: '100%', }} />
														</div>
														<div className="w-[80%]">
															<p className='text-[#202224]'>Sync from Notion</p>
														</div>
													</div>
													<div>
														{selectedImport === "notion" && (<div className="bg-[#7ED19F] p-1 rounded-full">
															<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
																<path d="M15.3673 2L6.01019 12.6972L2 8.68572" fill="#7ED19F" />
																<path
																	d="M15.3673 2L6.01019 12.6972L2 8.68572"
																	stroke="white"
																	stroke-width="3"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</div>)}
													</div>
												</Box>
											</button>
											<Box
												sx={{
													padding: '10px 20px',
													display: 'flex',
													justifyContent: 'space-between',
													background: '#F6F6F9',
													borderRadius: '10px',
													alignItems: 'center',
													mt: 2
												}}
											>
												<div className="flex gap-2 items-center">
													<div className="border-2 rounded-md p-4 w-[70px]">
														<Image alt="image" src={FromFileIcon} width={20} height={20} style={{ marginTop: 4, }} />
													</div>
													<div className="w-[80%]">
														<p className='text-[#202224]'>Import from text file</p>
													</div>
												</div>
												<div>
													{selectedImport === "" ? (<div className="bg-[#7ED19F] p-1 rounded-full">
														<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
															<path d="M15.3673 2L6.01019 12.6972L2 8.68572" fill="#7ED19F" />
															<path
																d="M15.3673 2L6.01019 12.6972L2 8.68572"
																stroke="white"
																stroke-width="3"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
														</svg>
													</div>) : (
														<div className="bg-[rgba(126,209,159,0.2)] px-2 py-1 rounded-full">
															<p className="text-xs">Coming soon</p>
														</div>
													)}
												</div>
											</Box>
											<br />
											<br />
										</Box>
									</div>
									<div className="w-[50%]">
										<Box sx={{ p: 1.5, height: '100%', backgroundColor: '#F4F9FB' }}>
											<Grid
												container
												direction="column"
												sx={{
													height: '100%',
													borderRadius: '5px',
													border: '1px dashed rgba(113, 117, 121, 0.30)',
													display: 'flex',
													alignItems: 'center',
													textAlign: 'center'
												}}
											>
												<Grid
													item
													sx={{
														width: '100%',
														display: 'flex',
														flexDirection: 'column',
														alignItems: 'center',
														padding: '1px',
														gap: '1px',
														margin: 'auto',
														textAlign: 'center',
														justifyContent: 'center'
													}}
												>
													<Box
														sx={{
															fontWeight: 500,
															// color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#717579',
															borderRadius: '10px',
															display: 'flex',
															flexDirection: 'column',
															alignItems: 'center',
															padding: '5px',
															height: '100%',
															width: '60%'
														}}
														onClick={() => setCreatingDataset(true)}
													>
														<Box sx={{ padding: '3px', border: '1px solid #D9E1E7', borderRadius: '10px' }}>
															<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
																<circle cx="30" cy="30" r="30" fill="#384455" />
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M24.0203 38.9928C21.3424 39.0841 19.0941 36.9943 18.9893 34.317L18.9893 29.4498C19.0933 26.7721 21.3417 24.6813 24.0203 24.7721L25.0203 24.7716C25.3775 24.7716 25.7076 24.962 25.8863 25.2716C26.0649 25.5812 26.0649 25.962 25.8863 26.2716C25.7076 26.5812 25.3775 26.7716 25.0203 26.7716H24.0203C22.4849 26.7189 21.1959 27.9171 21.1363 29.4523V34.3199C21.1972 35.8541 22.4856 37.0514 24.0203 36.9996H35.9723C37.5073 37.0514 38.7957 35.8531 38.8553 34.3185V29.4406C38.7956 27.9122 37.5128 26.7194 35.9843 26.7706H34.9723C34.6151 26.7706 34.2849 26.5802 34.1063 26.2706C33.9276 25.9611 33.9276 25.5802 34.1063 25.2706C34.2849 24.9611 34.6151 24.7706 34.9723 24.7706H35.9843C38.6559 24.6813 40.8981 26.7667 41.0023 29.4376L41.0023 34.3156C40.8986 36.9928 38.6502 39.0831 35.9723 38.9913L24.0203 38.9928ZM28.9203 32.007V21.4069L27.6253 22.6168C27.1899 22.9957 26.5418 22.9957 26.1063 22.6168C25.9062 22.4371 25.792 22.1808 25.792 21.9117C25.792 21.6427 25.9062 21.3864 26.1063 21.2067L29.2373 18.2838C29.6797 17.921 30.3168 17.921 30.7593 18.2838L33.8903 21.2067C34.09 21.3868 34.204 21.6427 34.204 21.9117C34.204 22.1808 34.09 22.4366 33.8903 22.6168C33.4586 23.0065 32.8019 23.0065 32.3702 22.6168L31.0703 21.4069V32.007H28.9203Z"
																	fill="white"
																/>
															</svg>
														</Box>
														<span style={{ marginLeft: 'px', color: '#202224' }}>Drag and drop file, or Browse</span>
													</Box>
													<p className="text-xs pt-5 mx-20">Supports txt, html, markdown, xlsx, and pdf. Max 15MB each.</p>
												</Grid>
											</Grid>
										</Box>
									</div>
								</div>
								<div className="flex flex-row justify-between my-5">
									<div className="w-[50%]"></div>
									<div className="w-[50%] bg-[#F6F6F9] px-4 py-2 flex flex-row justify-between text-[#717579]">
										<div className="flex flex-row gap-5">
											<Image alt="image" src={FromFileIcon} width={10} height={10} style={{ marginTop: 4 }} />
											<p>my file 8797 14 98 11.30 txt </p>
										</div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="21"
											height="23"
											viewBox="0 0 21 23"
											fill="none"
											className="cursor-pointer"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M5.70736 22.2954C4.03583 22.2954 2.68079 20.94 2.68079 19.2679V6.14875H1.67194C1.31148 6.14875 0.978476 5.95639 0.798306 5.64417C0.618013 5.33194 0.618013 4.94722 0.798306 4.635C0.978476 4.32278 1.31148 4.13042 1.67194 4.13042H5.70736V3.12125C5.70736 1.4492 7.06239 0.09375 8.73392 0.09375H12.7693C14.4409 0.09375 15.7959 1.4492 15.7959 3.12125V4.13042H19.8313C20.1918 4.13042 20.5248 4.32278 20.7049 4.635C20.8852 4.94722 20.8852 5.33194 20.7049 5.64417C20.5248 5.95639 20.1918 6.14875 19.8313 6.14875H18.8225V19.2679C18.8225 20.94 17.4674 22.2954 15.7959 22.2954H5.70736ZM4.6985 19.2679C4.6985 19.8253 5.15022 20.2771 5.70735 20.2771H15.7959C16.353 20.2771 16.8047 19.8253 16.8047 19.2679V6.14875H4.6985V19.2679ZM13.7782 4.13042V3.12125C13.7782 2.56391 13.3265 2.11208 12.7693 2.11208H8.73392C8.17678 2.11208 7.72506 2.56391 7.72506 3.12125V4.13042H13.7782ZM11.7605 16.2404V10.1854C11.7605 9.82487 11.9527 9.49174 12.2649 9.31145C12.5771 9.13119 12.9616 9.13119 13.2738 9.31145C13.5859 9.49174 13.7782 9.82487 13.7782 10.1854V16.2404C13.7782 16.601 13.5859 16.9341 13.2738 17.1144C12.9616 17.2946 12.5771 17.2946 12.2649 17.1144C11.9527 16.9341 11.7605 16.601 11.7605 16.2404ZM7.72506 16.2404V10.1854C7.72506 9.82487 7.9173 9.49174 8.22949 9.31145C8.54168 9.13119 8.92615 9.13119 9.23834 9.31145C9.55053 9.49174 9.74277 9.82487 9.74277 10.1854V16.2404C9.74277 16.601 9.55053 16.9341 9.23834 17.1144C8.92615 17.2946 8.54168 17.2946 8.22949 17.1144C7.9173 16.9341 7.72506 16.601 7.72506 16.2404Z"
												fill="#717579"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-row justify-between my-5">
									<div className="w-[50%]"></div>
									<button className="px-4 py-2 bg-[#FEC200] text-white rounded-full" onClick={() => setActiveTab(2)}>
										Next
									</button>
								</div>
							</div>
							<div className="my-3">
								<button onClick={openEmptyModal}>I want to create an empty dataset</button>
							</div>
						</>
					) : activeTab === 2 ? (
						<div className="w-full h-full p-4 ">
							<div className="w-full flex mt-10 gap-5 justify-start items-start">
								<div className="w-full h-auto p-3 bg-white rounded-[10px] shadow">
									<h1 className="font-bold text-[1.1rem] p-3">Text processing and Cleaning</h1>

									<div className="w-full mt-5 h-auto bg-white rounded-[10px] border border-black border-opacity-20 flex justify-between items-center gap-10">
										<label className="cursor-pointer" htmlFor="automatic">
											<div className="flex  p-4 items-start justify-start">
												<div className="p-3  bg-[rgba(254,194,0,.2)] text-[30px] rounded-md h-full  mr-5">
													<CgFileDocument />
												</div>
												<div>
													<h1 className="font-bold text-[1.1rem]">Automatic</h1>
													<p>
														Automatically set segmentation and preprocessing rules. Unfamiliar users <br /> are recommended to select this.
													</p>
												</div>
											</div>
										</label>
										<Radio color='warning' name='radio' id='automatic' />
										{/* <input type="radio" name="radio" id="automatic" className=" mr-5 w-[20px] h-5 accent-[rgba(254,194,0,1)]" /> */}
									</div>
									<div className="w-full mt-5 h-auto bg-white rounded-[10px] border border-black border-opacity-20 flex justify-between items-center gap-10">
										<label className="cursor-pointer" htmlFor="custom">
											<div className="flex  p-4 items-start justify-start">
												<div className="p-3 bg-[rgba(254,194,0,.2)] text-[30px] rounded-md h-full  mr-5">
													<CgFileDocument />
												</div>
												<div>
													<h1 className="font-bold text-[1.1rem]">Custom</h1>
													<p>Customize segmentation rules, segmentation length, and preprocessing rules, etc.</p>
												</div>
											</div>
										</label>

										<Radio color='warning' name='radio' id='custom' />
										{/* <input type="radio" name="radio" id="custom" className=" mr-5 w-[20px] h-[30px] p-5 accent-[rgba(254,194,0,1)] " /> */}
									</div>
									<div className="w-full p-4 mt-5 flex flex-col gap-2 items-start">
										<label htmlFor="account" className="font-bold text-neutral-800">
											Segment identifier
										</label>
										<input className="w-full p-3 border-2 rounded-md" placeholder="N/A" />
									</div>
									<div className="w-full p-4 mt-5 flex flex-col gap-2 items-start">
										<label htmlFor="account" className="font-bold text-neutral-800">
											Maximum segment length
										</label>
										<input className="w-full p-3 border-2 rounded-md" placeholder="500" />
									</div>
									<div className="mt-5 w-full">
										<h1 className="font-bold text-[1.1rem] p-3">Text processing rules</h1>
										<div className="w-full flex justify-start p-4 gap-5">
											<input
												type="checkbox"
												className="block rounded-md w-5 bg-[#fec200] text-[#fec200] accent-[#fec200]"
												placeholder="500"
												name="checkbox"
												id="checkbox"
											/>
											<label htmlFor="checkbox" className="cursor-pointer block text-neutral-500">
												Replace consective spaces, newlines and tabs
											</label>
										</div>
										<div className="w-full flex justify-start p-4 gap-5">
											<input
												type="checkbox"
												className="block rounded-md w-5 bg-[#fec200] text-[#fec200] accent-[rgb(254,194,0)]"
												placeholder="500"
												name="check"
												id="check"
											/>
											<label htmlFor="check" className="cursor-pointer block text-neutral-500">
												Delete all URLs and email addresses
											</label>
										</div>
									</div>

									<button className="p-2 bg-[#fec200] text-white mt-10 rounded-full font-bold w-2/5">Confirm</button>
								</div>
								<div className="w-full h-auto p-3 bg-white rounded-[10px] shadow">
									<h1 className="font-bold text-[1.1rem] p-3">Preview document</h1>
									<hr />
									<div className="w-[80%] p-5 h-auto mt-10 mb-10">
										<span className="text-black text-base font-normal">
											Why segment and preprocess?
											<br />
											<br />
										</span>
										<span className="text-zinc-500 text-base font-normal">
											When processing text data, segmentation and cleaning are two important preprocessing steps.
											<br />
											<br />
											Segmentation splits long text into paragraphs so models can understand better. This improves the quality and relevance
											of model results.
											<br />
											<br />
											Cleaning removes unnecessary characters and formats, making datasets cleaner and easier to parse.
											<br />
											<br />
											Proper segmentation and cleaning improve model performance, providing more accurate and valuable results.
										</span>
									</div>
								</div>
							</div>

							<div className="mt-10 p-4 w-1/2">
								<h1 className="font-bold text-[1.2rem]">Index mode</h1>

								<div className="w-full gap-2  items-start p-5 mt-5 flex justify-start  bg-white rounded-[10px] border border-yellow-400">
									<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className="w-10">
										<circle cx="13" cy="13" r="13" fill="#FEC200" />
										<circle cx="13" cy="13" r="4.75" fill="white" />
									</svg>
									<div className="flex flex-col gap-4">
										<h1 className="font-bold text-[1.1rem]">High Quality</h1>
										<p>Call OpenAI&apos;s embedding interface for processing to provide higher accuracy when users query</p>
									</div>
									<div>
										<h1 className="font-bold "> Estimation</h1>
										<h1 className="font-bold "> 11 tokens</h1>
										<h1 className="text-[#fec200]">($0.000001)</h1>
									</div>
								</div>
								<div className="w-full gap-2 items-start p-5 mt-5 flex justify-start  bg-white rounded-[10px] border border-yellow-400">
									<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className="w-10">
										<circle cx="13" cy="13" r="13" fill="#FEC200" />
										<circle cx="13" cy="13" r="4.75" fill="white" />
									</svg>
									<div className="flex flex-col gap-4">
										<h1 className="font-bold text-[1.1rem]">Economical</h1>
										<p>Use offline vector engines, keyword indexes, etc. to reduce accuracy without spending tokens</p>
									</div>
									<div>
										<h1 className="font-bold "> Estimation</h1>
										<h1 className="font-bold "> 0 tokens</h1>
									</div>
								</div>

								<p className="mt-5">Preprocessor documents</p>
								<div className="p-5 mt-2 justify-between items-center w-full flex">
									<p>Camscanner 07-13-2023 11.30</p>
									<button
										className="p-2 bg-[#fec200] pt-3 pb-3 text-white mt-5 rounded-full font-bold w-2/5"
										onClick={() => setActiveTab(3)}
									>
										Save & process
									</button>
								</div>
							</div>
						</div>
					) : (
						<div className="flex flex-row gap-5">
							<div className="w-[50%] bg-white rounded-lg p-5">
								<div className="flex flex-col items-center py-5">
									<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
										<circle cx="30" cy="30" r="30" fill="#7ED19F" />
										<path d="M42.5009 18L23.951 39.2L16.001 31.25" fill="#7ED19F" />
										<path
											d="M42.5009 18L23.951 39.2L16.001 31.25"
											stroke="white"
											stroke-width="3"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<p>Dataset Created</p>
								</div>
								<div>
									<div className="my-2">
										<p className="text-black">Dataset name:</p>
										<p>Camscanner</p>
									</div>
									<div className="my-2">
										<p className="text-black">Embedding completed:</p>
										<p>100%</p>
									</div>
									<div className="my-2">
										<p className="text-black">Segmentation rule:</p>
										<p>Automatic</p>
									</div>
									<div className="my-2">
										<p className="text-black">Segmentation length:</p>
										<p>1000</p>
									</div>
									<div className="my-2">
										<p className="text-black">Text pre-definition and c :</p>
										<p>Automatic</p>
									</div>
								</div>
								<div className="my-4">
									<button className="px-4 py-2 rounded-full bg-[#FEC200] text-white">Go to Document</button>
								</div>
							</div>
							<div className="w-[50%] bg-white rounded-lg">
								<p className="p-5 text-black font-semibold">What's next</p>
								<hr />
								<p className="m-5">
									After the document finishes indexing, the dataset can be integrated into the application as context, you can find the
									context setting in the prompt orchestration page. You can also create it as an independent ChatGPT indexing plugin for
									release.
								</p>
							</div>
						</div>
					)}
				</Grid>
			) : (
				<Grid item xs={12}>
					<Grid container spacing={gridSpacing} sx={{ paddingTop: '10px' }}>
						<Grid item lg={4} md={6} sm={6} xs={12}>
							<Box sx={{ p: 1.5, height: '200px', backgroundColor: 'white' }}>
								<Grid
									container
									direction="column"
									sx={{
										height: '100%',
										borderRadius: '5px',
										border: '1px dashed rgba(113, 117, 121, 0.30)',
										display: 'flex',
										alignItems: 'center',
										textAlign: 'center'
									}}
								>
									<Grid
										item
										sx={{
											width: '100%',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											padding: '1px',
											gap: '1px',
											margin: 'auto',
											textAlign: 'center',
											justifyContent: 'center'
										}}
									>
										<Button
											sx={{
												fontWeight: 500,
												// color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#717579',
												borderRadius: '10px',
												border: '1px dashed #809FB8',
												display: 'flex',
												alignItems: 'center',
												gap: '10px',
												padding: '5px',
												height: '100%',
												background: '#F4F9FB',
												width: '60%'
											}}
											onClick={() => setCreatingDataset(true)}
										>
											<Box sx={{ padding: '3px', border: '1px solid #D9E1E7', borderRadius: '2px' }}>
												<IconPlus size="12" color="#F7B64B" />
											</Box>
											<span style={{ marginLeft: 'px', color: '#202224' }}>Create Dataset</span>
										</Button>
										<p className="text-xs pt-7 text-[#717579] ">
											Import your own text data or write data in real-time via Webhook for LLM context enhancement.
										</p>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			)}
			<EmptyDataSetModal open={openEmpty} ModalClose={closeEmptyModal} ModalOpen={openEmptyModal} />
		</Grid>
	);
};

Datasets.Layout = 'dashboardLayout';

export default Datasets;
