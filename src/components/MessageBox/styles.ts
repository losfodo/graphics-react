import styled, {keyframes} from 'styled-components';

const animate = keyframes`//faz o efeito para o lado animação usando keyframes do styled-components
    0% {
        transform: translateX(-100px);
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

    background-color: ${props => props.theme.colors.tertiary};//cor de fundo
    color: ${props => props.theme.colors.white};//cor letras

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;//em coluna pra garantir q fiquei embaixo dos cards
    justify-content: space-between;// e q possua espaçamento entre eles

    animation: ${animate} .5s;

    > header img {
        width: 35px;//ajusta tamanho da imagem
        margin-left: 7px;//espaçamento a esquerda para imagem não grudar na letra
    }

    > header p {
        font-size: 18px;
    }

    @media(max-width: 770px){
        width: 100%;
        
        > header h1 {
            font-size: 24px;

            img {
                height: 20px;
                width: 20px;
            }
        }

        > header p, > footer span {//pega 
            font-size: 14px;
        }
    }

    @media(max-width: 420px){
        width: 100%;
        height: auto;

        > header p {
            margin-bottom: 15px;
        }
    }
`;