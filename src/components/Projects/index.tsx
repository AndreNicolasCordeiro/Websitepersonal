import * as S from './styles'
import { useState } from 'react'
import Image from 'next/image'

const projects: IProject[] = [
  {
    title: 'Nescafé',
    field: 'Design',
    description:
      'Projeto de Manipulação de Imagem que desenvolvi práticas de manipulação como dodge and burn, sombras, contraste, coloração, luzes e profundidade. ',
    image: {
      src: '/img/Manipulacao3.png',
      alt: 'Manipulação de imagem do Cappuccino Nescafé + Negresco'
    }
  },
  {
    title: 'Cervo Dourado',
    field: 'Design',
    description:
      'Projeto de Manipulação de Imagem, que construí com base no cervo, com práticas de luzes e máscaras, criei a ambientação do local.',
    image: {
      src: '/img/Manipulacao2.png',
      alt: 'Manipulação Cervo na Floresta'
    }
  },
  {
    title: 'Rinoceronte Dourado',
    field: 'Design',
    description:
      'Projeto de Manipulação de Imagem, utilizei como item principal a imagem do rinoceronte, utilizando conceitos de profundidade, sombras, luzes, filtro e máscaras, realizei a ambientação da imagem.',
    image: { src: '/img/Manipulacao1.png', alt: 'Descrição da imagem' }
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
            Um pouco dos meus principais projetos incluem o desenvolvimento de
            websites responsivos, sistemas de conteúdo, manipulação de artes
            publicitárias digitais e design de publicações.
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
                    width={700}
                    height={700}
                    layout="fixed"
                  />
                </S.Image>
                <S.Info>
                  <S.Title>{project.title}</S.Title>
                  <S.Description>{project.description}</S.Description>
                  <S.Buttontwo>Ver projeto</S.Buttontwo>
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
