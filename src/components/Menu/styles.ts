import styled from 'styled-components'

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #753ee2;
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
`

export const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #f2f2f2;
  }
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
