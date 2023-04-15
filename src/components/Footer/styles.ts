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
`
export const TitleBottom = styled.h4`
  font-family: Montserrat;
  font-size: 1.8rem;
  color: #f6f0f0;
  user-select: none;
`

export const Description = styled.p`
  font-family: Montserrat;
  font-size: 1.8rem;
  font-weight: 600;
`

export const Icons = styled.div`
  display: flex;
`
export const Icon = styled.div`
  padding: 1rem;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    background: #1f1f1f;
  }
`
