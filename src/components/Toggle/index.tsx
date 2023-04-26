import React from 'react';

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';//importando do style da toggle


interface IToggleProps {
    labelLeft: string;
    labelRight: string;//titulos
    checked: boolean;//true ou false
    onChange(): void;//mudança função
}

const Toggle: React.FC<IToggleProps> = ({//função react armazenada na const Toggle
    labelLeft,
    labelRight,
    checked,
    onChange
}) => (
    <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ToggleSelector                    
            checked={checked}
            uncheckedIcon={false}//não mostra o icone
            checkedIcon={false}
            onChange={onChange}
        />{/*uncheckedIcon checkedIcon remove detalhes nao necessarios do botão switch, onchange é ação de clicar btn  */}
        <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
)

export default Toggle;