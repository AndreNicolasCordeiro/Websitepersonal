import * as S from './styles'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const About = () => {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
            setScrollPosition(self.progress)
          }
        }
      }
    )
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill()
    }
  }, [])

  return (
    <>
      <S.ScrollSection>
        <S.Container ref={triggerRef}>
          <S.ProgressBar value={scrollPosition}></S.ProgressBar>
          <S.ScrollInner ref={sectionRef}>
            <S.ScrollUnic>
              <S.Title>Programação</S.Title>
              <S.Description>
                Programação é o processo de escrita, teste e manutenção de um
                programa de computador. O programa é escrito em uma linguagem de
                programação,
              </S.Description>
            </S.ScrollUnic>
            <S.ScrollUnic>
              <S.Title>Programação</S.Title>
              <S.Description>
                Programação é o processo de escrita, teste e manutenção de um
                programa de computador. O programa é escrito em uma linguagem de
                programação,
              </S.Description>
            </S.ScrollUnic>
            <S.ScrollUnic>
              <S.Title>Programação</S.Title>
              <S.Description>
                Programação é o processo de escrita, teste e manutenção de um
                programa de computador. O programa é escrito em uma linguagem de
                programação,
              </S.Description>
            </S.ScrollUnic>
            <S.ScrollUnic>
              <S.Title>Programação</S.Title>
              <S.Description>
                Programação é o processo de escrita, teste e manutenção de um
                programa de computador. O programa é escrito em uma linguagem de
                programação,
              </S.Description>
            </S.ScrollUnic>
          </S.ScrollInner>
        </S.Container>
      </S.ScrollSection>
    </>
  )
}

export default About
