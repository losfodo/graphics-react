import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};//para as letras serem cor branca no padrão, cor pega pelo caminho arquivo dark e light
    background-color: ${props => props.theme.colors.primary};//no caso content dark e light usa primary uma cor mais forte pra variar das outras

    padding: 25px;  

    height: calc(100vh - 70px); //ocupar altura 100 porcento view port, menos 70px do header cabeçario
    overflow-y: scroll;//todo o conteudo que não couber no calc acima vira rolagem pra se manter dentro do site

    ::-webkit-scrollbar {//para mecher no scrolbar  barra de rolagem
        width: 10px;// largura da barra de rolagem
    }

    ::-webkit-scrollbar-thumb {//thumb:botão de rolagem cria daqui um thumb ou barra de rolagem propria pra lista
        background-color: ${props => props.theme.colors.secondary};//cor da barra de rolagem
        border-radius: 10px;//deixa mais arredondado bonito
    }

    ::-webkit-scrollbar-track {//barra padrão maior q fico por fora do site
        background-color: ${props => props.theme.colors.tertiary};
    }
`;
