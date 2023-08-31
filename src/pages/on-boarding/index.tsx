import React, { useState, FormEvent } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GridCloseIcon } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';

import { savePersonalInterest } from 'store/slices/personalInterest';

interface ScrollDialogProps {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ScrollDialog({ setIsFilled }: ScrollDialogProps): JSX.Element {
  const [open, setOpen] = useState(true);
  const [occupation, setOccupation] = useState('');
  const [goals, setGoals] = useState('');

  const dispatch = useDispatch();

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      occupation: formData.get('occupation') === 'other' ? formData.get('occupation-other') : formData.get('occupation'),
      role: formData.get('role'),
      goals: formData.get('goals') === 'other' ? formData.get('goals-other') : formData.get('goals')
    };
    const dataArray = Object.values(data).map((value) => value as string);

    dispatch(savePersonalInterest(dataArray) as any);
    setIsFilled(true);
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Dialog
              open={open}
              onClose={handleClose}
              // scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
              <DialogContent>
                <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
                  <form onSubmit={handleSubmit} id="form" className="mx-auto max-w-screen-xl px-10 md:px-10 lg:px-10">
                    <div className=" space-y-1">
                      <div className="border-b border-gray-900/10 pb-12">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-base font-semibold leading-7 dark:text-black md:text-3xl">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 dark:text-black">Use a permanent address where you can receive mail.</p>
                          </div>
                          <div onClick={handleClose}>
                            <GridCloseIcon className="cursor-pointer rounded-2xl bg-white" />
                          </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 dark:text-black">
                              First name
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                // onChange={handleChange}
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 bg-transparent px-2  py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black placeholder:dark:text-black sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 dark:text-black">
                              Last name
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                // onChange={handleChange}
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 bg-transparent px-2 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black placeholder:dark:text-black sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-3">
                            <label htmlFor="number" className="block text-sm font-medium leading-6 dark:text-black">
                              Mobile Number
                            </label>
                            <div className="mt-1">
                              <input
                                id="number"
                                name="phone"
                                // onChange={handleChange}
                                type="number"
                                autoComplete="number"
                                className="block w-full rounded-md border-0 bg-transparent px-2 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black placeholder:dark:text-black sm:text-sm sm:leading-6"
                              />
                            </div>
                            {/* <div className="mt-2">
                  <PhoneInput
                    inputStyle={{
                      backgroundColor: 'transparent',
                      borderColor: 'white',
                      color: 'white',
                      borderRadius: '7px'
                    }}
                    placeholder="Enter phone number"
                    country={'in'}
                    value={phone}
                    onChange={setPhone}
                  />
                </div> */}
                          </div>
                          <div className="sm:col-span-3">
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:dark:text-black">
                              Which team are you part of?
                            </label>
                            <select
                              id="small"
                              onChange={(e) => setOccupation(e.target.value)}
                              name="occupation"
                              // onChange={handleChange}
                              className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  dark:border-gray-600 dark:bg-transparent dark:dark:text-black dark:placeholder-gray-400"
                            >
                              <option selected>Select from the options</option>
                              <option value="student">Student</option>
                              <option value="engineer">Engineer</option>
                              <option value="startUp">StartUp</option>
                              <option value="business">Business</option>
                              <option value="other">Ohter</option>
                            </select>
                            {occupation === 'other' ? (
                              <>
                                <div className="flex">
                                  <input
                                    name="ocupation-other"
                                    className="block w-full rounded-md border-0 bg-transparent px-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black placeholder:dark:text-black sm:text-sm sm:leading-6"
                                    type="text"
                                    placeholder="Which team are you part of?"
                                    aria-label="Full name"
                                  />
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="sm:col-span-3">
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:dark:text-black">
                              What are the goals you are looking to achieve?
                            </label>
                            <select
                              id="small"
                              name="goals"
                              onChange={(e) => setGoals(e.target.value)}
                              className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            >
                              <option selected>Select from the options</option>
                              <option value="GenerativeAI-Text ">Generative AI &#62; Text </option>
                              <option value="GenerativeAI-Image">Generative AI &#62; Image</option>
                              <option value="GenerativeAI-Voice">Generative AI &#62; Voice</option>
                              <option value="GenerativeAI-Code">Generative AI &#62; Code</option>
                              <option value="LangchainApp">Langchain App </option>
                              <option value="AutonomousAgent">Autonomous Agent </option>
                              <option value="Train/FineTuneAIModel">Train/Fine Tune AI Model</option>
                              <option value="ChatGPTPluginDevelopment">ChatGPT Plugin Development</option>
                              <option value="EnterpriseALSupport">Enterprise AL Support </option>
                              <option value="DataClassification">Data Classification</option>
                              <option value="DataAnnotation">Data Annotation</option>
                              <option value="DataAnalysis">Data Analysis</option>
                              <option value="StructuredDataConverter">Structured Data Converter</option>
                              <option value="ExplorePreBuiltApps">Explore Pre-Built Apps</option>
                              <option value="other">Other</option>
                            </select>
                            {goals === 'other' ? (
                              <>
                                {/* <div className="mt-1">
                      <input
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 bg-transparent py-1.5 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:dark:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div> */}
                                <div className="flex">
                                  <input
                                    className="block w-full rounded-md border-0 bg-transparent px-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black placeholder:dark:text-black sm:text-sm sm:leading-6"
                                    type="text"
                                    name="goals-other"
                                    placeholder="Which team are you part of?"
                                    aria-label="Full name"
                                  />
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="sm:col-span-3">
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:dark:text-black">
                              Which of these describes your role best?
                            </label>
                            <select
                              id="small"
                              name="role"
                              // onChange={handleChange}
                              className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            >
                              <option selected>Select from the options</option>
                              <option value="ABC">ABC</option>
                              <option value="DEF">DEF</option>
                              <option value="GHI">GHI</option>
                              <option value="123">123</option>
                              <option className="bg-transparent" value="345">
                                345
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6 px-10">
                      <button type="button" className="text-sm font-semibold leading-6 dark:text-black">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-md bg-white  px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:dark:text-black"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
