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
  flex-direction: column;
  padding: 30rem;
`

export const Container = styled.div``

export const Title = styled.h2`
  color: white;
  font-size: 5rem;
`

export const Description = styled.p`
  color: white;
  font-size: 2.4rem;
`

export const ProgressBar = styled.progress`
  ::-webkit-progress-value {
    background-color: white;
  }

  position: relative;
  top: 30rem;
  width: 100%;
  height: 5px;
  background: yellow;
`
