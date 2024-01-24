import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d84189b9e5234a5d9a2ab12889582fd9",
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null,
  results: T[];
}

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
}

export default ApiClient;
