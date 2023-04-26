import styled from 'styled-components';

export const Container = styled.div``;//exporta varios htmls para usar a vontade index.tsx

export const Content = styled.main``;//conteudo principal main usado

export const Filters = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    
    margin-bottom: 30px;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;

        background: none;
        color: ${props => props.theme.colors.white};

        margin: 0 10px;
        
        opacity: .4;
        transition: opacity .3s;

        &:hover {//passa o mouse em recorrentes e eventuais muda a opacidade 
            opacity: .7;
        }
    }

    .tag-filter-recurrent::after {//a barra que fica abaixo de recorrentes
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.success};    
    }

    .tag-filter-eventual::after {//a barra que fica abaixo de eventuais
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning};    
    }
    
    .tag-actived {
       opacity: 1;//gera uma opacidade ao clicar nos filtros de recorrentes ou eventuais
    }
`;