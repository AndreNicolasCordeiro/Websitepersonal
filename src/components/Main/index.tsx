import * as S from './styles'
import { useEffect, useState } from 'react'
import About from 'components/About'
import Menu from 'components/Menu'
import Mouse from 'components/Mouse'
import Projects from 'components/Projects'

import Loading from 'components/Loading'

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
          <Mouse />
          <S.Wrapper>
            <S.Image>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </S.Image>
          </S.Wrapper>
          <About />
          <Projects />
        </>
      )}
    </>
  )
}

export default Main
