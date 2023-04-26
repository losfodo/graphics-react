import styled from 'styled-components';

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;//espaçamento entre os elementos envolvidos

    margin-bottom: 25px;    


    @media(max-width: 320px){
        flex-direction: column;
       
    }
`;

export const TitleContainer = styled.div<ITitleContainerProps>`

    > h1 {//para mexer apenas no h1 q esta contido dentro do container apenas, evitando pegar outros
        color: ${props => props.theme.colors.white};

        &::after {//after:para adicionar conteudo
            content: '';//coloca algo na tela do site
            display: block;//com block funciona normal um abaixo do outro as linhas
            width: 55px;
            border-bottom: 10px solid ${props => props.lineColor};//linha cores dinamicas q fica abaixo do titulo dashboards ex pra dar um destaque
        }
    }

    @media(max-width: 420px){
        > h1 {
                font-size: 22px;

                &::after {
                content: '';
                display: block;
                width: 55px;
                border-bottom: 5px solid ${props => props.lineColor};
            }
        }
    }
`;

export const Controllers = styled.div`
    display: flex;

    @media(max-width: 320px){
        width: 100%;

        justify-content: space-around;
        
        margin-top: 20px;       
    }
`;