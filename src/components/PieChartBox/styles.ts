import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}


const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;


export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

    animation: ${animate} .5s;

    @media(max-width: 770px){
        display: flex;
        width: 100%;

    }
`;

export const SideLeft = styled.aside`//mantem a esquerda aside css
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }

    @media(max-width: 1345px){
        padding: 0 15px 5px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 420px){
        padding: 15px;
        margin-bottom: 7px;
    }
`;

export const LegendContainer = styled.ul`//coloca a bolinha inicial ul
    list-style: none;//remove do ul a bolinha inicial
    
    height: 175px; 
    padding-right: 15px;//espaçamento entre porcentagem e barra de rolagem
    overflow-y: scroll;//faz a rolagem caso tenha mais relaçoes por porcentagem no card de relação

    ::-webkit-scrollbar {//webkit-scrollbar thumb e track deixa a rolagem mais bonita
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }


    @media(max-width: 1345px){
        display: flex;
        flex-direction: column;
    }
`;

export const Legend = styled.li<ILegendProps>`//onde tem as porcentagens
    display: flex;
    align-items: center;

    margin-bottom: 7px;    

    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        border-radius: 5px;
        
        font-size: 14px;        
        line-height: 40px;//centraliza a porcentagem de baixo pra cima
        text-align: center;//pra alinhar completamento
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 145px){
        font-size: 14px;
        margin: 3px 0;

        > div {
            height: 35px;
            width: 35px;
            line-height: 35px;
        }

        > span {
            margin-left: 7px;
        }
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px){
        height: 100%;
    }
`;