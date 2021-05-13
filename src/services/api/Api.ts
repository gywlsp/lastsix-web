/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, Method } from 'axios';

const { API_HOST } = process.env;

class RequestConfig {
  public baseURL: string;
  public headers?: any;
  public method?: Method;
  public url?: string;
  public data?: any;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public get(path: string, config?: AxiosRequestConfig) {
    this.method = 'GET';
    this.url = this.baseURL + path;

    return { ...config, ...this };
  }

  public delete(path: string, config?: AxiosRequestConfig) {
    this.method = 'DELETE';
    this.url = this.baseURL + path;

    return { ...config, ...this };
  }

  public post(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'POST';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }

  public put(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'PUT';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }

  public patch(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'PATCH';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }
}

export const baseConfig = () => {
  return new RequestConfig(API_HOST);
};
