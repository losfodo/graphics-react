import React from 'react';

import { 
    Container,
    TitleContainer,
    Controllers 
}  from './styles';

interface IContentHeaderProps {//interface com as tipagens
    title: string;
    lineColor: string;
    children: React.ReactNode;//typagem react nó do react
}

const ContentHeader: React.FC<IContentHeaderProps> = ({//coloca as typagens IContentHeaderProps
    title, lineColor, children
}) => (
    <Container>
        <TitleContainer lineColor={lineColor}>
            <h1>{title}</h1>                
        </TitleContainer>
        <Controllers>{/*children: tudo que tem dentro do contentHeader coloca no controlers*/}
            {children}
        </Controllers>
    </Container>
);


export default ContentHeader;