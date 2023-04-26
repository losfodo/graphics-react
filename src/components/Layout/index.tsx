import React from 'react';//Layout ira cobrir toda a rota com cabeçario a lateral e conteudo

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = ({ children }) => (//grid de todo o site em si onde fica cada coisa
    <Grid>
        <MainHeader />
        <Aside />
        <Content>
            { children }{/*passa o children outra parte tbm de conteudo*/}
        </Content>
    </Grid>
);


export default Layout;