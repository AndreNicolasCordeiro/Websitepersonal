import styled from 'styled-components'

export const Section = styled.section`
width: 100%
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

export const Categories = styled.div`
  padding: 1rem;
`

interface ButtonProps {
  selected?: boolean
}

export const Button = styled.button<ButtonProps>`
background:  ${(props) => (props.selected ? '#f6f0f0' : '#1f1f1f')};
  color:  ${(props) => (props.selected ? '#1f1f1f' : '#f6f0f0')};
  padding: 1.2rem 2rem;
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

  &:hover {
    border: 1px solid #1f1f1f;
  }
`

export const Image = styled.image`
  display: flex;
  justify-content: left;
  width: 100%;
  height: 100%;
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
  padding: 20rem;
`

export const TitlePrincipal = styled.h2`
  font-size: 3.2rem;
  color: #f6f0f0;
  font-family: 'montserrat';
  text-transform: uppercase;
  padding-bottom: 1.4rem;
`

export const DescriptionPrincipal = styled.p`
  color: #f6f0f0;
  font-size: 2rem;
`
export const InfoPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5rem;
`
