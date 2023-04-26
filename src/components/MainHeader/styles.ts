import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;//area de grid
    
    background-color: ${props => props.theme.colors.secondary};//via props pegar dados do arquivo dark.ts e light.ts com interface DefaultTheme do styled-components
    
    display: flex;//deixa um do lado do outro os dados do cabeçario
    justify-content: space-between;// dar espaçamento entre os elementos
    align-items: center;//para centralizar em todos os lados

    padding: 0 10px;//top right ajustes

    border-bottom: 1px solid ${props => props.theme.colors.gray};//borda do css e cor por theme-provider
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;//estilização do profile nome da pessoa com div

export const Welcome = styled.h3``;

export const UserName = styled.span``;