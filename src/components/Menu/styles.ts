import styled from 'styled-components'

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1f1f1f;
  color: #fff;
  z-index: 999;
`

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`

export const MenuItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 3rem;
  padding-left: 7rem;
  padding-right: 7rem;

  @media screen and (max-width: 1440px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuLink = styled.a`
  background: linear-gradient(to right, #f6f0f0, #6d6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
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
  font-size: 5rem;
`

export const MenuNav = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #f6f0f0;
`

export const Icon = styled.image`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #f6f0f0;
  font-size: 3rem;
`
