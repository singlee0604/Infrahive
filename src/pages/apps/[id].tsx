import FooterPage from 'components/landingpage/Footer';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import AppBar from 'ui-component/extended/AppBar';
import AppsData from 'data/AppsData';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import useConfig from 'hooks/useConfig';
import { AppsInputData } from 'data/AppsInputData';
import { PromptApi } from 'actions/prompts';
import styled from '@emotion/styled';

// const CustomTextField = styled(TextField)``;

const ValidationTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      color: '#60176F',
      // borderColor: 'black',
      border: 'none'
    }
  },
  '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
    color: '#60176F'
  }
});

const Apps = () => {
  const router = useRouter();
  const path = router.query.id;
  console.log('>>>>>>>>>>>>>>', router);

  const [prompt, setPrompt] = useState<any>({});
  const [result, setResult] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);
  // console.log(params.id)
  const PageData: {
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
    // @ts-ignore
  } = AppsData[path];
  // @ts-ignore
  const inputData = AppsInputData[path];
  const { onChangeMenuType } = useConfig();
  useEffect(() => {
    onChangeMenuType('light');
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await PromptApi({ ...prompt, api: inputData.api });
    if (res?.data) setResult(res.data);
    setLoading(false);
  };

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrompt((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#0E0C15]">
      {/* {console.log(path)} */}
      <AppBar background={'transparent'} />
      <div className="mx-auto my-20 max-w-6xl px-8 text-white">
        <div className="my-4 flex justify-between">
          <div className="flex gap-8">
            <img src={PageData?.logo} alt={PageData?.name} className={`${PageData?.color} h-24 p-4`} />
            <h1 className="my-auto text-6xl font-semibold">{PageData?.name}</h1>
          </div>
        </div>

        <div className="mt-8">
          {PageData?.desc?.map((text, index) => (
            <p key={index} className="mt-4 text-lg">
              {text}
            </p>
          ))}
        </div>

        {PageData?.features && PageData?.features?.length > 0 && PageData?.features[0]?.desc !== '' && (
          <ul className="mt-8 list-disc">
            <p className="text-lg font-semibold">Key Features</p>
            {PageData?.features?.map((feat, index) => (
              <li key={index} className="ml-4 text-lg">
                <span className="font-semibold">{feat?.heading && `${feat?.heading} : `}</span> {feat?.desc}
              </li>
            ))}
          </ul>
        )}

        {PageData?.useCases[0]?.desc != '' && (
          <div className="mt-12">
            <h2 className="text-3xl font-semibold">Use Cases</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 text-lg md:grid-cols-2 lg:grid-cols-3">
              {PageData?.useCases?.map((use, index) => (
                <div key={index} className={`${PageData?.color} rounded-sm p-6`}>
                  <span className="rounded-full bg-black px-2 py-1 text-white">{index + 1}</span>
                  <p className="my-2 mt-4">{use?.heading}</p>
                  <p className="my-2 leading-6">{use?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* {PageData?.name && <h2 className="my-5 text-3xl font-semibold">Test {PageData?.name}</h2>}
        <Box display={'flex'} gap={'1rem'}>
          <Box width={'50%'}>
            {inputData?.values?.map((data: { name: string; placeHolder: string }, index: number) => (
              <ValidationTextField
                onChange={handlePromptChange}
                size="medium"
                sx={{ width: '100%', margin: '0 0 1rem', '& .MuiInputBase-input': { backgroundColor: '#0E0C15', color: 'white' } }}
                // label={data.placeHolder}
                placeholder={data?.placeHolder}
                value={prompt[data?.name]}
                name={data?.name}
                key={index}
                disabled={loading}
                minRows={4 / inputData?.values?.length}
                multiline
                variant="outlined"
              />
            ))}
          </Box>
          <Box width={'50%'} position={'relative'}>
            <ValidationTextField
              size="medium"
              sx={{ width: '100%', margin: '0 0 1rem', '& .MuiInputBase-input': { backgroundColor: '#0E0C15' }, color: 'white' }}
              minRows={4}
              multiline
              placeholder="Output"
              value={result}
            />
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

        {loading && (
          <Box display={'flex'} justifyContent={'center'} width={'100%'} height={'5rem'} alignItems={'center'}>
            <CircularProgress />
          </Box>
        )}
        <Button type="button" onClick={handleSubmit} variant="outlined">
          Submit
        </Button> */}
      </div>
      <FooterPage />
    </div>
  );
};

export default Apps;
