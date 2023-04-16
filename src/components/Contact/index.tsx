import * as S from './styles'
import React, { useState } from 'react'
import Image from 'next/image'
//import nodemailer from 'nodemailer'

type FormState = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //     try {
    //       await sendEmail(formState);
    //       alert('E-mail enviado com sucesso!');
    //     } catch (error) {
    //       console.log(error);
    //       alert('Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.');
    //     }
    //   };
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  //   const sendEmail = async ({ name, email, message }: FormState) => {
  //     const transporter = nodemailer.createTransport({
  //       host: 'smtp.gmail.com',
  //       port: 465,
  //       secure: true,
  //       auth: {
  //         user: 'meu@gmail.com',
  //         pass: 'suasenha',
  //       },
  //     });

  //     const info = await transporter.sendMail({
  //       from: 'meu@gmail.com.com',
  //       to: 'meu@gmail.com',
  //       subject: `Contato do ${name} - ${email}`,
  //       text: message,
  //     });

  //     console.log(`E-mail enviado: ${info.messageId}`);
  //   };

  return (
    <>
      <S.Container>
        <S.Image>
          <Image src={'/img/fundo.jpg'} width={700} height={700} />
        </S.Image>
        <S.FormContainer onSubmit={handleSubmit}>
          <S.FormTitle>Entre em contato</S.FormTitle>
          <S.FormGroup>
            <S.FormLabel htmlFor="name">Nome</S.FormLabel>
            <S.FormInput
              placeholder="Seu Nome..."
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.FormLabel htmlFor="email">E-mail</S.FormLabel>
            <S.FormInput
              placeholder="Seu E-mail..."
              type="email"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.FormLabel htmlFor="message">Mensagem</S.FormLabel>
            <S.FormTextarea
              placeholder="Sua mensagem..."
              name="message"
              id="message"
              value={formState.message}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormButton type="submit">Enviar</S.FormButton>
        </S.FormContainer>
      </S.Container>
    </>
  )
}

export default Contact
