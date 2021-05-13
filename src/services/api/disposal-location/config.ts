import { baseConfig } from '../Api';

import { DisposalLocationListRequestParams } from 'src/types/disposal-location';

export const listConfig = (params: DisposalLocationListRequestParams) =>
  baseConfig().get('/', { params });

export const readConfig = (id: string) => baseConfig().get(`/${id}`);
