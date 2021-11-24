import getConfig from "./service.getConfig";
import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://marcio-my-wallet.herokuapp.com' : 'http://localhost:4000';

const addTransaction = async (body) => {
  const config = getConfig();
  return await axios.post(`${BASE_URL}/add-transaction`, body, config);
};

const getUserInfo = async () => {
  const config = getConfig();
  return await axios.get(`${BASE_URL}/user-info`, config);
};

const login =  async (userInfo) => {
  return await axios.post(`${BASE_URL}/login`, userInfo)
}

const signUp =  async (userInfo) => {
  return await axios.post(`${BASE_URL}/sign-up`, userInfo);
}

const getBalance =  async () => {
  const config = getConfig();
  return await axios.get(`${BASE_URL}/user-transaction`, config);
}

export {
  addTransaction,
  getUserInfo,
  login,
  signUp,
  getBalance
}