import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #1f1f1f;
  color: #f6f0f0;
  min-height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  @font-face {
    font-family: 'QualyBold';
    src: url('/fonts/QualyBold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  font-family: 'QualyBold', sans-serif;
  font-size: 10rem;
  background: linear-gradient(to right, #f6f0f0, #1f1f1f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 7rem;
  }
`

export const Description = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to right, #f6f0f0, #1f1f1f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`
export const Image = styled.div`
  width: 100%;
`
