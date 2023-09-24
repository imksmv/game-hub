import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "c5e100fe5f984301badbe37fb290779e",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data)
      .then((res) => res.data);
  };
}

export default APIClient;
