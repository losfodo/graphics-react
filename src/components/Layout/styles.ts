import styled from 'styled-components';

/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content    
*/

export const Grid = styled.div`//grid criou um css div usando dependencia instalada
    display: grid;//constituído a colunas e linhas no caso 2x2
    grid-template-columns: 250px auto;//primeira coluna 250px e segunda auto:restante q tiver sobrado
    grid-template-rows: 70px auto;//linhas 70px primeira linha seria header e auto para resto

    grid-template-areas: //pra demonstrar como sera distribuido tudo isso
    'AS MH'//AS:aside fica na primeira linha e primeira coluna,, MH:primeira linha ainda mas segunda coluna fica main header
    'AS CT';//AS:aside fica na segunda linha e primeira coluna,, CT:segunda linha ainda mas segunda coluna fica main header

    height: 100vh;//100% da altura do view port q ocupa
    min-width: 315px;

    @media(max-width: 600px){//a 600px nao aparece a barra lateral formato celular
        grid-template-columns: 100%;//ocupa tudo grid dashboards
        grid-template-rows: 70px auto;

        grid-template-areas:
        'MH'//ocupa main header e conteudo todo nesse formato
        'CT';
    }
`;
