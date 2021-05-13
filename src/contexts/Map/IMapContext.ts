import { DisposalLocationListResponse } from 'src/types/disposal-location';

export interface IMapContext {
  state: {
    kakaomap: any;
    latitude: number;
    longitude: number;
    disposalLocations: DisposalLocationListResponse;
    selectedHpid: string;
  };
  action: { setSelectedHpid: React.Dispatch<React.SetStateAction<string>> };
}
