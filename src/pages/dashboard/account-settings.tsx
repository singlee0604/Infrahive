/* eslint-disable prettier/prettier */
import MyAccount from 'components/AccountSettingsScreens/MyAccount';
import EditProfile from 'components/users/account-profile/edit-profile/EditProfile';
import InputFilled from 'layout/Customization/InputFilled';
import Input from 'ui-component/extended/Input';
import { useState } from 'react';
import Intergration from 'components/AccountSettingsScreens/Intergration';
import Modal from './Modal'
import Members from 'components/AccountSettingsScreens/Members';
import DataSource from 'components/AccountSettingsScreens/DataSource';

const screens = [
	{ screen: 0, name: 'my-account', component: <MyAccount /> },
	{ screen: 1, name: 'intergration', component: <Intergration /> },
	{ screen: 2, name: 'member', component: <Members /> },
	{ screen: 3, name: 'Model-provider' },
	{ screen: 4, name: 'data-source', component: <DataSource /> }
];

const AccountSettings = () => {
	const [currentScreen, setCurrentScreen] = useState(0);
	return (
		<div className="w-full h-full bg-slate-50 p-5">
			<h1 className="text-[1.3rem] mb-10">Account settings</h1>
			<div className="flex justify-start items-start w-full mt-5 h-full bg-[#fff]">
				<div className=" w-3/12 flex flex-col gap-14 border-r h-full">
					<div className="flex w-full flex-col gap-2">
						<h1 className="text-neutral-300 p-5 capitalize text-[1.2rem]">Account</h1>
						<ul className="flex flex-col w-full gap-3">
							<li
								className={`capitalize text-black p-2  cursor-pointer pl-11 w-full ${currentScreen === 0 && 'bg-orange-200'}`}
								onClick={() => setCurrentScreen(0)}
							>
								My account
							</li>
							<li
								className={`capitalize text-black p-2 cursor-pointer w-full pl-11 ${currentScreen === 1 && 'bg-orange-200'}`}
								onClick={() => setCurrentScreen(1)}
							>
								Intergration
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-neutral-300 p-5 capitalize text-[1.2rem]">Workplace</h1>
						<ul className="flex flex-col w-full gap-3">
							<li
								className={`capitalize text-black p-2  cursor-pointer pl-11 w-full ${currentScreen === 2 && 'bg-orange-200'}`}
								onClick={() => setCurrentScreen(2)}
							>
								Member
							</li>
							<li
								className={`capitalize text-black p-2  w-full cursor-pointer pl-11 ${currentScreen === 3 && 'bg-orange-200'}`}
								onClick={() => setCurrentScreen(3)}
							>
								Model Provider
							</li>
							<li
								className={`capitalize text-black p-2  w-full cursor-pointer pl-11 ${currentScreen === 4 && 'bg-orange-200'}`}
								onClick={() => setCurrentScreen(4)}
							>
								Data Source
							</li>
						</ul>
					</div>
				</div>
				{screens.map((screen) => (
					<>{screen.screen === currentScreen && screen.component}</>
				))}
			</div>
		</div>
	);
};
AccountSettings.Layout = 'authGuard';
export default AccountSettings;
