import styled, { keyframes } from 'styled-components';
import { color } from '../../styles/variables';

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const Spinner = styled.div`
  border: 5px solid ${color.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s infinite linear;
  border-left-color: transparent;
`

export const Container = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`