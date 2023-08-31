import React from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import DynamicDialog from "components/ui-elements/advance/UIDialog/DynamicDialog";


export default function HelpDialog({ show, close }: { show: boolean; close: () => void }) {
    return(
        <DynamicDialog header={`${"Welcome to AgentGPT"} 🤖`} isShown={show} close={close}>
            <div>
                <p>
                    <strong>AgentGPT</strong> {"allows you to configure and deploy Autonomous AI agents. Name your custom AI and have it embark on any goal imaginable. It will attempt to reach the goal by thinking of tasks to do, executing them, and learning from the results 🚀"}
                </p>
                <br />
                <div>
                    {"To learn more about AgentGPT, its roadmap, FAQ, etc, visit the "}
                    <a href="https://docs.reworkd.ai" className="text-sky-500">
                        {"AgentGPT's Documentation"}
                    </a>
                </div>
                <br />
                <p className="mt-2">{"Follow the journey below:"}</p>
                <div className="mt-4 flex w-full items-center justify-center gap-5">
                    <div
                        className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
                        onClick={() => window.open("https://discord.gg/jdSBAnmdnY", "_blank")}
                    >
                        <FaDiscord size={30} />
                    </div>
                    <div
                        className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
                        onClick={() =>
                            window.open(
                                "https://twitter.com/asimdotshrestha/status/1644883727707959296",
                                "_blank"
                            )
                        }
                    >
                        <FaTwitter size={30} />
                    </div>
                    <div
                        className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
                        onClick={() => window.open("https://github.com/reworkd/AgentGPT", "_blank")}
                    >
                        <FaGithub size={30} />
                    </div>
                </div>
            </div>
        </DynamicDialog> 
    );
}