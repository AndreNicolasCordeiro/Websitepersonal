import * as S from './styles'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'
import { useEffect } from 'react'

interface MenuMobileProps {
  isVisible: boolean
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuMobile = ({ isVisible, setMenuIsVisible }: MenuMobileProps) => {
  useEffect(() => {
    document.body.style.overflowY = isVisible ? 'hidden' : 'auto'
  }, [isVisible])

  return (
    <>
      <S.Container isVisible={isVisible}>
        <S.Icon>
          <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
        </S.Icon>
        <S.Nav>
          <S.Link>
            <Link href="https://www.behance.net/andrncordeir" passHref={true}>
              <S.MenuLink target="_blank">Behance</S.MenuLink>
            </Link>
          </S.Link>
          <S.Link>
            <Link
              href="https://github.com/AndreNicolasCordeiro"
              passHref={true}
            >
              <S.MenuLink target="_blank">GitHub</S.MenuLink>
            </Link>
          </S.Link>
          <S.Link>
            <Link
              href="https://www.instagram.com/andrencordeiro/"
              passHref={true}
            >
              <S.MenuLink target="_blank">Instagram</S.MenuLink>
            </Link>
          </S.Link>
        </S.Nav>
      </S.Container>
    </>
  )
}

export default MenuMobile
