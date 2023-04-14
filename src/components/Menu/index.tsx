import * as S from './styles'
import Link from 'next/link'

const Menu = () => {
  return (
    <>
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
    </>
  )
}
export default Menu
