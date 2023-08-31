import AudioFile from '@mui/icons-material/AudioFile';
import { MenuItem, Select, SelectChangeEvent, Slider, Switch, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { FaClipboard } from 'react-icons/fa';

const voice = () => {
  const EngineName: string[] = ['Open AI', 'Assembly AI', 'Eleven Labs', 'Deepgram AI'];
  const Models: { [key: string]: string[] } = {
    'Open AI': ['whisper-1'],
    'Assembly AI': ['whisper-1'],
    'Eleven Labs': ['eleven_monolingual_v1'],
    'Deepgram AI': ['general', 'meeting', 'phonecall', 'voicemail', 'finance', 'conversationalai', 'video', 'wisper']
  };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [engineSelected, setSelectEngine] = useState(EngineName[0]);
  const [model, setModel] = useState(Models[engineSelected][0]);
  const [text, setText] = useState('');
  const [audioURL, setAudioURL] = useState('');
  const [temperature, setTemperature] = useState(0.4);
  const [entityDetection, setEntityDetection] = useState(false);
  const [sentimentAnalysis, setSentimentAnalysis] = useState(false);
  const [contentSafety, setContentSafety] = useState(false);
  const [formatText, setFormatText] = useState(true);
  const [detectLanguage, setDetectLanguage] = useState(true);
  const [profanityFilter, setProfanityFilter] = useState(false);
  const [punctuate, setPunctuate] = useState(true);
  const [smartFormat, setSmartFormat] = useState(true);
  const [utterances, setUtterances] = useState(false);
  const [uttSplit, setUttSplit] = useState(0.8);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState('');
  const [mode, setMode] = useState('speechToText');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setLoading(true);
      const formData = new FormData();
      if (engineSelected === 'Open AI') {
        formData.append('file', selectedFile);
        formData.append('name', selectedFile.name);
        formData.append('model', model);
        formData.append('temperature', temperature.toString(10));
        console.log(formData.append);
        console.log(selectedFile.name);
        const url = 'http://localhost:2000/api/voice/whisperai';
        const body = {
          method: 'POST',
          body: formData
        };
        const res = await fetch(url, body);
        if ((await res.status) === 200) {
          const json = await res.text();
          setText(json);
          console.log(json);
        } else {
          const error = await res.json();
          console.log(error);
          setText('There had been some issue with the server. Kindly try again.');
        }
      } else if (engineSelected === 'Assembly AI') {
        formData.append('file', selectedFile);
        formData.append('name', selectedFile.name);
        formData.append('model', model);
        formData.append('entity_detection', entityDetection.toString());
        formData.append('sentiment_analysis', sentimentAnalysis.toString());
        formData.append('content_safety', contentSafety.toString());
        formData.append('format_text', formatText.toString());
        const url = 'http://localhost:2000/api/voice/assemblyai';
        const body = {
          method: 'POST',
          body: formData
        };
        try {
          const res = await fetch(url, body);
          if ((await res.status) === 200) {
            const json = await res.text();
            setText(json);
            console.log(json);
          } else {
            const error = await res.json();
            console.log(error);
            setText('There had been some issue with the server. Kindly try again.');
          }
        } catch (error) {
          setText('There had been some issue with the request. Kindly try again.');
          console.log(error);
        }
      } else if (engineSelected === 'Deepgram AI') {
        formData.append('file', selectedFile);
        formData.append('name', selectedFile.name);
        formData.append('model', model);
        formData.append('detect_language', detectLanguage.toString());
        formData.append('profanity_filter', profanityFilter.toString());
        formData.append('punctuate', punctuate.toString());
        formData.append('smart_format', smartFormat.toString());
        formData.append('utterances', utterances.toString());
        formData.append('utt_split', uttSplit.toString());
        const url = 'http://localhost:2000/api/voice/deepgramai';
        const body = {
          method: 'POST',
          body: formData
        };
        try {
          const res = await fetch(url, body);
          if ((await res.status) === 200) {
            const json = await res.text();
            setText(json);
            console.log(json);
          } else {
            const error = await res.json();
            console.log(error);
            setText('There had been some issue with the server. Kindly try again.');
          }
        } catch (error) {
          setText('There had been some issue with the request. Kindly try again.');
          console.log(error);
        }
      }
      setLoading(false);
    }
  };

  const handleTextToSpeech = async () => {
    const formData = new FormData();
    const url = 'http://localhost:2000/api/voice/elevenlabsai';
    formData.append('text', inputText);
    formData.append('model_id', 'eleven_monolingual_v1');
    const voice_settings = {
      stability: 0,
      similarity_boost: 0
    };

    formData.append('voice_settings', JSON.stringify(voice_settings));
    // formData.append('model_id', 'eleven_monolingual_v1');
    // formData.append('model_id', 'eleven_monolingual_v1');
    const tempBody = {
      text: inputText,
      model_id: 'eleven_monolingual_v1',
      voice_settings: {
        stability: 0,
        similarity_boost: 0
      }
    };
    const data = {
      method: 'POST',
      // body: JSON.stringify(tempBody),
      body: JSON.stringify(tempBody)
    };
    console.log(data);
    // console.log(formData.values());
    // for (const value of formData.values()) {
    //   console.log(value);
    // }

    const res = await fetch(url, data);
    if (res.status === 200) {
      const json = await res.json();
      console.log(json);
    }
    console.log(res);
  };

  const handleMode = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setMode(newAlignment);
    console.log(newAlignment);
  };

  const EngineSelector = (event: SelectChangeEvent) => {
    setSelectEngine(event.target.value);
    setModel(Models[event.target.value][0]);
  };

  const ModelSelector = (event: SelectChangeEvent) => {
    setModel(event.target.value);
  };

  function TempSlider(value: number) {
    setTemperature(value);
    return `${value}`;
  }

  const handleURL = (event: ChangeEvent<HTMLInputElement>) => {
    setAudioURL(event.target.value);
  };

  const handleEntityDetection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntityDetection(event.target.checked);
    console.log(event.target.checked);
  };

  const handleSentimentAnalysis = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSentimentAnalysis(event.target.checked);
    console.log(event.target.checked);
  };
  const handleContentSafety = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentSafety(event.target.checked);
    console.log(event.target.checked);
  };
  const handleFormatText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormatText(event.target.checked);
    console.log(event.target.checked);
  };
  const handleDetectLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetectLanguage(event.target.checked);
    console.log(event.target.checked);
  };
  const handleProfanityFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfanityFilter(event.target.checked);
    console.log(event.target.checked);
  };
  const handlePunctuate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPunctuate(event.target.checked);
    console.log(event.target.checked);
  };
  const handleSmartFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSmartFormat(event.target.checked);
    console.log(event.target.checked);
  };
  const handleUtterances = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUtterances(event.target.checked);
    console.log(event.target.checked);
  };
  function HandleUttSplit(value: number) {
    setUttSplit(value);
    return `${value}`;
  }
  const handleInputText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className="bg-white rounded-lg p-4">
      {/* Mode Selector */}
      <div>
        <ToggleButtonGroup color="primary" value={mode} exclusive onChange={handleMode} aria-label="Platform">
          <ToggleButton value="speechToText">Speech To Text</ToggleButton>
          <ToggleButton value="textToSpeech">Text To Speech</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="  text-center">
        {/* Input Div */}
        {mode === 'speechToText' && (
          <>
            <div className="grid grid-cols-2">
              <div className="my-auto">
                <label className="grid grid-cols-1 gap-2 text-xl ">
                  Upload Audio File
                  <Tooltip title="Upload mp3 file to transcribe it.">
                    <AudioFile sx={{ fontSize: '32px' }} className="mx-auto" />
                  </Tooltip>
                  <input type="file" onChange={handleFileChange} className=" px-2 hidden" />
                  <span className="opacity-80 text-base">{fileName}</span>
                </label>
                {/* Audio URL for Assembly */}
                {engineSelected === 'Assembly AI' ||
                  (engineSelected === 'Deepgram AI' && (
                    <>
                      <hr />
                      <div className="mt-4 flex justify-center">
                        <p className="my-auto">Audio URL</p>
                        <input
                          type="text"
                          placeholder="www.google.com/sampleaudio.mp3"
                          className="border-2 p-2 rounded-md m-2"
                          onChange={handleURL}
                          value={audioURL}
                        ></input>
                      </div>
                    </>
                  ))}

                <button onClick={handleUpload} className="my-4 border py-2 px-3 rounded-lg bg-dark-blue text-white font-semibold">
                  Upload
                </button>
              </div>

              {/* Additional Configuration */}
              <div className=" bg-white rounded-lg top-0 overflow-y-auto p-2 text-left">
                <h3 className="text-2xl font-bold m-2">Configuration</h3>
                <hr className="opacity-80" />

                {/* Engine Selector */}
                <div className="m-4">
                  <label>
                    <span className="mr-4 text-xl"> Engine </span>
                    <Select labelId="chatBot-select-label" id="chatBot-select" value={engineSelected} onChange={EngineSelector} autoWidth>
                      {/* Options of the selector  */}
                      {EngineName.map((engine, index) => (
                        <MenuItem key={index} value={engine}>
                          {engine}
                        </MenuItem>
                      ))}
                    </Select>
                  </label>
                </div>

                {/* Model Selector */}
                <div className="m-4">
                  <label>
                    <span className="mr-5 text-xl"> Model </span>
                    <Select labelId="chatBot-select-label" id="chatBot-select" value={model} onChange={ModelSelector} autoWidth>
                      {/* Options of the selector  */}
                      {Models[engineSelected].map((model, index) => (
                        <MenuItem key={index} value={model}>
                          {model}
                        </MenuItem>
                      ))}
                    </Select>
                  </label>
                </div>

                {/* Open AI Options Conditional Rendering */}
                {engineSelected === 'Open AI' && (
                  <>
                    {/* Temperature Slider */}
                    <div className="w-52 mt-0 lg:mt-4 ml-4 ">
                      <p className="">Temperature</p>
                      <Slider
                        aria-label="Temperature"
                        defaultValue={0.7}
                        getAriaValueText={TempSlider}
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={0.1}
                        max={2}
                      />
                    </div>
                  </>
                )}

                {/* Assembly AI Conditional Rendering */}
                {engineSelected === 'Assembly AI' && (
                  <>
                    <div>
                      <label className="text-lg mx-4">Entity Detection</label>
                      <Switch checked={entityDetection} onChange={handleEntityDetection} />
                    </div>
                    <div>
                      <label className="text-lg mx-4">Sentiment Analysis</label>
                      <Switch checked={sentimentAnalysis} onChange={handleSentimentAnalysis} />
                    </div>
                    <div>
                      <label className="text-lg mx-4">Content Safety</label>
                      <Switch checked={contentSafety} onChange={handleContentSafety} />
                    </div>
                    <div>
                      <label className="text-lg mx-4">Format Text</label>
                      <Switch checked={formatText} onChange={handleFormatText} />
                    </div>
                  </>
                )}

                {engineSelected === 'Deepgram AI' && (
                  <>
                    <div>
                      <label className="text-lg mx-4">Detect Language</label>
                      <Switch checked={detectLanguage} onChange={handleDetectLanguage} />
                    </div>
                    <div>
                      <label className="text-lg mx-4">Profanity Filter</label>
                      <Switch checked={profanityFilter} onChange={handleProfanityFilter} />
                    </div>
                    <div>
                      <label className="text-lg mx-4">Punctuate</label>
                      <Switch checked={punctuate} onChange={handlePunctuate} />
                    </div>
                    <div>
                      <label className="text-lg mx-4">Smart Format</label>
                      <Switch checked={smartFormat} onChange={handleSmartFormat} />
                    </div>
                    <div>
                      <label className="text-lg mx-4">Utterances</label>
                      <Switch checked={utterances} onChange={handleUtterances} />
                    </div>
                    <div className="w-52 ml-4 mt-0 lg:mt-4">
                      <p className="">Utt Split</p>
                      <Slider
                        aria-label="Temperature"
                        defaultValue={0.8}
                        getAriaValueText={HandleUttSplit}
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={0.1}
                        max={2}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            <hr />
            <div className="max-w-4xl mx-auto mt-8">
              <div className="flex justify-between ">
                <p className="my-4 text-3xl font-semibold">Transcribbed Text</p>
                <hr className="my-4" />
                <Tooltip title="Copy to clipboard">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(text);
                    }}
                    className=""
                  >
                    <FaClipboard style={{ height: '24px', marginTop: 'auto', marginBottom: 'auto' }} />
                  </button>
                </Tooltip>
              </div>
              <p className="text-left mt-4">{loading ? 'Beep... Boop.... Beep...' : text && text}</p>
            </div>{' '}
          </>
        )}

        {/* Text To Speech */}
        {mode === 'textToSpeech' && (
          <>
            <div className="flex">
              {/* Text Field */}
              <div className="flex flex-col mt-8 flex-grow">
                <textarea value={inputText} placeholder="Enter your text" onChange={handleInputText} className="p-4 border-2" />
                <button onClick={handleTextToSpeech} className="my-4 border py-2 px-3 rounded-lg bg-dark-blue text-white font-semibold">
                  Upload
                </button>
              </div>

              {/* Config Bar */}
              <div></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
voice.Layout = 'authGuard';
export default voice;
