import { InputLabel, MenuItem, Select, SelectChangeEvent, Skeleton, Slider, TextField } from '@mui/material';
import { toNumber } from 'lodash';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const ChatComp = (props: { sender: string; message: string; key: number }) => {
  return (
    <div className={`p-4 pt-1 rounded-lg`} key={props.key}>
      <p className="font-black opacity-70">{props.sender}</p>
      <ReactMarkdown>{props.message}</ReactMarkdown>
      <hr />
    </div>
  );
};

const ChatBots: { name: string; models: string[] }[] = [
  {
    name: 'Open AI',
    models: ['chatgpt', 'gpt3']
  },
  {
    name: 'Anthropic',
    models: ['claude-v1', 'claude-instant-v1']
  },
  {
    name: 'Cohere',
    models: ['command', 'command-light']
  }
];

const marks = [
  {
    value: 0,
    label: '-1'
  },
  {
    value: 9.09,
    label: '0'
  },
  {
    value: 18.18,
    label: '0.1'
  },
  {
    value: 27.27,
    label: '0.2'
  },
  {
    value: 36.36,
    label: '0.3'
  },
  {
    value: 45.45,
    label: '0.4'
  },
  {
    value: 54.54,
    label: '0.5'
  },
  {
    value: 63.63,
    label: '0.6'
  },
  {
    value: 72.72,
    label: '0.7'
  },
  {
    value: 81.81,
    label: '0.8'
  },
  {
    value: 90.9,
    label: '0.9'
  },
  {
    value: 100,
    label: '1'
  }
];

const texts = () => {
  const [textBox, setTextBox] = useState('');
  const [chatBot, setChatBot] = useState(ChatBots[0].name);
  const [chatBotIndex, setChatBotIndex] = useState(0);
  const [menuBtnActive, setMenuBtnActive] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [tokens, setTokens] = useState(1000);
  const [stopSequence, setStopSequence] = useState('');
  const [loading, setLoading] = useState(false);
  const [topk, setTopK] = useState(-1);
  const [numOfGen, setNumOfGen] = useState(1)
  const [p,setP] = useState(0.75)
  const [frequencyPenalty, setFrequencyPenalty] = useState(0)
  const [presencePenalty, setPresencePenalty] = useState(0)
  const [suffix, setSuffix] = useState('')
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]);
  const [currentModel, setCurrentModel] = useState(ChatBots[0].models[0]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextBox(event.target.value);
  };

  const chatBotSelector = (event: SelectChangeEvent) => {
    const index = ChatBots.findIndex((item) => item.name === event.target.value);
    setChatBotIndex(index);
    setChatBot(ChatBots[index].name);
    setCurrentModel(ChatBots[index].models[0]);
    // console.log(event.target.value);
  };

  const chatModelSelector = (event: SelectChangeEvent) => {
    setCurrentModel(event.target.value);
    // console.log(event.target.value);
  };

  const handleMenuButton = () => {
    setMenuBtnActive(!menuBtnActive);

  };

  function TempSlider(value: number) {
    setTemperature(value);
    return `${value}`;
  }

  function TokenSlider(value: number) {
    setTokens(value);
    return `${value}`;
  }

  const handleSendMessage = async () => {
    const newMessage = { sender: 'You', message: textBox };
    setLoading(true);
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    let data:any = {
      prompt: textBox,
      model: currentModel,
      temperature: temperature,
      max_tokens: tokens
    };
    setTextBox('');

    const reqOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    let url = '';
    switch (chatBot) {
      case 'Open AI':
        url = 'http://localhost:2000/api/text/openai';
        // console.log(url);
        data.top_p = topk;
        data.n = numOfGen;
        data.presence_penalty = presencePenalty
        data.frequency_penalty = frequencyPenalty
        // console.log(data)
        break;
      case 'Anthropic':
        url = 'http://localhost:2000/api/text/anthropic';
        // console.log(url);
        data.top_k = topk;
        data.stop_sequence = stopSequence;
        break;
      case 'Cohere':
        url = 'http://localhost:2000/api/text/cohere';
        // console.log(url);
        data.num_generations = numOfGen
        data.k = topk;
        data.p = p;
        data.presence_penalty = presencePenalty
        data.frequency_penalty = frequencyPenalty
        data.stop_sequences = stopSequence;
        break;
      default:
        // console.log('Case not working');
        break;
    }
    const res = await fetch(url, reqOptions);
    const status = res.status
    if(status == 200){
      if(chatBot == 'Anthropic'){
        const body = await res.text();
        const serverMess = { sender: chatBot, message: body };
        setMessages((prevMessages) => [...prevMessages, serverMess]);
      }
      else{
        const body = await res.json();
        const serverMess = { sender: chatBot, message: body[0] };
        setMessages((prevMessages) => [...prevMessages, serverMess]);
      }
      setLoading(false);
    }
    else {
      const serverMess = { sender: chatBot, message: 'There an error from server side. Please try again later.' };
      setMessages((prevMessages) => [...prevMessages, serverMess]);
      setLoading(false);
    }
  };

  const handleStopSequence = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setStopSequence(event.target.value);

  };

  function top_k(value: number) {
    // console.log(value)
    const index = marks.findIndex((mark) => mark.value === value)
    setTopK(toNumber(marks[index].label));
    return `${marks[index].label}`;
  }

  function numGenHandler(value:number){
    setNumOfGen(value)
    return `${value}`
  }

  function pHandler(value:number){
    setP(value)
    return `${value}`
  }

  function top_k_Label(value: number,index:number) {
    return marks[value].label;
  }

  const suffixHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSuffix(event.target.value)
    
  }

  function presencePenaltyHandler(value:number){
    setPresencePenalty(value)
    return `${presencePenalty}`
  }
  function frequencyPenaltyHandler(value:number){
    setFrequencyPenalty(value)
    return `${frequencyPenalty}`
  }


  return (
    <div className="flex h-[80%] flex-col lg:flex-row">
      <div className=" flex-1 m-4 h-full  relative">
        <div className="flex flex-col h-[38rem] overflow-y-auto bg-white p-2 rounded-xl ">
          {messages.map((mess, index) => (
            <ChatComp sender={mess.sender} message={mess.message} key={index} />
          ))}

          <div className={`w-full ${loading ? 'block' : 'hidden'}`}>
            <Skeleton animation="wave" />
          </div>
        </div>

        <div className="flex mt-2 z-[9999]">
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={4}
            variant="standard"
            value={textBox}
            placeholder="Write your prompt here"
            onChange={handleInputChange}
            className="w-full bg-white p-2 rounded-l-xl"
          />
          <button
            onClick={handleSendMessage}
            className="bg-dark-blue px-4 py-2 text-white font-semibold text-lg rounded-none lg:rounded-r-xl"
            disabled={textBox == '' ? true : false}
          >
            Send
          </button>

          <button onClick={handleMenuButton} className={`w-12 bg-dark-blue text-white rounded-r-xl block lg:hidden`}>
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Advanced Menu */}
      <div
        className={`h-[38rem] overflow-y-auto w-56 mx-0 my-4 lg:mx-4 bg-white rounded-xl p-4 fixed right-0 lg:static ${menuBtnActive ? 'block' : 'hidden lg:block'}`}
      >
        {/* Bot Selector */}
        <div className="mt-4">
          <InputLabel id="chatBot-select-label" className="">
            Chat Engine
          </InputLabel>
          <Select
            labelId="chatBot-select-label"
            id="chatBot-select"
            value={chatBot}
            label="Chat Engine"
            onChange={chatBotSelector}
            autoWidth
          >
            {/* Options of the selector  */}
            {ChatBots.map((bot, index) => (
              <MenuItem key={index} value={bot.name}>
                {bot.name}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/* Model Selector */}
        <div className="mt-4">
          <InputLabel id="chatBot-model-label" className="">
            Engine Model
          </InputLabel>
          <Select
            labelId="chatBot-model-label"
            id="chatbot-model-select"
            value={currentModel}
            label="Engine Model"
            onChange={chatModelSelector}
            autoWidth
          >
            {/* Options of the selector  */}
            {ChatBots[toNumber(chatBotIndex)].models.map((model, index) => (
              <MenuItem key={index} value={model}>
                {model}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/* Temperature Slider */}
        <div className="w-full mt-0 lg:mt-4">
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
        {/* Max Token Count */}
        <div className="w-full mt-0 lg:mt-4">
          <p className="">Max Length</p>
          <Slider
            aria-label="Length"
            defaultValue={1000}
            getAriaValueText={TokenSlider}
            valueLabelDisplay="auto"
            marks
            min={100}
            max={4000}
          />
        </div>

        {/* <AdvancedTab Chatbot={chatBot} /> */}
        {
          chatBot === 'Open AI' ?<>
              <div className="mt-4">
            <TextField id="outlined-basic" label="Suffix" variant="outlined" value={suffix} onChange={suffixHandler} />
          </div>
          <div className="mt-4 w-full">
            <p>top_p</p>
            <Slider
              aria-label="Restricted values"
              defaultValue={-1}
              getAriaValueText={top_k}
              // valueLabelFormat={top_k_Label}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
              />
          </div>
          <div className="w-full mt-0 lg:mt-4">
            <p className="">Number of Generator</p>
            <Slider
              aria-label="numofgen"
              defaultValue={1}
              getAriaValueText={numGenHandler}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              />
          </div>
          <div className="w-full mt-0 lg:mt-4">
            <p className="">Presence Penalty</p>
            <Slider
              aria-label="numofgen"
              defaultValue={1}
              getAriaValueText={presencePenaltyHandler}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              />
          </div>
          <div className="w-full mt-0 lg:mt-4">
            <p className="">Frequency Penalty</p>
            <Slider
              aria-label="numofgen"
              defaultValue={1}
              getAriaValueText={frequencyPenaltyHandler}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              />
          </div>
        </>
             : chatBot === 'Anthropic' ? <>
             <div className="mt-4">
               <TextField id="outlined-basic" label="Stop Sequence" variant="outlined" value={stopSequence} onChange={handleStopSequence} />
             </div>
   
             <div className="mt-4 w-full">
               <p>top_k</p>
               <Slider
                 aria-label="Restricted values"
                 defaultValue={-1}
                 getAriaValueText={top_k}
                 valueLabelFormat={top_k_Label}
                 step={null}
                 valueLabelDisplay="auto"
                 value={topk}
                 marks={marks}
               />
             </div>
             {/* <div className="mt-4 w-full">
               <p>top_p</p>
               <Slider
                 aria-label="Restricted values"
                 defaultValue={-1}
                 getAriaValueText={top_k}
                 valueLabelFormat={top_k_Label}
                 step={null}
                 valueLabelDisplay="auto"
                 marks={marks}
               />
             </div> */}
           </> : <><div className="w-full mt-0 lg:mt-4">
            <p className="">Number of Generator</p>
            <Slider
              aria-label="numofgen"
              defaultValue={1}
              getAriaValueText={numGenHandler}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
            />
          </div>

          <div className="mt-4 w-full">
            <p>k</p>
            <Slider
              aria-label="Restricted values"
              defaultValue={-1}
              getAriaValueText={top_k}
              valueLabelFormat={top_k_Label}
              step={null}
              valueLabelDisplay="auto"
              value={topk}
              marks={marks}
            />
          </div>

          <div className="w-[95%] mt-0 lg:mt-4 ">
            <p className="">p</p>
            <Slider
              aria-label="numofgen"
              defaultValue={0.75}
              getAriaValueText={pHandler}
              valueLabelDisplay="auto"
              marks
              min={0.0}
              max={1.0}
            />
            <div className="w-full mt-0 lg:mt-4">
            <p className="">Presence Penalty</p>
            <Slider
              aria-label="numofgen"
              defaultValue={1}
              getAriaValueText={presencePenaltyHandler}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              />
          </div>
          <div className="w-full mt-0 lg:mt-4">
            <p className="">Frequency Penalty</p>
            <Slider
              aria-label="numofgen"
              defaultValue={1}
              getAriaValueText={frequencyPenaltyHandler}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              />
          </div>
          </div></>
        }
      </div>
    </div>
  );
};
texts.Layout = 'authGuard';
export default texts;
