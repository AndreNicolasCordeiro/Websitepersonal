import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Project = styled.div`
background-color: #f6f0f0;
width: 80%;
margin: 0 auto;
display flex;
}
`

export const Container = styled.div`
  color: white;
  font-size: 1.4rem;
  display: grid;
  grid-templates-column: 1fr;
  gap: 2rem;
`

export const Tags = styled.div``

export const Categories = styled.div``

interface ButtonProps {
  selected?: boolean
}

export const Button = styled.button<ButtonProps>`
background:  ${(props) => (props.selected ? '#753ee2' : '#1f1f1f')};
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
    border: 1px solid #f6f0f0;
  }
`

export const Image = styled.image`
  display: flex;
  justify-content: left;
`

export const Title = styled.h2`
  font-size: 3.2rem;
  color: #1f1f1f;
  font-family: 'montserrat';
  text-transform: uppercase;
  padding-bottom: 1.4rem;
`
export const Box = styled.div`
  width: 1660px;
`

export const Description = styled.p`
  color: #1f1f1f;
  font-size: 1.8rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem;
`

export const TitlePrincipal = styled.h2`
  font-size: 5rem;
  text-transform: uppercase;
  font-family: QualyBold;
  color: #f6f0f0;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background-color: #753ee2;
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
  padding-bottom: 4rem;
  padding-left: 28rem;
  padding-right: 28rem;
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
  
  
  &:hover {
    color: #753ee2;
  }
`
