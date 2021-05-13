import React from 'react';
import styled from 'styled-components';

import { GREY, WHITE } from 'src/constants/colors';

import { useMapContext } from 'src/contexts/map';
import { useDisposalLocation } from 'src/hooks/api/disposal-location';

const dayEngList = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const dayKorList = ['월', '화', '수', '목', '금', '토', '일'];

export default function LocationDetailModal() {
  const {
    state: { selectedHpid },
    action: { setSelectedHpid },
  } = useMapContext();
  const { data } = useDisposalLocation(selectedHpid);

  if (!selectedHpid || !data?.result) {
    return <></>;
  }

  const {
    name,
    addr,
    tel,
    start: startTimeList,
    close: closeTimeList,
  } = data.result;

  const initSelectedHpid = () => {
    setSelectedHpid(null);
  };

  const operationTime = dayEngList.map((day) => {
    const start = startTimeList[day];
    const close = closeTimeList[day];
    const isClosedDay = start === '휴무일' || close === '휴무일';
    return isClosedDay ? '휴무일' : `${start}-${close}`;
  });

  return (
    <Overlay onClick={initSelectedHpid}>
      <Wrapper>
        <Name>{name}</Name>
        <Row>
          <Label>주소</Label>
          <Text>{addr}</Text>
        </Row>
        <Row>
          <Label>전화번호</Label>
          <Text>{tel}</Text>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Label>운영시간</Label>
          <div>
            {operationTime.map((time, index) => (
              <Row key={time}>
                <Day>{dayKorList[index]}</Day>
                <Text>{time}</Text>
              </Row>
            ))}
          </div>
        </Row>
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Wrapper = styled.div`
  width: 90%;
  padding: 1.2rem 2rem;
  max-width: 768px;
  background-color: ${WHITE};
`;

const Name = styled.h1`
  margin-bottom: 2rem;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

const Day = styled.p`
  color: ${GREY[900]};
  font-size: 1.4rem;
  margin-right: 0.8rem;
`;

const Label = styled.p`
  color: ${GREY[700]};
  font-size: 1.4rem;
  width: 8rem;
`;

const Text = styled.p`
  flex: 1;
  color: ${GREY[900]};
  font-size: 1.4rem;
`;
