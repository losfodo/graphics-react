import React, { useMemo, useState } from 'react';//useMemo:hooks do react q decora o valor, dispara quando valor muda ou seja memoriza valores
import Toggle from '../Toggle';//botão switch dark e light

import emojis from '../../utils/emojis';//importa os emojis para o uso

import { useTheme } from '../../hooks/theme';

import { 
    Container, 
    Profile, 
    Welcome, 
    UserName, 
}  from './styles';//itens do cabeçario do site geral


const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();//para usar oq foi importado

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);//usa o state pra saber se ta habilitado light false ou dark true

    const handleChangeTheme = () => {//para lidar com a troca de thema
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {//useMemo:hooks do react q decora o valor
        const indice = Math.floor(Math.random() * emojis.length);//floor:arredondar valor int(random:valor aleatorio * comprimento emojis ou numero dos emojis total)
        return emojis[indice];//retornando assim o emoji com indice length randomico
    },[]);

    return (
        <Container>
            <Toggle
                labelLeft="Light"
                labelRight="Dark"//apenas o titulo do lado do botão
                checked={darkTheme}
                onChange={handleChangeTheme}
            />{/*coloca o botão de dark mode */}

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Rafael Lino Lobo</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;