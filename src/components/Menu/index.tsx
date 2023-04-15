import * as S from './styles'
import Link from 'next/link'
import { useState } from 'react'
import MenuMobile from 'components/MenuMobile'
import { RiMenu3Fill } from 'react-icons/ri'

const Menu = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <MenuMobile
        isVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <S.MenuContainer>
        <S.MenuList>
          <S.MenuItem>
            <Link href="https://www.behance.net/andrncordeir" passHref={true}>
              <S.MenuLink target="_blank">Behance</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link
              href="https://github.com/AndreNicolasCordeiro"
              passHref={true}
            >
              <S.MenuLink target="_blank">GitHub</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link
              href="https://www.instagram.com/andrencordeiro/"
              passHref={true}
            >
              <S.MenuLink target="_blank">Instagram</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/index" passHref>
              <S.Title>A</S.Title>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/index" passHref>
              <S.MenuLink>Início</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/index" passHref>
              <S.MenuLink>Projetos</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/index" passHref>
              <S.MenuLink>Contato</S.MenuLink>
            </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuContainer>

      <S.MenuNav>
        <S.Icon>
          <RiMenu3Fill onClick={() => setMenuIsVisible(true)} />
        </S.Icon>
      </S.MenuNav>
    </>
  )
}
export default Menu
