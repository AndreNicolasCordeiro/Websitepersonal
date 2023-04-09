import * as S from './styles'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Mouse = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorSmallRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorSmall = cursorSmallRef.current

    gsap.fromTo(
      [cursor, cursorSmall],
      {
        scale: 2.25
      },
      {
        scale: 2.55,
        duration: 1,
        ease: 'Power3.Out',
        yoyo: true,
        repeat: -1
      }
    )

    const onMouseMove = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1
      })
      gsap.to(cursorSmall, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <S.Cursor ref={cursorRef} />
      <S.CursorSmall ref={cursorSmallRef} />
    </>
  )
}

export default Mouse
