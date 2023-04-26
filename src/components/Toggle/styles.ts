import styled from 'styled-components';//css do botão switch modo dark e light
import Switch, { ReactSwitchProps } from 'react-switch';//import da dependencia do botão

export const Container = styled.div`
    display: flex;
    align-items: center;
`;//tamanho do botão, alinhamento de tudo ao botão

export const ToggleLabel = styled.span` //forma de span do btn
    color: ${props => props.theme.colors.white};//cores da label dark light brancos
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(//para lidar import Switch e attrs:para manipular as propriedades switch,ReactSwitchProps:pra funcionar tbm import quando clica cores
    ({ theme }) => ({//Theme:cor do thema utilizar padrão definido css
        onColor: theme.colors.info,
        offColor: theme.colors.warning//add a cor que quer
    }))<ReactSwitchProps>`
    margin: 0 7px; //alinhando o botão apenas
`;
