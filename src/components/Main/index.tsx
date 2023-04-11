import * as S from './styles'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import About from 'components/About'
import Menu from 'components/Menu'
import Mouse from 'components/Mouse'
import Projects from 'components/Projects'

import Loading from 'components/Loading'

const Main = ({
  title = 'André Cordeiro',
  description = 'Engenheiro de Software, Programador Front-End e Designer Digital',
  imageUrl = '/img/unsplash4.png'
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  const wrapperRef = useRef<HTMLDivElement>(null)

  const timelineRef = useRef<gsap.core.Timeline>()

  useEffect(() => {
    const wrapper = wrapperRef.current

    const parallax = () => {
      const scrollPosition = window.pageYOffset
      if (scrollPosition <= 370) {
        timelineRef.current?.pause()
        gsap.to(wrapper, {
          backgroundPositionY: `${scrollPosition * 0.6}px`,
          duration: 0.5
        })
      } else {
        timelineRef.current?.resume()
      }
    }

    timelineRef.current = gsap.timeline({ paused: true }).to(wrapper, {})

    window.addEventListener('scroll', parallax)

    return () => {
      window.removeEventListener('scroll', parallax)
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Menu />
      <Mouse />
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
      <Projects />
    </>
  )
}

export default Main
