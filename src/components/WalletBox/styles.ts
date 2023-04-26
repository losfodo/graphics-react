import styled, {keyframes} from 'styled-components';

interface IContainerProps {
    color: string;
}

const animate = keyframes`
    0%{
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

export const Container = styled.div<IContainerProps>`//container com q os cards ocupam
    width: 32%;//ocupa a largura de 32 porcento sobrando 4% do card
    height: 150px;

    margin: 10px 0;//margem 10 em cima e baixo e 0 dos lados
    
    background-color: ${props => props.color};//cor dos cards em si para renderizar no html
    color: ${props => props.theme.colors.white};//cor da letra

    border-radius: 7px;//arredondar nas pontas
    padding: 10px 20px;

    position: relative;//para as imagens ficarem relativas ao container div
    overflow: hidden;//nao deixa transbordar entre o card a imagem ou oq for

    animation: ${animate} .5s;

    > img {
        height: 110%;//altura da imagem ultrapassa um pouco o card
        
        position: absolute;//passa por cima de outros elementos não importa a ordem não consideram a margem dos outros apenas do site em si
        top: -10px;//menos 10 sobe um pouco a imagem
        right: -30px;

        opacity: .3;
    }

    > span {//card escrito saldo entrada saida
        font-size: 18px;
        font-weight: 500;
    }

    > small {//posição do footer do card escrito
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }



    @media(max-width: 770px){//se for largura de 770px o maximo
        > span {
            font-size: 14px;
        }

        > h1 {//o titulo 
            word-wrap: break-word;//quebra as palavra se necessario
            font-size: 22px;

            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }

    @media(max-width: 420px){
        width: 100%;

        > h1 {
            display: flex;
            
            strong {
                position: initial;        
                width: auto;
                font-size: 22px;
            }

            strong:after {
                display: inline-block;//vai um para baixo do outro
                content: '';
                width: 1px;                
            }
        }
    }
`;