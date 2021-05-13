export type DisposalInfoType = {
  title: string;
  content: string;
  image: string;
};

const PRESCRIPTION_DRUG = {
  title: '처방약 버리는 법',
  content: '약 포장지를 뜯을 필요 없이 그대로 배출합니다.',
  image: 'https://cdn.crowdpic.net/list-thumb/thumb_l_6183DB7122844DAD1C5E4F54B03C9B4A.jpg',
};

const GENERAL_TABLETS = {
  title: '일반 정제약 버리는 법',
  content:
    '약이 들어있는 압박포장지(PTP)를 제거해 캡슐이나 알약만 따로 비닐에 모아 밀폐 후 배출합니다.',
  image: 'https://lh3.googleusercontent.com/proxy/H2O7lOmccSkL-_1icMD3e-nFxAN6u1NOrT6UOsRUjuFykOXie6aTyiZ14w12ptjyWGwAiTL8qVmZOzoIPnujKFmlBClMwDSdJ4eqach0dTfCU0GeFoYk0p1m5Fb2J-6CNSOyFAg',
};

const SYRUP = {
  title: '시럽제 버리는 법',
  content: '약물을 한 병에 모은 다음, 새지 않도록 밀봉한 후 배출합니다.',
  image: 'https://t1.daumcdn.net/cfile/tistory/99A9F93359D79D6D01',
};

const EYE_DROPS_AND_OINTMENT = {
  title: '연고/안약 버리는 법',
  content:
    '겉 상자만 재활용 쓰레기로 버리고, 튜브나 플라스틱 통 그대로 배출합니다.',
  image: 'https://lh3.googleusercontent.com/proxy/NqbdCZeu26yQYsSeQ4DsN5zRNdd-m6WJMiVNg-UGg7MOo-QsxX0tybX9NGC-l_aKpWvFZwkdSvNECKzDVbuluKnrDytftx603LwpM0NJjPVopiDWm_uS2GWvgS3t65fHniJfJZreiMtoGQx8B6yyai32NnDYlcn0WI7pUhqUXo8jO5I4Fu-cIA',
};

const DISPOSAL_INFO = [
  PRESCRIPTION_DRUG,
  GENERAL_TABLETS,
  SYRUP,
  EYE_DROPS_AND_OINTMENT,
];

export default DISPOSAL_INFO;
