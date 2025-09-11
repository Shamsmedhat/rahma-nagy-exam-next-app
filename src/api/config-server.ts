"use server";

import axios, { type InternalAxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export default async function axiosConfig() {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
  axios.interceptors.request.use(setServerHeaders);
}

async function setServerHeaders(config: InternalAxiosRequestConfig) {
  const token = (await cookies()).get("token")?.value;
  if (token) config.headers.token = token;
  return config;
}
