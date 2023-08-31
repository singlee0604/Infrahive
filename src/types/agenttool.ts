import type { ActiveTool } from "hooks/useTools";

export interface AgentToolStateProps {
    error: object | string | null;
    tools: Omit<ActiveTool, "active">[];
}