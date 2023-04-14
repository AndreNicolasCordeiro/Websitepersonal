import styled from 'styled-components'

export const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  border: 2px solid #6d6b6b;
  backdrop-filter: blur(0.8px);
  pointer-events: none;

  @media (max-width: 800px) {
    display: none;
  }
`

export const CursorSmall = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #6d6b6b;
  position: fixed;
  top: -2px;
  left: -2px;
  pointer-events: none;
  z-index: 99999;

  @media (max-width: 800px) {
    display: none;
  }
`
