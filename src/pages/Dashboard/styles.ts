import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`//div onde fica os card 
    display: flex;//para deixar os cartoes um do lado do outro
    justify-content: space-between;//espaçamente entre os cards
    flex-wrap: wrap;/*se ultrapassar do q definiu vai para baixo, respeitando as dimençoes da pagina*/
`;
