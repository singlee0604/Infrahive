import type { Message, Task } from "types/agentTypes";

export interface AgentMessageStateProps {
    error: object | string | null;
    messages: Message[];
    tasks: Task[];    
}