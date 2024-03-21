import axios from "axios";

const BASE_API_URL = "https://localhost:7029/";
const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwUVdFUlRZVUlPYXNkZmF3ZGF3ZGF3ZGFBU0FnaGprbHFxcXFxcXFxcXFxcSIsImp0aSI6IjkxYTM1ZWM2LWU1ZmYtNGI1NC04N2IyLTRiYWJhMThlYTU0YSIsImlhdCI6IjE3MTEwNDMxMTYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImJiNTQxZDdkLWMwYzUtNGMzYy05ZTFiLWQxOGI0YzNhNDkyMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJsYXV2aGplbGxAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibGF1dmhqZWxsQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzExMDQ2NzE2LCJpc3MiOiJZb3VyQ29tcGFueVNlcnZlciIsImF1ZCI6IllvdXJQcm9kdWN0QXVkaWVuY2UifQ.YHADoF6ZWnWYhZ9XED3HjU1cVEsoK8v59Okqnd0exg4',
};

export const saveThread = (threadId: string, userId: string) => {
  const data = axios
    .post(BASE_API_URL + "threads", { id: threadId, userId: userId })
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
  return axios.get(BASE_API_URL + "threads/feedback", { headers: headers })
    .then((response) => response.data);
};
