import * as S from './styles'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import About from 'components/About'
import Menu from 'components/Menu'

const Main = ({
  title = 'André Cordeiro',
  description = 'Engenheiro de Software, Programador Front-End e Designer Digital',
  imageUrl = '/img/unsplash2.jpg'
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current

    const parallax = () => {
      const scrollPosition = window.pageYOffset
      if (scrollPosition > 0) {
        gsap.to(wrapper, {
          backgroundPositionY: `${scrollPosition * 0.6}px`,
          duration: 0.5
        })
      }
    }

    parallax()

    window.addEventListener('scroll', parallax)

    return () => {
      window.removeEventListener('scroll', parallax)
    }
  }, [])

  return (
    <>
      <Menu />
      <S.Wrapper
        ref={wrapperRef}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <S.Image>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Image>
      </S.Wrapper>
      <About />
    </>
  )
}
export default Main
