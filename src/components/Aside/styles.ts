import styled, { css } from 'styled-components';


interface IContainerProps {
    menuIsOpen: boolean;
}


interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}


export const Container = styled.div<IContainerProps>`//Container seria uma div criada com js e css
    grid-area: AS;// fixa AS aside em sua devida area de grid
    
    background-color: ${props => props.theme.colors.secondary};//cor de fundo do layout no caso aside dependendo se dark ou light
    padding-left: 20px;//para logo nao ficar grudado no lado esquerdo do monitor

    border-right: 1px solid ${props => props.theme.colors.gray};//borda do aside linha brancapra dividir melhor

    position: relative;

    @media(max-width: 600px){
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;//tipo flex de posicionamento um abaixo do outro
    align-items: center;

`;

export const LogImg = styled.img`//coloca o tipo html styled
    height: 40px;
    width: 40px;

    @media(max-width: 600px){        
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px){
        display: none;
    }
`;


export const MenuContainer = styled.nav`
    display: flex;//deixa os itens do menu um abaixo do outro
    flex-direction: column;//colocando column deixa um abaixo do outro combinado com display: flex acima


    margin-top: 50px;
`;

export const MenuItemLink = styled.a`//link das opçoes aside
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    margin: 7px 0;
    display: flex;//realinhando todos os itens menu
    align-items: center;

    transition: opacity .3s;//transição demora 3segundos de transparencia

    &:hover {//& mexer no elemento hover do mouse
        opacity: .7;// ao passar o mouse a opacidade fica aparente de 70porcento .7 transparencia
    }

    > svg {// mexer no svg nas letras para deixar maior ou menor
        font-size: 18px;//no caso aumenta um pouco as letras do menu
        margin-right: 5px;
    }
`;



export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};
    
    border: none;
    background: none;

    margin: 7px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover{
        opacity: 0.7;
    }

    display: none;

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;
    
    @media(max-width: 470px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }

`;