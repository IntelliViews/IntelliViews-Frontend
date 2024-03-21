import axios from "axios";

const BASE_API_URL = "https://localhost:7029/";

export const register = async (data: any) => {
  const response = await axios.post(BASE_API_URL + "users/register", data);
  return response.data;
};


export const login = async (data:any) => {
  const response = await axios.post(BASE_API_URL + "users/login", data );
  return response.data
};
