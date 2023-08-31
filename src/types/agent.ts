import type AutonomousAgent from "services/agent/autonomous-agent";
import type { AgentMode } from "types/agentTypes";

export interface AgentStateProps {
    error: object | string | null;
    agent: AutonomousAgent | null;
    isAgentStopped: boolean;
    isAgentPaused: boolean | undefined;
    agentMode: AgentMode;
  }