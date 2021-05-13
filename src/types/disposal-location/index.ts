export type DisposalLocation = {
  hpid: string; //고유 id 값
  name: string; //dutyName
  lat: number; //위도
  lng: number; //경도
  addr: string; // 주소
  isOfficial: boolean; //공공데이터 내 장소인지,
  tel: string; // 전화번호
  start: OperatingTime;
  close: OperatingTime;
};

export type OperatingTime = {
  mon: string; // 월요일 종료 시간 ex) "18:30"
  tue: string; // 화요일 시작 시간
  wed: string; // 수요일 시작 시간
  thur: string; // 목요일 시작 시간
  fri: string; // 금요일 시작 시간
  sat: string; // 토요일 시작 시간
  sun: string; // 일요일 시작 시간
};

export type DisposalLocationListRequestParams = {
  lat: number;
  lng: number;
  level?: number; //default: 4
  limit?: number; //default: 10
};

export type DisposalLocationListResponse = Pick<
  DisposalLocation,
  'hpid' | 'name' | 'lat' | 'lng' | 'isOfficial'
>[];

export type DisposalLocationResponse = Pick<
  DisposalLocation,
  'name' | 'addr' | 'tel' | 'start' | 'close'
>;
