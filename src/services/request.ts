import axios from 'axios';
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { showLoading, hideLoading } from '@/utils';

interface IRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean;
}

class Request {
  instance: AxiosInstance;
  showLoading?: boolean;

  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true
    });

    this.showLoading = false;
    this.interceptorsSetup();
  }

  interceptorsSetup() {
    this.instance.interceptors.request.use(
      (config) => {
        this.showLoading = (config as IRequestConfig).showLoading ?? this.showLoading;
        this.showLoading && showLoading();
        return config;
      },
      (err) => {
        this.showLoading && hideLoading();
        console.error('网络请求出错', err);
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        this.showLoading && hideLoading();
        const { code } = response.data;
        if (code === 401) {
          return Promise.reject(response.data);
        }
        return response.data;
      },
      (err: any) => {
        this.showLoading && hideLoading();
        console.log('请求响应报错', err);
        return err;
      }
    );
  }

  request<T = any>(config: IRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log('request err:', err);
          reject(err);
        });
    });
  }

  get<T = any>(config: IRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'get' });
  }

  post<T = any>(config: IRequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'post'
    });
  }

  postJson<T = any>(config: IRequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'post',
      headers: { 'content-type': 'application/json' }
    });
  }
}

const { REACT_APP_BASE_URL } = process.env;
export default new Request(REACT_APP_BASE_URL, 24000);
