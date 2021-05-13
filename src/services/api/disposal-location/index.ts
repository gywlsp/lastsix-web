import axios from 'axios';

import { listConfig, readConfig } from './config';
import {
  DisposalLocationListRequestParams,
  DisposalLocationListResponse,
  DisposalLocationResponse,
} from 'src/types/disposal-location';

export const list = async (
  params: DisposalLocationListRequestParams
): Promise<{ msg: string; result: DisposalLocationListResponse }> =>
  axios(listConfig(params)).then((res) => res.data);

export const read = async (
  id: string
): Promise<{ msg: string; result: DisposalLocationResponse }> =>
  axios(readConfig(id)).then((res) => res.data);

const DisposalLocationService = {
  list,
  read,
};

export default DisposalLocationService;
