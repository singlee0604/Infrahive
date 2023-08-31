import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { savePersonalInterest } from 'store/slices/personalInterest';

export default function OnBoarding(): JSX.Element {
  const [open, setOpen] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [role, setRole] = useState('');
  const [goals, setGoals] = useState('');
  const [phoneCountryCode, setPhoneCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  const handleClose = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    // Check if all required fields are filled
    if (occupation && goals && phoneNumber && phoneCountryCode && firstName && lastName && role) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [occupation, goals, phoneNumber, phoneCountryCode, firstName, lastName, role]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phoneCountryCode: formData.get('phoneCountryCode'),
      phoneNumber: formData.get('phoneNumber'),
      occupation: formData.get('occupation') === 'other' ? formData.get('occupation-other') : formData.get('occupation'),
      goals: formData.get('goals') === 'other' ? formData.get('goals-other') : formData.get('goals'),
      role: formData.get('role')
    };
    const dataArray = Object.values(data).map((value) => value as string);

    try {
      dispatch(savePersonalInterest(dataArray) as any);
      handleClose();
      router.push('/dashboard');
    } catch (error) {
      console.error('An error occurred while saving personal interest:', error);
    }
  };
  return (
    // <div className="flex min-h-[100vh] flex-col items-center justify-center pt-4">
    <div className="mx-auto px-3  pt-6 md:max-w-5xl md:px-5 lg:max-w-6xl xl:px-0">
      <div className="flex w-[100%] items-end justify-end">
        <button
          type="button"
          className="end pt-4 text-sm font-semibold leading-6 text-red-500 hover:text-red-600"
          onClick={(e) => {
            e.preventDefault();
            router.push('/dashboard');
          }}
        >
          Skip
          {/* <GridCloseIcon className="cursor-pointer rounded-2xl bg-white" onClick={handleClose} /> */}
        </button>
      </div>
      <form onSubmit={handleSubmit} className="w-full bg-white px-4 pb-6 md:max-w-5xl md:pt-4 lg:max-w-6xl  xl:px-0">
        <div className=" space-y-1">
          <div className=" pb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl  font-semibold leading-7 dark:text-black md:mb-6 md:text-3xl">Hi! Let&apos;s set up your account</h2>
                <p className="mb-8  text-xl leading-6 dark:text-gray-600 md:mb-10">Tell us a little bit more about yourself</p>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 dark:text-black">
                  What should we call you?
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="block w-full rounded-md border-0 bg-transparent px-2  py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                    required
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
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-transparent px-2 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black  sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="mb-2 mt-2 block text-sm font-medium text-gray-900 dark:dark:text-black">Phone Number</label>
              <div className="flex gap-0">
                <select
                  id="phoneCountryCode"
                  name="phoneCountryCode"
                  onChange={(e) => setPhoneCountryCode(e.target.value)}
                  className="rounded-tr-0 rounded-br-0 mb-6 block rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500  dark:focus:ring-blue-500 sm:w-1/6 sm:p-1 md:p-3"
                  required
                >
                  <option className="placeholder-gray-400" value="">
                    Select
                  </option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (IN)</option>
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Phone Number"
                  required
                  pattern="^[0-9]{10}$"
                  title="Please enter a valid phone number"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:dark:text-black">Which team are you part of?</label>
              <select
                id="small"
                onChange={(e) => setOccupation(e.target.value)}
                name="occupation"
                // onChange={handleChange}
                className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:dark:text-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option value="">Select from the options</option>
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
                      className="block w-full rounded-md border-0 bg-transparent px-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:ring-indigo-600 dark:text-black placeholder:dark:text-black sm:text-sm sm:leading-6"
                      type="text"
                      placeholder="Which team are you part of?"
                      aria-label="Full name"
                      required
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
                required
                className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option value="">Select from the options</option>
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
                  <div className="flex">
                    <input
                      className="block w-full rounded-md border-0 bg-transparent px-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black placeholder:dark:text-black sm:text-sm sm:leading-6"
                      type="text"
                      name="goals-other"
                      placeholder="Which team are you part of?"
                      aria-label="Full name"
                      required
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
                onChange={(e) => setRole(e.target.value)}
                required
                className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option value="">Select from the options</option>
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
        <div className="mt-8">
          <button
            type="submit"
            disabled={!isFormFilled}
            className={`w-full rounded-md px-4 py-[12px] text-xl font-semibold text-white ${
              isFormFilled
                ? 'bg-purple-400 hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                : 'cursor-not-allowed bg-purple-300'
            }`}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
