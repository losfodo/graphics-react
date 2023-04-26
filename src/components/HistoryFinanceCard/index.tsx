import React from 'react';

import { Container, Tag }  from './styles';//tag e Container importada para uso

interface IHistoryFinanceCardProps {//interface relacionando typescript o tipo
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({//coloca na constante com a logica
    tagColor,
    title,
    subtitle,
    amount
}) => (//retorna o formato em html para uso
    <Container>
        <Tag color={tagColor} />
        <div>
            <span>{title}</span>
            <small>{subtitle}</small>
        </div>        
        <h3>{amount}</h3>
    </Container>
);


export default HistoryFinanceCard;//exporta tudo