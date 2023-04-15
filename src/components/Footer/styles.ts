import styled from 'styled-components'

export const Footer = styled.footer`
  background: #f6f0f0;
  height: auto;
  font-family: Montserrat;
  padding-top: 40px;
  color: #1f1f1f;
  bottom: 0;
  width: 100%;
  margin-top: 5rem;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1f1f1f;
  padding: 2rem;
`

export const Title = styled.h2`
  font-family: QualyBold;
  font-size: 3.2rem;

  @media screen and (max-width: 800px) {
    font-size: 2.6rem;
  }
`
export const TitleBottom = styled.h4`
  font-family: Montserrat;
  font-size: 1.8rem;
  color: #f6f0f0;
  user-select: none;

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`

export const Description = styled.p`
  font-family: Montserrat;
  font-size: 1.8rem;
  font-weight: 600;

  @media screen and (max-width: 800px) {
    padding-top: 2rem;
    font-size: 1.4rem;
    text-align: center;
  }
`

export const Icons = styled.div`
  display: flex;
`
export const Icon = styled.div`
  padding: 1rem;
  cursor: pointer;
  transition: 0.7s;

  @media screen and (max-width: 800px) {
    padding: 2rem;
  }

  &:hover {
    background: #1f1f1f;
  }
`
