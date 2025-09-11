import axios from "axios";
import { getCookie } from "@/lib/cookies";
import type { InternalAxiosRequestConfig } from "axios";

export default function useAxiosConfig() {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
  axios.interceptors.request.use(setHeaders);
}

function setHeaders(config: InternalAxiosRequestConfig) {
  const token = getCookie("token");
  if (token) config.headers.token = token;
  return config;
}
