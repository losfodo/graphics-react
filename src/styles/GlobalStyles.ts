import { createGlobalStyle } from 'styled-components';//import da dependencia instalada para melhorar css
//coloca css abaixo para ser exportado
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;// mantem o tamanho definido mesmo tendo alteração de borda e outros
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;/*sem arredondamento dentro da barra q vem padrão ao clicar */
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;// padrão cursor pointer fica mais bonito passando o mouse
    }
`;