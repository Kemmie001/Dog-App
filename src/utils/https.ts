import axios, { AxiosError } from "axios";

const http = axios.create({
  baseURL: "https://dog.ceo/api/",
});

export { http };
