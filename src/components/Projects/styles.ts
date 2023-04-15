import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledImage = styled.image`
  display: flex;
  justify-content: left;
  min-width: 50%;
`

export const Project = styled.div`
background-color: #f6f0f0;
width: 80%;
margin: 0 auto;
display flex;

@media screen and (max-width: 700px){
  flex-direction: column;
}


`

export const Container = styled.div`
  display: grid;
  grid-templates-column: 1fr;
  gap: 2rem;
`

export const Categories = styled.div``

interface ButtonProps {
  selected?: boolean
}

export const Button = styled.button<ButtonProps>`
background:  ${(props) => (props.selected ? '#f6f0f0' : '#1f1f1f')};
  color:  ${(props) => (props.selected ? '#1f1f1f' : '#f6f0f0')};
  padding: 2rem 6rem;
  font-size: 16px;
  font-weight: 600;
  font-family: 'montserrat'
  text-transform: uppercase;
  letter-spacing: 4px;
  transition: all .4s cubic-bezier(0.77, 0, 0.175, 1); 
  cursor: pointer;
  border: 1px solid #f6f0f0;
  margin-right: 2.5rem;
  margin-left: 2.5rem;
  margin-bottom: 4rem;
  
  
  &:hover {
    letter-spacing: 0.50rem;
  }
`

export const Title = styled.h2`
  font-size: 3.2rem;
  color: #1f1f1f;
  font-family: 'montserrat';
  text-transform: uppercase;
  margin-bottom: 1.4rem;

  @media screen and (max-width: 700px) {
    font-size: 2.5rem;
  }
`

export const Description = styled.p`
  color: #1f1f1f;
  font-size: 1.8rem;
  width: 80%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1440px) {
    padding-left: 2rem;
  }

  @media screen and (max-width: 700px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const TitlePrincipal = styled.h2`
  font-size: 5rem;
  text-transform: uppercase;
  font-family: QualyBold;
  background: linear-gradient(to right, #f6f0f0, #1f1f1f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background-color: #6D6B6B;
`

export const DescriptionPrincipal = styled.p`
  color: #f6f0f0;
  padding-top: 2.4rem;
  font-size: 2.4rem;
`
export const InfoPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding-bottom: 5rem;
`

export const Buttontwo = styled.button`
background: #1f1f1f;
color: #f6f0f0;
  padding: 2rem 2rem;
  font-size: 16px;
  font-weight: 600;
  font-family: 'montserrat'
  text-transform: uppercase;
  letter-spacing: 4px;
  transition: all .4s cubic-bezier(0.77, 0, 0.175, 1); 
  cursor: pointer;
  border: 1px solid #f6f0f0;
  margin-top: 2rem;
  width: 40%;
  
  @media screen and (max-width: 700px){
    width: 100%;
  }
  &:hover {
    color: #1f1f1f;
    background-color: #f6f0f0;
    border: 2px solid #1f1f1f;
  }
`
