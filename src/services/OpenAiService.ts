import axios from "axios";

const BASE_API_URL = "https://api.openai.com/v1/";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  "OpenAI-BETA": "assistants=v1",
};

export const createThread = () => {
  return axios.post(BASE_API_URL + "threads", {}, { headers: headers });
};

export const createMessage = (value: string, threadId: string) => {
  const body = {
    role: "user",
    content: value,
  };
  return axios.post(BASE_API_URL + `threads/${threadId}/messages`, body, {
    headers: headers,
  });
};

export const createRun = async (threadId: string) => {
  const body = {
    assistant_id: import.meta.env.VITE_OPENAI_ASSISTANT_ID,
  };
  const response = await axios.post(
    BASE_API_URL + `threads/${threadId}/runs`,
    body,
    { headers: headers }
  );
  return response;
};

export const isRunComplete = async (threadId: string, runId: string) => {
  const run = await axios.get(
    BASE_API_URL + `threads/${threadId}/runs/${runId}`,
    { headers: headers }
  );
  console.log(run.data);
  return run.data.status;
};

export const getMessages = (threadId: string) => {
  return axios.get(BASE_API_URL + `threads/${threadId}/messages`, {
    headers: headers,
  });
};

export const getThreadById = (threadId: string) => {
  const data = axios
    .get(BASE_API_URL + `threads/${threadId}`, { headers: headers })
    .then((response) => response.data);
  return data;
};
