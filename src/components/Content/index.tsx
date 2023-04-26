import React from 'react';

import { Container }  from './styles';

const Content: React.FC = ({ children }) => (//entrega um filho: com parte do conteudo no mesmo local de layout
    <Container>
        {children}
    </Container>
);

export default Content;