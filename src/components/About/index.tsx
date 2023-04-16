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
          <S.Scrolldown>
            <S.Chevrons>
              <S.Chevronsdown></S.Chevronsdown>
              <S.Chevronsdown></S.Chevronsdown>
            </S.Chevrons>
          </S.Scrolldown>
          <S.ProgressBar value={scrollPosition}></S.ProgressBar>
          <S.ScrollInner ref={sectionRef}>
            <S.ScrollUnic>
              <S.Boximg></S.Boximg>
              <S.Info>
                <S.Title>Sobre Mim</S.Title>
                <S.Description>
                  Profissional do mercado digital, com experiência e anos de
                  estudos nas áreas de{' '}
                  <strong>
                    programação front-end, designer digital e manipulação de
                    imagem.
                  </strong>{' '}
                  <br></br>
                  <br></br> Atualmente, estou cursando Engenharia de Software,
                  meu compromisso é{' '}
                  <strong>
                    desenvolver soluções tecnológicas inovadoras e eficientes
                  </strong>{' '}
                  que atendam às necessidades específicas de cada projeto,
                  sempre superando suas expectativas.
                </S.Description>
              </S.Info>
            </S.ScrollUnic>
            <S.ScrollUnic>
              <S.Info>
                <S.Title>Programação | Front- End</S.Title>
                <S.Description>
                  Estudo e desenvolvo programação front-end há mais de 3 anos,
                  gosto muito da área, onde a cada dia que passa eu aprendo e
                  desenvolvo melhor minhas habilidades.<br></br>
                  <br></br> Atualmente minha linguagem principal é o{' '}
                  <strong>Javascript,</strong> pois por meio dele consigo
                  utilizar frameworks e bibliotecas para criar meus projetos.
                </S.Description>
              </S.Info>
            </S.ScrollUnic>
            <S.ScrollUnic>
              <S.Info>
                <S.Title>Design Digital</S.Title>
                <S.Description>
                  Sobre o Design Digital estudo há mais de 5 anos, meu principal
                  programa é o <strong>Adobe Photoshop,</strong> onde por meio
                  dele crio arquivos digitais para as redes sociais.<br></br>
                  <br></br> Sempre gostei da parte do Design, pois para mim o
                  Design é a{' '}
                  <strong>
                    combinação entre a criatividade e a funcionalidade,
                  </strong>{' '}
                  onde por meio dele é possível transmitir ideias.
                </S.Description>
              </S.Info>
            </S.ScrollUnic>
            <S.ScrollUnic>
              <S.Info>
                <S.Title>Manipulação de Imagem</S.Title>
                <S.Description>
                  Descobri recentemente a <strong>manipulação de imagem</strong>{' '}
                  e fiquei fascinado pela capacidade de transformar conceitos em
                  realidade por meio de edição e tratamento de imagens.<br></br>
                  <br></br> Dessa forma, por meio de estudos e práticas,
                  desenvolvo cada projeto com várias técnicas e trago vários
                  detalhes para uma única imagem.
                </S.Description>
              </S.Info>
            </S.ScrollUnic>
          </S.ScrollInner>
        </S.Container>
      </S.ScrollSection>

      <S.MobileAbout>
        <S.Info>
          <S.Title>Sobre Mim</S.Title>
          <S.Description>
            Profissional do mercado digital, com experiência e anos de estudos
            nas áreas de{' '}
            <strong>
              programação front-end, designer digital e manipulação de imagem.
            </strong>{' '}
            <br></br>
            <br></br> Atualmente, estou cursando Engenharia de Software, meu
            compromisso é{' '}
            <strong>
              desenvolver soluções tecnológicas inovadoras e eficientes
            </strong>{' '}
            que atendam às necessidades específicas de cada projeto, sempre
            superando suas expectativas.
          </S.Description>
        </S.Info>
        <S.Info>
          <S.Title>Programação | Front- End</S.Title>
          <S.Description>
            Estudo e desenvolvo programação front-end há mais de 3 anos, gosto
            muito da área, onde a cada dia que passa eu aprendo e desenvolvo
            melhor minhas habilidades.<br></br>
            <br></br> Atualmente minha linguagem principal é o{' '}
            <strong>Javascript,</strong> pois por meio dele consigo utilizar
            frameworks e bibliotecas para criar meus projetos.
          </S.Description>
        </S.Info>
        <S.Info>
          <S.Title>Design Digital</S.Title>
          <S.Description>
            Sobre o Design Digital estudo há mais de 5 anos, meu principal
            programa é o <strong>Adobe Photoshop,</strong> onde por meio dele
            crio arquivos digitais para as redes sociais.<br></br>
            <br></br> Sempre gostei da parte do Design, pois para mim o Design é
            a{' '}
            <strong>combinação entre a criatividade e a funcionalidade,</strong>{' '}
            onde por meio dele é possível transmitir ideias.
          </S.Description>
        </S.Info>
        <S.Info>
          <S.Title>Manipulação de Imagem</S.Title>
          <S.Description>
            Descobri recentemente a <strong>manipulação de imagem</strong> e
            fiquei fascinado pela capacidade de transformar conceitos em
            realidade por meio de edição e tratamento de imagens.<br></br>
            <br></br> Dessa forma, por meio de estudos e práticas, desenvolvo
            cada projeto com várias técnicas e trago vários detalhes para uma
            única imagem.
          </S.Description>
        </S.Info>
      </S.MobileAbout>
    </>
  )
}
export default About
