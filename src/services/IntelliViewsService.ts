import axios from "axios";

const BASE_API_URL = "https://localhost:7029/";

export const saveThread = (threadId: string, userId: string) => {
  const data = axios
    .post(BASE_API_URL + "threads", { id: threadId, userId: userId })
    .then((response) => response.data);
  return data;
};
