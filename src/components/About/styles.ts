import styled from 'styled-components'

export const ScrollSection = styled.section`
  overflow: hidden;
  background: #1f1f1f;

  @media screen and (max-width: 500px) {
    display: none;
  }
`
export const MobileAbout = styled.main`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ScrollInner = styled.div`
  height: 100vh;
  width: 400vw;
  display: flex;
  flex-direction: row;
  position: relative;
`

export const ScrollUnic = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: left;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 4rem;

  width: 75%;

  @media screen and (max-width: 500px) {
    padding: 2rem;
    width: 80%;
  }
`

export const Boximg = styled.div`
  background: #f6f0f0;
  width: 37rem;
  height: 40%;
  background-image: url('img/sobre.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  border: 5px solid #6d6b6b;
`

export const Box = styled.div`
  background: #f6f0f0;
  width: 85rem;
  height: 100%;
  font-family: QualyBold;
  font-size: 15rem;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const Container = styled.div``

export const Title = styled.h2`
background: linear-gradient(to right, #f6f0f0, #6D6B6B);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  font-size: 5rem;
  width: auto;
  position: relative;
  text-transform: uppercase;
  font-family: QualyBold;

  @media screen and (max-width: 500px) {
    font-size: 3.2rem;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background-color: #6D6B6B;
`

export const Description = styled.p`
  color: white;
  padding-top: 2.4rem;
  font-size: 2.4rem;
  font-family: montserrat;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`

export const ProgressBar = styled.progress`
  ::-webkit-progress-value {
    background-color: #f6f0f0;
  }
  position: relative;
  top: 6rem;
  width: 100%;
  height: 5px;
  background: yellow;

  @media screen and (max-width: 500px) {
    display: none;
  }
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
  top: 2.5%;

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
