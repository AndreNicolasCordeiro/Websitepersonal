import styled, { css } from 'styled-components'

interface ContainerProps {
  isVisible: boolean
}

export const Container = styled.section<ContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.15rem);

  background: rgba(17, 18, 17, 0.95);
  opacity: 0;
  pointer-events: none;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`

export const Icon = styled.image`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #f6f0f0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`
export const Link = styled.div``

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
