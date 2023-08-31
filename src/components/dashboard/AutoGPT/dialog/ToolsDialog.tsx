import React from "react";
import { FaCog } from "react-icons/fa";
import DynamicDialog from "components/ui-elements/advance/UIDialog/DynamicDialog";

//material-ui
import { Switch, Avatar } from '@mui/material';


export const ToolsDialog: React.FC<{
    show: boolean;
    close: () => void;
  }> = ({ show, close }) => {
    const activeTools = [
        {name: "tool1", description: "desc1", active: true}, 
        {name: "tool2", description: "desc2", active: true}, 
        {name: "tool3", description: "desc3", active: true}
    ];
    const isSuccess = true;
    const setToolActive = (toolName: string, active: boolean) => {};
    return(
        <DynamicDialog
            header={
                <div className="flex items-center gap-3">
                    <p>Tools</p>
                    <FaCog />
                </div>
            }
            isShown={show}
            close={close}
        >
            <p>Select what external tools your agents have access to.</p>
            <div className="mt-5 flex flex-col gap-3 ">
                {activeTools.map((tool) => (
                    <div
                        key={tool.name + tool.description}
                        className="flex items-center gap-3 rounded-md border border-white/30 bg-zinc-800 p-2 px-4 text-white"
                    >
                        <Avatar 
                            variant="circular"
                            sx={{
                                bgcolor: "rgb(234 88 12)",
                                color: "rgb(234 88 12)",
                                borderColor: "white"
                            }}
                            alt={""}
                            src={""}
                        />
                        <div className="flex flex-grow flex-col gap-1">
                            <p className="font-bold capitalize">{tool.name}</p>
                            <p className="text-xs sm:text-sm">{tool.description}</p>
                        </div>
                        <Switch checked={tool.active} onChange={() => setToolActive(tool.name, !tool.active)} />
                    </div>
                ))}
                {!isSuccess && <p className="text-center text-red-300">Error loading tools.</p>}
            </div>
        </DynamicDialog> 
    );
};

// const ToolAvatar = ({ tool }: { tool: ActiveTool }) => {
//     return <div className={clsx("h-10 w-10 rounded-full border border-white/30 bg-amber-600")} />;
// };
  