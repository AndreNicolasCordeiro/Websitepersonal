import * as S from './styles'
import { useState } from 'react'
import Image from 'next/image'

const projects: IProject[] = [
  {
    title: 'Nescafé',
    field: 'Design',
    description:
      'Programação é o processo de escrita, teste e manutenção de um programa de computador.',
    image: { src: '/img/Manipulacao3.png', alt: 'Descrição da imagem' }
  },
  {
    title: 'Negresco',
    field: 'Design',
    description:
      'Programação é o processo de escrita, teste e manutenção de um programa de computador.',
    image: { src: '/img/Manipulacao3.png', alt: 'Descrição da imagem' }
  },
  {
    title: 'Programação',
    field: 'Programação',
    description:
      'Programação é o processo de escrita, teste e manutenção de um programa de computador.',
    image: { src: '/img/codes.jpg', alt: 'Descrição da imagem' }
  },
  {
    title: 'Código',
    field: 'Programação',
    description:
      'Programação é o processo de escrita, teste e manutenção de um programa de computador.',
    image: { src: '/img/codes.jpg', alt: 'Descrição da imagem' }
  },
  {
    title: 'Projeto',
    field: 'Programação',
    description:
      'Programação é o processo de escrita, teste e manutenção de um programa de computador.',
    image: { src: '/img/codes.jpg', alt: 'Descrição da imagem' }
  }
]

interface IProject {
  title: string
  field: string
  description: string
  image: {
    src: string
    alt: string
  }
}

interface Props {
  selectedCategory?: string
}

export const useProjects = (): IProject[] => {
  return projects
}

export const getCategories = (projects: IProject[]): string[] => {
  const categories: string[] = []
  for (const project of projects) {
    const hasproject = categories.find(
      (existingProject) => existingProject === project.field
    )

    if (!hasproject) {
      categories.push(project.field)
    }
  }

  return categories
}

const Projects = ({}: Props) => {
  const projects = useProjects()

  const categories = getCategories(projects)

  const [selectCategory, setSelectCategory] = useState('')
  const [isButtonSelected, setIsButtonSelected] = useState(false)

  const handleSelectedCategory = (category: string) => {
    if (category === selectCategory) {
      setSelectCategory('')
      setIsButtonSelected(false)
      return
    }
    setSelectCategory(category)
    setIsButtonSelected(true)
  }

  const getFilteredCategories = (
    selectCategory: string,
    existingProject: IProject[]
  ): IProject[] => {
    if (!selectCategory) return existingProject
    return existingProject.filter((project) => project.field === selectCategory)
  }

  const filteredCategories = getFilteredCategories(selectCategory, projects)

  return (
    <>
      <S.Section>
        <S.InfoPrincipal>
          <S.TitlePrincipal>Meus Projetos</S.TitlePrincipal>
          <S.DescriptionPrincipal>
            Proramação é o processo de escrita, teste e manutenção de um
            programa de computador. O programa é escrito em uma linguagem de
            programação,
          </S.DescriptionPrincipal>
        </S.InfoPrincipal>
        <S.Categories>
          {categories.map((cat) => {
            const isActive = selectCategory === cat

            return (
              <S.Button
                key={cat}
                onClick={() => handleSelectedCategory(cat)}
                selected={isActive && isButtonSelected}
              >
                {cat}
              </S.Button>
            )
          })}
        </S.Categories>
        <S.Box>
          <S.Container>
            {filteredCategories.map((project) => (
              <S.Project key={project.title}>
                <S.Image>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={550}
                    height={550}
                  />
                </S.Image>
                <S.Info>
                  <S.Title>{project.title}</S.Title>
                  <S.Description>{project.description}</S.Description>
                </S.Info>
              </S.Project>
            ))}
          </S.Container>
        </S.Box>
      </S.Section>
    </>
  )
}

export default Projects
