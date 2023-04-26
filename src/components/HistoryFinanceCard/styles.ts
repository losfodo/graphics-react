import styled, { keyframes } from 'styled-components';

interface ITagProps {//especifica com typescript a cor como string
  color: string;
}

const animate = keyframes`
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

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};

    list-style: none;//tira os pontos de listagem q aparecem
    border-radius: 10px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;//muda o cursor do mouse para pointer mãozinha
    transition: all .3s;

    position: relative;//relativo a si mesmo a posição

    animation: ${animate} .5s ease;

    &:hover {
        opacity: .7;//ao passar mouse gera opacidade 
        transform: translateX(10px);//empurra o li 10px dando um efeito bonito ao passar o mouse
    }


    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;    

        padding-left: 10px;    
    }

    > div span {
        font-size: 22px;
        font-weight: 500;
    }

    

    
`;

export const Tag = styled.div<ITagProps>`//coloca a especificidade na tag css q é uma props html
    width: 13px;
    height: 60%;

    background-color: ${props => props.color};

    position: absolute;/*passa por cima de outros elementos não importa a ordem não consideram a margem dos outros apenas do site em si*/
    left: 0;
`;