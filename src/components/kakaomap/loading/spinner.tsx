import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border: 0.3rem solid transparent;
  border-top: 0.3rem solid white;
  border-right: 0.3rem solid white;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  animation: ${spin} 1.5s linear infinite;
`;

export default LoadingSpinner;
