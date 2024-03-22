import axios from "axios";
import { Cookies } from "react-cookie";

const BASE_API_URL = "https://localhost:7029/";
const bearerToken = new Cookies().get("user_token");
const headers = {
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${bearerToken}`,
};

export const saveThread = (threadId: string) => {
  const data = axios
    .post(BASE_API_URL + "threads", { id: threadId }, { headers: headers })
    .then((response) => response.data);
  return data;
};

export const getUsers = () => {
  const data = axios
    .get(BASE_API_URL + "users", { headers: headers })
    .then((response) => response.data);
  return data;
};

export const getThreadsByUser = (userId: string) => {
  const data = axios
    .get(BASE_API_URL + `users/${userId}/threads`, { headers: headers })
    .then((response) => response.data);
  return data;
};

export const getFeedbackThreads = () => {
  return axios
    .get(BASE_API_URL + "threads/feedback", { headers: headers })
    .then((response) => response.data);
};

interface Feedback {
  userId: string;
  threadId: string;
  context: string;
  score: number;
}

export const postFeedback = (feedback: Feedback) => {
  return axios
    .post(BASE_API_URL + "threads/feedback", feedback, {
      headers: headers,
    })
    .then((response) => response.data);
};
