import React from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SingUp: React.FC = () => (
           <Container>
             <Background />
             <Content>
                <img src={logoImg} alt=""/>

                <form>
                    <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome"/>

                    <Input name="email" icon={FiMail} placeholder="E-mail"/>

                    <Input name="password" icon={FiLock}  placeholder="Senha"/>

                    <Button type="submit">Cadastrar</Button>

                </form>

                <a href="/">
                    <FiArrowLeft />
                    Voltar para login</a>
             </Content>

             
           </ Container>
);


export default SingUp;