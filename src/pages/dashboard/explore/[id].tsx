// material-ui
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
// project imports
import { gridSpacing } from 'store/constant';
import AppsData from 'data/AppsData';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { PromptApi } from 'actions/prompts';
import { AppsInputData } from 'data/AppsInputData';
import { Box } from '@mui/system';

// ==============================|| Default DASHBOARD ||============================== //

const Explore = () => {
  const router = useRouter();
  const path = router.query.id;

  const [prompt, setPrompt] = useState<any>({});
  const [result, setResult] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);
  const [pageData, setPageData] = useState<{
    name: string;
    logo: string;
    color: string;
    desc: string[];
    features: {
      heading: string;
      desc: string;
    }[];
    integrate: {
      name: string;
      url: string;
      logo: string;
    }[];
    useCases: {
      heading: string;
      desc: string;
    }[];
  }>();
  // @ts-ignore
  const inputData = AppsInputData[path];

  const handleSubmit = async () => {
    setLoading(true);
    const res = await PromptApi({ ...prompt, api: inputData.api });
    if (res?.data) setResult(res.data);
    setLoading(false);
  };

  useEffect(() => {
    // @ts-ignore
    if (router.isReady && path) setPageData(AppsData[path]);
  }, [path]);

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrompt((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <Grid container spacing={gridSpacing}>
      <div style={{ borderRadius: '1rem' }} className="rounded-3 mx-auto my-20 max-w-6xl bg-white p-12 text-black">
        {pageData && (
          <>
            <div className="my-4 flex justify-between">
              <div className="flex gap-8">
                <img src={pageData.logo} alt={pageData.name} className={`${pageData.color} h-24 p-4`} />
                <h1 className="my-auto text-6xl font-semibold">{pageData.name}</h1>
              </div>
              <Button
                className="my-auto mt-4"
                sx={{
                  // color: '#000000',
                  fontWeight: 'bold',
                  background: '#ffffff',
                  height: '3rem'
                }}
                variant="outlined"
                onClick={() => router.push(`/apps/${path}`)}
              >
                Share
              </Button>
            </div>
            <div className="mt-8">
              {pageData.desc.map((text, index) => (
                <p key={index} className="mt-4 text-lg">
                  {text}
                </p>
              ))}
            </div>

            {pageData.features[0].desc != '' && (
              <ul className="mt-8 list-disc">
                <p className="text-lg font-semibold">Key Features</p>
                {pageData.features.map((feat, index) => (
                  <li className="ml-4 text-lg">
                    <span className="font-semibold">{feat.heading && `${feat.heading} : `}</span> {feat.desc}
                  </li>
                ))}
              </ul>
            )}

            {pageData.useCases[0].desc != '' && (
              <div className="mt-12">
                <h2 className="text-3xl font-semibold">Use Cases</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 text-lg md:grid-cols-2 lg:grid-cols-3">
                  {pageData.useCases.map((use, index) => (
                    <div key={index} className={`${pageData.color} rounded-sm p-6`}>
                      <span className="rounded-full bg-black px-2 py-1 text-white">{index + 1}</span>
                      <p className="my-2 mt-4">{use.heading}</p>
                      <p className="my-2 leading-6">{use.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <h2 className="my-5 text-3xl font-semibold">Test {pageData.name}</h2>
          </>
        )}

        <Box display={'flex'} gap={'1rem'}>
          <Box width={'50%'}>
            {inputData?.values.map((data: { name: string; placeHolder: string }, index: number) => (
              <TextField
                onChange={handlePromptChange}
                size="medium"
                sx={{ width: '100%', margin: '0 0 1rem' }}
                label={data.placeHolder}
                value={prompt[data.name]}
                name={data.name}
                key={index}
                disabled={loading}
                minRows={4 / inputData?.values.length}
                multiline
              />
            ))}
          </Box>
          <Box width={'50%'} position={'relative'}>
            <TextField size="medium" sx={{ width: '100%', margin: '0 0 1rem' }} minRows={4} multiline label="Output" value={result} />
            {loading && (
              <Box
                display={'flex'}
                position={'absolute'}
                justifyContent={'center'}
                top={'20%'}
                left={'50%'}
                sx={{ transform: 'translate(-50%, -50%)' }}
                minHeight={'10rem'}
                alignItems={'center'}
              >
                <CircularProgress />
              </Box>
            )}
          </Box>
        </Box>

        {/* {result && !loading ? (
          <TextField size="medium" sx={{ width: '100%', margin: '0 0 1rem' }} minRows={4} multiline label="Output" value={result} />
        ) : null} */}
        <Button type="button" onClick={handleSubmit} variant="outlined">
          Submit
        </Button>
      </div>
    </Grid>
  );
};
Explore.Layout = 'authGuard';
export default Explore;
