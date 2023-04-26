import React, {useState} from 'react';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';//importa para login input com components react input
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import {
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');//usar como onChange email pego de auth.tsx
    const [password, setPassword] = useState<string>('');    

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />{/*logo imagem*/}
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>{/*onSubmit:da o efeito de reflesh na pagina ao clicar no button,,signIn pego pelo arquivo auth*/}
                <FormTitle>Entrar</FormTitle>

                <Input 
                    type="email"
                    placeholder="e-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}//coloca o state como valor
                />{/*required:obrigatório ser preenchido,type="email"obrigando a ter @e padroes de email*/}
                <Input 
                    type="password"
                    placeholder="senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />{/*onChange*/}

               <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;