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

export const Scrolldown = styled.div`
--color: #f6f0f0;
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: var(sizeX / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  margin: 0 auto;
  top: 30rem;

  @media screen and (max-width: 1440px){
    top: 40rem;
  }

  @media screen and (max-width: 768px){
    display: none;
  }
  
  &::before{
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #ffffff66;
  }
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 6px;
  }
  40% {
    opacity: 1;
    height: 10px;
  }
  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }
  100% {
    height: 3px;
    opacity: 0;
  }
}
`
export const Chevrons = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const Chevronsdown = styled.div`
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);

  &:nth-child(odd) {
    animation: pulse 500ms ease infinite alternate;

    @keyframes pulse {
      from {
        opacity: 0;
      }
      to {
        opacity: 0.5;
      }
    }
  }
`
