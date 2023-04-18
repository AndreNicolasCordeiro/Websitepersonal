import * as S from './styles'
import { useEffect, useState } from 'react'
import About from 'components/About'
import Menu from 'components/Menu'
import Projects from 'components/Projects'
import Footer from 'components/Footer'
import Loading from 'components/Loading'
import Contact from 'components/Contact'

const Main = ({
  title = 'André Cordeiro',
  description = 'Engenheiro de Software, Programador Front-End e Designer Digital'
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (hasVisited) {
      setLoading(false)
    } else {
      localStorage.setItem('hasVisited', true.toString())
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2200)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Menu />
          <S.Wrapper>
            <S.Image>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </S.Image>
            <S.Scrolldown>
              <S.Chevrons>
                <S.Chevronsdown></S.Chevronsdown>
                <S.Chevronsdown></S.Chevronsdown>
              </S.Chevrons>
            </S.Scrolldown>
          </S.Wrapper>
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default Main
