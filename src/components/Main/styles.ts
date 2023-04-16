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

  &:hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 3s infinite;
  }

  @keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 450px) {
    background: linear-gradient(to right, #f6f0f0, #6d6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 375px) {
    font-size: 5rem;
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

  @media screen and (max-width: 375px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 450px) {
    background: linear-gradient(to right, #f6f0f0, #6d6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 3s infinite;
  }

  @keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }
`
export const Image = styled.div`
  width: 100%;
`
