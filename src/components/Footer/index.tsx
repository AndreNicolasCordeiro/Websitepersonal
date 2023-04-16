import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.FooterContainer>
          <S.Title>André Cordeiro</S.Title>
          <S.Description>
            Engenheiro de Software, Programador Front-End e Designer Digital
          </S.Description>
          <S.Icons>
            <S.Icon>
              <Link href="https://www.behance.net/andrncordeir" passHref={true}>
                <Image
                  src={'/img/behancelogo.png'}
                  height={50}
                  width={50}
                  loading="lazy"
                  alt={'Logo da plataforma do Behance.'}
                />
              </Link>
            </S.Icon>
            <S.Icon>
              <Link
                href="https://github.com/AndreNicolasCordeiro"
                passHref={true}
              >
                <Image
                  src={'/img/GitHub-Mark.png'}
                  height={50}
                  width={50}
                  loading="lazy"
                  alt={'Logo da plataforma do GitHub.'}
                />
              </Link>
            </S.Icon>
            <S.Icon>
              <Link
                href="https://www.instagram.com/andrencordeiro/"
                passHref={true}
              >
                <Image
                  src={'/img/instalogo.jpg'}
                  height={50}
                  width={50}
                  loading="lazy"
                  alt={'Logo da plataforma do Instagram.'}
                />
              </Link>
            </S.Icon>
          </S.Icons>
        </S.FooterContainer>
        <S.FooterBottom>
          <S.TitleBottom>
            Copyright &copy;2023 AndreCordeiro | Design por André Cordeiro
          </S.TitleBottom>
        </S.FooterBottom>
      </S.Footer>
    </>
  )
}

export default Footer
