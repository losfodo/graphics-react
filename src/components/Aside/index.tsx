import React, {useState} from 'react';
import Toggle from '../Toggle';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu, 
} from 'react-icons/md';//md de material designe import dos icones da dependencia

import logoImg from '../../assets/logo.svg';//imagem 

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter,
}  from './styles';//imports do css colocados onde necessario

const Aside: React.FC = () => {
    const { signOut } = useAuth();//logica ao sair
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);


    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }


    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }


    return (
        <Container menuIsOpen={toggleMenuIsOpened}>{/*Container:div q cobre tudo feito com css*/}
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>

                <LogImg src={logoImg} alt="Logo Minha Carteira" />{/*coloca imagem da logo*/}
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>{/*opçoes do aside menu */}
                <MenuItemLink href="/">
                    <MdDashboard />{/*MdDashboard:icones importados*/}
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">{/*href="/list/entry-balance" são as urls a de list possui um list/:type*/}
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">{/*list/:type com o tipo entrada e saida na mesma rota*/}
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>{/*saida ao clicar remove o localStorage indo para rota anterior automaticamente */}
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;//export default é exportação padrão onde não teria mais de um import alem deste