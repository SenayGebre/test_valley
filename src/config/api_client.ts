import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

class ApiClient {
  private static instance: ApiClient;
  private axiosInstance: AxiosInstance;

  private constructor(baseURL: string = '') {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 40000
    });

    this.axiosInstance.interceptors.request.use(
      config => {
        console.log('Request:', config);
        return config;
      },
      error => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      response => {
        console.log('Response:', response);
        return response;
      },
      error => Promise.reject(error)
    );
  }

  public static initialize(baseURL: string): void {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient(baseURL);
    }
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      throw new Error('ApiClient has not been initialized. Call initialize() first.');
    }
    return ApiClient.instance;
  }

  public setHeader(headers: Record<string, string>): void {
    this.axiosInstance.defaults.headers = {
      ...this.axiosInstance.defaults.headers,
      ...headers
    };
  }

  public setAuthorization(token: string): void {
    this.setHeader({ Authorization: `Bearer ${token}` });
  }

  public removeAuthorization(): void {
    delete this.axiosInstance.defaults.headers.Authorization;
  }

private async request<T>(method: string, url: string, data: any = {}, params: Record<string, any> = {}): Promise<T | undefined> {
    try {
        const response = await this.axiosInstance({ method, url, data, params });
        return response.data;
    } catch (error) {
        this.handleError(error);
    }
    return undefined;
}

public async get<T>(path: string, params: Record<string, any> = {}): Promise<T | undefined> {
    return this.request<T>('GET', path, undefined, params);
}

public async post<T>(path: string, body: any, params: Record<string, any> = {}): Promise<T | undefined> {
    return this.request<T>('POST', path, body, params);
}

  public async put<T>(path: string, data: any = {}): Promise<T | undefined> {
    return this.request<T>('PUT', path, data);
  }

  public async getPaginated<T>(endpoint: string, params: Record<string, any> = {}, page: number, size: number): Promise<T | undefined> {
    return this.get<T>(endpoint, { ...params, page, size });
  }

  private handleError(error: any): void {
    if (error.response) {
      console.error('Response error:', error.response.status, error.response.data);
      throw error.response.data;
    } else if (error.request) {
      console.error('Request error:', error.request);
      throw 'No response from the server';
    } else {
      console.error('Request setup error:', error.message);
      throw 'Error setting up the request';
    }
  }
}

export default ApiClient;
