import axios, { AxiosResponse, AxiosError } from 'axios';
import useSWR from 'swr';

import {
  DisposalLocationListRequestParams,
  DisposalLocationListResponse,
  DisposalLocationResponse,
} from 'src/types/disposal-location';

const fetcher = (url) => axios.get(url);

export const useDisposalLocationList = (
  params: DisposalLocationListRequestParams
) => {
  const queryString = Object.entries(params)
    .map((pair) => pair.join('='))
    .join('&');
  const { data: response, error } = useSWR<
    AxiosResponse<{ result: DisposalLocationListResponse }>,
    AxiosError<Error>
  >(`${process.env.API_HOST}/?${queryString}`, fetcher);
  return { data: response?.data, error };
};

export const useDisposalLocation = (id: string) => {
  const { data: response, error } = useSWR<
    AxiosResponse<{ result: DisposalLocationResponse }>,
    AxiosError<Error>
  >(`${process.env.API_HOST}/${id}`, fetcher);
  return { data: response?.data, error };
};
