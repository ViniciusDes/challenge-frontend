import axios from "axios";

export class ApiService {
  static getInstance() {
    const baseUrl = import.meta.env.VITE_BASE_URL_SERVER;
    console.log("baseUrl", baseUrl);
    const api = axios.create({
      baseURL: baseUrl,
    });

    return api;
  }
}

export const Api = () => ApiService.getInstance();
