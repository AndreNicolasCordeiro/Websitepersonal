import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Letter = styled.h2`
  @font-face {
    font-family: 'QualyBold';
    src: url('/fonts/QualyBold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  font-family: QualyBold;
  font-size: 20rem;
  animation: ${spin} 1s linear infinite;
  color: #f6f0f0;
`

const Loading = () => (
  <LoadingWrapper>
    <Letter>A</Letter>
  </LoadingWrapper>
)

export default Loading
