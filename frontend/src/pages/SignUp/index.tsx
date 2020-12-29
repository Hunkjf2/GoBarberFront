import React, { useCallback } from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { isSchema } from 'yup';

const SingUp: React.FC = () => {

      const handleSubmit = useCallback(async (data: object) => {
          
          try {
            const schema = Yup.object().shape({
              name: Yup.string().required('Nome é obrigatório'),
              email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
              password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });

            await schema.validate(data, {
              abortEarly: false
            });

          } catch (error) {
            console.log(error);
            
          }
          
        
        }, []);


        return( 
            <Container>
             <Background />
               <Content>
                  <img src={logoImg} alt=""/>
  
                  <Form onSubmit={handleSubmit}>
                      <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome"/>

                    <Input name="email" icon={FiMail} placeholder="E-mail"/>

                    <Input name="password" icon={FiLock}  placeholder="Senha"/>

                    <Button type="submit">Cadastrar</Button>

                  </Form>

                <a href="/">
                    <FiArrowLeft />
                    Voltar para login</a>
             </Content>

             
           </ Container>
        );};


export default SingUp;