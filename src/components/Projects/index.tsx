import * as S from './styles'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects: IProject[] = [
  {
    title: 'Nescafé',
    field: 'Design',
    link: 'https://www.behance.net/gallery/166850461/Manipulacao-de-imagem-Nescaf',
    description:
      'Projeto de Manipulação de Imagem que desenvolvi com práticas de manipulação, como dodge and burn, sombras, contraste, coloração, luzes e profundidade. ',
    image: {
      src: '/img/Manipulacao3.png',
      alt: 'Manipulação de imagem do Cappuccino Nescafé + Negresco'
    }
  },
  {
    title: 'Cervo Dourado',
    field: 'Design',
    link: 'https://www.behance.net/gallery/166347513/Manipulacao-de-imagem-Cervo-Dourado',
    description:
      'Projeto de Manipulação de Imagem, que construí com base na imagem do cervo, com práticas de luzes e máscaras, criei a ambientação do local.',
    image: {
      src: '/img/Manipulacao2.png',
      alt: 'Manipulação Cervo na Floresta'
    }
  },
  {
    title: 'Rinoceronte Dourado',
    field: 'Design',
    link: 'https://www.behance.net/gallery/166347513/Manipulacao-de-imagem-Cervo-Dourado',
    description:
      'Projeto de Manipulação de Imagem, utilizei como item principal a imagem do rinoceronte, utilizando conceitos de profundidade, sombras, luzes, filtro e máscaras, realizei a ambientação da imagem.',
    image: { src: '/img/Manipulacao1.png', alt: 'Descrição da imagem' }
  },
  {
    title: 'Projeto UGV website + dashboard',
    field: 'Programação',
    link: 'https://andrenicolascordeiro.github.io/ugvsiteapp/',
    description:
      'Website desenvolvido para um projeto da UGV, onde por meio dele seria a reconstrução do website da UGV e ainda teria uma dashboard da área aluno. Foi utilizado Html, Css, Javascript e BootStrap.',
    image: { src: '/img/Ugvsiteapp.png', alt: 'Descrição da imagem' }
  },
  {
    title: 'Projeto sistema financeiro',
    field: 'Programação',
    link: 'https://financial-system-iota.vercel.app/',
    description:
      'Projeto de sistema financeiro, onde o mesmo é feito com React e Typescript, por meio dele é possivel calcular as despesas e informar a categoria.',
    image: { src: '/img/Sistemafinanceiro.png', alt: 'Descrição da imagem' }
  },
  {
    title: 'Projeto Lista de tarefas',
    field: 'Programação',
    link: 'https://tasklist-kappa-eight.vercel.app/',
    description:
      'Projeto simples de Lista de tarefa onde o usuário cadastra a tarefa e por meio dela é salvo no localstorage para mostrar ao usuário. Foi utilizado React e Typescript',
    image: { src: '/img/Listadetarefas.png', alt: 'Descrição da imagem' }
  },
  {
    title: 'Projeto Formulário 03 etapas',
    field: 'Programação',
    link: 'https://multi-form-beta.vercel.app/',
    description:
      'Formulário de várias etapas, onde foi desenvolvido com React e Typescript. Usa-se React Router, onde o usuário não consegue prosseguir se não preencher os campos.',
    image: { src: '/img/Formmult.png', alt: 'Descrição da imagem' }
  },
  {
    title: 'Carrossel EngSoftware - UGV',
    field: 'Design',
    link: 'https://www.instagram.com/p/CpKycyHux0u/',
    description:
      'Carrossel criado para a UGV Engenharia de Software, onde foi para o Instagram, por meio da criação dele foi possível realizar técnicas de sombra, composição, tipografia e entre outros.',
    image: { src: '/img/Carrossel01.png', alt: 'Descrição da imagem' }
  },
  {
    title: 'Carrossel EngSoftware2 - UGV',
    field: 'Design',
    link: 'https://www.instagram.com/p/CovBN3iuoIy/',
    description:
      'Carrossel criado para a UGV Engenharia de Software, onde foi para o Instagram, por meio da criação dele foi possível realizar técnicas de sombra, composição, tipografia e entre outros.',
    image: { src: '/img/Carrossel02.png', alt: 'Descrição da imagem' }
  }
]

interface IProject {
  title: string
  field: string
  link: string
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

        <S.Container>
          {filteredCategories.map((project) => (
            <S.Project key={project.title}>
              <S.StyledImage>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={700}
                  height={700}
                  loading="lazy"
                />
              </S.StyledImage>
              <S.Info>
                <S.Title>{project.title}</S.Title>
                <S.Description>{project.description}</S.Description>
                <Link href={project.link} passHref>
                  <S.Buttontwo>Ver projeto</S.Buttontwo>
                </Link>
              </S.Info>
            </S.Project>
          ))}
        </S.Container>
      </S.Section>
    </>
  )
}

export default Projects
