import * as S from './styles'
import Link from 'next/link'

const MenuProject = () => {
  return (
    <>
      <S.MenuContainer>
        <S.MenuList>
          <S.MenuItem>
            <Link href="/" passHref={true}>
              <S.MenuLink>Voltar</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/index" passHref>
              <S.Title>A</S.Title>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/" passHref={true}>
              <S.MenuLink>Voltar</S.MenuLink>
            </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuContainer>
    </>
  )
}
export default MenuProject
