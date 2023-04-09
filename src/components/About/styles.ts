import styled from 'styled-components'

export const ScrollSection = styled.section`
  overflow: hidden;
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
  padding-left: 23rem;
  padding-right: 30rem;
  padding-top: 30rem;
  padding-bottom: 30rem;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
`

export const Boximg = styled.div`
  background: #f6f0f0;
  width: 85rem;
  height: 100%;
  background-image: url('img/sobre.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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
  color: white;
  font-size: 5rem;
  position: relative;
  text-transform: uppercase;
  font-family: QualyBold;
  &:after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background-color: #753ee2;
`

export const Description = styled.p`
  color: white;
  padding-top: 2.4rem;
  font-size: 2.4rem;
  font-family: montserrat;
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
