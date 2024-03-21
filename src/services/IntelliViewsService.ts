import axios from "axios";
import { Cookies } from "react-cookie";

const BASE_API_URL = "https://localhost:7029/";
const bearerToken = new Cookies().get("user_token");
const headers = {
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${bearerToken}`,
};

export const saveThread = (threadId: string, userId: string) => {
  console.log(threadId, userId);
  const data = axios
    .post(
      BASE_API_URL + "threads",
      { id: threadId, userId: userId },
      { headers: headers }
    )
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
