// third-party
import React, { useEffect, useRef } from 'react';
import { FaCog, FaPlay, FaRobot, FaStar } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";

// project import
import { useSelector } from 'store';
import { addMessage, updateTaskStatus } from 'store/slices/agentmessage';
import { setAgent, updateIsAgentPaused, updateIsAgentStopped } from 'store/slices/agent';
import type { AgentPlaybackControl, Message } from "types/agentTypes";
import { AGENT_PLAY, isTask } from "types/agentTypes";
import AutonomousAgent from "services/agent/autonomous-agent";
import { useSettings } from "hooks/useSettings";
import { isEmptyOrBlank } from "utils/agent/whitespace";

// component
import ChatWindow from "components/ui-component/extended/ChatWindow";
import HelpDialog from 'components/dashboard/AutoGPT/dialog/HelpDialog';
import { ToolsDialog } from 'components/dashboard/AutoGPT/dialog/ToolsDialog';
import { TaskWindow } from 'components/ui-component/extended/TaskWindow';
import PopIn from 'ui-component/motions/popin';
import Badge from 'ui-component/extended/Badge';
import Expand from 'ui-component/motions/expand';
import Input from 'ui-component/extended/Input';
import Button from 'ui-component/extended/Button';

// material-ui
import { useTheme } from '@mui/material/styles';

// ==============================|| Default DASHBOARD ||============================== //

const AutoGPT_Agents = () => {
    //state
    const messages = useSelector(state=> state.agentmessage.messages);

    const isAgentStopped = useSelector(state=> state.agent.isAgentStopped);
    const isAgentPaused = useSelector(state=> state.agent.isAgentPaused);
    const agentMode = useSelector(state=> state.agent.agentMode);
    const agent = useSelector(state=> state.agent.agent);

    const [showHelpDialog, setShowHelpDialog] = React.useState(false);
    const [showToolsDialog, setShowToolsDialog] = React.useState(false);
    const [showSettingsDialog, setShowSettingsDialog] = React.useState(false);
    const [showSignInDialog, setShowSignInDialog] = React.useState(false);
    const [hasSaved, setHasSaved] = React.useState(false);
    const [nameInput, setNameInput] = React.useState<string>("");
    const [goalInput, setGoalInput] = React.useState<string>("");
    const [mobileVisibleWindow, setMobileVisibleWindow] = React.useState<"Chat" | "Tasks">("Chat");
    const settingsModel = useSettings();

    const shouldShowSave = isAgentStopped && messages.length && !hasSaved;

    const handleVisibleWindowClick = (visibleWindow: "Chat" | "Tasks") => {
        // This controls whether the ChatWindow or TaskWindow is visible on mobile
        setMobileVisibleWindow(visibleWindow);
      };

    useEffect(() => {
        const key = "agentgpt-modal-opened-v0.2";
        const savedModalData = localStorage.getItem(key);

        setTimeout(() => {
        if (savedModalData == null) {
            setShowHelpDialog(true);
        }
        }, 1800);

        localStorage.setItem(key, JSON.stringify(true));
    }, []);

    const nameInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        nameInputRef?.current?.focus();
    }, []);

    useEffect(() => {
        updateIsAgentStopped();
    }, [agent, updateIsAgentStopped]);

    const setAgentRun = (newName: string, newGoal: string) => {
        if (agent != null) {
          return;
        }
    
        setNameInput(newName);
        setGoalInput(newGoal);
        handleNewGoal(newName, newGoal);
    };

    const handleAddMessage = (message: Message) => {
        if (isTask(message)) {
          updateTaskStatus(message);
        }
    
        addMessage(message);
    };

    const handlePause = (opts: { agentPlaybackControl?: AgentPlaybackControl }) => {
        if (opts.agentPlaybackControl !== undefined) {
          updateIsAgentPaused(opts.agentPlaybackControl);
        }
    };

    const disableDeployAgent =
        agent != null || isEmptyOrBlank(nameInput) || isEmptyOrBlank(goalInput);

    const handleNewGoal = (name: string, goal: string) => {
        if (name.trim() === "" || goal.trim() === "") {
          return;
        }
    
        // Do not force login locally for people that don't have auth setup
        // if (session === null && env.NEXT_PUBLIC_FORCE_AUTH) {
        //   setShowSignInDialog(true);
        //   return;
        // }
    
        const newAgent = new AutonomousAgent(
            name.trim(),
            goal.trim(),
            handleAddMessage,
            handlePause,
            () => setAgent(null),
            {
            ...settingsModel.settings,
            },
            agentMode,
        //   session ?? undefined
        );
        setAgent(newAgent);
        setHasSaved(false);
        // resetAllMessageSlices();
        newAgent?.run().then(console.log).catch(console.error);
    };

    const handleContinue = () => {
        if (!agent) {
            return;
        }

        agent.updatePlayBackControl(AGENT_PLAY);
        updateIsAgentPaused(agent.playbackControl);
        agent.updateIsRunning(true);
        agent.run().then(console.log).catch(console.error);
    };

    const handleKeyPress = (
        e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>
        ) => {
        // Only Enter is pressed, execute the function
        if (e.key === "Enter" && !disableDeployAgent && !e.shiftKey) {
            if (isAgentPaused) {
            handleContinue();
            }
            handleNewGoal(nameInput, goalInput);
        }
    };

    const handleStopAgent = () => {
        agent?.stopAgent();
        updateIsAgentStopped();
    };

    const firstButton =
        isAgentPaused && !isAgentStopped ? (
            <Button ping disabled={!isAgentPaused} onClick={handleContinue}>
                <FaPlay size={20} />
                <span className="ml-2">{"Continue"}</span>
            </Button>
        ) : (
            <Button
                ping={!disableDeployAgent}
                disabled={disableDeployAgent}
                onClick={() => handleNewGoal(nameInput, goalInput)}
            >
                {agent == null ? (
                    "Deploy Agent"
                ) : (
                    <>
                        <VscLoading className="animate-spin" size={20} />
                        <span className="ml-2">{"Running"}</span>
                    </>
                )}
            </Button>
        );

    return (
        <div>
            <HelpDialog show={showHelpDialog} close={() => setShowHelpDialog(false)} />
            <ToolsDialog show={showToolsDialog} close={() => setShowToolsDialog(false)} />
            <main className="flex min-h-screen flex-row">
                <div
                    id="content"
                    className="z-10 flex min-h-screen w-full items-center justify-center p-2 sm:px-4 md:px-10"
                >
                    <div
                        id="layout"
                        className="flex h-full w-full max-w-screen-xl flex-col items-center justify-between gap-1 py-2 sm:gap-3 sm:py-5 md:justify-center"
                    >
                        <div id="title" className="relative flex flex-col items-center font-mono">
                            <div className="flex flex-row items-start">
                                <span className="text-4xl font-bold text-[#6a6a6a] xs:text-5xl sm:text-6xl">
                                    Agent
                                </span>
                                <span className="text-4xl font-bold text-[#0a0a0a] xs:text-5xl sm:text-6xl">GPT</span>
                                <PopIn delay={0.5}>
                                    <Badge colorClass="bg-gradient-to-t from-sky-500 to-sky-600 border-2 border-white/10">
                                        {`"BETA"
                                        🚀`}
                                    </Badge>
                                </PopIn>
                            </div>
                            <div className="mt-1 text-center font-mono text-[0.7em] font-bold text-">
                                <p>
                                    {"Assemble, configure, and deploy autonomous AI Agents in your browser."}
                                </p>
                            </div>
                        </div>

                        <div>
                            <Button
                                className="rounded-r-none py-0 text-sm sm:py-[0.25em] xl:hidden"
                                disabled={mobileVisibleWindow == "Chat"}
                                onClick={() => handleVisibleWindowClick("Chat")}
                            >
                                Chat
                            </Button>
                            <Button
                                className="rounded-l-none py-0 text-sm sm:py-[0.25em] xl:hidden"
                                disabled={mobileVisibleWindow == "Tasks"}
                                onClick={() => handleVisibleWindowClick("Tasks")}
                            >
                                Tasks
                            </Button>
                        </div>
                        <Expand className="flex w-full flex-row">
                            <ChatWindow
                                messages={messages}
                                title="AgentGPT"
                                // onSave={
                                //     shouldShowSave
                                //         ? (format) => {
                                //             setHasSaved(true);
                                //             agentUtils.saveAgent({
                                //                 goal: goalInput.trim(),
                                //                 name: nameInput.trim(),
                                //                 tasks: messages,
                                //             });
                                //         }
                                //         : undefined
                                // }
                                scrollToBottom
                                displaySettings
                                setAgentRun={setAgentRun}
                                visibleOnMobile={mobileVisibleWindow === "Chat"}
                            />
                            <TaskWindow visibleOnMobile={mobileVisibleWindow === "Tasks"} />
                        </Expand>

                        <div className="flex w-full flex-col gap-2 md:m-4">
                            <Expand delay={1.2} className="flex flex-row items-end gap-2 md:items-center">
                                <Input
                                    inputRef={nameInputRef}
                                    left={
                                        <>
                                            <FaRobot />
                                            <span className="ml-2">{`${"Name"}`}</span>
                                        </>
                                    }
                                    value={nameInput}
                                    disabled={agent != null}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    onKeyDown={(e) => handleKeyPress(e)}
                                    placeholder="AgentGPT"
                                    type="text"
                                />
                                <Button ping onClick={() => setShowToolsDialog(true)} className="h-fit">
                                    <p className="mr-3">Tools</p>
                                    <FaCog />
                                </Button>
                            </Expand>
                            <Expand delay={1.3}>
                                <Input
                                    left={
                                        <>
                                            <FaStar />
                                            <span className="ml-2">{`${"Goal"}`}</span>
                                        </>
                                    }
                                    disabled={agent != null}
                                    value={goalInput}
                                    onChange={(e) => setGoalInput(e.target.value)}
                                    onKeyDown={(e) => handleKeyPress(e)}
                                    placeholder={`${"Make the world a better place"}`}
                                    type="textarea"
                                />
                            </Expand>
                        </div>
                        <Expand delay={1.4} className="flex gap-2">
                            {firstButton}
                            <Button
                                disabled={agent === null}
                                onClick={handleStopAgent}
                                enabledClassName={"bg-red-600 hover:bg-red-400"}
                            >
                                {!isAgentStopped && agent === null ? (
                                    <>
                                        <VscLoading className="animate-spin" size={20} />
                                        <span className="ml-2">{`${"Stopping Agent"}`}</span>
                                    </>
                                ) : (
                                    `${"Stop Agent"}`
                                )}
                            </Button>
                        </Expand>
                    </div>
                </div>
            </main>
        </div>
    );
};
AutoGPT_Agents.Layout = 'authGuard';
export default AutoGPT_Agents;