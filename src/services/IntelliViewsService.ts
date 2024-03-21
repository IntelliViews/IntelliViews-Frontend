import axios from "axios";

const BASE_API_URL = "https://localhost:7029/";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwUVdFUlRZVUlPYXNkZmF3ZGF3ZGF3ZGFBU0FnaGprbHFxcXFxcXFxcXFxcSIsImp0aSI6ImU0MTM5YzZkLTUwOTEtNGYzNS1iOTRjLWE5NDlmZWM2NTU4YSIsImlhdCI6IjE3MTEwMjY4OTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjBiMmM0NzgyLTY0OTItNGVjNy1iN2RlLTNlMmRhMjU2Mjg0MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ0ZXN0ZXJAZW1haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidGVzdGVyQGVtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzExMDMwNDkxLCJpc3MiOiJZb3VyQ29tcGFueVNlcnZlciIsImF1ZCI6IllvdXJQcm9kdWN0QXVkaWVuY2UifQ.F5N9dqH6s63td8UE09akLgofssR3kTiSxG5LNiuyOwo",
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
