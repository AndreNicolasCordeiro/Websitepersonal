import styled from 'styled-components'

export const Container = styled.section`
  width: 80%;
  display: flex;
  margin: 0 auto;
  background: #f6f0f0;
  margin-top: 10rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
export const Image = styled.div`
  display: flex;
  justify-content: left;
`

export const FormContainer = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  @media screen and (max-width: 1600px) {
    padding: 2rem;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const FormTitle = styled.h2`
  font-size: 3.2rem;
  color: #1f1f1f;
  font-family: QualyBold;
  padding-bottom: 1.4rem;

  @media screen and (max-width: 420px) {
    font-size: 2.2rem;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`

export const FormLabel = styled.label`
font-size: 16px;
font-weight: 600;
font-family: 'montserrat'
  margin-bottom: 0.5rem;
  color: #1f1f1f;
  padding-bottom: 0.8rem;

`

export const FormInput = styled.input`
  padding: 2rem 2rem;
  font-size: 16px;
  font-weight: 600;
  font-family: 'montserrat'
  border-radius: 0.25rem;
  border: 1px solid #1f1f1f;
  width: 100%;


  ::placeholder {
    color: #1f1f1f;
    font-size: 1.4rem;
    font-family: Montserrat;
    font-weight: 600;
`

export const FormTextarea = styled.textarea`
  padding: 2rem 2rem;
  font-size: 16px;
  font-weight: 600;
  font-family: 'montserrat'
  border-radius: 0.25rem;
  border: 1px solid #1f1f1f;
  height: 10rem;
  width: 100%;

  ::placeholder {
    color: #1f1f1f;
    font-size: 1.4rem;
    font-family: Montserrat;
    font-weight: 600;
`

export const FormButton = styled.button`
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
  width: 100%;
  
  @media screen and (max-width: 800px) {
    width: 100%;
  }

  &:hover {
    color: #1f1f1f;
    background-color: #f6f0f0;
    border: 2px solid #1f1f1f;
  }
`
