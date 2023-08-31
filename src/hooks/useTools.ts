import * as yup from "yup";
import { BASE_URL } from "config";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { setTools } from "store/slices/agenttool";

const Tool = yup.object({
  name: yup.string(),
  description: yup.string(),
  color: yup.string(),
});

const ToolsResponseSchema = yup.object({
  tools: yup.array(Tool),
});

const ActiveToolSchema =Tool.shape({
    active: yup.boolean(),
});

export type ActiveTool = yup.InferType<typeof ActiveToolSchema>;

const fetchAPI = async <T extends yup.AnySchema>(path: string, schema: T): Promise<yup.InferType<T>> => {
  const response = await fetch(`BASE_URL${path}`);
  if (!response.ok) {
    throw new Error("Request failed");
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return schema.validate(await response.json());
};

const loadTools = async (key: string) => {
  const allTools = await fetchAPI("/api/agent/tools", ToolsResponseSchema);

  const data = localStorage.getItem(key);
  let activeTools: ActiveTool[] = [];

  try {
    const obj = yup.array(ActiveToolSchema).validate(JSON.parse(data ?? ""));
    activeTools = allTools.tools ? allTools.tools.map((db_tool) => {
      const tool = Array.isArray(obj) && obj.find((t) => t.name === db_tool.name);
      return tool ?? { ...db_tool, active: true };
    }) : [];
  } catch (error) {
    activeTools = allTools.tools ? allTools.tools.map((toolModel) => ({ ...toolModel, active: true })) : [];
  }

  return activeTools;
};

const save = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export function useTools() {

  const queryClient = useQueryClient();
  const query = useQuery(["tools"], () => loadTools("tools"), {
    onSuccess: (data: ActiveTool[]) => {
      updateActiveTools(data);
    },
  });

  function updateActiveTools(data: ActiveTool[]) {
    save("tools", data);
    setTools(data.filter((tool) => tool.active));
  }

  const setToolActive = (toolName: string, active: boolean) => {
    queryClient.setQueriesData(["tools"], (old: any) => {
      const data = (old as ActiveTool[]).map((tool) =>
        tool.name === toolName ? { ...tool, active } : tool
      );

      updateActiveTools(data);
      return data;
    });
  };

  return {
    activeTools: query.data ?? [],
    setToolActive,
    isSuccess: query.isSuccess,
  };
}
