import React, { useRef, useCallback} from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

const SingIn: React.FC = () => {

        const formRef = useRef<FormHandles>(null) 
      
        const handleSubmit = useCallback(async (data: object) => {
            
            try {
              formRef.current?.setErrors({});
      
              const schema = Yup.object().shape({
                email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha é obrigatória'),
              });
      
              await schema.validate(data, {
                abortEarly: false
              });
      
            } catch (error) {
      
              const errors = getValidationErrors(error);
              formRef.current?.setErrors(errors);
             
            }
            
          
          }, []);
      
          return (

           <Container>
             <Content>
                <img src={logoImg} alt=""/>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>

                    <Input name="email" icon={FiMail} placeholder="E-mail"/>

                    <Input name="password" icon={FiLock}  placeholder="Senha"/>

                    <Button type="submit">Entrar</Button>

                    <a href="forget">Esqueci minha senha</a>
                </Form>

                <a href="/">
                    <FiLogIn />
                    Criar Conta</a>
             </Content>

             <Background />
           </ Container>

          );
};



export default SingIn;