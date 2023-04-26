import React from 'react';
import { Switch, Route } from 'react-router-dom';//importa a dependencia de criação de rotas

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';//import das paginas rotas
import List from '../pages/List';

const AppRoutes: React.FC = () => (//retorno das rotas
    <Layout>{/*layouot criado vai cobrir todas as rotas abaixo com styles css html */}
        <Switch>{/*Switch retornara uma rota */}
            <Route path="/" exact component={Dashboard} />{/*rota em si ,com, path q é url, e component importado com dados Dashboard  */}
            <Route path="/list/:type" exact component={List} />{/*type:tera dois tipos em uma rota só seria estrada e saida */}
        </Switch>
    </Layout>
);

export default AppRoutes;// necessario exportar